import { CompositeDisposable } from "atom";
import { configSchema } from "./config";
import { createList, openWebsite,updateAll } from "./util";
import API from "./api";
import Browse from './browse';
import Logger from "./log";

const PackageControl = {
  config: configSchema,
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
        'package-control:update-package': async () => {
          await createList('update');
        }
      }),
      atom.commands.add("atom-workspace", {
        'package-control:update-all-packages': async () => {
          await updateAll();
        }
      })
    );
  },

  deactivate(): void {
    Logger.log('Deactivating package');

    this.subscriptions?.dispose();
  },

  consumeBrowse(browse: unknown): void {
    Logger.log('Consuming Browse service');

    Browse.consumer(browse);
  }
};

export default PackageControl;
