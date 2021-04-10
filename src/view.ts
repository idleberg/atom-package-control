import { getConfig } from './config';
import { Panel } from 'atom';
import numbro from 'numbro';
import SelectList from 'atom-select-list';
import type PackageControl from '../types';

const numbroOptions = {
  average: true,
  mantissa: 1,
  optionalMantissa: true
};

async function selectListView(items: string[]): Promise<string | undefined> {
  let panel: Panel;
  const currentFocus = document.activeElement as HTMLElement | void;

  try {
    return await new Promise<string>(resolve => {
      const select = new SelectList({
        didCancelSelection: () => resolve('cancelled'),
        didConfirmSelection: (item: PackageControl.Metadata) => resolve(item.name),
        elementForItem: (item: PackageControl.Metadata) => {
          const li = document.createElement('li');

          const version = item.version
            ? `v${item.version}`
            : '';
          const downloads = item.downloads
            ? `${numbro(item.downloads).format(numbroOptions)}`
            : '';
          const stars = item.stars
            ? `${numbro(item.stars).format(numbroOptions)}`
            : '';

          li.innerHTML = `
            <div class="package-control block">
              <div class="pull-right">
                <span class="icon icon-cloud-download">${downloads}</span>
                <span class="icon icon-star">${stars}</span>
              </div>

              <strong>${item.name}</strong> ${version}
              <div class="text-subtle truncate-text">${item.description || ''}</div>
            </div>
          `

          return li;
        },
        emptyMessage: 'No packages found',
        filterKeyForItem: (item: PackageControl.Metadata) => item.name,
        items,
        maxResults: getConfig('maxResults'),
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
