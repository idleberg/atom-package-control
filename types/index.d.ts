declare namespace PackageControl {
  interface Checksums {
    md: string;
    sha1: string;
    sha256: string;
    sha512: string;
  }

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
