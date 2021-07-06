import { Disposable } from 'atom';
import crossFetch from 'cross-fetch';

export default {
  fetch: crossFetch,

  consumer(fetch: unknown): Disposable {
    this.fetch = fetch;

    return new Disposable(() => {
      this.fetch = null;
    });
  },

  async getPackageData(): Promise<Response> {
    return await this.fetch('https://idleberg.github.io/atom-package-control-api/all.json.gz', {
      headers: {
        'Accept': 'application/octet-stream'
      }
    });
  }
};
