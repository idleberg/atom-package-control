import { selectListView } from './view';
import API from './api';
import Browse from './browse';
import execa from 'execa';
import Logger from './log';
import open from "open";
import type PackageControl from '../types';


async function createList(action: string): Promise<void> {
  const allPackages: PackageControl.Metadata[] = await API.getPackages(action);

  if (allPackages === undefined) return;

  let selectionPackages;
  const installedPackages = atom.packages.getAvailablePackageNames();
  const enabledPackages = atom.packages.getLoadedPackages().map(item => item.name);
  const disabledPackages = installedPackages.filter(item => !enabledPackages.includes(item));

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

    default:
     selectionPackages = allPackages.filter(item => installedPackages.includes(item['name']));
     break;
  }

  const selection = await selectListView(selectionPackages);

  if (selection === undefined) return;

  switch (action) {
    case 'install':
    case 'remove':
    case 'disable':
    case 'enable':
      await apm(action, selection);
      break;

    case 'list':
      Browse.reveal(selection);
      break;

    default:
      break;
  }
}

async function apm(action: string, packageName: string): Promise<void> {
  const apmPath: string = atom.packages.getApmPath();
  const startTime = new Date().getTime();

  Logger.log(`${wording(action).continous} ${packageName}`);

  try {
    await execa(apmPath, [action, packageName]);
  } catch (err) {
    Logger.error(`${wording(action).noun} failed: ${err.shortMessage}`);
    atom.notifications.addError(`**Package Control**: ${wording(action).noun} failed`, {
      detail: err.shortMessage,
      dismissable: true
    });
    return;
  }

  const endTime = new Date().getTime();
  const timeDiff: number = endTime - startTime;

  Logger.log(`${wording(action).perfect} ${packageName} in ${timeDiff / 1000} seconds`);
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

    default:
      throw Error(`Unsupported action: ${action}`);
  }
}

async function openWebsite(type: string): Promise<void> {
  Logger.log(`Opening https://atom.io/${type}`);
  await open(`https://atom.io/${type}`);
}

export {
  createList,
  openWebsite,
  sortByName,
  sortByCount
};
