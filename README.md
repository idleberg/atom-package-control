# package-control

[![License](https://img.shields.io/github/license/idleberg/atom-package-control?color=blue&style=for-the-badge)](https://github.com/idleberg/atom-package-control/blob/master/LICENSE)
[![Release](https://img.shields.io/github/v/release/idleberg/atom-package-control?style=for-the-badge)](https://github.com/idleberg/atom-package-control/releases)
[![Downloads](https://img.shields.io/pulsar/dt/package-control?style=for-the-badge&color=slateblue)](https://web.pulsar-edit.dev/packages/package-control)
[![CI](https://img.shields.io/github/actions/workflow/status/idleberg/atom-package-control/default.yml?style=for-the-badge)](https://github.com/idleberg/atom-package-control/actions)

Manage packages from the command palette

## Installation

### apm

Install `package-control` from the editor's [Package Manager](http://flight-manual.atom-editor.cc/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ ppm install package-control || apm install package-control`

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
$ cd package-control
$ ppm install || apm install
```

Build source:

```bash
$ ppm run build || apm run build
```

## Usage

This packages exposes several commands to the [command palette](https://flight-manual.atom-editor.cc/getting-started/sections/atom-basics/#command-palette):

- _Package Control: Install Package_
- _Package Control: Remove Package_
- _Package Control: Enable Package_
- _Package Control: Disable Package_
- _Package Control: List Packages_
- _Package Control: Discover Packages_\*
- _Package Control: Discover Themes_\*
- _Package Control: Satisfy Dependencies_
- _Package Control: Update Package_
- _Package Control: Update All Packages_\*
- _Package Control: Install Starred Package_\*
- _Package Control: Install All Starred Packages_\*

\* denotes commands not available in Sublime Text's Package Control

Some of the default behaviour of these commands can be tweaked in the [package settings](https://flight-manual.atom-editor.cc/using-atom/sections/atom-packages/#package-settings)!

## License

This work is licensed under the [MIT License](LICENSE)
