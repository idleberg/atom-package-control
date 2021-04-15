declare namespace PackageControl {
  interface Metadata extends Array<T> {
    name: string;
    description?: string;
    version: string;
    downloads: number;
    stars: number;
    theme?: string;
  }

  interface Verbs {
    continous: string;
    noun: string;
    perfect: string;
  }
}

export default PackageControl;
