import config from './config';
import { Panel } from 'atom';
import { normalizeVersion } from './util';
import type PackageControl from '../types';

const roundingOptions = {
  round: true
};

async function selectListView(items: string[]): Promise<string | undefined> {
  let panel: Panel;
  const currentFocus = document.activeElement as HTMLElement | void;

  const SelectList = (await import('atom-select-list')).default;
  const approximateNumber = (await import('approximate-number')).default;

  try {
    return await new Promise<string>((resolve, reject) => {

      const select = new SelectList({
        didCancelSelection: () => reject('cancelled'),
        didConfirmSelection: (item: PackageControl.Metadata) => resolve(item.name),
        elementForItem: (item: PackageControl.Metadata) => {
          const li = document.createElement('li');

          const version = item.version
          ? normalizeVersion(item.version)
          : '';

          const downloads = item.downloads
            ? `${approximateNumber(item.downloads, roundingOptions)}`
            : '';

          const stars = item.stars
            ? `${approximateNumber(item.stars, roundingOptions)}`
            : '';

          const icon = item.theme
            ? item.theme === 'ui'
              ? 'browser'
              : 'paintcan'
            : 'code';

          const ui = config.get('ui');

          const packageTextStyle = ui['packageTextStyle'] !== 'normal'
            ? `text-${ui['packageTextStyle']}`
            : '';

          const versionTextStyle = ui['versionTextStyle'] !== 'normal'
            ? `text-${ui['versionTextStyle']}`
            : '';

          const statsTextStyle = ui['statsTextStyle'] !== 'normal'
            ? `text-${ui['statsTextStyle']}`
            : '';

          const descriptionTextStyle = ui['descriptionTextStyle'] !== 'normal'
            ? `text-${ui['descriptionTextStyle']}`
            : '';

          const packageTypeIcon = ui['showPackageTypeIcon']
            ? `icon icon-${icon}`
            : '';

          const showPackageStats = ui['showPackageStats']
            ? `
              <div class="pull-right ${statsTextStyle}">
                <span class="icon icon-cloud-download">${downloads}</span>
                <span class="icon icon-star">${stars}</span>
              </div>
            ` : '';

          li.innerHTML = `
            <div class="package-control block">
              ${showPackageStats}

              <span class="${packageTypeIcon}">
                <strong class="${packageTextStyle}">${item.name}</strong>
                <span class="${versionTextStyle}">${version}</span>
                <div class="truncate-text ${descriptionTextStyle}">${item.description || ''}</div>
              </span>
            </div>
          `

          return li;
        },
        emptyMessage: 'No packages found',
        filterKeyForItem: (item: PackageControl.Metadata) => item.name,
        items,
        maxResults: Number(config.get('maxResults')),
        selectQuery: true
      });


      panel = atom.workspace.addModalPanel({
        item: select,
        visible: true,
      });

      select.focus();
    });
  } finally {
    if (panel) panel.destroy();
    if (currentFocus) currentFocus.focus();
  }
}

export {
  selectListView
};
