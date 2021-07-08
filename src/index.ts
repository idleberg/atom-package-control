import { CompositeDisposable } from "atom";
import { name } from '../package.json';
import API from "./api";
import Browse from './browse';
import Fetch from './fetch';
import config from "./config";
import Logger from "./log";
import Signal from './busy-signal';

const PackageControl = {
  config: config.schema,
  subscriptions: new CompositeDisposable(),

  async activate(): Promise<void> {
    Logger.log('Activating package');

    const installDependencies = (await import('atom-package-deps')).install;
    await installDependencies(name);
    await API.fetchPackages();

    // Register commands
    this.subscriptions.add(
      atom.commands.add("atom-workspace", {
        'package-control:install-package': async () => {
          const { createList } = await import('./util');
          await createList('install');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:remove-package': async () => {
          const { createList } = await import('./util');
          await createList('remove');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:enable-package': async () => {
          const { createList } = await import('./util');
          await createList('enable');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:disable-package': async () => {
          const { createList } = await import('./util');
          await createList('disable');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:list-packages': async () => {
          const { createList } = await import('./util');
          await createList('list');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:discover-packages': async () => {
          const { openWebsite } = await import('./util');
          await openWebsite('packages');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:discover-themes': async () => {
          const { openWebsite } = await import('./util');
          await openWebsite('themes');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:install-starred-package': async () => {
          const { createList } = await import('./util');
          await createList('stars');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:install-all-starred-packages': async () => {
          const { installAllStars } = await import('./util');
          await installAllStars();
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:update-package': async () => {
          const { createList } = await import('./util');
          await createList('update');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:update-all-packages': async () => {
          const { updateAll } = await import('./util');
          await updateAll();
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:satisfy-dependencies': async () => {
          const { satisfyDependencies } = await import('./util');
          await satisfyDependencies();
        }
      }),
    );
  },

  deactivate(): void {
    Logger.log('Deactivating package');

    this.subscriptions?.dispose();
  },

  consumeBrowse(browse: unknown): void {
    Logger.log('Consuming Browse service');

    Browse.consumer(browse);
  },

  consumeFetch(fetch: unknown): void {
    Logger.log('Consuming Fetch service');

    Fetch.consumer(fetch);
  },

  consumeSignal(registry: unknown): void {
    Logger.log('Consuming Busy Signal service');

    Signal.consumer(registry);
  }
};

export default PackageControl;
