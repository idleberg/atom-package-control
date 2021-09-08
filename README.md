# package-control

[![apm](https://flat.badgen.net/apm/license/package-control)](https://atom.io/packages/package-control)
[![apm](https://flat.badgen.net/apm/v/package-control)](https://atom.io/packages/package-control)
[![apm](https://flat.badgen.net/apm/dl/package-control)](https://atom.io/packages/package-control)
[![CI](https://img.shields.io/github/workflow/status/idleberg/atom-package-control/CI?style=flat-square)](https://github.com/idleberg/atom-package-control/actions)
[![David](https://flat.badgen.net/david/dev/idleberg/atom-package-control)](https://david-dm.org/idleberg/atom-package-control?type=dev)

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
$ cd package-control && npm install
```

Build source:

```bash
$ npm run build
```

## Usage

This packages exposes several commands to the [command palette](https://flight-manual.atom.io/getting-started/sections/atom-basics/#command-palette):

- _Package Control: Install Package_
- _Package Control: Remove Package_
- _Package Control: Enable Package_
- _Package Control: Disable Package_
- _Package Control: List Packages_
- _Package Control: Discover Packages_
- _Package Control: Discover Themes_
- _Package Control: Satisfy Dependencies_
- _Package Control: Update Package_
- _Package Control: Update All Packages_
- _Package Control: Install Starred Package_
- _Package Control: Install All Starred Packages_

Some of the default behaviour of these commands can be tweaked in the [package settings](https://flight-manual.atom.io/using-atom/sections/atom-packages/#package-settings)!

## License

This work is licensed under the [MIT License](LICENSE)
