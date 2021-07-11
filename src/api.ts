import { createStore } from 'idb-keyval';
import { sortByName, sortByCount } from './util';
import config from './config';
import Fetch from './fetch';
import Logger from './log';
import type PackageControl from '../types';

const customStore = createStore('package-control', '1.0.0');

async function getPackages(action: string): Promise<PackageControl.Metadata[]> {
  const { get } = (await import('idb-keyval'));

  const packages = await get('packagesCache', customStore);
  const sortPackages = String(config.get('sortPackages'));

  switch (action) {
    case 'install':
      return sortPackages === 'name'
        ? sortByName(packages, sortPackages)
        : sortByCount(packages, sortPackages);

    default:
      return sortByName(packages, 'name');
  }
}

async function setPackages(data: PackageControl.Metadata, checksums: PackageControl.Checksums): Promise<void> {
  console.log({data});
  const lastUpdate = new Date().toISOString();

  Logger.log('Saving package cache', {
    length: data.length,
    lastUpdate,
    checksums: checksums || {}
  });

  const { set } = (await import('idb-keyval'));

  await set('packagesCache', data, customStore);
  await set('lastUpdate', lastUpdate, customStore);
  await set('checksums', checksums, customStore);
}

async function fetchPackages(): Promise<void> {
  const { differenceInMinutes } = await import('date-fns');
  const { get } = (await import('idb-keyval'));

  const lastUpdate = await get('lastUpdate', customStore) || "";
  const updateDifference = differenceInMinutes(new Date(), new Date(lastUpdate));

  if (updateDifference < Number(config.get('updateInterval'))) {
    Logger.log(`Skipping package retrieval, last update was ${updateDifference} minutes ago`);
    return;
  }

  Logger.log('Downloading packages list');
  const response = await Fetch.getPackageData();

  if (response.ok) {
    const pako = await import('pako');

    const uintArray = pako.ungzip(await response.arrayBuffer());
    const data = JSON.parse(new TextDecoder().decode(uintArray));
    const checksums = response['checksums'] || {};

    await setPackages(data, checksums);
  }
}

export {
  fetchPackages,
  getPackages,
  setPackages
};
