import { Disposable } from 'atom';
import { getConfig } from './config';
import Logger from './log';

export default {
  browse: null,

  consumer(browse: unknown): Disposable {
    this.browse = browse;

    return new Disposable(() => {
      this.browse = null;
    });
  },

  async packageView(packageName: string): Promise<void> {
    await atom.workspace.open(`atom://config/packages/${packageName}`, {
        searchAllPanes: true
      });
  },

  async reveal(packageName: string): Promise<void> {
    const listAction = getConfig('listAction');

    if (listAction === 'packageView' || atom.packages.isBundledPackage(packageName)) {
      Logger.log(`Opening ${packageName} in package view`);
      await this.packageView(packageName);

      return;
    } else {
      const { path: target } = atom.packages.getLoadedPackage(packageName);

      Logger.log(`Opening ${packageName} in file manager`);
      await this.browse(target);
    }
  }
};
