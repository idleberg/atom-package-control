import config from './config';
import { selectListView } from './view';
import API from './api';
import Browse from './browse';
import execa from 'execa';
import Logger from './log';
import open from "open";
import Signal from './busy-signal';
import type PackageControl from '../types';

// TODO: Remove in future version
import 'core-js/modules/es.promise.all-settled'

async function createList(action: string): Promise<void> {
  const allPackages: PackageControl.Metadata[] = await API.getPackages(action);

  if (allPackages === undefined) return;

  let selectionPackages, starredPackages;
  const installedPackages = atom.packages.getAvailablePackageNames();
  const enabledPackages = atom.packages.getLoadedPackages().map(item => item.name);
  const disabledPackages = installedPackages.filter(item => !enabledPackages.includes(item));

  if (action === 'stars') {
    starredPackages = await getStarredPackages();
  }

  switch (action) {
    case 'install':
      selectionPackages = allPackages.filter(item => !installedPackages.includes(item['name']));
      break;

    case 'enable':
      selectionPackages = allPackages.filter(item => installedPackages.includes(item['name']) && disabledPackages.includes(item['name']));
      break;

    case 'disable':
      selectionPackages = allPackages.filter(item => installedPackages.includes(item['name']) && enabledPackages.includes(item['name']));
      break;

    case 'stars':
      selectionPackages = allPackages.filter(item => !installedPackages.includes(item['name']) && starredPackages.includes(item['name']));
      break;

    case 'update':
      selectionPackages = await getOutdatedPackages(allPackages);
      break;

    default:
     selectionPackages = allPackages.filter(item => installedPackages.includes(item['name']));
     break;
  }

  if (!selectionPackages.length) {
    const verb = action === 'stars' ? 'install' : action;

    Logger.log(`No packages to ${verb}`);
    atom.notifications.addInfo(`**Package Control**: No packages to ${verb}`);

    return;
  }

  let selection;

  try {
    selection = await selectListView(selectionPackages);
  } catch (err) {
    Logger.log(`Cancelled selection`);
    return;
  }

  if (selection === undefined) return;

  switch (action) {
    case 'install':
    case 'remove':
    case 'disable':
    case 'enable':
      await apm(action, selection);
      break;

    case 'stars':
      apm('install', selection);
      break;

    case 'update':
      await apm(action, selection, ['--compatible', '--no-confirm']);
      break;

    case 'list':
      Browse.reveal(selection);
      break;

    default:
      break;
  }
}

async function apm(action: string, packageName: string, args = []): Promise<void> {
  const startTime = new Date().getTime();
  const apmPath: string = atom.packages.getApmPath();
  const signalMessage = `Package Control is ${wording(action).continous.toLowerCase()} the ${packageName} package`;

  Logger.log(`${wording(action).continous} ${packageName} package`);
  Signal.add(signalMessage);

  try {
    await execa(apmPath, [action, packageName, ...args]);
  } catch (err) {
    Logger.error(`${wording(action).noun} failed: ${err.shortMessage}`);
    Signal.add(`${wording(action).noun} failed: ${err.shortMessage}`);

    atom.notifications.addError(`**Package Control**: ${wording(action).noun} failed`, {
      detail: err.shortMessage,
      dismissable: true
    });

    Signal.remove(signalMessage);
    return;
  }

  const endTime = new Date().getTime();
  const timeDiff: number = endTime - startTime;

  Logger.log(`${wording(action).perfect} ${packageName} in ${timeDiff / 1000} seconds`);
  Signal.remove(signalMessage);
}

async function updateAll(): Promise<void> {
  const signalMessage = 'Package Control updating all packages';
  const startTime = new Date().getTime();
  const action = 'update';
  const apmPath: string = atom.packages.getApmPath();

  Logger.log(`${wording(action).continous} all packages`);
  Signal.add(signalMessage);

  try {
    await execa(apmPath, ['update', '--no-confirm']);
  } catch (err) {
    Logger.error(`${wording(action).continous} all packages failed: ${err.shortMessage}`);
    atom.notifications.addError(`**Package Control**: ${wording(action).continous} all packages failed`, {
      detail: err.shortMessage,
      dismissable: true
    });

    Signal.remove(signalMessage);
    return;
  }

  const endTime = new Date().getTime();
  const timeDiff: number = endTime - startTime;

  Logger.log(`${wording(action).perfect} all packages in ${timeDiff / 1000} seconds`);
  Signal.remove(signalMessage);
}

