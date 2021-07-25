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
    return await this.fetch('https://atom-packages.github.io/data/all.json.gz', {
      headers: {
        'Accept': 'application/octet-stream'
      }
    });
  }
};
