import { CompositeDisposable } from "atom";
import { createList, installAllStars, openWebsite, satisfyDependencies, updateAll } from "./util";
import API from "./api";
import Browse from './browse';
import config from "./config";
import Logger from "./log";
import Signal from './busy-signal';

const PackageControl = {
  config: config.schema,
  subscriptions: new CompositeDisposable(),

  async activate(): Promise<void> {
    Logger.log('Activating package');

    await API.fetchPackages();

    // Register commands
    this.subscriptions.add(
      atom.commands.add("atom-workspace", {
        'package-control:install-package': async () => {
          await createList('install');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:remove-package': async () => {
          await createList('remove');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:enable-package': async () => {
          await createList('enable');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:disable-package': async () => {
          await createList('disable');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:list-packages': async () => {
          await createList('list');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:discover-packages': async () => {
          await openWebsite('packages');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:discover-themes': async () => {
          await openWebsite('themes');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:install-starred-package': async () => {
          await createList('stars');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:install-all-starred-packages': async () => {
          await installAllStars();
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:update-package': async () => {
          await createList('update');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:update-all-packages': async () => {
          await updateAll();
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:satisfy-dependencies': async () => {
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

  consumeSignal(registry: unknown): void {
    Logger.log('Consuming Busy Signal service');

    Signal.consumer(registry);
  }
};

export default PackageControl;
