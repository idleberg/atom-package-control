# package-control

[![apm](https://flat.badgen.net/apm/license/package-control)](https://atom.io/packages/package-control)
[![apm](https://flat.badgen.net/apm/v/package-control)](https://atom.io/packages/package-control)
[![apm](https://flat.badgen.net/apm/dl/package-control)](https://atom.io/packages/package-control)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/atom-package-control)](https://circleci.com/gh/idleberg/atom-package-control)
[![David](https://flat.badgen.net/david/dep/idleberg/atom-package-control)](https://david-dm.org/idleberg/atom-package-control)

Manage Atom packages from the command palette

## Installation

### apm

Install `package-control` from Atom [install view](atom://settings-view/show-package?package=package-control) or use the command-line equivalent:

`$ apm install package-control`

### Using Git

Change to your Atom packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.atom\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.atom\packages

```

**Linux & macOS**

```bash
$ cd ~/.atom/packages/
```

Clone the repository as `package-control`:

```bash
$ git clone https://github.com/idleberg/atom-package-control package-control
```

Install dependencies:

```bash
cd package-control && npm install
```

## Usage

This packages exposes several commands to the [command palette](https://flight-manual.atom.io/getting-started/sections/atom-basics/#command-palette):

- *Package Control: Install Package*
- *Package Control: Remove Package*
- *Package Control: Enable Package*
- *Package Control: Disable Package*
- *Package Control: List Packages*
- *Package Control: Discover Packages*
- *Package Control: Discover Themes*
- *Package Control: Update All Packages*

Some of the default behaviour of these commands can be tweaked in the package settings!

## License

This work is licensed under the [MIT License](LICENSE)