async function installAllStars(): Promise<void> {
  const signalMessage = 'Package Control is installing all starred packages';
  const startTime = new Date().getTime();
  const action = 'install';
  const apmPath: string = atom.packages.getApmPath();

  Logger.log(`${wording(action).continous} all packages`);
  Signal.add(signalMessage);

  try {
    await execa(apmPath, ['stars', '--install', ...appendGithubUser()]);
  } catch (err) {
    Logger.error(`${wording(action).continous} all starred packages failed: ${err.shortMessage}`);
    atom.notifications.addError(`**Package Control**: ${wording(action).continous} all starred packages failed`, {
      detail: err.shortMessage,
      dismissable: true
    });

    Signal.remove(signalMessage);
    return;
  }

  const endTime = new Date().getTime();
  const timeDiff: number = endTime - startTime;

  Logger.log(`${wording(action).perfect} all starred packages in ${timeDiff / 1000} seconds`);
  Signal.remove(signalMessage);
}

async function satisfyDependencies(): Promise<void> {
  const signalMessage = 'Package Control is satisfying all package dependencies';
  const startTime = new Date().getTime();
  const action = 'satisfy';
  const enabledPackages = atom.packages.getLoadedPackages().map(item => item.name);

  Logger.log(`${wording(action).continous} all packages dependencies`);
  Signal.add(signalMessage);

  const installDependencies = (await import('atom-package-deps')).install;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (Promise as any).allSettled(enabledPackages.map(async enabledPackage => await installDependencies(enabledPackage, !config.get('confirmSatisfyingDependencies'))));

  const endTime = new Date().getTime();
  const timeDiff: number = endTime - startTime;

  Logger.log(`${wording(action).perfect} all packages in ${timeDiff / 1000} seconds`);
  Signal.remove(signalMessage);
}

function sortByName(items: PackageControl.Metadata, sortBy: string): PackageControl.Metadata {
  return items.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
}

function sortByCount(items: PackageControl.Metadata, sortBy: string): PackageControl.Metadata {
  return items.sort((a, b) => b[sortBy] - a[sortBy]);
}

function wording(action: string): PackageControl.Verbs {
  switch (action) {
    case 'install':
    case 'stars':
      return {
        continous: 'Installing',
        noun: 'Installation',
        perfect: 'Installed'
      };

    case 'remove':
      return {
        continous: 'Removing',
        noun: 'Removal',
        perfect: 'Removed'
      };

    case 'enable':
      return {
        continous: 'Enabling',
        noun: 'Enabling',
        perfect: 'Enabled'
      };

    case 'disable':
      return {
        continous: 'Disabling',
        noun: 'Disabling',
        perfect: 'Disabled'
      };

    case 'list':
      return {
        continous: 'Listing',
        noun: 'Listing',
        perfect: 'Listed'
      };

    case 'satisfy':
      return {
        continous: 'Satisfying',
        noun: 'Satisfying',
        perfect: 'Satisfied'
      };

    case 'update':
      return {
        continous: 'Updating',
        noun: 'Update',
        perfect: 'Updated'
      };

    default:
      throw Error(`Unsupported action: ${action}`);
  }
}

async function openWebsite(type: string): Promise<void> {
  Logger.log(`Opening https://atom.io/${type}`);
  await open(`https://atom.io/${type}`);
}

async function getOutdatedPackages(allPackages: unknown[]): Promise<string[]> {
  const signalMessage = 'Package Control is retrieving outdated packages';
  Logger.log('Retrieving outdated packages');
  Signal.add(signalMessage);

  const apmPath: string = atom.packages.getApmPath();
  let response;

  try {
    response = await execa(apmPath, ['update', '--compatible', '--json', '--list']);
  } catch (err) {
    throw Error(err.message);
  } finally {
    Signal.remove(signalMessage);
  }

  return JSON
    .parse(response.stdout)
    .map(({name, version, latestVersion}) => {
      const meta: unknown = allPackages.filter(item => item['name'] === name)[0];

      return {
        description: meta['description'] || '',
        downloads: meta['downloads'] || 0,
        name,
        stars: meta['stars'] || 0,
        theme: meta['theme'] || undefined,
        version: `${normalizeVersion(version)} &#8594; ${normalizeVersion(latestVersion)}`
      };
    }) || [];
}

async function getStarredPackages(): Promise<string[]> {
  const signalMessage = 'Package Control is retrieving starred packages';
  Logger.log('Retrieving starred packages');
  Signal.add(signalMessage);

  const apmPath: string = atom.packages.getApmPath();
  let response;

  try {
    response = await execa(apmPath, ['stars', '--json', ...appendGithubUser()]);
  } catch (err) {
    throw Error(err.message);
  } finally {
    Signal.remove(signalMessage);
  }

  return JSON.parse(response.stdout).map(item => item['name']) || [];
}

function appendGithubUser(): string[] {
  const githubUser = String(config.get('githubUser')).trim();

  return githubUser?.length
    ? ['--user', githubUser]
    : [];
}

function normalizeVersion(version: string): string {
  return version.startsWith('v')
    ? version
    : `v${version}`;
}

export {
  createList,
  installAllStars,
  normalizeVersion,
  openWebsite,
  satisfyDependencies,
  sortByName,
  sortByCount,
  updateAll
};
