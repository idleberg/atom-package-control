import { createStore, get, set } from 'idb-keyval';
import { getConfig } from './config';
import { sortByName, sortByCount } from './util';
import Logger from './log';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import fetch from 'cross-fetch';
import pako from 'pako';
import type PackageControl from '../types';

const customStore = createStore('package-control', '1.0.0');

export default {
  async getPackages(action: string): Promise<PackageControl.Metadata[]> {
    const packages = await get('packagesCache', customStore);
    const sortPackages = String(getConfig('sortPackages'));

    switch (action) {
      case 'install':
        return sortPackages === 'name'
          ? sortByName(packages, sortPackages)
          : sortByCount(packages, sortPackages);

      default:
        return sortByName(packages, 'name');
    }
  },

  async setPackages(data: unknown): Promise<void> {
    Logger.log('Saving package cache');

    await set('packagesCache', data, customStore);
    await set('lastUpdate', new Date().toISOString(), customStore);
  },

  async fetchPackages(): Promise<void> {
    const lastUpdate = await get('lastUpdate', customStore) || "";
    const updateDifference = differenceInMinutes(new Date(), new Date(lastUpdate));

    if (updateDifference < getConfig('updateInterval')) {
      Logger.log(`Skipping package retrieval, last update was ${updateDifference} minutes ago`);
      return;
    }

    Logger.log('Downloading packages list');
    const response = await fetch('https://idleberg.github.io/atom-package-control-api/all.json.gz');

    if (response.ok) {
      const uintArray = pako.ungzip(await response.arrayBuffer());
      const data = JSON.parse(new TextDecoder().decode(uintArray));

      await this.setPackages(data);
    }
  }
};
