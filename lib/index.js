'use strict';

var atom_1 = require('atom');
var os = require('os');
var childProcess = require('child_process');
var fs$1 = require('fs');
var path = require('path');
var Stream = require('stream');
var http = require('http');
var Url = require('url');
var https = require('https');
var zlib = require('zlib');
var assert = require('assert');
var require$$1 = require('events');
var require$$0 = require('buffer');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var atom_1__default = /*#__PURE__*/_interopDefaultLegacy(atom_1);
var os__default$1 = /*#__PURE__*/_interopDefaultLegacy(os);
var childProcess__default = /*#__PURE__*/_interopDefaultLegacy(childProcess);
var fs__default$1 = /*#__PURE__*/_interopDefaultLegacy(fs$1);
var path__default$1 = /*#__PURE__*/_interopDefaultLegacy(path);
var Stream__default = /*#__PURE__*/_interopDefaultLegacy(Stream);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
var Url__default = /*#__PURE__*/_interopDefaultLegacy(Url);
var https__default = /*#__PURE__*/_interopDefaultLegacy(https);
var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);
var assert__default = /*#__PURE__*/_interopDefaultLegacy(assert);
var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __spreadArray(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
}

var name = "package-control";
var version = "0.3.0";
var description = "Manage Atom packages from the command palette";
var main$1 = "./lib/index";
var scripts = {
	analyze: "source-map-explorer lib/**/*.js",
	build: "rollup --config",
	dev: "npm run start",
	"lint:code": "eslint --ignore-path .gitignore --no-error-on-unmatched-pattern ./src/**/*.ts",
	"lint:styles": "echo \"Nothing to lint\"",
	lint: "npm-run-all --parallel lint:*",
	prepublishOnly: "npm run build",
	start: "rollup --watch --config",
	test: "npm run lint"
};
var keywords = [
];
var repository = {
	type: "git",
	url: "https://github.com/idleberg/atom-package-control"
};
var homepage = "https://atom.io/packages/package-control";
var bugs = {
	url: "https://github.com/idleberg/atom-package-control/issues"
};
var license = "MIT";
var engines = {
	atom: ">=1.0.0 <2.0.0"
};
var activationCommands = {
	"atom-workspace": [
		"package-control:disable-package",
		"package-control:discover-packages",
		"package-control:discover-themes",
		"package-control:enable-package",
		"package-control:install-package",
		"package-control:list-packages",
		"package-control:remove-package",
		"package-control:satisfy-dependencies",
		"package-control:update-all-packages",
		"package-control:update-package"
	]
};
var activationHooks = [
	"core:loaded-shell-environment"
];
var consumedServices = {
	browse: {
		versions: {
			"1.0.0": "consumeBrowse"
		}
	}
};
var dependencies = {
	"atom-select-list": "^0.8.0",
	"cross-fetch": "^3.1.4",
	"date-fns": "^2.20.1",
	"idb-keyval": "^5.0.4",
	"log-symbols": "^4.1.0",
	numbro: "^2.3.2",
	open: "^8.0.5",
	pako: "^2.0.3"
};
var devDependencies = {
	"@babel/core": "^7.13.14",
	"@babel/eslint-parser": "^7.13.14",
	"@babel/plugin-proposal-export-namespace-from": "^7.12.13",
	"@babel/preset-env": "^7.13.12",
	"@rollup/plugin-babel": "^5.3.0",
	"@rollup/plugin-commonjs": "^18.0.0",
	"@rollup/plugin-json": "^4.1.0",
	"@rollup/plugin-node-resolve": "^11.2.1",
	"@rollup/plugin-typescript": "^8.2.1",
	"@types/atom": "^1.40.10",
	"@types/electron": "^1.6.10",
	"@types/node": "^14.14.37",
	"@typescript-eslint/eslint-plugin": "^4.21.0",
	"@typescript-eslint/parser": "^4.21.0",
	"core-js": "^3.10.1",
	eslint: "^7.23.0",
	"eslint-config-eslint": "^7.0.0",
	"eslint-plugin-json": "^2.1.2",
	husky: ">=4.3 <5",
	"lint-staged": "^10.5.4",
	"npm-run-all": "^4.1.5",
	rollup: "^2.44.0",
	"rollup-plugin-scss": "^2.6.1",
	"rollup-plugin-terser": "^7.0.2",
	"source-map-explorer": "^2.5.2",
	stylelint: "^13.12.0",
	tslib: "^2.2.0",
	typescript: "^4.2.4"
};
var husky = {
	hooks: {
		"pre-commit": "lint-staged"
	}
};
var meta = {
	name: name,
	version: version,
	description: description,
	"private": false,
	main: main$1,
	scripts: scripts,
	keywords: keywords,
	repository: repository,
	homepage: homepage,
	bugs: bugs,
	license: license,
	engines: engines,
	activationCommands: activationCommands,
	activationHooks: activationHooks,
	consumedServices: consumedServices,
	"package-deps": [
	{
		name: "browse",
		minimumVersion: "3.3.0"
	}
],
	dependencies: dependencies,
	devDependencies: devDependencies,
	husky: husky,
	"lint-staged": {
	"*.ts": "eslint --cache --fix"
}
};

var INTERVAL = {
  six_hours: 360,
  fifteen_minutes: 15,
  one_week: 10080
};
var configSchema = {
  updateInterval: {
    title: 'Update Interval',
    description: 'Interval for how often the packages cache updates, in minutes',
    type: 'integer',
    "default": INTERVAL.six_hours,
    minimum: INTERVAL.fifteen_minutes,
    maximum: INTERVAL.one_week,
    order: 1
  },
  maxResults: {
    title: 'Maximum results',
    description: 'Number of results shown in the select view. Lower values result in better UI performance.',
    type: 'integer',
    "default": 30,
    minimum: 10,
    maximum: 120,
    order: 2
  },
  sortPackages: {
    title: 'Sort Packages',
    description: 'Default sorting for the *Install Packages* command.',
    type: 'string',
    "default": 'name',
    "enum": [{
      value: 'downloads',
      description: 'Downloads'
    }, {
      value: 'name',
      description: 'Name'
    }, {
      value: 'stars',
      description: 'Rating'
    }],
    order: 3
  },
  listAction: {
    title: 'List Action',
    description: 'Specifies an action for the selected package in the list view. Bundled packages will always be shown in package view.',
    type: 'string',
    "default": 'fileManager',
    "enum": [{
      value: 'fileManager',
      description: 'Show in File Manager'
    }, {
      value: 'packageView',
      description: 'Package View'
    }],
    order: 4
  },
  confirmSatisfyingDependencies: {
    title: 'Confirm Satisfying Dependencies',
    description: 'Display confirmation dialog when satisfying package dependencies',
    type: 'boolean',
    "default": true,
    order: 5
  }
};

function getConfig(key) {
  if (key === void 0) {
    key = '';
  }

  return (key === null || key === void 0 ? void 0 : key.length) ? atom.config.get(meta.name + "." + key) : atom.config.get("" + meta.name);
}

function _interopDefaultLegacy$1(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {
    'default': e
  };
}

var os__default = /*#__PURE__*/_interopDefaultLegacy$1(os__default$1['default']);

var fs__default = /*#__PURE__*/_interopDefaultLegacy$1(fs__default$1['default']);

var path__default = /*#__PURE__*/_interopDefaultLegacy$1(path__default$1['default']);

var indentString = (string, count = 1, options) => {
  options = {
    indent: ' ',
    includeEmptyLines: false,
    ...options
  };

  if (typeof string !== 'string') {
    throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof string}\``);
  }

  if (typeof count !== 'number') {
    throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof count}\``);
  }

  if (typeof options.indent !== 'string') {
    throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof options.indent}\``);
  }

  if (count === 0) {
    return string;
  }

  const regex = options.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
  return string.replace(regex, options.indent.repeat(count));
};

const extractPathRegex = /\s+at.*(?:\(|\s)(.*)\)?/;
const pathRegex = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/;
const homeDir = typeof os__default['default'].homedir === 'undefined' ? '' : os__default['default'].homedir();

var cleanStack = (stack, options) => {
  options = Object.assign({
    pretty: false
  }, options);
  return stack.replace(/\\/g, '/').split('\n').filter(line => {
    const pathMatches = line.match(extractPathRegex);

    if (pathMatches === null || !pathMatches[1]) {
      return true;
    }

    const match = pathMatches[1]; // Electron

    if (match.includes('.app/Contents/Resources/electron.asar') || match.includes('.app/Contents/Resources/default_app.asar')) {
      return false;
    }

    return !pathRegex.test(match);
  }).filter(line => line.trim() !== '').map(line => {
    if (options.pretty) {
      return line.replace(extractPathRegex, (m, p1) => m.replace(p1, p1.replace(homeDir, '~')));
    }

    return line;
  }).join('\n');
};

const cleanInternalStack = stack => stack.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, '');

class AggregateError extends Error {
  constructor(errors) {
    if (!Array.isArray(errors)) {
      throw new TypeError(`Expected input to be an Array, got ${typeof errors}`);
    }

    errors = [...errors].map(error => {
      if (error instanceof Error) {
        return error;
      }

      if (error !== null && typeof error === 'object') {
        // Handle plain error objects with message property and/or possibly other metadata
        return Object.assign(new Error(error.message), error);
      }

      return new Error(error);
    });
    let message = errors.map(error => {
      // The `stack` property is not standardized, so we can't assume it exists
      return typeof error.stack === 'string' ? cleanInternalStack(cleanStack(error.stack)) : String(error);
    }).join('\n');
    message = '\n' + indentString(message, 4);
    super(message);
    this.name = 'AggregateError';
    Object.defineProperty(this, '_errors', {
      value: errors
    });
  }

  *[Symbol.iterator]() {
    for (const error of this._errors) {
      yield error;
    }
  }

}

var aggregateError = AggregateError;

var pMap = async (iterable, mapper, {
  concurrency = Infinity,
  stopOnError = true
} = {}) => {
  return new Promise((resolve, reject) => {
    if (typeof mapper !== 'function') {
      throw new TypeError('Mapper function is required');
    }

    if (!((Number.isSafeInteger(concurrency) || concurrency === Infinity) && concurrency >= 1)) {
      throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${concurrency}\` (${typeof concurrency})`);
    }

    const result = [];
    const errors = [];
    const iterator = iterable[Symbol.iterator]();
    let isRejected = false;
    let isIterableDone = false;
    let resolvingCount = 0;
    let currentIndex = 0;

    const next = () => {
      if (isRejected) {
        return;
      }

      const nextItem = iterator.next();
      const index = currentIndex;
      currentIndex++;

      if (nextItem.done) {
        isIterableDone = true;

        if (resolvingCount === 0) {
          if (!stopOnError && errors.length !== 0) {
            reject(new aggregateError(errors));
          } else {
            resolve(result);
          }
        }

        return;
      }

      resolvingCount++;

      (async () => {
        try {
          const element = await nextItem.value;
          result[index] = await mapper(element, index);
          resolvingCount--;
          next();
        } catch (error) {
          if (stopOnError) {
            isRejected = true;
            reject(error);
          } else {
            errors.push(error);
            resolvingCount--;
            next();
          }
        }
      })();
    };

    for (let i = 0; i < concurrency; i++) {
      next();

      if (isIterableDone) {
        break;
      }
    }
  });
};

const pMap$1 = (iterable, mapper, options) => new Promise((resolve, reject) => {
  options = Object.assign({
    concurrency: Infinity
  }, options);

  if (typeof mapper !== 'function') {
    throw new TypeError('Mapper function is required');
  }

  const {
    concurrency
  } = options;

  if (!(typeof concurrency === 'number' && concurrency >= 1)) {
    throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${concurrency}\` (${typeof concurrency})`);
  }

  const ret = [];
  const iterator = iterable[Symbol.iterator]();
  let isRejected = false;
  let isIterableDone = false;
  let resolvingCount = 0;
  let currentIndex = 0;

  const next = () => {
    if (isRejected) {
      return;
    }

    const nextItem = iterator.next();
    const i = currentIndex;
    currentIndex++;

    if (nextItem.done) {
      isIterableDone = true;

      if (resolvingCount === 0) {
        resolve(ret);
      }

      return;
    }

    resolvingCount++;
    Promise.resolve(nextItem.value).then(element => mapper(element, i)).then(value => {
      ret[i] = value;
      resolvingCount--;
      next();
    }, error => {
      isRejected = true;
      reject(error);
    });
  };

  for (let i = 0; i < concurrency; i++) {
    next();

    if (isIterableDone) {
      break;
    }
  }
});

var pMap_1 = pMap$1; // TODO: Remove this for the next major release

var _default$4 = pMap$1;
pMap_1.default = _default$4;

const pFilter = async (iterable, filterer, options) => {
  const values = await pMap_1(iterable, (element, index) => Promise.all([filterer(element, index), element]), options);
  return values.filter(value => Boolean(value[0])).map(value => value[1]);
};

var pFilter_1 = pFilter; // TODO: Remove this for the next major release

var _default$1$1 = pFilter;
pFilter_1.default = _default$1$1;
const IS_ATOM = typeof atom !== 'undefined';
const IS_DEV = typeof atom !== 'undefined' && (atom.inDevMode() || atom.inSpecMode());
const IGNORED_CONFIG_NAME = 'atom-package-deps.ignored';
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */

/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;
/**
 * Module exports.
 * @public
 */

var escapeHtml_1 = escapeHtml;
/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;

      case 38:
        // &
        escape = '&amp;';
        break;

      case 39:
        // '
        escape = '&#39;';
        break;

      case 60:
        // <
        escape = '&lt;';
        break;

      case 62:
        // >
        escape = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}

async function spawnInternal(command, args, options) {
  const spawnedProcess = childProcess__default['default'].spawn(command, args, options);
  const promise = new Promise((resolve, reject) => {
    const output = {
      stdout: spawnedProcess.stdout ? [] : null,
      stderr: spawnedProcess.stderr ? [] : null
    };
    spawnedProcess.on('error', reject);

    if (spawnedProcess.stdout) {
      spawnedProcess.stdout.on('data', function (chunk) {
        output.stdout.push(chunk);

        if (options.handleStdout) {
          options.handleStdout(chunk);
        }
      });
    }

    if (spawnedProcess.stderr) {
      spawnedProcess.stderr.on('data', function (chunk) {
        output.stderr.push(chunk);

        if (options.handleStderr) {
          options.handleStderr(chunk);
        }
      });
    }

    spawnedProcess.on('close', code => {
      let outputStdout = null;

      if (output.stdout != null) {
        outputStdout = options.encoding === null || options.encoding === 'buffer' ? Buffer.concat(output.stdout) : output.stdout.join('');
      }

      let outputStderr = null;

      if (output.stderr != null) {
        outputStderr = options.encoding === null || options.encoding === 'buffer' ? Buffer.concat(output.stderr) : output.stderr.join('');
      }

      resolve({
        exitCode: code,
        stdout: outputStdout,
        stderr: outputStderr
      });
    });
  });
  options.handleChildProcess(spawnedProcess);
  return promise;
}

function spawn$1(command, args, options) {
  let spawnedProcess;
  const promise = spawnInternal(command, args, { ...options,

    handleChildProcess(_spawnedProcess) {
      spawnedProcess = _spawnedProcess;
    }

  });

  promise.kill = function (signal) {
    // TODO: kill all subprocesses on windows with wmic?
    return spawnedProcess.kill(signal);
  };

  return promise;
}

var semverCompare = function cmp(a, b) {
  var pa = a.split('.');
  var pb = b.split('.');

  for (var i = 0; i < 3; i++) {
    var na = Number(pa[i]);
    var nb = Number(pb[i]);
    if (na > nb) return 1;
    if (nb > na) return -1;
    if (!isNaN(na) && isNaN(nb)) return 1;
    if (isNaN(na) && !isNaN(nb)) return -1;
  }

  return 0;
};

async function getDependencies(packageName) {
  const packageModule = atom.packages.getLoadedPackage(packageName);
  const packageDependencies = packageModule && packageModule.metadata['package-deps'];
  return Array.isArray(packageDependencies) ? packageDependencies : [];
}

async function resolveDependencyPath(packageName) {
  return atom.packages.resolvePackagePath(packageName);
}

async function getInstalledDependencyVersion(dependency) {
  var _packageModule$metada;

  const packageModule = atom.packages.getLoadedPackage(dependency.name);
  return packageModule == null ? null : (_packageModule$metada = packageModule.metadata.version) !== null && _packageModule$metada !== void 0 ? _packageModule$metada : null;
}

async function getDependencies$1(packageName) {
  let packageStats = null;

  try {
    packageStats = await fs__default['default'].promises.stat(packageName);
  } catch (_) {// No Op
  }

  if (packageStats == null || !packageStats.isDirectory()) {
    throw new Error(`[Package-Deps] Expected packageName to be a readable directory in Node.js invocation`);
  }

  let parsed = null;

  try {
    const contents = await fs__default['default'].promises.readFile(path__default['default'].join(packageName, 'package.json'), 'utf8');
    parsed = JSON.parse(contents);
  } catch (_) {// Ignore JSON read errors and such
  }

  const packageDependencies = parsed == null || typeof parsed !== 'object' ? [] : parsed['package-deps'];
  return Array.isArray(packageDependencies) ? packageDependencies : [];
}

async function resolveDependencyPath$1(packageName) {
  var _process$env$ATOM_HOM;

  const packageDirectory = path__default['default'].join((_process$env$ATOM_HOM = process.env.ATOM_HOME) !== null && _process$env$ATOM_HOM !== void 0 ? _process$env$ATOM_HOM : path__default['default'].join(os__default['default'].homedir(), '.atom'), 'packages', packageName);

  try {
    await fs__default['default'].promises.access(packageDirectory, fs__default['default'].constants.R_OK);
    return packageDirectory;
  } catch (_) {
    return null;
  }
}

async function getInstalledDependencyVersion$1(dependency) {
  var _manifest$version, _manifest;

  const {
    directory
  } = dependency;

  if (directory == null) {
    // Not possible to get version without resolved directory in Node.js version
    return null;
  }

  let manifest = null;

  try {
    manifest = JSON.parse(await fs__default['default'].promises.readFile(path__default['default'].join(directory, 'package.json'), 'utf8'));
  } catch (_) {
    return null;
  }

  return (_manifest$version = (_manifest = manifest) === null || _manifest === void 0 ? void 0 : _manifest.version) !== null && _manifest$version !== void 0 ? _manifest$version : null;
}
/**
 * Internal helpers
 */


async function getInstalledDependencyVersion$2(dependency) {
  if (IS_ATOM) {
    const atomPackageVersion = await getInstalledDependencyVersion(dependency);

    if (atomPackageVersion) {
      return atomPackageVersion;
    } // If the package isn't activated, it won't be loaded, so fallback to reading manifest file instead

  }

  return getInstalledDependencyVersion$1(dependency);
}
/**
 * Exported helpers
 */


const resolveDependencyPath$2 = IS_ATOM ? resolveDependencyPath : resolveDependencyPath$1;

function invariant(condition, message) {
  if (!condition) {
    throw new Error(message !== null && message !== void 0 ? message : 'Invariant violation');
  }
}

async function getDependencies$2(name) {
  const dependencies = await (IS_ATOM ? getDependencies(name) : getDependencies$1(name));

  if (IS_DEV) {
    invariant(Array.isArray(dependencies), `Dependencies for ${name} are not a valid array`);
    dependencies.forEach((item, index) => {
      if (Array.isArray(item)) {
        item.forEach((subitem, subindex) => {
          const invalidMessage = `Dependency#${index}#${subindex} for ${name} is invalid`;
          invariant(typeof subitem.name === 'string' && subitem.name.length > 0, invalidMessage);
          invariant(subitem.minimumVersion == null || typeof subitem.minimumVersion === 'string' && subitem.minimumVersion.length > 0, invalidMessage);
        });
        invariant(item.length > 0, `Dependency#${index} for ${name} has no group items`);
      } else {
        const invalidMessage = `Dependency#${index} for ${name} is invalid`;
        invariant(typeof item.name === 'string' && item.name.length > 0, invalidMessage);
        invariant(item.minimumVersion == null || typeof item.minimumVersion === 'string' && item.minimumVersion.length > 0, invalidMessage);
      }
    });
  }

  return dependencies;
}

async function shouldInstallDependency(dependency) {
  if (dependency.directory == null) {
    // Not installed, so install
    return true;
  }

  if (dependency.minimumVersion == null) {
    // Already installed and no version defined, so skip
    return false;
  }

  const version = await getInstalledDependencyVersion$2(dependency);

  if (version == null) {
    // Unable to get current version, so install
    return true;
  }

  return semverCompare(dependency.minimumVersion, version) === 1;
}

function isPackageIgnored(name) {
  var _atom$config$get;

  if (!IS_ATOM) {
    // Never ignored in CLI
    return false;
  }

  const ignoredPackages = (_atom$config$get = atom.config.get(IGNORED_CONFIG_NAME)) !== null && _atom$config$get !== void 0 ? _atom$config$get : [];

  if (ignoredPackages.includes(name)) {
    return true;
  }

  return false;
}

function markPackageAsIgnored(name) {
  var _atom$config$get2;

  if (!IS_ATOM) {
    // No op in CLI
    return;
  }

  const ignoredPackages = new Set((_atom$config$get2 = atom.config.get(IGNORED_CONFIG_NAME)) !== null && _atom$config$get2 !== void 0 ? _atom$config$get2 : []);
  ignoredPackages.add(name);
  atom.config.set(IGNORED_CONFIG_NAME, Array.from(ignoredPackages));
}

const INSTALL_VALID_TICKS = new Set(['✓', 'done']);
const INSTALL_VALIDATION_REGEXP = /(?:Installing|Moving) (.*?) to .* (.*)/; // Example success output: Uninstalling linter-ui-default ✓

async function installPackage(dependency) {
  const apmPath = IS_ATOM ? `"${atom.packages.getApmPath()}"` : 'apm';
  const {
    stdout,
    stderr
  } = await spawn$1(apmPath, ['install', dependency.name, '--production', '--color', 'false'], {
    shell: true
  });
  const match = INSTALL_VALIDATION_REGEXP.exec(stdout.trim());

  if (match != null && INSTALL_VALID_TICKS.has(match[2])) {
    // Installation complete and verified
    return;
  }

  const error = new Error(`Error installing dependency: ${dependency.name}`);
  error.stack = stderr.trim();
  throw error;
}

async function getResolvedDependency(item) {
  // string entry
  if (typeof item === 'string') {
    return {
      name: item,
      directory: await resolveDependencyPath$2(item)
    };
  }

  if ('name' in item) {
    return { ...item,
      directory: await resolveDependencyPath$2(item.name)
    };
  }

  console.error(`This package-deps entry is not valid. Please see https://github.com/steelbrain/package-deps#how-it-works`, {
    entry: item
  });
  throw Error(`The package-deps entry is not valid. Please see https://github.com/steelbrain/package-deps#how-it-works`);
}

let showResetInstruction = true;

function confirmPackagesToInstall({
  packageName,
  dependencies
}) {
  return new Promise(resolve => {
    const ungroupedDependencies = dependencies.filter(item => !Array.isArray(item));
    const groupedDependencies = dependencies.filter(item => Array.isArray(item));
    const skipGroups = groupedDependencies.length === 0;
    const detail = skipGroups ? ungroupedDependencies.map(item => item.name).join(', ') : 'Something went wrong. Check your developer console';
    const groupChoices = groupedDependencies.map(item => item[0]); // If Atom "notifications" package is disabled output a warning in case no other notifications package is installed.

    if (atom.packages.isPackageDisabled('notifications')) {
      console.warn(`Enable notifications to install dependencies for ${packageName}`);
    }

    const notification = atom.notifications.addInfo(`${packageName} needs to install dependencies`, {
      dismissable: true,
      icon: 'cloud-download',
      detail,
      description: `Install dependenc${dependencies.length === 1 ? 'y' : 'ies'}?`,
      buttons: [{
        text: 'Yes',
        onDidClick: () => {
          if (skipGroups) {
            resolve(ungroupedDependencies);
          } else {
            resolve(ungroupedDependencies.concat(groupChoices));
          }

          notification.dismiss();
        }
      }, {
        text: 'No Thanks',
        onDidClick: () => {
          notification.dismiss();
        }
      }, {
        text: 'Never',
        onDidClick: () => {
          markPackageAsIgnored(packageName);

          if (showResetInstruction) {
            showResetInstruction = false;
            atom.notifications.addInfo('How to reset package-deps memory', {
              dismissable: true,
              description: "To modify the list of ignored files invoke 'Application: Open Your Config' and change the 'atom-package-deps' section"
            });
          }

          notification.dismiss();
        }
      }]
    });
    notification.onDidDismiss(() => resolve([]));

    if (skipGroups) {
      return;
    } // Handle groups


    try {
      var _notificationView$ele;

      const notificationView = atom.views.getView(notification);
      const notificationElement = (_notificationView$ele = notificationView === null || notificationView === void 0 ? void 0 : notificationView.element) !== null && _notificationView$ele !== void 0 ? _notificationView$ele : null;

      if (notificationElement == null) {
        throw new Error('Unable to get notification element from view');
      }

      const notificationContent = notificationElement.querySelector('.detail-content');

      if (notificationContent == null) {
        throw new Error('Content detail container not found inside the notification');
      } // Clear the contents and add some skel


      notificationContent.innerHTML = ''; // Add list of ungroup dependencies to the top of the notification

      if (ungroupedDependencies.length > 0) {
        const ungroupedLine = document.createElement('div');
        ungroupedLine.innerHTML = `Packages without choices: <br /><ul><li>${ungroupedDependencies.map(item => escapeHtml_1(item.name)).join('</li><li>')}</li></ul>`;
        notificationContent.appendChild(ungroupedLine);
      } // Create a label line for groups


      const groupLabelLine = document.createElement('div');
      groupLabelLine.innerHTML = `Packages with choices:`;
      notificationContent.appendChild(groupLabelLine); // Create one line per group with a select inside

      const groupedList = document.createElement('ul');
      groupedDependencies.forEach((item, index) => {
        const listItem = document.createElement('li');
        const select = document.createElement('select');
        select.innerHTML = item.map(subitem => `<option>${escapeHtml_1(subitem.name)}</option>`).join('\n');
        select.addEventListener('change', () => {
          // Change the selected value for this index for resolve to use
          const subitem = item.find(entry => entry.name === select.value);

          if (subitem != null) {
            groupChoices[index] = subitem;
          }
        });
        listItem.style.marginTop = '5px';
        listItem.appendChild(select);
        groupedList.appendChild(listItem);
      });
      notificationContent.appendChild(groupedList);
    } catch (err) {
      console.error('[Package-Deps] Error during showing package choices to user', err);
    }
  });
}

function getView({
  packageName,
  dependencies
}) {
  const failed = [];
  const notification = atom.notifications.addInfo(`Installing ${packageName} dependencies`, {
    detail: `Installing ${dependencies.map(item => item.name).join(', ')}`,
    dismissable: true
  });
  const progress = document.createElement('progress');
  progress.max = dependencies.length;
  progress.style.width = '100%';

  try {
    var _notificationView$ele2;

    const notificationView = atom.views.getView(notification);
    const notificationElement = (_notificationView$ele2 = notificationView === null || notificationView === void 0 ? void 0 : notificationView.element) !== null && _notificationView$ele2 !== void 0 ? _notificationView$ele2 : null;

    if (notificationElement == null) {
      throw new Error('Unable to get notification element from view');
    }

    const notificationContent = notificationElement.querySelector('.detail-content');

    if (notificationContent == null) {
      throw new Error('Content detail container not found inside the notification');
    }

    notificationContent.appendChild(progress);
  } catch (err) {
    console.error('[Package-Deps] Error during showing installation progress to user', err);
  }

  return {
    handleFailure({
      dependency,
      error
    }) {
      var _error$stack;

      failed.push(dependency.name);
      progress.value += 1;
      console.error(`[Package-Deps] Unable to install ${dependency.name}, Error:`, (_error$stack = error === null || error === void 0 ? void 0 : error.stack) !== null && _error$stack !== void 0 ? _error$stack : error);
    },

    handleDependencyInstalled(dependency) {
      progress.value += 1;
    },

    handleComplete() {
      notification.dismiss();

      if (failed.length > 0) {
        atom.notifications.addWarning(`Failed to install ${packageName} dependencies`, {
          detail: `These packages were not installed, check your console\nfor more info.\n${failed.join('\n')}`,
          dismissable: true
        });
      } else {
        atom.notifications.addSuccess(`Installed ${packageName} dependencies`, {
          detail: `Installed ${dependencies.map(item => item.name).join(', ')}`
        });
      }

      Promise.all(dependencies.map(item => {
        if (!failed.includes(item.name)) {
          return atom.packages.activatePackage(item.name);
        }

        return null;
      })).catch(err => {
        console.error(`[Package-Deps] Error activating installed packages for ${packageName}`, err);
      });
    }

  };
}

async function confirmPackagesToInstall$1({
  dependencies
}) {
  // No user interaction on the CLI. Install the first (aka "default" choice) package
  return dependencies.map(item => Array.isArray(item) ? item[0] : item);
}

function getView$1({
  dependencies
}) {
  let failed = false;
  console.log(`Installing dependencies:\n${dependencies.map(item => `  - ${item.name}`).join('\n')}`);
  return {
    handleFailure({
      dependency,
      error
    }) {
      var _error$stack;

      failed = true;
      console.error(`Unable to install ${dependency.name}, Error:`, (_error$stack = error === null || error === void 0 ? void 0 : error.stack) !== null && _error$stack !== void 0 ? _error$stack : error);
    },

    handleDependencyInstalled(dependency) {
      console.log('Successfully installed', dependency.name);
    },

    handleComplete() {
      console.log('Installation complete');

      if (failed) {
        // Fail the invocation
        process.exitCode = 1;
      }
    }

  };
}

const getView$2 = IS_ATOM ? getView : getView$1;
const confirmPackagesToInstall$2 = IS_ATOM ? confirmPackagesToInstall : confirmPackagesToInstall$1;

async function install(packageName, hideUserPrompt = false) {
  invariant(typeof packageName === 'string' && packageName.length > 0, '[Package-Deps] Package name is required');

  if (isPackageIgnored(packageName)) {
    // User ignored this package
    return;
  } // Get list of relevant dependencies


  const dependencies = await getDependencies$2(packageName);

  if (dependencies.length === 0) {
    // Short-circuit
    return;
  } // Resolve directories of relevant dependencies


  const resolvedDependencies = await Promise.all(dependencies.map(async item => {
    if (Array.isArray(item)) {
      return Promise.all(item.map(getResolvedDependency));
    }

    return getResolvedDependency(item);
  })); // Filter out already installed, in range dependencies
  // If one dependency from a group is already installed, whole group is ignored

  const dependenciesToInstall = await pFilter_1(resolvedDependencies, async function (item) {
    if (Array.isArray(item)) {
      return (await Promise.all(item.map(subitem => shouldInstallDependency(subitem)))).every(Boolean);
    }

    return shouldInstallDependency(item);
  });

  if (dependenciesToInstall.length === 0) {
    // Short-circuit if all have been skipped
    return;
  }

  let chosenDependencies;

  if (!hideUserPrompt) {
    chosenDependencies = await confirmPackagesToInstall$2({
      packageName,
      dependencies: dependenciesToInstall
    });
  } else {
    // prompt-less installation
    chosenDependencies = dependenciesToInstall.map(dep => {
      if (Array.isArray(dep)) {
        return dep[0];
      }

      return dep;
    });
  }

  if (chosenDependencies.length === 0) {
    // Short-circuit if user interaction cancelled all
    return;
  }

  const view = getView$2({
    packageName,
    dependencies: chosenDependencies
  });
  await pMap(chosenDependencies, async function (dependency) {
    try {
      await installPackage(dependency);
      view.handleDependencyInstalled(dependency);
    } catch (err) {
      view.handleFailure({
        dependency,
        error: err
      });
    }
  }, {
    concurrency: 2
  });
  view.handleComplete();
}

var install_1 = install;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

function commonjsRequire (path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var numbro_min = createCommonjsModule(function (module, exports) {
!function (e) {
  module.exports = e();
}(function () {
  return function a(o, u, c) {
    function s(t, e) {
      if (!u[t]) {
        if (!o[t]) {
          var r = "function" == typeof commonjsRequire && commonjsRequire;
          if (!e && r) return r(t, !0);
          if (l) return l(t, !0);
          var n = new Error("Cannot find module '" + t + "'");
          throw n.code = "MODULE_NOT_FOUND", n;
        }

        var i = u[t] = {
          exports: {}
        };
        o[t][0].call(i.exports, function (e) {
          return s(o[t][1][e] || e);
        }, i, i.exports, a, o, u, c);
      }

      return u[t].exports;
    }

    for (var l = "function" == typeof commonjsRequire && commonjsRequire, e = 0; e < c.length; e++) s(c[e]);

    return s;
  }({
    1: [function (e, r, t) {
      !function (e) {

        var t,
            T = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
            C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
            U = Math.ceil,
            R = Math.floor,
            I = "[BigNumber Error] ",
            $ = I + "Number primitive has more than 15 significant digits: ",
            G = 1e14,
            V = 14,
            q = 9007199254740991,
            Z = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
            z = 1e7,
            W = 1e9;

        function H(e) {
          var t = 0 | e;
          return 0 < e || e === t ? t : t - 1;
        }

        function Y(e) {
          for (var t, r, n = 1, i = e.length, a = e[0] + ""; n < i;) {
            for (t = e[n++] + "", r = V - t.length; r--; t = "0" + t);

            a += t;
          }

          for (i = a.length; 48 === a.charCodeAt(--i););

          return a.slice(0, i + 1 || 1);
        }

        function K(e, t) {
          var r,
              n,
              i = e.c,
              a = t.c,
              o = e.s,
              u = t.s,
              c = e.e,
              s = t.e;
          if (!o || !u) return null;
          if (r = i && !i[0], n = a && !a[0], r || n) return r ? n ? 0 : -u : o;
          if (o != u) return o;
          if (r = o < 0, n = c == s, !i || !a) return n ? 0 : !i ^ r ? 1 : -1;
          if (!n) return s < c ^ r ? 1 : -1;

          for (u = (c = i.length) < (s = a.length) ? c : s, o = 0; o < u; o++) if (i[o] != a[o]) return i[o] > a[o] ^ r ? 1 : -1;

          return c == s ? 0 : s < c ^ r ? 1 : -1;
        }

        function J(e, t, r, n) {
          if (e < t || r < e || e !== R(e)) throw Error(I + (n || "Argument") + ("number" == typeof e ? e < t || r < e ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e));
        }

        function X(e) {
          var t = e.c.length - 1;
          return H(e.e / V) == t && e.c[t] % 2 != 0;
        }

        function Q(e, t) {
          return (1 < e.length ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t;
        }

        function ee(e, t, r) {
          var n, i;

          if (t < 0) {
            for (i = r + "."; ++t; i += r);

            e = i + e;
          } else if (++t > (n = e.length)) {
            for (i = r, t -= n; --t; i += r);

            e += i;
          } else t < n && (e = e.slice(0, t) + "." + e.slice(t));

          return e;
        }

        (t = function e(t) {
          var v,
              f,
              p,
              r,
              s,
              m,
              o,
              u,
              c,
              l,
              g,
              n = A.prototype = {
            constructor: A,
            toString: null,
            valueOf: null
          },
              h = new A(1),
              y = 20,
              b = 4,
              d = -7,
              w = 21,
              S = -1e7,
              O = 1e7,
              x = !1,
              a = 1,
              N = 0,
              B = {
            prefix: "",
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ",",
            decimalSeparator: ".",
            fractionGroupSize: 0,
            fractionGroupSeparator: " ",
            suffix: ""
          },
              M = "0123456789abcdefghijklmnopqrstuvwxyz";

          function A(e, t) {
            var r,
                n,
                i,
                a,
                o,
                u,
                c,
                s,
                l = this;
            if (!(l instanceof A)) return new A(e, t);

            if (null == t) {
              if (e && !0 === e._isBigNumber) return l.s = e.s, void (!e.c || e.e > O ? l.c = l.e = null : e.e < S ? l.c = [l.e = 0] : (l.e = e.e, l.c = e.c.slice()));

              if ((u = "number" == typeof e) && 0 * e == 0) {
                if (l.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                  for (a = 0, o = e; 10 <= o; o /= 10, a++);

                  return void (O < a ? l.c = l.e = null : (l.e = a, l.c = [e]));
                }

                s = String(e);
              } else {
                if (!T.test(s = String(e))) return p(l, s, u);
                l.s = 45 == s.charCodeAt(0) ? (s = s.slice(1), -1) : 1;
              }

              -1 < (a = s.indexOf(".")) && (s = s.replace(".", "")), 0 < (o = s.search(/e/i)) ? (a < 0 && (a = o), a += +s.slice(o + 1), s = s.substring(0, o)) : a < 0 && (a = s.length);
            } else {
              if (J(t, 2, M.length, "Base"), 10 == t) return j(l = new A(e), y + l.e + 1, b);

              if (s = String(e), u = "number" == typeof e) {
                if (0 * e != 0) return p(l, s, u, t);
                if (l.s = 1 / e < 0 ? (s = s.slice(1), -1) : 1, A.DEBUG && 15 < s.replace(/^0\.0*|\./, "").length) throw Error($ + e);
              } else l.s = 45 === s.charCodeAt(0) ? (s = s.slice(1), -1) : 1;

              for (r = M.slice(0, t), a = o = 0, c = s.length; o < c; o++) if (r.indexOf(n = s.charAt(o)) < 0) {
                if ("." == n) {
                  if (a < o) {
                    a = c;
                    continue;
                  }
                } else if (!i && (s == s.toUpperCase() && (s = s.toLowerCase()) || s == s.toLowerCase() && (s = s.toUpperCase()))) {
                  i = !0, o = -1, a = 0;
                  continue;
                }

                return p(l, String(e), u, t);
              }

              u = !1, -1 < (a = (s = f(s, t, 10, l.s)).indexOf(".")) ? s = s.replace(".", "") : a = s.length;
            }

            for (o = 0; 48 === s.charCodeAt(o); o++);

            for (c = s.length; 48 === s.charCodeAt(--c););

            if (s = s.slice(o, ++c)) {
              if (c -= o, u && A.DEBUG && 15 < c && (q < e || e !== R(e))) throw Error($ + l.s * e);
              if ((a = a - o - 1) > O) l.c = l.e = null;else if (a < S) l.c = [l.e = 0];else {
                if (l.e = a, l.c = [], o = (a + 1) % V, a < 0 && (o += V), o < c) {
                  for (o && l.c.push(+s.slice(0, o)), c -= V; o < c;) l.c.push(+s.slice(o, o += V));

                  o = V - (s = s.slice(o)).length;
                } else o -= c;

                for (; o--; s += "0");

                l.c.push(+s);
              }
            } else l.c = [l.e = 0];
          }

          function D(e, t, r, n) {
            for (var i, a, o = [0], u = 0, c = e.length; u < c;) {
              for (a = o.length; a--; o[a] *= t);

              for (o[0] += n.indexOf(e.charAt(u++)), i = 0; i < o.length; i++) o[i] > r - 1 && (null == o[i + 1] && (o[i + 1] = 0), o[i + 1] += o[i] / r | 0, o[i] %= r);
            }

            return o.reverse();
          }

          function F(e, t, r) {
            var n,
                i,
                a,
                o,
                u = 0,
                c = e.length,
                s = t % z,
                l = t / z | 0;

            for (e = e.slice(); c--;) u = ((i = s * (a = e[c] % z) + (n = l * a + (o = e[c] / z | 0) * s) % z * z + u) / r | 0) + (n / z | 0) + l * o, e[c] = i % r;

            return u && (e = [u].concat(e)), e;
          }

          function k(e, t, r, n) {
            var i, a;
            if (r != n) a = n < r ? 1 : -1;else for (i = a = 0; i < r; i++) if (e[i] != t[i]) {
              a = e[i] > t[i] ? 1 : -1;
              break;
            }
            return a;
          }

          function E(e, t, r, n) {
            for (var i = 0; r--;) e[r] -= i, i = e[r] < t[r] ? 1 : 0, e[r] = i * n + e[r] - t[r];

            for (; !e[0] && 1 < e.length; e.splice(0, 1));
          }

          function i(e, t, r, n) {
            var i, a, o, u, c;
            if (null == r ? r = b : J(r, 0, 8), !e.c) return e.toString();
            if (i = e.c[0], o = e.e, null == t) c = Y(e.c), c = 1 == n || 2 == n && (o <= d || w <= o) ? Q(c, o) : ee(c, o, "0");else if (a = (e = j(new A(e), t, r)).e, u = (c = Y(e.c)).length, 1 == n || 2 == n && (t <= a || a <= d)) {
              for (; u < t; c += "0", u++);

              c = Q(c, a);
            } else if (t -= o, c = ee(c, a, "0"), u < a + 1) {
              if (0 < --t) for (c += "."; t--; c += "0");
            } else if (0 < (t += a - u)) for (a + 1 == u && (c += "."); t--; c += "0");
            return e.s < 0 && i ? "-" + c : c;
          }

          function _(e, t) {
            for (var r, n = 1, i = new A(e[0]); n < e.length; n++) {
              if (!(r = new A(e[n])).s) {
                i = r;
                break;
              }

              t.call(i, r) && (i = r);
            }

            return i;
          }

          function L(e, t, r) {
            for (var n = 1, i = t.length; !t[--i]; t.pop());

            for (i = t[0]; 10 <= i; i /= 10, n++);

            return (r = n + r * V - 1) > O ? e.c = e.e = null : r < S ? e.c = [e.e = 0] : (e.e = r, e.c = t), e;
          }

          function j(e, t, r, n) {
            var i,
                a,
                o,
                u,
                c,
                s,
                l,
                f = e.c,
                p = Z;

            if (f) {
              e: {
                for (i = 1, u = f[0]; 10 <= u; u /= 10, i++);

                if ((a = t - i) < 0) a += V, o = t, l = (c = f[s = 0]) / p[i - o - 1] % 10 | 0;else if ((s = U((a + 1) / V)) >= f.length) {
                  if (!n) break e;

                  for (; f.length <= s; f.push(0));

                  c = l = 0, o = (a %= V) - V + (i = 1);
                } else {
                  for (c = u = f[s], i = 1; 10 <= u; u /= 10, i++);

                  l = (o = (a %= V) - V + i) < 0 ? 0 : c / p[i - o - 1] % 10 | 0;
                }
                if (n = n || t < 0 || null != f[s + 1] || (o < 0 ? c : c % p[i - o - 1]), n = r < 4 ? (l || n) && (0 == r || r == (e.s < 0 ? 3 : 2)) : 5 < l || 5 == l && (4 == r || n || 6 == r && (0 < a ? 0 < o ? c / p[i - o] : 0 : f[s - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !f[0]) return f.length = 0, n ? (t -= e.e + 1, f[0] = p[(V - t % V) % V], e.e = -t || 0) : f[0] = e.e = 0, e;
                if (0 == a ? (f.length = s, u = 1, s--) : (f.length = s + 1, u = p[V - a], f[s] = 0 < o ? R(c / p[i - o] % p[o]) * u : 0), n) for (;;) {
                  if (0 == s) {
                    for (a = 1, o = f[0]; 10 <= o; o /= 10, a++);

                    for (o = f[0] += u, u = 1; 10 <= o; o /= 10, u++);

                    a != u && (e.e++, f[0] == G && (f[0] = 1));
                    break;
                  }

                  if (f[s] += u, f[s] != G) break;
                  f[s--] = 0, u = 1;
                }

                for (a = f.length; 0 === f[--a]; f.pop());
              }

              e.e > O ? e.c = e.e = null : e.e < S && (e.c = [e.e = 0]);
            }

            return e;
          }

          function P(e) {
            var t,
                r = e.e;
            return null === r ? e.toString() : (t = Y(e.c), t = r <= d || w <= r ? Q(t, r) : ee(t, r, "0"), e.s < 0 ? "-" + t : t);
          }

          return A.clone = e, A.ROUND_UP = 0, A.ROUND_DOWN = 1, A.ROUND_CEIL = 2, A.ROUND_FLOOR = 3, A.ROUND_HALF_UP = 4, A.ROUND_HALF_DOWN = 5, A.ROUND_HALF_EVEN = 6, A.ROUND_HALF_CEIL = 7, A.ROUND_HALF_FLOOR = 8, A.EUCLID = 9, A.config = A.set = function (e) {
            var t, r;

            if (null != e) {
              if ("object" != typeof e) throw Error(I + "Object expected: " + e);
              if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (J(r = e[t], 0, W, t), y = r), e.hasOwnProperty(t = "ROUNDING_MODE") && (J(r = e[t], 0, 8, t), b = r), e.hasOwnProperty(t = "EXPONENTIAL_AT") && ((r = e[t]) && r.pop ? (J(r[0], -W, 0, t), J(r[1], 0, W, t), d = r[0], w = r[1]) : (J(r, -W, W, t), d = -(w = r < 0 ? -r : r))), e.hasOwnProperty(t = "RANGE")) if ((r = e[t]) && r.pop) J(r[0], -W, -1, t), J(r[1], 1, W, t), S = r[0], O = r[1];else {
                if (J(r, -W, W, t), !r) throw Error(I + t + " cannot be zero: " + r);
                S = -(O = r < 0 ? -r : r);
              }

              if (e.hasOwnProperty(t = "CRYPTO")) {
                if ((r = e[t]) !== !!r) throw Error(I + t + " not true or false: " + r);

                if (r) {
                  if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw x = !r, Error(I + "crypto unavailable");
                  x = r;
                } else x = r;
              }

              if (e.hasOwnProperty(t = "MODULO_MODE") && (J(r = e[t], 0, 9, t), a = r), e.hasOwnProperty(t = "POW_PRECISION") && (J(r = e[t], 0, W, t), N = r), e.hasOwnProperty(t = "FORMAT")) {
                if ("object" != typeof (r = e[t])) throw Error(I + t + " not an object: " + r);
                B = r;
              }

              if (e.hasOwnProperty(t = "ALPHABET")) {
                if ("string" != typeof (r = e[t]) || /^.$|[+-.\s]|(.).*\1/.test(r)) throw Error(I + t + " invalid: " + r);
                M = r;
              }
            }

            return {
              DECIMAL_PLACES: y,
              ROUNDING_MODE: b,
              EXPONENTIAL_AT: [d, w],
              RANGE: [S, O],
              CRYPTO: x,
              MODULO_MODE: a,
              POW_PRECISION: N,
              FORMAT: B,
              ALPHABET: M
            };
          }, A.isBigNumber = function (e) {
            if (!e || !0 !== e._isBigNumber) return !1;
            if (!A.DEBUG) return !0;
            var t,
                r,
                n = e.c,
                i = e.e,
                a = e.s;

            e: if ("[object Array]" == {}.toString.call(n)) {
              if ((1 === a || -1 === a) && -W <= i && i <= W && i === R(i)) {
                if (0 === n[0]) {
                  if (0 === i && 1 === n.length) return !0;
                  break e;
                }

                if ((t = (i + 1) % V) < 1 && (t += V), String(n[0]).length == t) {
                  for (t = 0; t < n.length; t++) if ((r = n[t]) < 0 || G <= r || r !== R(r)) break e;

                  if (0 !== r) return !0;
                }
              }
            } else if (null === n && null === i && (null === a || 1 === a || -1 === a)) return !0;

            throw Error(I + "Invalid BigNumber: " + e);
          }, A.maximum = A.max = function () {
            return _(arguments, n.lt);
          }, A.minimum = A.min = function () {
            return _(arguments, n.gt);
          }, A.random = (r = 9007199254740992, s = Math.random() * r & 2097151 ? function () {
            return R(Math.random() * r);
          } : function () {
            return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0);
          }, function (e) {
            var t,
                r,
                n,
                i,
                a,
                o = 0,
                u = [],
                c = new A(h);
            if (null == e ? e = y : J(e, 0, W), i = U(e / V), x) if (crypto.getRandomValues) {
              for (t = crypto.getRandomValues(new Uint32Array(i *= 2)); o < i;) 9e15 <= (a = 131072 * t[o] + (t[o + 1] >>> 11)) ? (r = crypto.getRandomValues(new Uint32Array(2)), t[o] = r[0], t[o + 1] = r[1]) : (u.push(a % 1e14), o += 2);

              o = i / 2;
            } else {
              if (!crypto.randomBytes) throw x = !1, Error(I + "crypto unavailable");

              for (t = crypto.randomBytes(i *= 7); o < i;) 9e15 <= (a = 281474976710656 * (31 & t[o]) + 1099511627776 * t[o + 1] + 4294967296 * t[o + 2] + 16777216 * t[o + 3] + (t[o + 4] << 16) + (t[o + 5] << 8) + t[o + 6]) ? crypto.randomBytes(7).copy(t, o) : (u.push(a % 1e14), o += 7);

              o = i / 7;
            }
            if (!x) for (; o < i;) (a = s()) < 9e15 && (u[o++] = a % 1e14);

            for (i = u[--o], e %= V, i && e && (a = Z[V - e], u[o] = R(i / a) * a); 0 === u[o]; u.pop(), o--);

            if (o < 0) u = [n = 0];else {
              for (n = -1; 0 === u[0]; u.splice(0, 1), n -= V);

              for (o = 1, a = u[0]; 10 <= a; a /= 10, o++);

              o < V && (n -= V - o);
            }
            return c.e = n, c.c = u, c;
          }), A.sum = function () {
            for (var e = 1, t = arguments, r = new A(t[0]); e < t.length;) r = r.plus(t[e++]);

            return r;
          }, m = "0123456789", f = function (e, t, r, n, i) {
            var a,
                o,
                u,
                c,
                s,
                l,
                f,
                p,
                g = e.indexOf("."),
                d = y,
                h = b;

            for (0 <= g && (c = N, N = 0, e = e.replace(".", ""), l = (p = new A(t)).pow(e.length - g), N = c, p.c = D(ee(Y(l.c), l.e, "0"), 10, r, m), p.e = p.c.length), u = c = (f = D(e, t, r, i ? (a = M, m) : (a = m, M))).length; 0 == f[--c]; f.pop());

            if (!f[0]) return a.charAt(0);
            if (g < 0 ? --u : (l.c = f, l.e = u, l.s = n, f = (l = v(l, p, d, h, r)).c, s = l.r, u = l.e), g = f[o = u + d + 1], c = r / 2, s = s || o < 0 || null != f[o + 1], s = h < 4 ? (null != g || s) && (0 == h || h == (l.s < 0 ? 3 : 2)) : c < g || g == c && (4 == h || s || 6 == h && 1 & f[o - 1] || h == (l.s < 0 ? 8 : 7)), o < 1 || !f[0]) e = s ? ee(a.charAt(1), -d, a.charAt(0)) : a.charAt(0);else {
              if (f.length = o, s) for (--r; ++f[--o] > r;) f[o] = 0, o || (++u, f = [1].concat(f));

              for (c = f.length; !f[--c];);

              for (g = 0, e = ""; g <= c; e += a.charAt(f[g++]));

              e = ee(e, u, a.charAt(0));
            }
            return e;
          }, v = function (e, t, r, n, i) {
            var a,
                o,
                u,
                c,
                s,
                l,
                f,
                p,
                g,
                d,
                h,
                v,
                m,
                y,
                b,
                w,
                S,
                O = e.s == t.s ? 1 : -1,
                x = e.c,
                N = t.c;
            if (!(x && x[0] && N && N[0])) return new A(e.s && t.s && (x ? !N || x[0] != N[0] : N) ? x && 0 == x[0] || !N ? 0 * O : O / 0 : NaN);

            for (g = (p = new A(O)).c = [], O = r + (o = e.e - t.e) + 1, i || (i = G, o = H(e.e / V) - H(t.e / V), O = O / V | 0), u = 0; N[u] == (x[u] || 0); u++);

            if (N[u] > (x[u] || 0) && o--, O < 0) g.push(1), c = !0;else {
              for (y = x.length, w = N.length, O += 2, 1 < (s = R(i / (N[u = 0] + 1))) && (N = F(N, s, i), x = F(x, s, i), w = N.length, y = x.length), m = w, h = (d = x.slice(0, w)).length; h < w; d[h++] = 0);

              S = N.slice(), S = [0].concat(S), b = N[0], N[1] >= i / 2 && b++;

              do {
                if (s = 0, (a = k(N, d, w, h)) < 0) {
                  if (v = d[0], w != h && (v = v * i + (d[1] || 0)), 1 < (s = R(v / b))) for (i <= s && (s = i - 1), f = (l = F(N, s, i)).length, h = d.length; 1 == k(l, d, f, h);) s--, E(l, w < f ? S : N, f, i), f = l.length, a = 1;else 0 == s && (a = s = 1), f = (l = N.slice()).length;
                  if (f < h && (l = [0].concat(l)), E(d, l, h, i), h = d.length, -1 == a) for (; k(N, d, w, h) < 1;) s++, E(d, w < h ? S : N, h, i), h = d.length;
                } else 0 === a && (s++, d = [0]);

                g[u++] = s, d[0] ? d[h++] = x[m] || 0 : (d = [x[m]], h = 1);
              } while ((m++ < y || null != d[0]) && O--);

              c = null != d[0], g[0] || g.splice(0, 1);
            }

            if (i == G) {
              for (u = 1, O = g[0]; 10 <= O; O /= 10, u++);

              j(p, r + (p.e = u + o * V - 1) + 1, n, c);
            } else p.e = o, p.r = +c;

            return p;
          }, o = /^(-?)0([xbo])(?=\w[\w.]*$)/i, u = /^([^.]+)\.$/, c = /^\.([^.]+)$/, l = /^-?(Infinity|NaN)$/, g = /^\s*\+(?=[\w.])|^\s+|\s+$/g, p = function (e, t, r, n) {
            var i,
                a = r ? t : t.replace(g, "");
            if (l.test(a)) e.s = isNaN(a) ? null : a < 0 ? -1 : 1;else {
              if (!r && (a = a.replace(o, function (e, t, r) {
                return i = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8, n && n != i ? e : t;
              }), n && (i = n, a = a.replace(u, "$1").replace(c, "0.$1")), t != a)) return new A(a, i);
              if (A.DEBUG) throw Error(I + "Not a" + (n ? " base " + n : "") + " number: " + t);
              e.s = null;
            }
            e.c = e.e = null;
          }, n.absoluteValue = n.abs = function () {
            var e = new A(this);
            return e.s < 0 && (e.s = 1), e;
          }, n.comparedTo = function (e, t) {
            return K(this, new A(e, t));
          }, n.decimalPlaces = n.dp = function (e, t) {
            var r, n, i;
            if (null != e) return J(e, 0, W), null == t ? t = b : J(t, 0, 8), j(new A(this), e + this.e + 1, t);
            if (!(r = this.c)) return null;
            if (n = ((i = r.length - 1) - H(this.e / V)) * V, i = r[i]) for (; i % 10 == 0; i /= 10, n--);
            return n < 0 && (n = 0), n;
          }, n.dividedBy = n.div = function (e, t) {
            return v(this, new A(e, t), y, b);
          }, n.dividedToIntegerBy = n.idiv = function (e, t) {
            return v(this, new A(e, t), 0, 1);
          }, n.exponentiatedBy = n.pow = function (e, t) {
            var r,
                n,
                i,
                a,
                o,
                u,
                c,
                s,
                l = this;
            if ((e = new A(e)).c && !e.isInteger()) throw Error(I + "Exponent not an integer: " + P(e));
            if (null != t && (t = new A(t)), o = 14 < e.e, !l.c || !l.c[0] || 1 == l.c[0] && !l.e && 1 == l.c.length || !e.c || !e.c[0]) return s = new A(Math.pow(+P(l), o ? 2 - X(e) : +P(e))), t ? s.mod(t) : s;

            if (u = e.s < 0, t) {
              if (t.c ? !t.c[0] : !t.s) return new A(NaN);
              (n = !u && l.isInteger() && t.isInteger()) && (l = l.mod(t));
            } else {
              if (9 < e.e && (0 < l.e || l.e < -1 || (0 == l.e ? 1 < l.c[0] || o && 24e7 <= l.c[1] : l.c[0] < 8e13 || o && l.c[0] <= 9999975e7))) return a = l.s < 0 && X(e) ? -0 : 0, -1 < l.e && (a = 1 / a), new A(u ? 1 / a : a);
              N && (a = U(N / V + 2));
            }

            for (c = o ? (r = new A(.5), u && (e.s = 1), X(e)) : (i = Math.abs(+P(e))) % 2, s = new A(h);;) {
              if (c) {
                if (!(s = s.times(l)).c) break;
                a ? s.c.length > a && (s.c.length = a) : n && (s = s.mod(t));
              }

              if (i) {
                if (0 === (i = R(i / 2))) break;
                c = i % 2;
              } else if (j(e = e.times(r), e.e + 1, 1), 14 < e.e) c = X(e);else {
                if (0 == (i = +P(e))) break;
                c = i % 2;
              }

              l = l.times(l), a ? l.c && l.c.length > a && (l.c.length = a) : n && (l = l.mod(t));
            }

            return n ? s : (u && (s = h.div(s)), t ? s.mod(t) : a ? j(s, N, b, void 0) : s);
          }, n.integerValue = function (e) {
            var t = new A(this);
            return null == e ? e = b : J(e, 0, 8), j(t, t.e + 1, e);
          }, n.isEqualTo = n.eq = function (e, t) {
            return 0 === K(this, new A(e, t));
          }, n.isFinite = function () {
            return !!this.c;
          }, n.isGreaterThan = n.gt = function (e, t) {
            return 0 < K(this, new A(e, t));
          }, n.isGreaterThanOrEqualTo = n.gte = function (e, t) {
            return 1 === (t = K(this, new A(e, t))) || 0 === t;
          }, n.isInteger = function () {
            return !!this.c && H(this.e / V) > this.c.length - 2;
          }, n.isLessThan = n.lt = function (e, t) {
            return K(this, new A(e, t)) < 0;
          }, n.isLessThanOrEqualTo = n.lte = function (e, t) {
            return -1 === (t = K(this, new A(e, t))) || 0 === t;
          }, n.isNaN = function () {
            return !this.s;
          }, n.isNegative = function () {
            return this.s < 0;
          }, n.isPositive = function () {
            return 0 < this.s;
          }, n.isZero = function () {
            return !!this.c && 0 == this.c[0];
          }, n.minus = function (e, t) {
            var r,
                n,
                i,
                a,
                o = this,
                u = o.s;
            if (t = (e = new A(e, t)).s, !u || !t) return new A(NaN);
            if (u != t) return e.s = -t, o.plus(e);
            var c = o.e / V,
                s = e.e / V,
                l = o.c,
                f = e.c;

            if (!c || !s) {
              if (!l || !f) return l ? (e.s = -t, e) : new A(f ? o : NaN);
              if (!l[0] || !f[0]) return f[0] ? (e.s = -t, e) : new A(l[0] ? o : 3 == b ? -0 : 0);
            }

            if (c = H(c), s = H(s), l = l.slice(), u = c - s) {
              for ((i = (a = u < 0) ? (u = -u, l) : (s = c, f)).reverse(), t = u; t--; i.push(0));

              i.reverse();
            } else for (n = (a = (u = l.length) < (t = f.length)) ? u : t, u = t = 0; t < n; t++) if (l[t] != f[t]) {
              a = l[t] < f[t];
              break;
            }

            if (a && (i = l, l = f, f = i, e.s = -e.s), 0 < (t = (n = f.length) - (r = l.length))) for (; t--; l[r++] = 0);

            for (t = G - 1; u < n;) {
              if (l[--n] < f[n]) {
                for (r = n; r && !l[--r]; l[r] = t);

                --l[r], l[n] += G;
              }

              l[n] -= f[n];
            }

            for (; 0 == l[0]; l.splice(0, 1), --s);

            return l[0] ? L(e, l, s) : (e.s = 3 == b ? -1 : 1, e.c = [e.e = 0], e);
          }, n.modulo = n.mod = function (e, t) {
            var r,
                n,
                i = this;
            return e = new A(e, t), !i.c || !e.s || e.c && !e.c[0] ? new A(NaN) : !e.c || i.c && !i.c[0] ? new A(i) : (9 == a ? (n = e.s, e.s = 1, r = v(i, e, 0, 3), e.s = n, r.s *= n) : r = v(i, e, 0, a), (e = i.minus(r.times(e))).c[0] || 1 != a || (e.s = i.s), e);
          }, n.multipliedBy = n.times = function (e, t) {
            var r,
                n,
                i,
                a,
                o,
                u,
                c,
                s,
                l,
                f,
                p,
                g,
                d,
                h,
                v,
                m = this,
                y = m.c,
                b = (e = new A(e, t)).c;
            if (!(y && b && y[0] && b[0])) return !m.s || !e.s || y && !y[0] && !b || b && !b[0] && !y ? e.c = e.e = e.s = null : (e.s *= m.s, y && b ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;

            for (n = H(m.e / V) + H(e.e / V), e.s *= m.s, (c = y.length) < (f = b.length) && (d = y, y = b, b = d, i = c, c = f, f = i), i = c + f, d = []; i--; d.push(0));

            for (h = G, v = z, i = f; 0 <= --i;) {
              for (r = 0, p = b[i] % v, g = b[i] / v | 0, a = i + (o = c); i < a;) r = ((s = p * (s = y[--o] % v) + (u = g * s + (l = y[o] / v | 0) * p) % v * v + d[a] + r) / h | 0) + (u / v | 0) + g * l, d[a--] = s % h;

              d[a] = r;
            }

            return r ? ++n : d.splice(0, 1), L(e, d, n);
          }, n.negated = function () {
            var e = new A(this);
            return e.s = -e.s || null, e;
          }, n.plus = function (e, t) {
            var r,
                n = this,
                i = n.s;
            if (t = (e = new A(e, t)).s, !i || !t) return new A(NaN);
            if (i != t) return e.s = -t, n.minus(e);
            var a = n.e / V,
                o = e.e / V,
                u = n.c,
                c = e.c;

            if (!a || !o) {
              if (!u || !c) return new A(i / 0);
              if (!u[0] || !c[0]) return c[0] ? e : new A(u[0] ? n : 0 * i);
            }

            if (a = H(a), o = H(o), u = u.slice(), i = a - o) {
              for ((r = 0 < i ? (o = a, c) : (i = -i, u)).reverse(); i--; r.push(0));

              r.reverse();
            }

            for ((i = u.length) - (t = c.length) < 0 && (r = c, c = u, u = r, t = i), i = 0; t;) i = (u[--t] = u[t] + c[t] + i) / G | 0, u[t] = G === u[t] ? 0 : u[t] % G;

            return i && (u = [i].concat(u), ++o), L(e, u, o);
          }, n.precision = n.sd = function (e, t) {
            var r, n, i;
            if (null != e && e !== !!e) return J(e, 1, W), null == t ? t = b : J(t, 0, 8), j(new A(this), e, t);
            if (!(r = this.c)) return null;

            if (n = (i = r.length - 1) * V + 1, i = r[i]) {
              for (; i % 10 == 0; i /= 10, n--);

              for (i = r[0]; 10 <= i; i /= 10, n++);
            }

            return e && this.e + 1 > n && (n = this.e + 1), n;
          }, n.shiftedBy = function (e) {
            return J(e, -q, q), this.times("1e" + e);
          }, n.squareRoot = n.sqrt = function () {
            var e,
                t,
                r,
                n,
                i,
                a = this,
                o = a.c,
                u = a.s,
                c = a.e,
                s = y + 4,
                l = new A("0.5");
            if (1 !== u || !o || !o[0]) return new A(!u || u < 0 && (!o || o[0]) ? NaN : o ? a : 1 / 0);
            if ((r = 0 == (u = Math.sqrt(+P(a))) || u == 1 / 0 ? (((t = Y(o)).length + c) % 2 == 0 && (t += "0"), u = Math.sqrt(+t), c = H((c + 1) / 2) - (c < 0 || c % 2), new A(t = u == 1 / 0 ? "1e" + c : (t = u.toExponential()).slice(0, t.indexOf("e") + 1) + c)) : new A(u + "")).c[0]) for ((u = (c = r.e) + s) < 3 && (u = 0);;) if (i = r, r = l.times(i.plus(v(a, i, s, 1))), Y(i.c).slice(0, u) === (t = Y(r.c)).slice(0, u)) {
              if (r.e < c && --u, "9999" != (t = t.slice(u - 3, u + 1)) && (n || "4999" != t)) {
                +t && (+t.slice(1) || "5" != t.charAt(0)) || (j(r, r.e + y + 2, 1), e = !r.times(r).eq(a));
                break;
              }

              if (!n && (j(i, i.e + y + 2, 0), i.times(i).eq(a))) {
                r = i;
                break;
              }

              s += 4, u += 4, n = 1;
            }
            return j(r, r.e + y + 1, b, e);
          }, n.toExponential = function (e, t) {
            return null != e && (J(e, 0, W), e++), i(this, e, t, 1);
          }, n.toFixed = function (e, t) {
            return null != e && (J(e, 0, W), e = e + this.e + 1), i(this, e, t);
          }, n.toFormat = function (e, t, r) {
            var n;
            if (null == r) null != e && t && "object" == typeof t ? (r = t, t = null) : e && "object" == typeof e ? (r = e, e = t = null) : r = B;else if ("object" != typeof r) throw Error(I + "Argument not an object: " + r);

            if (n = this.toFixed(e, t), this.c) {
              var i,
                  a = n.split("."),
                  o = +r.groupSize,
                  u = +r.secondaryGroupSize,
                  c = r.groupSeparator || "",
                  s = a[0],
                  l = a[1],
                  f = this.s < 0,
                  p = f ? s.slice(1) : s,
                  g = p.length;

              if (u && (i = o, o = u, g -= u = i), 0 < o && 0 < g) {
                for (i = g % o || o, s = p.substr(0, i); i < g; i += o) s += c + p.substr(i, o);

                0 < u && (s += c + p.slice(i)), f && (s = "-" + s);
              }

              n = l ? s + (r.decimalSeparator || "") + ((u = +r.fractionGroupSize) ? l.replace(new RegExp("\\d{" + u + "}\\B", "g"), "$&" + (r.fractionGroupSeparator || "")) : l) : s;
            }

            return (r.prefix || "") + n + (r.suffix || "");
          }, n.toFraction = function (e) {
            var t,
                r,
                n,
                i,
                a,
                o,
                u,
                c,
                s,
                l,
                f,
                p,
                g = this,
                d = g.c;
            if (null != e && (!(u = new A(e)).isInteger() && (u.c || 1 !== u.s) || u.lt(h))) throw Error(I + "Argument " + (u.isInteger() ? "out of range: " : "not an integer: ") + P(u));
            if (!d) return new A(g);

            for (t = new A(h), s = r = new A(h), n = c = new A(h), p = Y(d), a = t.e = p.length - g.e - 1, t.c[0] = Z[(o = a % V) < 0 ? V + o : o], e = !e || 0 < u.comparedTo(t) ? 0 < a ? t : s : u, o = O, O = 1 / 0, u = new A(p), c.c[0] = 0; l = v(u, t, 0, 1), 1 != (i = r.plus(l.times(n))).comparedTo(e);) r = n, n = i, s = c.plus(l.times(i = s)), c = i, t = u.minus(l.times(i = t)), u = i;

            return i = v(e.minus(r), n, 0, 1), c = c.plus(i.times(s)), r = r.plus(i.times(n)), c.s = s.s = g.s, f = v(s, n, a *= 2, b).minus(g).abs().comparedTo(v(c, r, a, b).minus(g).abs()) < 1 ? [s, n] : [c, r], O = o, f;
          }, n.toNumber = function () {
            return +P(this);
          }, n.toPrecision = function (e, t) {
            return null != e && J(e, 1, W), i(this, e, t, 2);
          }, n.toString = function (e) {
            var t,
                r = this,
                n = r.s,
                i = r.e;
            return null === i ? n ? (t = "Infinity", n < 0 && (t = "-" + t)) : t = "NaN" : (t = null == e ? i <= d || w <= i ? Q(Y(r.c), i) : ee(Y(r.c), i, "0") : 10 === e ? ee(Y((r = j(new A(r), y + i + 1, b)).c), r.e, "0") : (J(e, 2, M.length, "Base"), f(ee(Y(r.c), i, "0"), 10, e, n, !0)), n < 0 && r.c[0] && (t = "-" + t)), t;
          }, n.valueOf = n.toJSON = function () {
            return P(this);
          }, n._isBigNumber = !0, C && (n[Symbol.toStringTag] = "BigNumber", n[Symbol.for("nodejs.util.inspect.custom")] = n.valueOf), null != t && A.set(t), A;
        }()).default = t.BigNumber = t, void 0 !== r && r.exports ? r.exports = t : (e = e || ("undefined" != typeof self && self ? self : window)).BigNumber = t;
      }(this);
    }, {}],
    2: [function (e, t, r) {

      t.exports = {
        languageTag: "en-US",
        delimiters: {
          thousands: ",",
          decimal: "."
        },
        abbreviations: {
          thousand: "k",
          million: "m",
          billion: "b",
          trillion: "t"
        },
        spaceSeparated: !1,
        ordinal: function (e) {
          var t = e % 10;
          return 1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th";
        },
        bytes: {
          binarySuffixes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"],
          decimalSuffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
        },
        currency: {
          symbol: "$",
          position: "prefix",
          code: "USD"
        },
        currencyFormat: {
          thousandSeparated: !0,
          totalLength: 4,
          spaceSeparated: !0,
          spaceSeparatedCurrency: !0
        },
        formats: {
          fourDigits: {
            totalLength: 4,
            spaceSeparated: !0
          },
          fullWithTwoDecimals: {
            output: "currency",
            thousandSeparated: !0,
            mantissa: 2
          },
          fullWithTwoDecimalsNoCurrency: {
            thousandSeparated: !0,
            mantissa: 2
          },
          fullWithNoDecimals: {
            output: "currency",
            thousandSeparated: !0,
            mantissa: 0
          }
        }
      };
    }, {}],
    3: [function (e, t, r) {

      function I(e, t) {
        return function (e) {
          if (Array.isArray(e)) return e;
        }(e) || function (e, t) {
          if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
          var r = [],
              n = !0,
              i = !1,
              a = void 0;

          try {
            for (var o, u = e[Symbol.iterator](); !(n = (o = u.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
          } catch (e) {
            i = !0, a = e;
          } finally {
            try {
              n || null == u.return || u.return();
            } finally {
              if (i) throw a;
            }
          }

          return r;
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
      }

      var $ = e("./globalState"),
          o = e("./validating"),
          u = e("./parsing"),
          G = {
        trillion: Math.pow(10, 12),
        billion: Math.pow(10, 9),
        million: Math.pow(10, 6),
        thousand: Math.pow(10, 3)
      },
          V = {
        totalLength: 0,
        characteristic: 0,
        forceAverage: !1,
        average: !1,
        mantissa: -1,
        optionalMantissa: !0,
        thousandSeparated: !1,
        spaceSeparated: !1,
        negative: "sign",
        forceSign: !1,
        roundingFunction: Math.round,
        spaceSeparatedAbbreviation: !1
      },
          n = $.currentBytes(),
          d = n.binarySuffixes,
          h = n.decimalSuffixes,
          i = {
        general: {
          scale: 1024,
          suffixes: h,
          marker: "bd"
        },
        binary: {
          scale: 1024,
          suffixes: d,
          marker: "b"
        },
        decimal: {
          scale: 1e3,
          suffixes: h,
          marker: "d"
        }
      };

      function a(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            r = 2 < arguments.length ? arguments[2] : void 0;
        if ("string" == typeof t && (t = u.parseFormat(t)), !o.validateFormat(t)) return "ERROR: invalid format";

        var n = t.prefix || "",
            i = t.postfix || "",
            a = function (e, t, r) {
          switch (t.output) {
            case "currency":
              return t = c(t, $.currentCurrencyDefaultFormat()), function (e, t, r) {
                var n = r.currentCurrency(),
                    i = Object.assign({}, V, t),
                    a = void 0,
                    o = "",
                    u = !!i.totalLength || !!i.forceAverage || i.average,
                    c = t.currencyPosition || n.position,
                    s = t.currencySymbol || n.symbol,
                    l = void 0 !== i.spaceSeparatedCurrency ? i.spaceSeparatedCurrency : i.spaceSeparated;
                void 0 === t.lowPrecision && (t.lowPrecision = !1);
                l && (o = " ");
                "infix" === c && (a = o + s + o);
                var f = m({
                  instance: e,
                  providedFormat: t,
                  state: r,
                  decimalSeparator: a
                });
                "prefix" === c && (f = e._value < 0 && "sign" === i.negative ? "-".concat(o).concat(s).concat(f.slice(1)) : 0 < e._value && i.forceSign ? "+".concat(o).concat(s).concat(f.slice(1)) : s + o + f);
                c && "postfix" !== c || (o = !i.spaceSeparatedAbbreviation && u ? "" : o, f = f + o + s);
                return f;
              }(e, t, $);

            case "percent":
              return t = c(t, $.currentPercentageDefaultFormat()), function (e, t, r, n) {
                var i = t.prefixSymbol,
                    a = m({
                  instance: n(100 * e._value),
                  providedFormat: t,
                  state: r
                }),
                    o = Object.assign({}, V, t);
                if (i) return "%".concat(o.spaceSeparated ? " " : "").concat(a);
                return "".concat(a).concat(o.spaceSeparated ? " " : "", "%");
              }(e, t, $, r);

            case "byte":
              return t = c(t, $.currentByteDefaultFormat()), function (e, t, r, n) {
                var i = t.base || "binary",
                    a = Object.assign({}, V, t),
                    o = r.currentBytes(),
                    u = o.binarySuffixes,
                    c = o.decimalSuffixes,
                    s = {
                  general: {
                    scale: 1024,
                    suffixes: c || h,
                    marker: "bd"
                  },
                  binary: {
                    scale: 1024,
                    suffixes: u || d,
                    marker: "b"
                  },
                  decimal: {
                    scale: 1e3,
                    suffixes: c || h,
                    marker: "d"
                  }
                }[i],
                    l = v(e._value, s.suffixes, s.scale),
                    f = l.value,
                    p = l.suffix,
                    g = m({
                  instance: n(f),
                  providedFormat: t,
                  state: r,
                  defaults: r.currentByteDefaultFormat()
                });
                return "".concat(g).concat(a.spaceSeparated ? " " : "").concat(p);
              }(e, t, $, r);

            case "time":
              return t = c(t, $.currentTimeDefaultFormat()), function (e) {
                var t = Math.floor(e._value / 60 / 60),
                    r = Math.floor((e._value - 60 * t * 60) / 60),
                    n = Math.round(e._value - 60 * t * 60 - 60 * r);
                return "".concat(t, ":").concat(r < 10 ? "0" : "").concat(r, ":").concat(n < 10 ? "0" : "").concat(n);
              }(e);

            case "ordinal":
              return t = c(t, $.currentOrdinalDefaultFormat()), function (e, t, r) {
                var n = r.currentOrdinal(),
                    i = Object.assign({}, V, t),
                    a = m({
                  instance: e,
                  providedFormat: t,
                  state: r
                }),
                    o = n(e._value);
                return "".concat(a).concat(i.spaceSeparated ? " " : "").concat(o);
              }(e, t, $);

            case "number":
            default:
              return m({
                instance: e,
                providedFormat: t,
                numbro: r
              });
          }
        }(e, t, r);

        return a = (a = n + a) + i;
      }

      function v(e, t, r) {
        var n = t[0],
            i = Math.abs(e);

        if (r <= i) {
          for (var a = 1; a < t.length; ++a) {
            var o = Math.pow(r, a),
                u = Math.pow(r, a + 1);

            if (o <= i && i < u) {
              n = t[a], e /= o;
              break;
            }
          }

          n === t[0] && (e /= Math.pow(r, t.length - 1), n = t[t.length - 1]);
        }

        return {
          value: e,
          suffix: n
        };
      }

      function p(e) {
        for (var t = "", r = 0; r < e; r++) t += "0";

        return t;
      }

      function q(e, t, r) {
        var n = 2 < arguments.length && void 0 !== r ? r : Math.round;
        return -1 !== e.toString().indexOf("e") ? function (e, t) {
          var r = e.toString(),
              n = I(r.split("e"), 2),
              i = n[0],
              a = n[1],
              o = I(i.split("."), 2),
              u = o[0],
              c = o[1],
              s = void 0 === c ? "" : c;
          if (0 < +a) r = u + s + p(a - s.length);else {
            var l = ".";
            l = +u < 0 ? "-0".concat(l) : "0".concat(l);
            var f = (p(-a - 1) + Math.abs(u) + s).substr(0, t);
            f.length < t && (f += p(t - f.length)), r = l + f;
          }
          return 0 < +a && 0 < t && (r += ".".concat(p(t))), r;
        }(e, t) : (n(+"".concat(e, "e+").concat(t)) / Math.pow(10, t)).toFixed(t);
      }

      function Z(e, t, r, n, i) {
        var a = n.currentDelimiters(),
            o = a.thousands;
        i = i || a.decimal;
        var u = a.thousandsSize || 3,
            c = e.toString(),
            s = c.split(".")[0],
            l = c.split(".")[1],
            f = t < 0 && 0 === s.indexOf("-");
        r && (f && (s = s.slice(1)), function (e, t) {
          for (var r = [], n = 0, i = e; 0 < i; i--) n === t && (r.unshift(i), n = 0), n++;

          return r;
        }(s.length, u).forEach(function (e, t) {
          s = s.slice(0, e + t) + o + s.slice(e + t);
        }), f && (s = "-".concat(s)));
        return c = l ? s + i + l : s;
      }

      function m(e) {
        var t = e.instance,
            r = e.providedFormat,
            n = e.state,
            i = void 0 === n ? $ : n,
            a = e.decimalSeparator,
            o = e.defaults,
            u = void 0 === o ? i.currentDefaults() : o,
            c = t._value;
        if (0 === c && i.hasZeroFormat()) return i.getZeroFormat();
        if (!isFinite(c)) return c.toString();
        var s,
            l,
            f,
            p,
            g,
            d,
            h,
            v,
            m = Object.assign({}, V, u, r),
            y = m.totalLength,
            b = y ? 0 : m.characteristic,
            w = m.optionalCharacteristic,
            S = m.forceAverage,
            O = m.lowPrecision,
            x = !!y || !!S || m.average,
            N = y ? -1 : x && void 0 === r.mantissa ? 0 : m.mantissa,
            B = !y && (void 0 === r.optionalMantissa ? -1 === N : m.optionalMantissa),
            M = m.trimMantissa,
            A = m.thousandSeparated,
            D = m.spaceSeparated,
            F = m.negative,
            k = m.forceSign,
            E = m.exponential,
            _ = m.roundingFunction,
            L = "";

        if (x) {
          var j = function (e) {
            var t = e.value,
                r = e.forceAverage,
                n = e.lowPrecision,
                i = void 0 === n || n,
                a = e.abbreviations,
                o = e.spaceSeparated,
                u = void 0 !== o && o,
                c = e.totalLength,
                s = void 0 === c ? 0 : c,
                l = e.roundingFunction,
                f = void 0 === l ? Math.round : l,
                p = "",
                g = Math.abs(t),
                d = -1;

            if (r && a[r] && G[r] ? (p = a[r], t /= G[r]) : g >= G.trillion || i && 1 === f(g / G.trillion) ? (p = a.trillion, t /= G.trillion) : g < G.trillion && g >= G.billion || i && 1 === f(g / G.billion) ? (p = a.billion, t /= G.billion) : g < G.billion && g >= G.million || i && 1 === f(g / G.million) ? (p = a.million, t /= G.million) : (g < G.million && g >= G.thousand || i && 1 === f(g / G.thousand)) && (p = a.thousand, t /= G.thousand), p = p && (u ? " " : "") + p, s) {
              var h = t < 0,
                  v = t.toString().split(".")[0],
                  m = h ? v.length - 1 : v.length;
              d = Math.max(s - m, 0);
            }

            return {
              value: t,
              abbreviation: p,
              mantissaPrecision: d
            };
          }({
            value: c,
            forceAverage: S,
            lowPrecision: O,
            abbreviations: i.currentAbbreviations(),
            spaceSeparated: D,
            roundingFunction: _,
            totalLength: y
          });

          c = j.value, L += j.abbreviation, y && (N = j.mantissaPrecision);
        }

        if (E) {
          var P = (l = (s = {
            value: c,
            characteristicPrecision: b
          }).value, f = s.characteristicPrecision, p = void 0 === f ? 0 : f, g = I(l.toExponential().split("e"), 2), d = g[0], h = g[1], v = +d, p && 1 < p && (v *= Math.pow(10, p - 1), h = 0 <= (h -= p - 1) ? "+".concat(h) : h), {
            value: v,
            abbreviation: "e".concat(h)
          });
          c = P.value, L = P.abbreviation + L;
        }

        var T,
            C,
            U,
            R = function (e, t, r, n, i, a) {
          if (-1 === n) return e;
          var o = q(t, n, a),
              u = I(o.toString().split("."), 2),
              c = u[0],
              s = u[1],
              l = void 0 === s ? "" : s;
          if (l.match(/^0+$/) && (r || i)) return c;
          var f = l.match(/0+$/);
          return i && f ? "".concat(c, ".").concat(l.toString().slice(0, f.index)) : o.toString();
        }(c.toString(), c, B, N, M, _);

        return R = Z(R = function (e, t, r, n) {
          var i = e,
              a = I(i.toString().split("."), 2),
              o = a[0],
              u = a[1];
          if (o.match(/^-?0$/) && r) return u ? "".concat(o.replace("0", ""), ".").concat(u) : o.replace("0", "");
          var c = t < 0 && 0 === o.indexOf("-");
          if (c && (o = o.slice(1), i = i.slice(1)), o.length < n) for (var s = n - o.length, l = 0; l < s; l++) i = "0".concat(i);
          return c && (i = "-".concat(i)), i.toString();
        }(R, c, w, b), c, A, i, a), (x || E) && (R = R + L), (k || c < 0) && (T = R, U = F, R = 0 === (C = c) ? T : 0 == +T ? T.replace("-", "") : 0 < C ? "+".concat(T) : "sign" === U ? T : "(".concat(T.replace("-", ""), ")")), R;
      }

      function c(e, t) {
        if (!e) return t;
        var r = Object.keys(e);
        return 1 === r.length && "output" === r[0] ? t : e;
      }

      t.exports = function (n) {
        return {
          format: function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

            return a.apply(void 0, t.concat([n]));
          },
          getByteUnit: function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

            return function (e) {
              var t = i.general;
              return v(e._value, t.suffixes, t.scale).suffix;
            }.apply(void 0, t.concat([n]));
          },
          getBinaryByteUnit: function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

            return function (e) {
              var t = i.binary;
              return v(e._value, t.suffixes, t.scale).suffix;
            }.apply(void 0, t.concat([n]));
          },
          getDecimalByteUnit: function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

            return function (e) {
              var t = i.decimal;
              return v(e._value, t.suffixes, t.scale).suffix;
            }.apply(void 0, t.concat([n]));
          },
          formatOrDefault: c
        };
      };
    }, {
      "./globalState": 4,
      "./parsing": 8,
      "./validating": 10
    }],
    4: [function (e, t, r) {

      var i = e("./en-US"),
          n = e("./validating"),
          a = e("./parsing"),
          o = {},
          u = void 0,
          c = {},
          s = null,
          l = {};

      function f(e) {
        u = e;
      }

      function p() {
        return c[u];
      }

      o.languages = function () {
        return Object.assign({}, c);
      }, o.currentLanguage = function () {
        return u;
      }, o.currentBytes = function () {
        return p().bytes || {};
      }, o.currentCurrency = function () {
        return p().currency;
      }, o.currentAbbreviations = function () {
        return p().abbreviations;
      }, o.currentDelimiters = function () {
        return p().delimiters;
      }, o.currentOrdinal = function () {
        return p().ordinal;
      }, o.currentDefaults = function () {
        return Object.assign({}, p().defaults, l);
      }, o.currentOrdinalDefaultFormat = function () {
        return Object.assign({}, o.currentDefaults(), p().ordinalFormat);
      }, o.currentByteDefaultFormat = function () {
        return Object.assign({}, o.currentDefaults(), p().byteFormat);
      }, o.currentPercentageDefaultFormat = function () {
        return Object.assign({}, o.currentDefaults(), p().percentageFormat);
      }, o.currentCurrencyDefaultFormat = function () {
        return Object.assign({}, o.currentDefaults(), p().currencyFormat);
      }, o.currentTimeDefaultFormat = function () {
        return Object.assign({}, o.currentDefaults(), p().timeFormat);
      }, o.setDefaults = function (e) {
        e = a.parseFormat(e), n.validateFormat(e) && (l = e);
      }, o.getZeroFormat = function () {
        return s;
      }, o.setZeroFormat = function (e) {
        return s = "string" == typeof e ? e : null;
      }, o.hasZeroFormat = function () {
        return null !== s;
      }, o.languageData = function (e) {
        if (e) {
          if (c[e]) return c[e];
          throw new Error('Unknown tag "'.concat(e, '"'));
        }

        return p();
      }, o.registerLanguage = function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
        if (!n.validateLanguage(e)) throw new Error("Invalid language data");
        c[e.languageTag] = e, t && f(e.languageTag);
      }, o.setLanguage = function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : i.languageTag;

        if (!c[e]) {
          var r = e.split("-")[0],
              n = Object.keys(c).find(function (e) {
            return e.split("-")[0] === r;
          });
          return c[n] ? void f(n) : void f(t);
        }

        f(e);
      }, o.registerLanguage(i), u = i.languageTag, t.exports = o;
    }, {
      "./en-US": 2,
      "./parsing": 8,
      "./validating": 10
    }],
    5: [function (n, e, t) {

      e.exports = function (t) {
        return {
          loadLanguagesInNode: function (e) {
            return r = t, void e.forEach(function (t) {
              var e = void 0;

              try {
                e = n("../languages/".concat(t));
              } catch (e) {
                console.error('Unable to load "'.concat(t, '". No matching language file found.'));
              }

              e && r.registerLanguage(e);
            });
            var r;
          }
        };
      };
    }, {}],
    6: [function (e, t, r) {

      var c = e("bignumber.js");

      function a(e, t, r) {
        var n = new c(e._value),
            i = t;
        return r.isNumbro(t) && (i = t._value), i = new c(i), e._value = n.minus(i).toNumber(), e;
      }

      t.exports = function (u) {
        return {
          add: function (e, t) {
            return n = t, i = u, a = new c((r = e)._value), o = n, i.isNumbro(n) && (o = n._value), o = new c(o), r._value = a.plus(o).toNumber(), r;
            var r, n, i, a, o;
          },
          subtract: function (e, t) {
            return a(e, t, u);
          },
          multiply: function (e, t) {
            return n = t, i = u, a = new c((r = e)._value), o = n, i.isNumbro(n) && (o = n._value), o = new c(o), r._value = a.times(o).toNumber(), r;
            var r, n, i, a, o;
          },
          divide: function (e, t) {
            return n = t, i = u, a = new c((r = e)._value), o = n, i.isNumbro(n) && (o = n._value), o = new c(o), r._value = a.dividedBy(o).toNumber(), r;
            var r, n, i, a, o;
          },
          set: function (e, t) {
            return r = e, i = n = t, u.isNumbro(n) && (i = n._value), r._value = i, r;
            var r, n, i;
          },
          difference: function (e, t) {
            return r = t, a(i = (n = u)(e._value), r, n), Math.abs(i._value);
            var r, n, i;
          },
          BigNumber: c
        };
      };
    }, {
      "bignumber.js": 1
    }],
    7: [function (e, t, r) {

      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }

      var a = e("./globalState"),
          n = e("./validating"),
          o = e("./loading")(g),
          u = e("./unformatting"),
          c = e("./formatting")(g),
          s = e("./manipulating")(g),
          l = e("./parsing"),
          f = function () {
        function t(e) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this._value = e;
        }

        var e, r;
        return e = t, (r = [{
          key: "clone",
          value: function () {
            return g(this._value);
          }
        }, {
          key: "format",
          value: function (e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {};
            return c.format(this, t);
          }
        }, {
          key: "formatCurrency",
          value: function (e) {
            return "string" == typeof e && (e = l.parseFormat(e)), (e = c.formatOrDefault(e, a.currentCurrencyDefaultFormat())).output = "currency", c.format(this, e);
          }
        }, {
          key: "formatTime",
          value: function (e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {};
            return t.output = "time", c.format(this, t);
          }
        }, {
          key: "binaryByteUnits",
          value: function () {
            return c.getBinaryByteUnit(this);
          }
        }, {
          key: "decimalByteUnits",
          value: function () {
            return c.getDecimalByteUnit(this);
          }
        }, {
          key: "byteUnits",
          value: function () {
            return c.getByteUnit(this);
          }
        }, {
          key: "difference",
          value: function (e) {
            return s.difference(this, e);
          }
        }, {
          key: "add",
          value: function (e) {
            return s.add(this, e);
          }
        }, {
          key: "subtract",
          value: function (e) {
            return s.subtract(this, e);
          }
        }, {
          key: "multiply",
          value: function (e) {
            return s.multiply(this, e);
          }
        }, {
          key: "divide",
          value: function (e) {
            return s.divide(this, e);
          }
        }, {
          key: "set",
          value: function (e) {
            return s.set(this, p(e));
          }
        }, {
          key: "value",
          value: function () {
            return this._value;
          }
        }, {
          key: "valueOf",
          value: function () {
            return this._value;
          }
        }]) && i(e.prototype, r), t;
      }();

      function p(e) {
        var t = e;
        return g.isNumbro(e) ? t = e._value : "string" == typeof e ? t = g.unformat(e) : isNaN(e) && (t = NaN), t;
      }

      function g(e) {
        return new f(p(e));
      }

      g.version = "2.3.2", g.isNumbro = function (e) {
        return e instanceof f;
      }, g.language = a.currentLanguage, g.registerLanguage = a.registerLanguage, g.setLanguage = a.setLanguage, g.languages = a.languages, g.languageData = a.languageData, g.zeroFormat = a.setZeroFormat, g.defaultFormat = a.currentDefaults, g.setDefaults = a.setDefaults, g.defaultCurrencyFormat = a.currentCurrencyDefaultFormat, g.validate = n.validate, g.loadLanguagesInNode = o.loadLanguagesInNode, g.unformat = u.unformat, g.BigNumber = s.BigNumber, t.exports = g;
    }, {
      "./formatting": 3,
      "./globalState": 4,
      "./loading": 5,
      "./manipulating": 6,
      "./parsing": 8,
      "./unformatting": 9,
      "./validating": 10
    }],
    8: [function (e, t, r) {

      t.exports = {
        parseFormat: function (e) {
          var t,
              r,
              n,
              i,
              a,
              o,
              u,
              c,
              s,
              l,
              f,
              p,
              g,
              d,
              h,
              v,
              m,
              y,
              b,
              w,
              S,
              O,
              x = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          return "string" != typeof e ? e : (r = x, e = (n = (t = e).match(/^{([^}]*)}/)) ? (r.prefix = n[1], t.slice(n[0].length)) : t, a = x, function (e, t) {
            if (-1 === e.indexOf("$")) {
              if (-1 === e.indexOf("%")) return -1 !== e.indexOf("bd") ? (t.output = "byte", t.base = "general") : -1 !== e.indexOf("b") ? (t.output = "byte", t.base = "binary") : -1 !== e.indexOf("d") ? (t.output = "byte", t.base = "decimal") : -1 === e.indexOf(":") ? -1 !== e.indexOf("o") && (t.output = "ordinal") : t.output = "time";
              t.output = "percent";
            } else t.output = "currency";
          }(e = (o = (i = e).match(/{([^}]*)}$/)) ? (a.postfix = o[1], i.slice(0, -o[0].length)) : i, x), u = x, (c = e.match(/[1-9]+[0-9]*/)) && (u.totalLength = +c[0]), s = x, (l = e.split(".")[0].match(/0+/)) && (s.characteristic = l[0].length), function (e, t) {
            if (-1 !== e.indexOf(".")) {
              var r = e.split(".")[0];
              t.optionalCharacteristic = -1 === r.indexOf("0");
            }
          }(e, x), f = x, -1 !== e.indexOf("a") && (f.average = !0), g = x, -1 !== (p = e).indexOf("K") ? g.forceAverage = "thousand" : -1 !== p.indexOf("M") ? g.forceAverage = "million" : -1 !== p.indexOf("B") ? g.forceAverage = "billion" : -1 !== p.indexOf("T") && (g.forceAverage = "trillion"), function (e, t) {
            var r = e.split(".")[1];

            if (r) {
              var n = r.match(/0+/);
              n && (t.mantissa = n[0].length);
            }
          }(e, x), h = x, (d = e).match(/\[\.]/) ? h.optionalMantissa = !0 : d.match(/\./) && (h.optionalMantissa = !1), v = x, (m = e.split(".")[1]) && (v.trimMantissa = -1 !== m.indexOf("[")), y = x, -1 !== e.indexOf(",") && (y.thousandSeparated = !0), b = x, -1 !== e.indexOf(" ") && (b.spaceSeparated = !0, b.spaceSeparatedCurrency = !0, (b.average || b.forceAverage) && (b.spaceSeparatedAbbreviation = !0)), S = x, (w = e).match(/^\+?\([^)]*\)$/) && (S.negative = "parenthesis"), w.match(/^\+?-/) && (S.negative = "sign"), O = x, e.match(/^\+/) && (O.forceSign = !0), x);
        }
      };
    }, {}],
    9: [function (p, e, t) {

      var M = [{
        key: "ZiB",
        factor: Math.pow(1024, 7)
      }, {
        key: "ZB",
        factor: Math.pow(1e3, 7)
      }, {
        key: "YiB",
        factor: Math.pow(1024, 8)
      }, {
        key: "YB",
        factor: Math.pow(1e3, 8)
      }, {
        key: "TiB",
        factor: Math.pow(1024, 4)
      }, {
        key: "TB",
        factor: Math.pow(1e3, 4)
      }, {
        key: "PiB",
        factor: Math.pow(1024, 5)
      }, {
        key: "PB",
        factor: Math.pow(1e3, 5)
      }, {
        key: "MiB",
        factor: Math.pow(1024, 2)
      }, {
        key: "MB",
        factor: Math.pow(1e3, 2)
      }, {
        key: "KiB",
        factor: Math.pow(1024, 1)
      }, {
        key: "KB",
        factor: Math.pow(1e3, 1)
      }, {
        key: "GiB",
        factor: Math.pow(1024, 3)
      }, {
        key: "GB",
        factor: Math.pow(1e3, 3)
      }, {
        key: "EiB",
        factor: Math.pow(1024, 6)
      }, {
        key: "EB",
        factor: Math.pow(1e3, 6)
      }, {
        key: "B",
        factor: 1
      }];

      function A(e) {
        return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
      }

      function g(e, t, r, n, i, a, o) {
        var u = 2 < arguments.length && void 0 !== r ? r : "",
            c = 3 < arguments.length ? n : void 0,
            s = 4 < arguments.length ? i : void 0,
            l = 5 < arguments.length ? a : void 0,
            f = 6 < arguments.length ? o : void 0;
        if ("" !== e) return e === s ? 0 : function e(t, r, n, i, a, o, u) {
          var c = 2 < arguments.length && void 0 !== n ? n : "",
              s = 3 < arguments.length ? i : void 0,
              l = 4 < arguments.length ? a : void 0,
              f = 5 < arguments.length ? o : void 0,
              p = 6 < arguments.length ? u : void 0;
          if (!isNaN(+t)) return +t;
          var g = "",
              d = t.replace(/(^[^(]*)\((.*)\)([^)]*$)/, "$1$2$3");
          if (d !== t) return -1 * e(d, r, c, s, l, f, p);

          for (var h = 0; h < M.length; h++) {
            var v = M[h];
            if ((g = t.replace(v.key, "")) !== t) return e(g, r, c, s, l, f, p) * v.factor;
          }

          if ((g = t.replace("%", "")) !== t) return e(g, r, c, s, l, f, p) / 100;
          var m = parseFloat(t);

          if (!isNaN(m)) {
            var y = s(m);
            if (y && "." !== y && (g = t.replace(new RegExp("".concat(A(y), "$")), "")) !== t) return e(g, r, c, s, l, f, p);
            var b = {};
            Object.keys(f).forEach(function (e) {
              b[f[e]] = e;
            });

            for (var w = Object.keys(b).sort().reverse(), S = w.length, O = 0; O < S; O++) {
              var x = w[O],
                  N = b[x];

              if ((g = t.replace(x, "")) !== t) {
                var B = void 0;

                switch (N) {
                  case "thousand":
                    B = Math.pow(10, 3);
                    break;

                  case "million":
                    B = Math.pow(10, 6);
                    break;

                  case "billion":
                    B = Math.pow(10, 9);
                    break;

                  case "trillion":
                    B = Math.pow(10, 12);
                }

                return e(g, r, c, s, l, f, p) * B;
              }
            }
          }
        }(function (e, t, r) {
          var n = 2 < arguments.length && void 0 !== r ? r : "",
              i = e.replace(n, "");
          return i = (i = i.replace(new RegExp("([0-9])".concat(A(t.thousands), "([0-9])"), "g"), "$1$2")).replace(t.decimal, ".");
        }(e, t, u), t, u, c, s, l, f);
      }

      e.exports = {
        unformat: function (e, t) {
          var r,
              n,
              i,
              a = p("./globalState"),
              o = a.currentDelimiters(),
              u = a.currentCurrency().symbol,
              c = a.currentOrdinal(),
              s = a.getZeroFormat(),
              l = a.currentAbbreviations(),
              f = void 0;
          if ("string" == typeof e) f = function (e, t) {
            if (e.indexOf(":") && ":" !== t.thousands) {
              var r = e.split(":");

              if (3 === r.length) {
                var n = +r[0],
                    i = +r[1],
                    a = +r[2];
                return !isNaN(n) && !isNaN(i) && !isNaN(a);
              }
            }
          }(e, o) ? (r = e.split(":"), n = +r[0], i = +r[1], +r[2] + 60 * i + 3600 * n) : g(e, o, u, c, s, l, t);else {
            if ("number" != typeof e) return;
            f = e;
          }
          if (void 0 !== f) return f;
        }
      };
    }, {
      "./globalState": 4
    }],
    10: [function (e, t, r) {

      function n(e) {
        return function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];

            return r;
          }
        }(e) || function (e) {
          if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        }(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }

      function f(e) {
        return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      var i = e("./unformatting"),
          a = /^[a-z]{2,3}(-[a-zA-Z]{4})?(-([A-Z]{2}|[0-9]{3}))?$/,
          p = {
        output: {
          type: "string",
          validValues: ["currency", "percent", "byte", "time", "ordinal", "number"]
        },
        base: {
          type: "string",
          validValues: ["decimal", "binary", "general"],
          restriction: function (e, t) {
            return "byte" === t.output;
          },
          message: "`base` must be provided only when the output is `byte`",
          mandatory: function (e) {
            return "byte" === e.output;
          }
        },
        characteristic: {
          type: "number",
          restriction: function (e) {
            return 0 <= e;
          },
          message: "value must be positive"
        },
        prefix: "string",
        postfix: "string",
        forceAverage: {
          type: "string",
          validValues: ["trillion", "billion", "million", "thousand"]
        },
        average: "boolean",
        lowPrecision: {
          type: "boolean",
          restriction: function (e, t) {
            return !0 === t.average;
          },
          message: "`lowPrecision` must be provided only when the option `average` is set"
        },
        currencyPosition: {
          type: "string",
          validValues: ["prefix", "infix", "postfix"]
        },
        currencySymbol: "string",
        totalLength: {
          type: "number",
          restrictions: [{
            restriction: function (e) {
              return 0 <= e;
            },
            message: "value must be positive"
          }, {
            restriction: function (e, t) {
              return !t.exponential;
            },
            message: "`totalLength` is incompatible with `exponential`"
          }]
        },
        mantissa: {
          type: "number",
          restriction: function (e) {
            return 0 <= e;
          },
          message: "value must be positive"
        },
        optionalMantissa: "boolean",
        trimMantissa: "boolean",
        roundingFunction: "function",
        optionalCharacteristic: "boolean",
        thousandSeparated: "boolean",
        spaceSeparated: "boolean",
        spaceSeparatedCurrency: "boolean",
        spaceSeparatedAbbreviation: "boolean",
        abbreviations: {
          type: "object",
          children: {
            thousand: "string",
            million: "string",
            billion: "string",
            trillion: "string"
          }
        },
        negative: {
          type: "string",
          validValues: ["sign", "parenthesis"]
        },
        forceSign: "boolean",
        exponential: {
          type: "boolean"
        },
        prefixSymbol: {
          type: "boolean",
          restriction: function (e, t) {
            return "percent" === t.output;
          },
          message: "`prefixSymbol` can be provided only when the output is `percent`"
        }
      },
          o = {
        languageTag: {
          type: "string",
          mandatory: !0,
          restriction: function (e) {
            return e.match(a);
          },
          message: "the language tag must follow the BCP 47 specification (see https://tools.ieft.org/html/bcp47)"
        },
        delimiters: {
          type: "object",
          children: {
            thousands: "string",
            decimal: "string",
            thousandsSize: "number"
          },
          mandatory: !0
        },
        abbreviations: {
          type: "object",
          children: {
            thousand: {
              type: "string",
              mandatory: !0
            },
            million: {
              type: "string",
              mandatory: !0
            },
            billion: {
              type: "string",
              mandatory: !0
            },
            trillion: {
              type: "string",
              mandatory: !0
            }
          },
          mandatory: !0
        },
        spaceSeparated: "boolean",
        spaceSeparatedCurrency: "boolean",
        ordinal: {
          type: "function",
          mandatory: !0
        },
        bytes: {
          type: "object",
          children: {
            binarySuffixes: "object",
            decimalSuffixes: "object"
          }
        },
        currency: {
          type: "object",
          children: {
            symbol: "string",
            position: "string",
            code: "string"
          },
          mandatory: !0
        },
        defaults: "format",
        ordinalFormat: "format",
        byteFormat: "format",
        percentageFormat: "format",
        currencyFormat: "format",
        timeDefaults: "format",
        formats: {
          type: "object",
          children: {
            fourDigits: {
              type: "format",
              mandatory: !0
            },
            fullWithTwoDecimals: {
              type: "format",
              mandatory: !0
            },
            fullWithTwoDecimalsNoCurrency: {
              type: "format",
              mandatory: !0
            },
            fullWithNoDecimals: {
              type: "format",
              mandatory: !0
            }
          }
        }
      };

      function u(e) {
        return void 0 !== i.unformat(e);
      }

      function g(c, s, l, e) {
        var t = 3 < arguments.length && void 0 !== e && e,
            r = Object.keys(c).map(function (e) {
          if (!s[e]) return console.error("".concat(l, " Invalid key: ").concat(e)), !1;
          var t = c[e],
              r = s[e];

          if ("string" == typeof r && (r = {
            type: r
          }), "format" === r.type) {
            if (!g(t, p, "[Validate ".concat(e, "]"), !0)) return !1;
          } else if (f(t) !== r.type) return console.error("".concat(l, " ").concat(e, ' type mismatched: "').concat(r.type, '" expected, "').concat(f(t), '" provided')), !1;

          if (r.restrictions && r.restrictions.length) for (var n = r.restrictions.length, i = 0; i < n; i++) {
            var a = r.restrictions[i],
                o = a.restriction,
                u = a.message;
            if (!o(t, c)) return console.error("".concat(l, " ").concat(e, " invalid value: ").concat(u)), !1;
          }
          if (r.restriction && !r.restriction(t, c)) return console.error("".concat(l, " ").concat(e, " invalid value: ").concat(r.message)), !1;
          if (r.validValues && -1 === r.validValues.indexOf(t)) return console.error("".concat(l, " ").concat(e, " invalid value: must be among ").concat(JSON.stringify(r.validValues), ', "').concat(t, '" provided')), !1;
          if (r.children && !g(t, r.children, "[Validate ".concat(e, "]"))) return !1;
          return !0;
        });
        return t || r.push.apply(r, n(Object.keys(s).map(function (e) {
          var t = s[e];

          if ("string" == typeof t && (t = {
            type: t
          }), t.mandatory) {
            var r = t.mandatory;
            if ("function" == typeof r && (r = r(c)), r && void 0 === c[e]) return console.error("".concat(l, ' Missing mandatory key "').concat(e, '"')), !1;
          }

          return !0;
        }))), r.reduce(function (e, t) {
          return e && t;
        }, !0);
      }

      function c(e) {
        return g(e, p, "[Validate format]");
      }

      t.exports = {
        validate: function (e, t) {
          var r = u(e),
              n = c(t);
          return r && n;
        },
        validateFormat: c,
        validateInput: u,
        validateLanguage: function (e) {
          return g(e, o, "[Validate language]");
        }
      };
    }, {
      "./unformatting": 9
    }]
  }, {}, [7])(7);
});
});

var eventListenerProps = {
  onCopy: 'copy',
  onCut: 'cut',
  onPaste: 'paste',
  onCompositionEnd: 'compositionend',
  onCompositionStart: 'compositionstart',
  onCompositionUpdate: 'compositionupdate',
  onKeyDown: 'keydown',
  onKeyPress: 'keypress',
  onKeyUp: 'keyup',
  onFocus: 'focus',
  onBlur: 'blur',
  onChange: 'change',
  onInput: 'input',
  onSubmit: 'submit',
  onClick: 'click',
  onContextMenu: 'contextmenu',
  onDoubleClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragEnter: 'dragenter',
  onDragExit: 'dragexit',
  onDragLeave: 'dragleave',
  onDragOver: 'dragover',
  onDragStart: 'dragstart',
  onDrop: 'drop',
  onMouseDown: 'mousedown',
  onMouseEnter: 'mouseenter',
  onMouseLeave: 'mouseleave',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onSelect: 'select',
  onTouchCancel: 'touchcancel',
  onTouchEnd: 'touchend',
  onTouchMove: 'touchmove',
  onTouchStart: 'touchstart',
  onScroll: 'scroll',
  onWheel: 'wheel',
  onAbort: 'abort',
  onCanPlay: 'canplay',
  onCanPlayThrough: 'canplaythrough',
  onDurationChange: 'durationchange',
  onEmptied: 'emptied',
  onEncrypted: 'encrypted',
  onEnded: 'ended',
  onError: 'error',
  onLoadedData: 'loadeddata',
  onLoadedMetadata: 'loadedmetadata',
  onLoadStart: 'loadstart',
  onPause: 'pause',
  onPlay: 'play',
  onPlaying: 'playing',
  onProgress: 'progress',
  onRateChange: 'ratechange',
  onSeeked: 'seeked',
  onSeeking: 'seeking',
  onStalled: 'stalled',
  onSuspend: 'suspend',
  onTimeUpdate: 'timeupdate',
  onVolumeChange: 'volumechange',
  onWaiting: 'waiting',
  onLoad: 'load',
  onAnimationStart: 'animationstart',
  onAnimationEnd: 'animationend',
  onAnimationIteration: 'animationiteration',
  onTransitionEnd: 'transitionend'
};

// taken from https://github.com/facebook/react/blob/67f8524e88abbf1ac0fd86d38a0477d11fbc7b3e/src/isomorphic/classic/element/ReactDOMFactories.js#L153
var svgTags = new Set(['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan']);

function dom(tag, props, ...children) {
  let ambiguous = [];

  for (let i = 0; i < children.length;) {
    const child = children[i];

    switch (typeof child) {
      case 'string':
      case 'number':
        children[i] = {
          text: child
        };
        i++;
        break;

      case 'object':
        if (Array.isArray(child)) {
          children.splice(i, 1, ...child);
        } else if (!child) {
          children.splice(i, 1);
        } else {
          if (!child.context) {
            ambiguous.push(child);

            if (child.ambiguous && child.ambiguous.length) {
              ambiguous = ambiguous.concat(child.ambiguous);
            }
          }

          i++;
        }

        break;

      default:
        throw new Error(`Invalid child node: ${child}`);
    }
  }

  if (props) {
    for (const propName in props) {
      const eventName = eventListenerProps[propName];

      if (eventName) {
        if (!props.on) props.on = {};
        props.on[eventName] = props[propName];
      }
    }

    if (props.class) {
      props.className = props.class;
    }
  }

  return {
    tag,
    props,
    children,
    ambiguous
  };
}

const HTML_TAGS = ['a', 'abbr', 'address', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'blockquote', 'body', 'button', 'canvas', 'caption', 'cite', 'code', 'colgroup', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'html', 'i', 'iframe', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'menu', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'u', 'ul', 'var', 'video', 'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

for (const tagName of HTML_TAGS) {
  dom[tagName] = (props, ...children) => {
    return dom(tagName, props, ...children);
  };
}

for (const tagName of svgTags) {
  dom[tagName] = (props, ...children) => {
    return dom(tagName, props, ...children);
  };
}

var dom_1 = dom;

// Based on https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
var svgAttributeTranslations = new Map([['accentHeight', 'accent-height'], ['alignmentBaseline', 'alignment-baseline'], ['arabicForm', 'arabic-form'], ['baselineShift', 'baseline-shift'], ['capHeight', 'cap-height'], ['className', 'class'], ['clipPath', 'clip-path'], ['clipRule', 'clip-rule'], ['colorInterpolation', 'color-interpolation'], ['colorInterpolationFilters', 'color-interpolation-filters'], ['colorProfile', 'color-profile'], ['colorRendering', 'color-rendering'], ['dominantBaseline', 'dominant-baseline'], ['enableBackground', 'enable-background'], ['fillOpacity', 'fill-opacity'], ['fillRule', 'fill-rule'], ['floodColor', 'flood-color'], ['floodOpacity', 'flood-opacity'], ['fontFamily', 'font-family'], ['fontSize', 'font-size'], ['fontSizeAdjust', 'font-size-adjust'], ['fontStretch', 'font-stretch'], ['fontStyle', 'font-style'], ['fontVariant', 'font-variant'], ['fontWeight', 'font-weight'], ['glyphName', 'glyph-name'], ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'], ['glyphOrientationVertical', 'glyph-orientation-vertical'], ['horizAdvX', 'horiz-adv-x'], ['horizOriginX', 'horiz-origin-x'], ['letterSpacing', 'letter-spacing'], ['lightingColor', 'lighting-color'], ['markerEnd', 'marker-end'], ['markerMid', 'marker-mid'], ['markerStart', 'marker-start'], ['overlinePosition', 'overline-position'], ['overlineThickness', 'overline-thickness'], ['panose1', 'panose-1'], ['paintOrder', 'paint-order'], ['pointerEvents', 'pointer-events'], ['renderingIntent', 'rendering-intent'], ['shapeRendering', 'shape-rendering'], ['stopColor', 'stop-color'], ['stopOpacity', 'stop-opacity'], ['strikethroughPosition', 'strikethrough-position'], ['strikethroughThickness', 'strikethrough-thickness'], ['strokeDasharray', 'stroke-dasharray'], ['strokeDashoffset', 'stroke-dashoffset'], ['strokeLinecap', 'stroke-linecap'], ['strokeLinejoin', 'stroke-linejoin'], ['strokeMiterlimit', 'stroke-miterlimit'], ['strokeOpacity', 'stroke-opacity'], ['strokeWidth', 'stroke-width'], ['textAnchor', 'text-anchor'], ['textDecoration', 'text-decoration'], ['textRendering', 'text-rendering'], ['underlinePosition', 'underline-position'], ['underlineThickness', 'underline-thickness'], ['unicodeBidi', 'unicode-bidi'], ['unicodeRange', 'unicode-range'], ['unitsPerEm', 'units-per-em'], ['vAlphabetic', 'v-alphabetic'], ['vHanging', 'v-hanging'], ['vIdeographic', 'v-ideographic'], ['vMathematical', 'v-mathematical'], ['vertAdvY', 'vert-adv-y'], ['vertOriginX', 'vert-origin-x'], ['vertOriginY', 'vert-origin-y'], ['wordSpacing', 'word-spacing'], ['writingMode', 'writing-mode'], ['xHeight', 'x-height']]);

var updateRef = function updateRef(domNode, oldRefName, newRefName, refs) {
  if (newRefName !== oldRefName) {
    if (typeof oldRefName === 'function') oldRefName(null);else if (oldRefName && refs[oldRefName] === domNode) delete refs[oldRefName];
    if (typeof newRefName === 'function') newRefName(domNode);else if (newRefName) refs[newRefName] = domNode;
  }
};

const EMPTY = '';



var updateProps_1 = function (domNode, oldVirtualNode, newVirtualNode, options) {
  const oldProps = oldVirtualNode && oldVirtualNode.props;
  const newProps = newVirtualNode.props;
  let refs, listenerContext;

  if (options) {
    refs = options.refs;
    listenerContext = options.listenerContext;
  }

  updateProps(domNode, oldVirtualNode, oldProps, newVirtualNode, newProps);
  if (refs) updateRef(domNode, oldProps && oldProps.ref, newProps && newProps.ref, refs);
  updateEventListeners(domNode, oldVirtualNode, newVirtualNode, listenerContext);
}; // Using var to avoid "Unsupported phi use of variable" deoptimization in Chrome 56


function updateProps(domNode, oldVirtualNode, oldProps, newVirtualNode, newProps) {
  if (oldProps) {
    for (var name in oldProps) {
      if (name === 'ref' || name === 'on') continue;
      if (name in eventListenerProps) continue;

      if (!newProps || !(name in newProps)) {
        if (name === 'dataset') {
          updateProps(domNode.dataset, null, oldProps && oldProps.dataset, null, null);
        } else if (name !== 'innerHTML' && oldVirtualNode && svgTags.has(oldVirtualNode.tag)) {
          domNode.removeAttribute(svgAttributeTranslations.get(name) || name);
        } else {
          // Clear property for objects that don't support deletion (e.g. style
          // or className). If we used null instead of an empty string, the DOM
          // could sometimes stringify the value and mistakenly assign 'null'.
          domNode[name] = EMPTY;
          delete domNode[name];
        }
      }
    }
  }

  if (newProps) {
    for (var name in newProps) {
      if (name === 'ref' || name === 'on') continue;
      if (name in eventListenerProps) continue;
      var oldValue = oldProps && oldProps[name];
      var newValue = newProps[name];

      if (name === 'dataset') {
        updateNestedProps(domNode.dataset, oldValue, newValue, false);
      } else if (name === 'style' && typeof newValue !== 'string') {
        if (typeof oldValue === 'string') {
          domNode.style = '';
          oldValue = null;
        }

        updateNestedProps(domNode.style, oldValue, newValue, true);
      } else if (name === 'attributes') {
        updateAttributes(domNode, oldValue, newValue);
      } else {
        if (newValue !== oldValue) {
          if (name !== 'innerHTML' && newVirtualNode && svgTags.has(newVirtualNode.tag)) {
            domNode.setAttribute(svgAttributeTranslations.get(name) || name, newValue);
          } else if (newVirtualNode && newVirtualNode.tag === 'input' && name === 'value' && domNode[name] === newValue) ; else {
            domNode[name] = newValue;
          }
        }
      }
    }
  }
}

function updateNestedProps(domProps, oldProps, newProps, isStyleObject) {
  if (oldProps) {
    for (var name in oldProps) {
      if (!newProps || !(name in newProps)) {
        if (isStyleObject) {
          domProps[name] = EMPTY;
        } else {
          delete domProps[name];
        }
      }
    }
  }

  if (newProps) {
    for (var name in newProps) {
      const oldValue = oldProps && oldProps[name];
      const newValue = newProps[name];

      if (newValue !== oldValue) {
        domProps[name] = newValue;
      }
    }
  }
}

function updateAttributes(domNode, oldAttributes, newAttributes) {
  if (oldAttributes) {
    for (var name in oldAttributes) {
      if (!newAttributes || !(name in newAttributes)) {
        domNode.removeAttribute(name);
      }
    }
  }

  if (newAttributes) {
    for (var name in newAttributes) {
      const oldValue = oldAttributes && oldAttributes[name];
      const newValue = newAttributes[name];

      if (newValue !== oldValue) {
        domNode.setAttribute(name, newValue);
      }
    }
  }
}

function updateEventListeners(domNode, oldVirtualNode, newVirtualNode, listenerContext) {
  const oldListeners = oldVirtualNode && oldVirtualNode.props && oldVirtualNode.props.on;
  const newListeners = newVirtualNode.props && newVirtualNode.props.on;

  for (const eventName in oldListeners) {
    if (!(newListeners && eventName in newListeners)) {
      let listenerToRemove;

      if (oldVirtualNode && oldVirtualNode.boundListeners && oldVirtualNode.boundListeners[eventName]) {
        listenerToRemove = oldVirtualNode.boundListeners[eventName];
      } else {
        listenerToRemove = oldListeners[eventName];
      }

      domNode.removeEventListener(eventName, listenerToRemove);
    }
  }

  for (const eventName in newListeners) {
    const oldListener = oldListeners && oldListeners[eventName];
    const newListener = newListeners[eventName];

    if (newListener !== oldListener) {
      if (oldListener) {
        let listenerToRemove;

        if (oldVirtualNode && oldVirtualNode.boundListeners && oldVirtualNode.boundListeners[eventName]) {
          listenerToRemove = oldVirtualNode.boundListeners[eventName];
        } else {
          listenerToRemove = oldListener;
        }

        domNode.removeEventListener(eventName, listenerToRemove);
      }

      if (newListener) {
        let listenerToAdd;

        if (listenerContext) {
          listenerToAdd = newListener.bind(listenerContext);
          if (!newVirtualNode.boundListeners) newVirtualNode.boundListeners = {};
          newVirtualNode.boundListeners[eventName] = listenerToAdd;
        } else {
          listenerToAdd = newListener;
        }

        domNode.addEventListener(eventName, listenerToAdd);
      }
    }
  }
}

function render(virtualNode, options) {
  let domNode;

  if (virtualNode.text != null) {
    domNode = document.createTextNode(virtualNode.text);
  } else {
    const {
      tag,
      children
    } = virtualNode;
    let {
      props,
      context
    } = virtualNode;

    if (context) {
      options = {
        refs: context.refs,
        listenerContext: context
      };
    }

    if (typeof tag === 'function') {
      let ref;

      if (props && props.ref) {
        ref = props.ref;
      }

      const component = new tag(props || {}, children);
      virtualNode.component = component;
      domNode = component.element;

      if (typeof ref === "function") {
        ref(component);
      } else if (options && options.refs && ref) {
        options.refs[ref] = component;
      }
    } else if (svgTags.has(tag)) {
      domNode = document.createElementNS("http://www.w3.org/2000/svg", tag);
      if (children) addChildren(domNode, children, options);
      if (props) updateProps_1(domNode, null, virtualNode, options);
    } else {
      domNode = document.createElement(tag);
      if (children) addChildren(domNode, children, options);
      if (props) updateProps_1(domNode, null, virtualNode, options);
    }
  }

  virtualNode.domNode = domNode;
  return domNode;
}

function addChildren(parent, children, options) {
  for (let i = 0; i < children.length; i++) {
    parent.appendChild(render(children[i], options));
  }
}

var render_1 = render;

function patch(oldVirtualNode, newVirtualNode, options) {
  const oldNode = oldVirtualNode.domNode;
  if (newVirtualNode === oldVirtualNode) return oldNode;

  if (virtualNodesAreEqual(oldVirtualNode, newVirtualNode)) {
    let newNode;

    if (newVirtualNode.text != null) {
      oldNode.nodeValue = newVirtualNode.text;
      newNode = oldNode;
    } else {
      if (typeof newVirtualNode.tag === 'function') {
        newNode = updateComponent(oldVirtualNode, newVirtualNode, options);
      } else {
        updateChildren(oldNode, oldVirtualNode.children, newVirtualNode.children, options);
        updateProps_1(oldNode, oldVirtualNode, newVirtualNode, options);
        newNode = oldNode;
      }
    }

    newVirtualNode.domNode = newNode;

    if (newNode !== oldNode && oldNode.parentNode) {
      oldNode.parentNode.replaceChild(newNode, oldNode);
    }

    return newNode;
  } else {
    const parentNode = oldNode.parentNode;
    const nextSibling = oldNode.nextSibling;
    removeVirtualNode(oldVirtualNode, options && options.refs);
    const newNode = render_1(newVirtualNode, options);
    if (parentNode) parentNode.insertBefore(newNode, nextSibling);
    newVirtualNode.domNode = newNode;
    return newNode;
  }
}

function updateComponent(oldVirtualNode, newVirtualNode, options) {
  const {
    component,
    props: oldProps
  } = oldVirtualNode;
  let {
    props: newProps,
    children: newChildren
  } = newVirtualNode;
  newVirtualNode.component = component;
  const refs = options && options.refs;
  if (refs) updateRef(component, oldProps && oldProps.ref, newProps && newProps.ref, refs);
  component.update(newProps || {}, newChildren);
  return component.element;
}

let mapPool = [new Map(), new Map(), new Map(), new Map()];

function updateChildren(parentElement, oldChildren, newChildren, options) {
  var oldStartIndex = 0;
  var oldEndIndex = oldChildren.length - 1;
  var oldStartChild = oldChildren[0];
  var oldEndChild = oldChildren[oldEndIndex];
  var newStartIndex = 0;
  var newEndIndex = newChildren.length - 1;
  var newStartChild = newChildren[0];
  var newEndChild = newChildren[newEndIndex];
  var oldIndicesByKey;

  while (oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
    if (!oldStartChild) {
      oldStartChild = oldChildren[++oldStartIndex];
    } else if (!oldEndChild) {
      oldEndChild = oldChildren[--oldEndIndex];
    } else if (virtualNodesAreEqual(oldStartChild, newStartChild)) {
      patch(oldStartChild, newStartChild, options);
      oldStartChild = oldChildren[++oldStartIndex];
      newStartChild = newChildren[++newStartIndex];
    } else if (virtualNodesAreEqual(oldEndChild, newEndChild)) {
      patch(oldEndChild, newEndChild, options);
      oldEndChild = oldChildren[--oldEndIndex];
      newEndChild = newChildren[--newEndIndex];
    } else if (virtualNodesAreEqual(oldStartChild, newEndChild)) {
      patch(oldStartChild, newEndChild, options);
      parentElement.insertBefore(oldStartChild.domNode, oldEndChild.domNode.nextSibling);
      oldStartChild = oldChildren[++oldStartIndex];
      newEndChild = newChildren[--newEndIndex];
    } else if (virtualNodesAreEqual(oldEndChild, newStartChild)) {
      patch(oldEndChild, newStartChild, options);
      parentElement.insertBefore(oldEndChild.domNode, oldStartChild.domNode);
      oldEndChild = oldChildren[--oldEndIndex];
      newStartChild = newChildren[++newStartIndex];
    } else {
      if (!oldIndicesByKey) {
        if (mapPool.length > 0) {
          oldIndicesByKey = mapPool.pop();
          oldIndicesByKey.clear();
        } else {
          oldIndicesByKey = new Map();
        }

        mapOldKeysToIndices(oldIndicesByKey, oldChildren, oldStartIndex, oldEndIndex);
      }

      var key = getKey(newStartChild);
      var oldIndex = key ? oldIndicesByKey.get(key) : null;

      if (oldIndex == null) {
        parentElement.insertBefore(render_1(newStartChild, options), oldStartChild.domNode);
        newStartChild = newChildren[++newStartIndex];
      } else {
        var oldChildToMove = oldChildren[oldIndex];
        patch(oldChildToMove, newStartChild, options);
        oldChildren[oldIndex] = undefined;
        parentElement.insertBefore(oldChildToMove.domNode, oldStartChild.domNode);
        newStartChild = newChildren[++newStartIndex];
      }
    }
  }

  if (oldStartIndex > oldEndIndex) {
    var subsequentElement = newChildren[newEndIndex + 1] ? newChildren[newEndIndex + 1].domNode : null;

    for (let i = newStartIndex; i <= newEndIndex; i++) {
      parentElement.insertBefore(render_1(newChildren[i], options), subsequentElement);
    }
  } else if (newStartIndex > newEndIndex) {
    for (let i = oldStartIndex; i <= oldEndIndex; i++) {
      var child = oldChildren[i];
      if (child) removeVirtualNode(child, options && options.refs);
    }
  }

  if (oldIndicesByKey) mapPool.push(oldIndicesByKey);
}

function removeVirtualNode(virtualNode, refs, removeDOMNode = true) {
  const {
    domNode,
    props,
    children,
    component
  } = virtualNode;
  const ref = props && props.ref;

  if (component) {
    if (typeof ref === 'function') ref(null);else if (refs && ref && refs[ref] === component) delete refs[ref];
    if (component.destroy) component.destroy();
  } else {
    if (typeof ref === 'function') ref(null);else if (refs && ref && refs[ref] === domNode) delete refs[ref];

    if (children) {
      for (let i = 0; i < children.length; i++) {
        removeVirtualNode(children[i], refs, false);
      }
    }
  }

  if (removeDOMNode) domNode.remove();
}

function virtualNodesAreEqual(oldVirtualNode, newVirtualNode) {
  return getKey(oldVirtualNode) === getKey(newVirtualNode) && oldVirtualNode.tag === newVirtualNode.tag;
}

function getKey(virtualNode) {
  return virtualNode.props ? virtualNode.props.key : undefined;
}

function mapOldKeysToIndices(oldIndicesByKey, children, startIndex, endIndex) {
  for (let i = startIndex; i <= endIndex; i++) {
    const key = getKey(children[i]);
    if (key) oldIndicesByKey.set(key, i);
  }

  return oldIndicesByKey;
}

var patch_1 = patch;

// If the scheduler is not customized via `etch.setScheduler`, an instance of
// this class will be used to schedule updates to the document. The
// `updateDocument` method accepts functions to be run at some point in the
// future, then runs them on the next animation frame.
var defaultScheduler = class DefaultScheduler {
  constructor() {
    this.updateRequests = [];
    this.readRequests = [];
    this.pendingAnimationFrame = null;
    this.performUpdates = this.performUpdates.bind(this);
    this.performingUpdates = false;
  } // Enqueues functions that write to the DOM to be performed on the next
  // animation frame. Functions passed to this method should *never* read from
  // the DOM, because that could cause synchronous reflows.


  updateDocument(fn) {
    this.updateRequests.push(fn);

    if (!this.pendingAnimationFrame) {
      this.pendingAnimationFrame = window.requestAnimationFrame(this.performUpdates);
    }
  }

  readDocument(fn) {
    this.readRequests.push(fn);

    if (!this.pendingAnimationFrame) {
      this.pendingAnimationFrame = window.requestAnimationFrame(this.performUpdates);
    }
  } // Returns a promise that will resolve at the end of the next update cycle,
  // after all the functions passed to `updateDocument` and `updateDocumentSync`
  // have been run.


  getNextUpdatePromise() {
    if (!this.nextUpdatePromise) {
      this.nextUpdatePromise = new Promise(resolve => {
        this.resolveNextUpdatePromise = resolve;
      });
    }

    return this.nextUpdatePromise;
  } // Performs all the pending document updates. If running these update
  // functions causes *more* updates to be enqueued, they are run synchronously
  // in this update cycle without waiting for another frame.


  performUpdates() {
    while (this.updateRequests.length > 0) {
      this.updateRequests.shift()();
    } // We don't clear the pending frame until all update requests are processed.
    // This ensures updates requested within other updates are processed in the
    // current frame.


    this.pendingAnimationFrame = null; // Now that updates are processed, we can perform all pending document reads
    // without the risk of interleaving them with writes and causing layout
    // thrashing.

    while (this.readRequests.length > 0) {
      this.readRequests.shift()();
    }

    if (this.nextUpdatePromise) {
      let resolveNextUpdatePromise = this.resolveNextUpdatePromise;
      this.nextUpdatePromise = null;
      this.resolveNextUpdatePromise = null;
      resolveNextUpdatePromise();
    }
  }

};

// This file implements getter and setter functions for a scheduler to be used
// by this library when updating the DOM. The scheduler's job is to ensure that
// DOM interaction is performed efficiently. When using `etch` in Atom, you
// should tell `etch` to use Atom's scheduler by calling
// `setScheduler(atom.views)`.
//
// Schedulers should support the following interface:
// * `updateDocument(fn)` This method is asynchronous. It enqueues functions to
// be executed later.
// * `getNextUpdatePromise()` This function should return a promise that
// resolves after all pending document update functions have been invoked.
//
// Schedulers could support the following optional methods, which are supported
// by Atom's scheduler.
//
// * `readDocument` This method can be invoked by clients other than `etch` when
// it is necessary to read from the DOM. Functions enqueued via this method
// should not be run until all document update functions have been executed.
// Batching updates and reads in this way will prevent forced synchronous
// reflows.
// * `pollDocument` This method is similar to `readDocument`, but it runs the
// associated functions repeatedly. Again, they should be scheduled in such a
// way so as to avoid synchronous reflows.


let scheduler = null;

var setScheduler$1 = function setScheduler(customScheduler) {
  scheduler = customScheduler;
};

var getScheduler$2 = function getScheduler() {
  if (!scheduler) {
    scheduler = new defaultScheduler();
  }

  return scheduler;
};

var schedulerAssignment = {
	setScheduler: setScheduler$1,
	getScheduler: getScheduler$2
};

const {
  getScheduler: getScheduler$1
} = schedulerAssignment;

const componentsWithPendingUpdates = new WeakSet();
let syncUpdatesInProgressCounter = 0;
let syncDestructionsInProgressCounter = 0;

function isValidVirtualNode(virtualNode) {
  return virtualNode != null && virtualNode !== false;
}

function applyContext(context, virtualNode) {
  virtualNode.context = context;

  if (virtualNode.ambiguous) {
    virtualNode.ambiguous.forEach(node => {
      node.context = context;
    });
    delete virtualNode.ambiguous;
  }
} // This function associates a component object with a DOM element by calling
// the components `render` method, assigning an `.element` property on the
// object and also returning the element.
//
// It also assigns a `virtualNode` property based on the return value of the
// `render` method. This will be used later by `performElementUpdate` to diff
// the new results of `render` with the previous results when updating the
// component's element.
//
// Finally, this function also associates the component with a `refs` object,
// which is populated with references to elements based on `ref` properties on
// nodes of the `virtual-dom` tree. Before calling into `virtual-dom` to create
// the DOM tree, it pushes this `refs` object to a shared stack so it can be
// accessed by hooks during the creation of individual elements.


function initialize$1(component) {
  if (typeof component.update !== 'function') {
    throw new Error('Etch components must implement `update(props, children)`.');
  }

  let virtualNode = component.render();

  if (!isValidVirtualNode(virtualNode)) {
    let namePart = component.constructor && component.constructor.name ? ' in ' + component.constructor.name : '';
    throw new Error('invalid falsy value ' + virtualNode + ' returned from render()' + namePart);
  }

  applyContext(component, virtualNode);
  component.refs = {};
  component.virtualNode = virtualNode;
  component.element = render_1(component.virtualNode, {
    refs: component.refs,
    listenerContext: component
  });
} // This function receives a component that has already been associated with an
// element via a previous call to `initialize` and updates this element by
// calling `render` on the component.
//
// When called in normal circumstances, it uses the scheduler to defer this
// update until the next animation frame, and will only perform one update of a
// given component in a given frame. This means you can call `update`
// repeatedly in a given tick without causing redundant updates.
//
// If this function called during another synchronous update (for example, as a
// result of a call to `update` on a child component), the update is performed
// synchronously.
//
// Returns a promise that will resolve when the requested update has been
// completed.


function update$1(component, replaceNode = true) {
  if (syncUpdatesInProgressCounter > 0) {
    updateSync$1(component, replaceNode);
    return Promise.resolve();
  }

  let scheduler = getScheduler$1();

  if (!componentsWithPendingUpdates.has(component)) {
    componentsWithPendingUpdates.add(component);
    scheduler.updateDocument(function () {
      componentsWithPendingUpdates.delete(component);
      updateSync$1(component, replaceNode);
    });
  }

  return scheduler.getNextUpdatePromise();
} // Synchronsly updates the DOM element associated with a component object. .
// This method assumes the presence of `.element` and `.virtualNode`
// properties on the component, which are assigned in the `initialize`
// function.
//
// It calls `render` on the component to obtain the desired state of the DOM,
// then `diff`s it with the previous state and `patch`es the element based on
// the resulting diff. During the patch operation, it pushes the component's
// `refs` object to a shared stack so that references to DOM elements can be
// updated.
//
// If `update` is called during the invocation of `updateSync`,
// the requests are processed synchronously as well. We track whether this is
// the case by incrementing and decrementing `syncUpdatesInProgressCounter`
// around the call.
//
// For now, etch does not allow the root tag of the `render` method to change
// between invocations, because we want to preserve a one-to-one relationship
// between component objects and DOM elements for simplicity.


function updateSync$1(component, replaceNode = true) {
  if (!isValidVirtualNode(component.virtualNode)) {
    throw new Error(`${component.constructor ? component.constructor.name + ' instance' : component} is not associated with a valid virtualNode. Perhaps this component was never initialized?`);
  }

  if (component.element == null) {
    throw new Error(`${component.constructor ? component.constructor.name + ' instance' : component} is not associated with a DOM element. Perhaps this component was never initialized?`);
  }

  let newVirtualNode = component.render();

  if (!isValidVirtualNode(newVirtualNode)) {
    const namePart = component.constructor && component.constructor.name ? ' in ' + component.constructor.name : '';
    throw new Error('invalid falsy value ' + newVirtualNode + ' returned from render()' + namePart);
  }

  applyContext(component, newVirtualNode);
  syncUpdatesInProgressCounter++;
  let oldVirtualNode = component.virtualNode;
  let oldDomNode = component.element;
  let newDomNode = patch_1(oldVirtualNode, newVirtualNode, {
    refs: component.refs,
    listenerContext: component
  });
  component.virtualNode = newVirtualNode;

  if (newDomNode !== oldDomNode && !replaceNode) {
    throw new Error('The root node type changed on update, but the update was performed with the replaceNode option set to false');
  } else {
    component.element = newDomNode;
  } // We can safely perform additional writes after a DOM update synchronously,
  // but any reads need to be deferred until all writes are completed to avoid
  // DOM thrashing. Requested reads occur at the end of the the current frame
  // if this method was invoked via the scheduler. Otherwise, if `updateSync`
  // was invoked outside of the scheduler, the default scheduler will defer
  // reads until the next animation frame.


  if (typeof component.writeAfterUpdate === 'function') {
    component.writeAfterUpdate();
  }

  if (typeof component.readAfterUpdate === 'function') {
    getScheduler$1().readDocument(function () {
      component.readAfterUpdate();
    });
  }

  syncUpdatesInProgressCounter--;
} // Removes the component's associated element and calls `destroy` on any child
// components. Normally, this function is asynchronous and will perform the
// destruction on the next animation frame. If called as the result of another
// update or destruction, it calls `destroy` on child components synchronously.
// If called as the result of destroying a component higher in the DOM, the
// element is not removed to avoid redundant DOM manipulation. Returns a promise
// that resolves when the destruction is completed.


function destroy$1(component, removeNode = true) {
  if (syncUpdatesInProgressCounter > 0 || syncDestructionsInProgressCounter > 0) {
    destroySync$1(component, removeNode);
    return Promise.resolve();
  }

  let scheduler = getScheduler$1();
  scheduler.updateDocument(function () {
    destroySync$1(component, removeNode);
  });
  return scheduler.getNextUpdatePromise();
} // A synchronous version of `destroy`.
//
// Note that we track whether `destroy` calls are in progress and only remove
// the element if we are not a nested call.


function destroySync$1(component, removeNode = true) {
  syncDestructionsInProgressCounter++;
  destroyChildComponents(component.virtualNode);
  if (syncDestructionsInProgressCounter === 1 && removeNode) component.element.remove();
  syncDestructionsInProgressCounter--;
}

function destroyChildComponents(virtualNode) {
  if (virtualNode.component && typeof virtualNode.component.destroy === 'function') {
    virtualNode.component.destroy();
  } else if (virtualNode.children) {
    virtualNode.children.forEach(destroyChildComponents);
  }
}

var componentHelpers = {
  initialize: initialize$1,
  update: update$1,
  updateSync: updateSync$1,
  destroy: destroy$1,
  destroySync: destroySync$1
};

const {
  initialize,
  update,
  updateSync,
  destroy,
  destroySync
} = componentHelpers;

const {
  setScheduler,
  getScheduler
} = schedulerAssignment;

var lib$1 = {
  dom: dom_1,
  render: render_1,
  initialize,
  update,
  updateSync,
  destroy,
  destroySync,
  setScheduler,
  getScheduler
};

var scorer = createCommonjsModule(function (module, exports) {
(function () {
  var PathSeparator, queryIsLastPathSegment;
  PathSeparator = path__default$1['default'].sep;

  exports.basenameScore = function (string, query, score) {
    var base, depth, index, lastCharacter, segmentCount, slashCount;
    index = string.length - 1;

    while (string[index] === PathSeparator) {
      index--;
    }

    slashCount = 0;
    lastCharacter = index;
    base = null;

    while (index >= 0) {
      if (string[index] === PathSeparator) {
        slashCount++;

        if (base == null) {
          base = string.substring(index + 1, lastCharacter + 1);
        }
      } else if (index === 0) {
        if (lastCharacter < string.length - 1) {
          if (base == null) {
            base = string.substring(0, lastCharacter + 1);
          }
        } else {
          if (base == null) {
            base = string;
          }
        }
      }

      index--;
    }

    if (base === string) {
      score *= 2;
    } else if (base) {
      score += exports.score(base, query);
    }

    segmentCount = slashCount + 1;
    depth = Math.max(1, 10 - segmentCount);
    score *= depth * 0.01;
    return score;
  };

  exports.score = function (string, query) {
    var character, characterScore, indexInQuery, indexInString, lowerCaseIndex, minIndex, queryLength, queryScore, stringLength, totalCharacterScore, upperCaseIndex, _ref;

    if (string === query) {
      return 1;
    }

    if (queryIsLastPathSegment(string, query)) {
      return 1;
    }

    totalCharacterScore = 0;
    queryLength = query.length;
    stringLength = string.length;
    indexInQuery = 0;
    indexInString = 0;

    while (indexInQuery < queryLength) {
      character = query[indexInQuery++];
      lowerCaseIndex = string.indexOf(character.toLowerCase());
      upperCaseIndex = string.indexOf(character.toUpperCase());
      minIndex = Math.min(lowerCaseIndex, upperCaseIndex);

      if (minIndex === -1) {
        minIndex = Math.max(lowerCaseIndex, upperCaseIndex);
      }

      indexInString = minIndex;

      if (indexInString === -1) {
        return 0;
      }

      characterScore = 0.1;

      if (string[indexInString] === character) {
        characterScore += 0.1;
      }

      if (indexInString === 0 || string[indexInString - 1] === PathSeparator) {
        characterScore += 0.8;
      } else if ((_ref = string[indexInString - 1]) === '-' || _ref === '_' || _ref === ' ') {
        characterScore += 0.7;
      }

      string = string.substring(indexInString + 1, stringLength);
      totalCharacterScore += characterScore;
    }

    queryScore = totalCharacterScore / queryLength;
    return (queryScore * (queryLength / stringLength) + queryScore) / 2;
  };

  queryIsLastPathSegment = function (string, query) {
    if (string[string.length - query.length - 1] === PathSeparator) {
      return string.lastIndexOf(query) === string.length - query.length;
    }
  };
}).call(commonjsGlobal);
});

var filter = createCommonjsModule(function (module) {
(function () {
  var pluckCandidates, scorer$1, sortCandidates;
  scorer$1 = scorer;

  pluckCandidates = function (a) {
    return a.candidate;
  };

  sortCandidates = function (a, b) {
    return b.score - a.score;
  };

  module.exports = function (candidates, query, queryHasSlashes, _arg) {
    var candidate, key, maxResults, score, scoredCandidates, string, _i, _len, _ref;

    _ref = _arg != null ? _arg : {}, key = _ref.key, maxResults = _ref.maxResults;

    if (query) {
      scoredCandidates = [];

      for (_i = 0, _len = candidates.length; _i < _len; _i++) {
        candidate = candidates[_i];
        string = key != null ? candidate[key] : candidate;

        if (!string) {
          continue;
        }

        score = scorer$1.score(string, query, queryHasSlashes);

        if (!queryHasSlashes) {
          score = scorer$1.basenameScore(string, query, score);
        }

        if (score > 0) {
          scoredCandidates.push({
            candidate: candidate,
            score: score
          });
        }
      }

      scoredCandidates.sort(sortCandidates);
      candidates = scoredCandidates.map(pluckCandidates);
    }

    if (maxResults != null) {
      candidates = candidates.slice(0, maxResults);
    }

    return candidates;
  };
}).call(commonjsGlobal);
});

var matcher = createCommonjsModule(function (module, exports) {
(function () {
  var PathSeparator;
  PathSeparator = path__default$1['default'].sep;

  exports.basenameMatch = function (string, query) {
    var base, index, lastCharacter;
    index = string.length - 1;

    while (string[index] === PathSeparator) {
      index--;
    }
    lastCharacter = index;
    base = null;

    while (index >= 0) {
      if (string[index] === PathSeparator) {

        if (base == null) {
          base = string.substring(index + 1, lastCharacter + 1);
        }
      } else if (index === 0) {
        if (lastCharacter < string.length - 1) {
          if (base == null) {
            base = string.substring(0, lastCharacter + 1);
          }
        } else {
          if (base == null) {
            base = string;
          }
        }
      }

      index--;
    }

    return exports.match(base, query, string.length - base.length);
  };

  exports.match = function (string, query, stringOffset) {
    var character, indexInQuery, indexInString, lowerCaseIndex, matches, minIndex, queryLength, stringLength, upperCaseIndex, _results;

    if (stringOffset == null) {
      stringOffset = 0;
    }

    if (string === query) {
      return function () {
        _results = [];

        for (var _i = stringOffset, _ref = stringOffset + string.length; stringOffset <= _ref ? _i < _ref : _i > _ref; stringOffset <= _ref ? _i++ : _i--) {
          _results.push(_i);
        }

        return _results;
      }.apply(this);
    }

    queryLength = query.length;
    stringLength = string.length;
    indexInQuery = 0;
    indexInString = 0;
    matches = [];

    while (indexInQuery < queryLength) {
      character = query[indexInQuery++];
      lowerCaseIndex = string.indexOf(character.toLowerCase());
      upperCaseIndex = string.indexOf(character.toUpperCase());
      minIndex = Math.min(lowerCaseIndex, upperCaseIndex);

      if (minIndex === -1) {
        minIndex = Math.max(lowerCaseIndex, upperCaseIndex);
      }

      indexInString = minIndex;

      if (indexInString === -1) {
        return [];
      }

      matches.push(stringOffset + indexInString);
      stringOffset += indexInString + 1;
      string = string.substring(indexInString + 1, stringLength);
    }

    return matches;
  };
}).call(commonjsGlobal);
});

var fuzzaldrin = createCommonjsModule(function (module) {
(function () {
  var PathSeparator, SpaceRegex, filter$1, matcher$1, scorer$1;
  scorer$1 = scorer;
  filter$1 = filter;
  matcher$1 = matcher;
  PathSeparator = path__default$1['default'].sep;
  SpaceRegex = /\ /g;
  module.exports = {
    filter: function (candidates, query, options) {
      var queryHasSlashes;

      if (query) {
        queryHasSlashes = query.indexOf(PathSeparator) !== -1;
        query = query.replace(SpaceRegex, '');
      }

      return filter$1(candidates, query, queryHasSlashes, options);
    },
    score: function (string, query) {
      var queryHasSlashes, score;

      if (!string) {
        return 0;
      }

      if (!query) {
        return 0;
      }

      if (string === query) {
        return 2;
      }

      queryHasSlashes = query.indexOf(PathSeparator) !== -1;
      query = query.replace(SpaceRegex, '');
      score = scorer$1.score(string, query);

      if (!queryHasSlashes) {
        score = scorer$1.basenameScore(string, query, score);
      }

      return score;
    },
    match: function (string, query) {
      var baseMatches, index, matches, queryHasSlashes, seen, _results;

      if (!string) {
        return [];
      }

      if (!query) {
        return [];
      }

      if (string === query) {
        return function () {
          _results = [];

          for (var _i = 0, _ref = string.length; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--) {
            _results.push(_i);
          }

          return _results;
        }.apply(this);
      }

      queryHasSlashes = query.indexOf(PathSeparator) !== -1;
      query = query.replace(SpaceRegex, '');
      matches = matcher$1.match(string, query);

      if (!queryHasSlashes) {
        baseMatches = matcher$1.basenameMatch(string, query);
        matches = matches.concat(baseMatches).sort(function (a, b) {
          return a - b;
        });
        seen = null;
        index = 0;

        while (index < matches.length) {
          if (index && seen === matches[index]) {
            matches.splice(index, 1);
          } else {
            seen = matches[index];
            index++;
          }
        }
      }

      return matches;
    }
  };
}).call(commonjsGlobal);
});

var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};



 // @ts-ignore Merge https://github.com/atom/etch/pull/90


const etch_1 = __importDefault(lib$1);

const $ = etch_1.default.dom;

const fuzzaldrin_1 = __importDefault(fuzzaldrin);

var selectListView$1 = class SelectListView {
  constructor(props) {
    this.props = props;

    if (!this.props.hasOwnProperty('initialSelectionIndex')) {
      this.props.initialSelectionIndex = 0;
    }

    if (props.initiallyVisibleItemCount) {
      this.initializeVisibilityObserver();
    }

    this.computeItems(false);
    this.disposables = new atom_1__default['default'].CompositeDisposable();
    etch_1.default.initialize(this);
    this.element.classList.add('select-list');
    this.disposables.add(this.refs.queryEditor.onDidChange(this.didChangeQuery.bind(this)));

    if (!props.skipCommandsRegistration) {
      this.disposables.add(this.registerAtomCommands());
    }

    const editorElement = this.refs.queryEditor.element;
    const didLoseFocus = this.didLoseFocus.bind(this);
    editorElement.addEventListener('blur', didLoseFocus); // When clicking the scrollbar of the items list, a blur event will be triggered
    // on the query editor element, but we don't want to treat that as a cancellation.
    // This mousedown listener allows us to detect this case and restore focus to the
    // query editor. This is based on https://stackoverflow.com/a/1480178.

    this.didClickItemsList = false;
    this.element.addEventListener('mousedown', event => {
      if (event.target === this.refs.items) {
        this.didClickItemsList = true;
      }
    });
    this.disposables.add(new atom_1__default['default'].Disposable(() => {
      editorElement.removeEventListener('blur', didLoseFocus);
    }));
  }

  static setScheduler(scheduler) {
    etch_1.default.setScheduler(scheduler);
  }

  static getScheduler() {
    return etch_1.default.getScheduler();
  }

  initializeVisibilityObserver() {
    this.visibilityObserver = new IntersectionObserver(changes => {
      for (const change of changes) {
        if (change.intersectionRatio > 0) {
          const element = change.target;
          this.visibilityObserver.unobserve(element);
          const index = Array.from(this.refs.items.children).indexOf(element);

          if (index >= 0) {
            this.renderItemAtIndex(index);
          }
        }
      }
    });
  }

  focus() {
    this.refs.queryEditor.element.focus();
  }

  didLoseFocus(event) {
    if (this.didClickItemsList || this.element.contains(event.relatedTarget)) {
      this.didClickItemsList = false;
      this.refs.queryEditor.element.focus();
    } else if (document.hasFocus()) {
      this.cancelSelection();
    }
  }

  reset() {
    this.refs.queryEditor.setText('');
  }

  destroy() {
    this.disposables.dispose();
    if (this.visibilityObserver) this.visibilityObserver.disconnect();
    return etch_1.default.destroy(this);
  }

  registerAtomCommands() {
    return atom.commands.add(this.element, {
      'core:move-up': event => {
        this.selectPrevious();
        event.stopPropagation();
      },
      'core:move-down': event => {
        this.selectNext();
        event.stopPropagation();
      },
      'core:move-to-top': event => {
        this.selectFirst();
        event.stopPropagation();
      },
      'core:move-to-bottom': event => {
        this.selectLast();
        event.stopPropagation();
      },
      'core:confirm': event => {
        this.confirmSelection();
        event.stopPropagation();
      },
      'core:cancel': event => {
        this.cancelSelection();
        event.stopPropagation();
      }
    });
  }

  update(props) {
    let shouldComputeItems = false;

    if ('items' in props) {
      this.props.items = props.items;
      shouldComputeItems = true;
    }

    if ('maxResults' in props) {
      this.props.maxResults = props.maxResults;
      shouldComputeItems = true;
    }

    if ('filter' in props) {
      this.props.filter = props.filter;
      shouldComputeItems = true;
    }

    if ('filterQuery' in props) {
      this.props.filterQuery = props.filterQuery;
      shouldComputeItems = true;
    }

    if ('query' in props) {
      // Items will be recomputed as part of the change event handler, so we
      // don't need to recompute them again at the end of this function.
      this.refs.queryEditor.setText(props.query);
      shouldComputeItems = false;
    }

    if ('selectQuery' in props) {
      if (props.selectQuery) {
        this.refs.queryEditor.selectAll();
      } else {
        this.refs.queryEditor.clearSelections();
      }
    }

    if ('order' in props) {
      this.props.order = props.order;
    }

    if ('emptyMessage' in props) {
      this.props.emptyMessage = props.emptyMessage;
    }

    if ('errorMessage' in props) {
      this.props.errorMessage = props.errorMessage;
    }

    if ('infoMessage' in props) {
      this.props.infoMessage = props.infoMessage;
    }

    if ('loadingMessage' in props) {
      this.props.loadingMessage = props.loadingMessage;
    }

    if ('loadingBadge' in props) {
      this.props.loadingBadge = props.loadingBadge;
    }

    if ('itemsClassList' in props) {
      this.props.itemsClassList = props.itemsClassList;
    }

    if ('initialSelectionIndex' in props) {
      this.props.initialSelectionIndex = props.initialSelectionIndex;
    }

    if (shouldComputeItems) {
      this.computeItems();
    }

    return etch_1.default.update(this);
  }

  render() {
    return $.div({}, $(atom_1__default['default'].TextEditor, {
      ref: 'queryEditor',
      mini: true
    }), this.renderLoadingMessage(), this.renderInfoMessage(), this.renderErrorMessage(), this.renderItems());
  }

  renderItems() {
    if (this.items.length > 0) {
      const className = ['list-group'].concat(this.props.itemsClassList || []).join(' ');

      if (this.visibilityObserver) {
        etch_1.default.getScheduler().updateDocument(() => {
          Array.from(this.refs.items.children).slice(this.props.initiallyVisibleItemCount).forEach(element => {
            this.visibilityObserver.observe(element);
          });
        });
      }

      this.listItems = this.items.map((item, index) => {
        const selected = this.getSelectedItem() === item;
        const visible = !this.props.initiallyVisibleItemCount || index < this.props.initiallyVisibleItemCount;
        return $(ListItemView, {
          element: this.props.elementForItem(item, {
            selected,
            index,
            visible
          }),
          selected: selected,
          onclick: () => this.didClickItem(index)
        });
      });
      return $.ol({
        className,
        ref: 'items'
      }, ...this.listItems);
    } else if (!this.props.loadingMessage && this.props.emptyMessage) {
      return $.span({
        ref: 'emptyMessage'
      }, this.props.emptyMessage);
    } else {
      return "";
    }
  }

  renderErrorMessage() {
    if (this.props.errorMessage) {
      return $.span({
        ref: 'errorMessage'
      }, this.props.errorMessage);
    } else {
      return '';
    }
  }

  renderInfoMessage() {
    if (this.props.infoMessage) {
      return $.span({
        ref: 'infoMessage'
      }, this.props.infoMessage);
    } else {
      return '';
    }
  }

  renderLoadingMessage() {
    if (this.props.loadingMessage) {
      return $.div({
        className: 'loading'
      }, $.span({
        ref: 'loadingMessage',
        className: 'loading-message'
      }, this.props.loadingMessage), this.props.loadingBadge ? $.span({
        ref: 'loadingBadge',
        className: 'badge'
      }, this.props.loadingBadge) : '');
    } else {
      return '';
    }
  }

  getQuery() {
    if (this.refs && this.refs.queryEditor) {
      return this.refs.queryEditor.getText();
    } else {
      return '';
    }
  }

  getFilterQuery() {
    return this.props.filterQuery ? this.props.filterQuery(this.getQuery()) : this.getQuery();
  }

  didChangeQuery() {
    if (this.props.didChangeQuery) {
      this.props.didChangeQuery(this.getFilterQuery());
    }

    this.computeItems();
  }

  didClickItem(itemIndex) {
    this.selectIndex(itemIndex);
    this.confirmSelection();
  }

  computeItems(updateComponent) {
    this.listItems = null;
    if (this.visibilityObserver) this.visibilityObserver.disconnect();
    const filterFn = this.props.filter || this.fuzzyFilter.bind(this); // @ts-ignore fuzzaldrin types should be fixed

    this.items = filterFn(this.props.items.slice(), this.getFilterQuery());

    if (this.props.order) {
      this.items.sort(this.props.order);
    }

    if (this.props.maxResults) {
      this.items = this.items.slice(0, this.props.maxResults);
    }

    this.selectIndex(this.props.initialSelectionIndex, updateComponent);
  }

  fuzzyFilter(items, query) {
    if (query.length === 0) {
      return items;
    } else {
      const scoredItems = [];

      for (const item of items) {
        const string = this.props.filterKeyForItem ? this.props.filterKeyForItem(item) : item;
        const score = fuzzaldrin_1.default.score(string, query);

        if (score > 0) {
          scoredItems.push({
            item,
            score
          });
        }
      }

      scoredItems.sort((a, b) => b.score - a.score);
      return scoredItems.map(i => i.item);
    }
  }

  getSelectedItem() {
    if (this.selectionIndex === undefined) return null;
    return this.items[this.selectionIndex];
  }

  renderItemAtIndex(index) {
    const item = this.items[index];
    const selected = this.getSelectedItem() === item;
    const component = this.listItems[index].component;
    if (this.visibilityObserver) this.visibilityObserver.unobserve(component.element);
    component.update({
      element: this.props.elementForItem(item, {
        selected,
        index,
        visible: true
      }),
      selected: selected,
      onclick: () => this.didClickItem(index)
    });
  }

  selectPrevious() {
    if (this.selectionIndex === undefined) return this.selectLast();
    return this.selectIndex(this.selectionIndex - 1);
  }

  selectNext() {
    if (this.selectionIndex === undefined) return this.selectFirst();
    return this.selectIndex(this.selectionIndex + 1);
  }

  selectFirst() {
    return this.selectIndex(0);
  }

  selectLast() {
    return this.selectIndex(this.items.length - 1);
  }

  selectNone() {
    return this.selectIndex(undefined);
  }

  selectIndex(index, updateComponent = true) {
    if (index >= this.items.length) {
      index = 0;
    } else if (index < 0) {
      index = this.items.length - 1;
    }

    const oldIndex = this.selectionIndex;
    this.selectionIndex = index;

    if (index !== undefined && this.props.didChangeSelection) {
      this.props.didChangeSelection(this.getSelectedItem());
    }

    if (updateComponent) {
      if (this.listItems) {
        if (oldIndex >= 0) this.renderItemAtIndex(oldIndex);
        if (index >= 0) this.renderItemAtIndex(index);
        return etch_1.default.getScheduler().getNextUpdatePromise();
      } else {
        return etch_1.default.update(this);
      }
    } else {
      return Promise.resolve();
    }
  }

  selectItem(item) {
    const index = this.items.indexOf(item);

    if (index === -1) {
      throw new Error('Cannot select the specified item because it does not exist.');
    } else {
      return this.selectIndex(index);
    }
  }

  confirmSelection() {
    const selectedItem = this.getSelectedItem();

    if (selectedItem != null) {
      if (this.props.didConfirmSelection) {
        this.props.didConfirmSelection(selectedItem);
      }
    } else {
      if (this.props.didConfirmEmptySelection) {
        this.props.didConfirmEmptySelection();
      }
    }
  }

  cancelSelection() {
    if (this.props.didCancelSelection) {
      this.props.didCancelSelection();
    }
  }

};

class ListItemView {
  constructor(props) {
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.didClick = this.didClick.bind(this);
    this.selected = props.selected;
    this.onclick = props.onclick;
    this.element = props.element;
    this.element.addEventListener('mousedown', this.mouseDown);
    this.element.addEventListener('mouseup', this.mouseUp);
    this.element.addEventListener('click', this.didClick);

    if (this.selected) {
      this.element.classList.add('selected');
    }

    this.domEventsDisposable = new atom_1__default['default'].Disposable(() => {
      this.element.removeEventListener('mousedown', this.mouseDown);
      this.element.removeEventListener('mouseup', this.mouseUp);
      this.element.removeEventListener('click', this.didClick);
    });
    etch_1.default.getScheduler().updateDocument(this.scrollIntoViewIfNeeded.bind(this));
  }

  mouseDown(event) {
    event.preventDefault();
  }

  mouseUp(event) {
    event.preventDefault();
  }

  didClick(event) {
    event.preventDefault();
    this.onclick();
  }

  destroy() {
    this.element.remove();
    this.domEventsDisposable.dispose();
  }

  update(props) {
    this.element.removeEventListener('mousedown', this.mouseDown);
    this.element.removeEventListener('mouseup', this.mouseUp);
    this.element.removeEventListener('click', this.didClick);
    this.element.parentNode.replaceChild(props.element, this.element);
    this.element = props.element;
    this.element.addEventListener('mousedown', this.mouseDown);
    this.element.addEventListener('mouseup', this.mouseUp);
    this.element.addEventListener('click', this.didClick);

    if (props.selected) {
      this.element.classList.add('selected');
    }

    this.selected = props.selected;
    this.onclick = props.onclick;
    etch_1.default.getScheduler().updateDocument(this.scrollIntoViewIfNeeded.bind(this));
  }

  scrollIntoViewIfNeeded() {
    if (this.selected) {
      // @ts-ignore: this function is a non-standard API.
      this.element.scrollIntoViewIfNeeded(false);
    }
  }

}

var numbroOptions = {
  average: true,
  mantissa: 1,
  optionalMantissa: true
};

function selectListView(items) {
  return __awaiter(this, void 0, void 0, function () {
    var panel, currentFocus;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          currentFocus = document.activeElement;
          _a.label = 1;

        case 1:
          _a.trys.push([1,, 3, 4]);

          return [4
          /*yield*/
          , new Promise(function (resolve, reject) {
            var select = new selectListView$1({
              didCancelSelection: function () {
                return reject('cancelled');
              },
              didConfirmSelection: function (item) {
                return resolve(item.name);
              },
              elementForItem: function (item) {
                var li = document.createElement('li');
                var version = item.version ? "v" + item.version : '';
                var downloads = item.downloads ? "" + numbro_min(item.downloads).format(numbroOptions) : '';
                var stars = item.stars ? "" + numbro_min(item.stars).format(numbroOptions) : '';
                li.innerHTML = "\n            <div class=\"package-control block\">\n              <div class=\"pull-right\">\n                <span class=\"icon icon-cloud-download\">" + downloads + "</span>\n                <span class=\"icon icon-star\">" + stars + "</span>\n              </div>\n\n              <strong>" + item.name + "</strong> " + version + "\n              <div class=\"text-subtle truncate-text\">" + (item.description || '') + "</div>\n            </div>\n          ";
                return li;
              },
              emptyMessage: 'No packages found',
              filterKeyForItem: function (item) {
                return item.name;
              },
              items: items,
              maxResults: getConfig('maxResults'),
              selectQuery: true
            });
            panel = atom.workspace.addModalPanel({
              item: select,
              visible: true
            });
            select.focus();
          })];

        case 2:
          return [2
          /*return*/
          , _a.sent()];

        case 3:
          if (panel) panel.destroy();
          if (currentFocus) currentFocus.focus();
          return [7
          /*endfinally*/
          ];

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    // @ts-ignore - file size hacks
    request.oncomplete = request.onsuccess = () => resolve(request.result); // @ts-ignore - file size hacks


    request.onabort = request.onerror = () => reject(request.error);
  });
}

function createStore(dbName, storeName) {
  const request = indexedDB.open(dbName);

  request.onupgradeneeded = () => request.result.createObjectStore(storeName);

  const dbp = promisifyRequest(request);
  return (txMode, callback) => dbp.then(db => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}

let defaultGetStoreFunc;

function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore('keyval-store', 'keyval');
  }

  return defaultGetStoreFunc;
}
/**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */


function get(key, customStore = defaultGetStore()) {
  return customStore('readonly', store => promisifyRequest(store.get(key)));
}
/**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */


function set(key, value, customStore = defaultGetStore()) {
  return customStore('readwrite', store => {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  });
}

var consoleStyle = "\n  background-color: mediumpurple;\n  border-radius: 2px;\n  color: white;\n  line-height: 1.5;\n  padding: 1px 4px;\n  text-shadow: 0 1px 0px rgba(0, 0, 0, 0.2);\n";

function __console(type) {
  var _a;

  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  if (atom === null || atom === void 0 ? void 0 : atom.inDevMode()) {
    args.unshift("%c" + meta.name + "%c", consoleStyle, '');

    (_a = global.console)[type].apply(_a, args);
  }
}

var Logger = {
  clear: function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    __console.apply(void 0, __spreadArray(['clear'], args));
  },
  debug: function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    __console.apply(void 0, __spreadArray(['debug'], args));
  },
  error: function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    __console.apply(void 0, __spreadArray(['error'], args));
  },
  info: function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    __console.apply(void 0, __spreadArray(['info'], args));
  },
  log: function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    __console.apply(void 0, __spreadArray(['log'], args));
  },
  warn: function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    __console.apply(void 0, __spreadArray(['warn'], args));
  }
};

var requiredArgs_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requiredArgs;

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

module.exports = exports.default;
});

var toDate_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toDate;

var _index = _interopRequireDefault(requiredArgs_1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */


function toDate(argument) {
  (0, _index.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

module.exports = exports.default;
});

var differenceInMilliseconds_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInMilliseconds;

var _index = _interopRequireDefault(toDate_1);

var _index2 = _interopRequireDefault(requiredArgs_1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */


function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
  (0, _index2.default)(2, arguments);
  var dateLeft = (0, _index.default)(dirtyDateLeft);
  var dateRight = (0, _index.default)(dirtyDateRight);
  return dateLeft.getTime() - dateRight.getTime();
}

module.exports = exports.default;
});

var differenceInMinutes_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = differenceInMinutes;

var _index = _interopRequireDefault(differenceInMilliseconds_1);

var _index2 = _interopRequireDefault(requiredArgs_1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of minutes
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are from 10:01:59 to 10:00:00
 * var result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */

function differenceInMinutes(dirtyDateLeft, dirtyDateRight) {
  (0, _index2.default)(2, arguments);
  var diff = (0, _index.default)(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

module.exports = exports.default;
});

var differenceInMinutes = /*@__PURE__*/getDefaultExportFromCjs(differenceInMinutes_1);

// fix for "Readable" isn't a named export issue

const Readable = Stream__default['default'].Readable;
const BUFFER = Symbol('buffer');
const TYPE$2 = Symbol('type');

class Blob {
  constructor() {
    this[TYPE$2] = '';
    const blobParts = arguments[0];
    const options = arguments[1];
    const buffers = [];
    let size = 0;

    if (blobParts) {
      const a = blobParts;
      const length = Number(a.length);

      for (let i = 0; i < length; i++) {
        const element = a[i];
        let buffer;

        if (element instanceof Buffer) {
          buffer = element;
        } else if (ArrayBuffer.isView(element)) {
          buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
        } else if (element instanceof ArrayBuffer) {
          buffer = Buffer.from(element);
        } else if (element instanceof Blob) {
          buffer = element[BUFFER];
        } else {
          buffer = Buffer.from(typeof element === 'string' ? element : String(element));
        }

        size += buffer.length;
        buffers.push(buffer);
      }
    }

    this[BUFFER] = Buffer.concat(buffers);
    let type = options && options.type !== undefined && String(options.type).toLowerCase();

    if (type && !/[^\u0020-\u007E]/.test(type)) {
      this[TYPE$2] = type;
    }
  }

  get size() {
    return this[BUFFER].length;
  }

  get type() {
    return this[TYPE$2];
  }

  text() {
    return Promise.resolve(this[BUFFER].toString());
  }

  arrayBuffer() {
    const buf = this[BUFFER];
    const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    return Promise.resolve(ab);
  }

  stream() {
    const readable = new Readable();

    readable._read = function () {};

    readable.push(this[BUFFER]);
    readable.push(null);
    return readable;
  }

  toString() {
    return '[object Blob]';
  }

  slice() {
    const size = this.size;
    const start = arguments[0];
    const end = arguments[1];
    let relativeStart, relativeEnd;

    if (start === undefined) {
      relativeStart = 0;
    } else if (start < 0) {
      relativeStart = Math.max(size + start, 0);
    } else {
      relativeStart = Math.min(start, size);
    }

    if (end === undefined) {
      relativeEnd = size;
    } else if (end < 0) {
      relativeEnd = Math.max(size + end, 0);
    } else {
      relativeEnd = Math.min(end, size);
    }

    const span = Math.max(relativeEnd - relativeStart, 0);
    const buffer = this[BUFFER];
    const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
    const blob = new Blob([], {
      type: arguments[2]
    });
    blob[BUFFER] = slicedBuffer;
    return blob;
  }

}

Object.defineProperties(Blob.prototype, {
  size: {
    enumerable: true
  },
  type: {
    enumerable: true
  },
  slice: {
    enumerable: true
  }
});
Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
  value: 'Blob',
  writable: false,
  enumerable: false,
  configurable: true
});
/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */

function FetchError(message, type, systemError) {
  Error.call(this, message);
  this.message = message;
  this.type = type; // when err.type is `system`, err.code contains system error code

  if (systemError) {
    this.code = this.errno = systemError.code;
  } // hide custom error implementation details from end-users


  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';
let convert;

try {
  convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals'); // fix an issue where "PassThrough" isn't a named export for node <10

const PassThrough$1 = Stream__default['default'].PassThrough;
/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */

function Body(body) {
  var _this = this;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$size = _ref.size;

  let size = _ref$size === undefined ? 0 : _ref$size;
  var _ref$timeout = _ref.timeout;
  let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

  if (body == null) {
    // body is undefined or null
    body = null;
  } else if (isURLSearchParams(body)) {
    // body is a URLSearchParams
    body = Buffer.from(body.toString());
  } else if (isBlob(body)) ;else if (Buffer.isBuffer(body)) ;else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
    // body is ArrayBuffer
    body = Buffer.from(body);
  } else if (ArrayBuffer.isView(body)) {
    // body is ArrayBufferView
    body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
  } else if (body instanceof Stream__default['default']) ;else {
    // none of the above
    // coerce to string then buffer
    body = Buffer.from(String(body));
  }

  this[INTERNALS] = {
    body,
    disturbed: false,
    error: null
  };
  this.size = size;
  this.timeout = timeout;

  if (body instanceof Stream__default['default']) {
    body.on('error', function (err) {
      const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
      _this[INTERNALS].error = error;
    });
  }
}

Body.prototype = {
  get body() {
    return this[INTERNALS].body;
  },

  get bodyUsed() {
    return this[INTERNALS].disturbed;
  },

  /**
   * Decode response as ArrayBuffer
   *
   * @return  Promise
   */
  arrayBuffer() {
    return consumeBody.call(this).then(function (buf) {
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    });
  },

  /**
   * Return raw response as Blob
   *
   * @return Promise
   */
  blob() {
    let ct = this.headers && this.headers.get('content-type') || '';
    return consumeBody.call(this).then(function (buf) {
      return Object.assign( // Prevent copying
      new Blob([], {
        type: ct.toLowerCase()
      }), {
        [BUFFER]: buf
      });
    });
  },

  /**
   * Decode response as json
   *
   * @return  Promise
   */
  json() {
    var _this2 = this;

    return consumeBody.call(this).then(function (buffer) {
      try {
        return JSON.parse(buffer.toString());
      } catch (err) {
        return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
      }
    });
  },

  /**
   * Decode response as text
   *
   * @return  Promise
   */
  text() {
    return consumeBody.call(this).then(function (buffer) {
      return buffer.toString();
    });
  },

  /**
   * Decode response as buffer (non-spec api)
   *
   * @return  Promise
   */
  buffer() {
    return consumeBody.call(this);
  },

  /**
   * Decode response as text, while automatically detecting the encoding and
   * trying to decode to UTF-8 (non-spec api)
   *
   * @return  Promise
   */
  textConverted() {
    var _this3 = this;

    return consumeBody.call(this).then(function (buffer) {
      return convertBody(buffer, _this3.headers);
    });
  }

}; // In browsers, all properties are enumerable.

Object.defineProperties(Body.prototype, {
  body: {
    enumerable: true
  },
  bodyUsed: {
    enumerable: true
  },
  arrayBuffer: {
    enumerable: true
  },
  blob: {
    enumerable: true
  },
  json: {
    enumerable: true
  },
  text: {
    enumerable: true
  }
});

Body.mixIn = function (proto) {
  for (const name of Object.getOwnPropertyNames(Body.prototype)) {
    // istanbul ignore else: future proof
    if (!(name in proto)) {
      const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
      Object.defineProperty(proto, name, desc);
    }
  }
};
/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */


function consumeBody() {
  var _this4 = this;

  if (this[INTERNALS].disturbed) {
    return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
  }

  this[INTERNALS].disturbed = true;

  if (this[INTERNALS].error) {
    return Body.Promise.reject(this[INTERNALS].error);
  }

  let body = this.body; // body is null

  if (body === null) {
    return Body.Promise.resolve(Buffer.alloc(0));
  } // body is blob


  if (isBlob(body)) {
    body = body.stream();
  } // body is buffer


  if (Buffer.isBuffer(body)) {
    return Body.Promise.resolve(body);
  } // istanbul ignore if: should never happen


  if (!(body instanceof Stream__default['default'])) {
    return Body.Promise.resolve(Buffer.alloc(0));
  } // body is stream
  // get ready to actually consume the body


  let accum = [];
  let accumBytes = 0;
  let abort = false;
  return new Body.Promise(function (resolve, reject) {
    let resTimeout; // allow timeout on slow response body

    if (_this4.timeout) {
      resTimeout = setTimeout(function () {
        abort = true;
        reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
      }, _this4.timeout);
    } // handle stream errors


    body.on('error', function (err) {
      if (err.name === 'AbortError') {
        // if the request was aborted, reject with this Error
        abort = true;
        reject(err);
      } else {
        // other errors, such as incorrect content-encoding
        reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
      }
    });
    body.on('data', function (chunk) {
      if (abort || chunk === null) {
        return;
      }

      if (_this4.size && accumBytes + chunk.length > _this4.size) {
        abort = true;
        reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
        return;
      }

      accumBytes += chunk.length;
      accum.push(chunk);
    });
    body.on('end', function () {
      if (abort) {
        return;
      }

      clearTimeout(resTimeout);

      try {
        resolve(Buffer.concat(accum, accumBytes));
      } catch (err) {
        // handle streams that have accumulated too much data (issue #414)
        reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
      }
    });
  });
}
/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */


function convertBody(buffer, headers) {
  if (typeof convert !== 'function') {
    throw new Error('The package `encoding` must be installed to use the textConverted() function');
  }

  const ct = headers.get('content-type');
  let charset = 'utf-8';
  let res, str; // header

  if (ct) {
    res = /charset=([^;]*)/i.exec(ct);
  } // no charset in content type, peek at response body for at most 1024 bytes


  str = buffer.slice(0, 1024).toString(); // html5

  if (!res && str) {
    res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
  } // html4


  if (!res && str) {
    res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

    if (!res) {
      res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);

      if (res) {
        res.pop(); // drop last quote
      }
    }

    if (res) {
      res = /charset=(.*)/i.exec(res.pop());
    }
  } // xml


  if (!res && str) {
    res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
  } // found charset


  if (res) {
    charset = res.pop(); // prevent decode issues when sites use incorrect encoding
    // ref: https://hsivonen.fi/encoding-menu/

    if (charset === 'gb2312' || charset === 'gbk') {
      charset = 'gb18030';
    }
  } // turn raw buffers into a single utf-8 buffer


  return convert(buffer, 'UTF-8', charset).toString();
}
/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */


function isURLSearchParams(obj) {
  // Duck-typing as a necessary condition.
  if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
    return false;
  } // Brand-checking and more duck-typing as optional condition.


  return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}
/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */


function isBlob(obj) {
  return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}
/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */


function clone(instance) {
  let p1, p2;
  let body = instance.body; // don't allow cloning a used body

  if (instance.bodyUsed) {
    throw new Error('cannot clone body after it is used');
  } // check that body is a stream and not form-data object
  // note: we can't clone the form-data object without having it as a dependency


  if (body instanceof Stream__default['default'] && typeof body.getBoundary !== 'function') {
    // tee instance body
    p1 = new PassThrough$1();
    p2 = new PassThrough$1();
    body.pipe(p1);
    body.pipe(p2); // set instance body to teed body and return the other teed body

    instance[INTERNALS].body = p1;
    body = p2;
  }

  return body;
}
/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */


function extractContentType(body) {
  if (body === null) {
    // body is null
    return null;
  } else if (typeof body === 'string') {
    // body is string
    return 'text/plain;charset=UTF-8';
  } else if (isURLSearchParams(body)) {
    // body is a URLSearchParams
    return 'application/x-www-form-urlencoded;charset=UTF-8';
  } else if (isBlob(body)) {
    // body is blob
    return body.type || null;
  } else if (Buffer.isBuffer(body)) {
    // body is buffer
    return null;
  } else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
    // body is ArrayBuffer
    return null;
  } else if (ArrayBuffer.isView(body)) {
    // body is ArrayBufferView
    return null;
  } else if (typeof body.getBoundary === 'function') {
    // detect form data input from form-data module
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  } else if (body instanceof Stream__default['default']) {
    // body is stream
    // can't really do much about this
    return null;
  } else {
    // Body constructor defaults other things to string
    return 'text/plain;charset=UTF-8';
  }
}
/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */


function getTotalBytes(instance) {
  const body = instance.body;

  if (body === null) {
    // body is null
    return 0;
  } else if (isBlob(body)) {
    return body.size;
  } else if (Buffer.isBuffer(body)) {
    // body is buffer
    return body.length;
  } else if (body && typeof body.getLengthSync === 'function') {
    // detect form data input from form-data module
    if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
    body.hasKnownLength && body.hasKnownLength()) {
      // 2.x
      return body.getLengthSync();
    }

    return null;
  } else {
    // body is stream
    return null;
  }
}
/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */


function writeToStream(dest, instance) {
  const body = instance.body;

  if (body === null) {
    // body is null
    dest.end();
  } else if (isBlob(body)) {
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    // body is buffer
    dest.write(body);
    dest.end();
  } else {
    // body is stream
    body.pipe(dest);
  }
} // expose Promise


Body.Promise = global.Promise;
/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
  name = `${name}`;

  if (invalidTokenRegex.test(name) || name === '') {
    throw new TypeError(`${name} is not a legal HTTP header name`);
  }
}

function validateValue(value) {
  value = `${value}`;

  if (invalidHeaderCharRegex.test(value)) {
    throw new TypeError(`${value} is not a legal HTTP header value`);
  }
}
/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */


function find(map, name) {
  name = name.toLowerCase();

  for (const key in map) {
    if (key.toLowerCase() === name) {
      return key;
    }
  }

  return undefined;
}

const MAP = Symbol('map');

class Headers {
  /**
   * Headers class
   *
   * @param   Object  headers  Response headers
   * @return  Void
   */
  constructor() {
    let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    this[MAP] = Object.create(null);

    if (init instanceof Headers) {
      const rawHeaders = init.raw();
      const headerNames = Object.keys(rawHeaders);

      for (const headerName of headerNames) {
        for (const value of rawHeaders[headerName]) {
          this.append(headerName, value);
        }
      }

      return;
    } // We don't worry about converting prop to ByteString here as append()
    // will handle it.


    if (init == null) ;else if (typeof init === 'object') {
      const method = init[Symbol.iterator];

      if (method != null) {
        if (typeof method !== 'function') {
          throw new TypeError('Header pairs must be iterable');
        } // sequence<sequence<ByteString>>
        // Note: per spec we have to first exhaust the lists then process them


        const pairs = [];

        for (const pair of init) {
          if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
            throw new TypeError('Each header pair must be iterable');
          }

          pairs.push(Array.from(pair));
        }

        for (const pair of pairs) {
          if (pair.length !== 2) {
            throw new TypeError('Each header pair must be a name/value tuple');
          }

          this.append(pair[0], pair[1]);
        }
      } else {
        // record<ByteString, ByteString>
        for (const key of Object.keys(init)) {
          const value = init[key];
          this.append(key, value);
        }
      }
    } else {
      throw new TypeError('Provided initializer must be an object');
    }
  }
  /**
   * Return combined header value given name
   *
   * @param   String  name  Header name
   * @return  Mixed
   */


  get(name) {
    name = `${name}`;
    validateName(name);
    const key = find(this[MAP], name);

    if (key === undefined) {
      return null;
    }

    return this[MAP][key].join(', ');
  }
  /**
   * Iterate over all headers
   *
   * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
   * @param   Boolean   thisArg   `this` context for callback function
   * @return  Void
   */


  forEach(callback) {
    let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    let pairs = getHeaders(this);
    let i = 0;

    while (i < pairs.length) {
      var _pairs$i = pairs[i];
      const name = _pairs$i[0],
            value = _pairs$i[1];
      callback.call(thisArg, value, name, this);
      pairs = getHeaders(this);
      i++;
    }
  }
  /**
   * Overwrite header values given name
   *
   * @param   String  name   Header name
   * @param   String  value  Header value
   * @return  Void
   */


  set(name, value) {
    name = `${name}`;
    value = `${value}`;
    validateName(name);
    validateValue(value);
    const key = find(this[MAP], name);
    this[MAP][key !== undefined ? key : name] = [value];
  }
  /**
   * Append a value onto existing header
   *
   * @param   String  name   Header name
   * @param   String  value  Header value
   * @return  Void
   */


  append(name, value) {
    name = `${name}`;
    value = `${value}`;
    validateName(name);
    validateValue(value);
    const key = find(this[MAP], name);

    if (key !== undefined) {
      this[MAP][key].push(value);
    } else {
      this[MAP][name] = [value];
    }
  }
  /**
   * Check for header name existence
   *
   * @param   String   name  Header name
   * @return  Boolean
   */


  has(name) {
    name = `${name}`;
    validateName(name);
    return find(this[MAP], name) !== undefined;
  }
  /**
   * Delete all header values given name
   *
   * @param   String  name  Header name
   * @return  Void
   */


  delete(name) {
    name = `${name}`;
    validateName(name);
    const key = find(this[MAP], name);

    if (key !== undefined) {
      delete this[MAP][key];
    }
  }
  /**
   * Return raw headers (non-spec api)
   *
   * @return  Object
   */


  raw() {
    return this[MAP];
  }
  /**
   * Get an iterator on keys.
   *
   * @return  Iterator
   */


  keys() {
    return createHeadersIterator(this, 'key');
  }
  /**
   * Get an iterator on values.
   *
   * @return  Iterator
   */


  values() {
    return createHeadersIterator(this, 'value');
  }
  /**
   * Get an iterator on entries.
   *
   * This is the default iterator of the Headers object.
   *
   * @return  Iterator
   */


  [Symbol.iterator]() {
    return createHeadersIterator(this, 'key+value');
  }

}

Headers.prototype.entries = Headers.prototype[Symbol.iterator];
Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
  value: 'Headers',
  writable: false,
  enumerable: false,
  configurable: true
});
Object.defineProperties(Headers.prototype, {
  get: {
    enumerable: true
  },
  forEach: {
    enumerable: true
  },
  set: {
    enumerable: true
  },
  append: {
    enumerable: true
  },
  has: {
    enumerable: true
  },
  delete: {
    enumerable: true
  },
  keys: {
    enumerable: true
  },
  values: {
    enumerable: true
  },
  entries: {
    enumerable: true
  }
});

function getHeaders(headers) {
  let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';
  const keys = Object.keys(headers[MAP]).sort();
  return keys.map(kind === 'key' ? function (k) {
    return k.toLowerCase();
  } : kind === 'value' ? function (k) {
    return headers[MAP][k].join(', ');
  } : function (k) {
    return [k.toLowerCase(), headers[MAP][k].join(', ')];
  });
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
  const iterator = Object.create(HeadersIteratorPrototype);
  iterator[INTERNAL] = {
    target,
    kind,
    index: 0
  };
  return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
  next() {
    // istanbul ignore if
    if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
      throw new TypeError('Value of `this` is not a HeadersIterator');
    }

    var _INTERNAL = this[INTERNAL];
    const target = _INTERNAL.target,
          kind = _INTERNAL.kind,
          index = _INTERNAL.index;
    const values = getHeaders(target, kind);
    const len = values.length;

    if (index >= len) {
      return {
        value: undefined,
        done: true
      };
    }

    this[INTERNAL].index = index + 1;
    return {
      value: values[index],
      done: false
    };
  }

}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
  value: 'HeadersIterator',
  writable: false,
  enumerable: false,
  configurable: true
});
/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */

function exportNodeCompatibleHeaders(headers) {
  const obj = Object.assign({
    __proto__: null
  }, headers[MAP]); // http.request() only supports string as Host header. This hack makes
  // specifying custom Host header possible.

  const hostHeaderKey = find(headers[MAP], 'Host');

  if (hostHeaderKey !== undefined) {
    obj[hostHeaderKey] = obj[hostHeaderKey][0];
  }

  return obj;
}
/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */


function createHeadersLenient(obj) {
  const headers = new Headers();

  for (const name of Object.keys(obj)) {
    if (invalidTokenRegex.test(name)) {
      continue;
    }

    if (Array.isArray(obj[name])) {
      for (const val of obj[name]) {
        if (invalidHeaderCharRegex.test(val)) {
          continue;
        }

        if (headers[MAP][name] === undefined) {
          headers[MAP][name] = [val];
        } else {
          headers[MAP][name].push(val);
        }
      }
    } else if (!invalidHeaderCharRegex.test(obj[name])) {
      headers[MAP][name] = [obj[name]];
    }
  }

  return headers;
}

const INTERNALS$1 = Symbol('Response internals'); // fix an issue where "STATUS_CODES" aren't a named export for node <10

const STATUS_CODES = http__default['default'].STATUS_CODES;
/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */

class Response {
  constructor() {
    let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Body.call(this, body, opts);
    const status = opts.status || 200;
    const headers = new Headers(opts.headers);

    if (body != null && !headers.has('Content-Type')) {
      const contentType = extractContentType(body);

      if (contentType) {
        headers.append('Content-Type', contentType);
      }
    }

    this[INTERNALS$1] = {
      url: opts.url,
      status,
      statusText: opts.statusText || STATUS_CODES[status],
      headers,
      counter: opts.counter
    };
  }

  get url() {
    return this[INTERNALS$1].url || '';
  }

  get status() {
    return this[INTERNALS$1].status;
  }
  /**
   * Convenience property representing if the request ended normally
   */


  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }

  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }

  get statusText() {
    return this[INTERNALS$1].statusText;
  }

  get headers() {
    return this[INTERNALS$1].headers;
  }
  /**
   * Clone this response
   *
   * @return  Response
   */


  clone() {
    return new Response(clone(this), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected
    });
  }

}

Body.mixIn(Response.prototype);
Object.defineProperties(Response.prototype, {
  url: {
    enumerable: true
  },
  status: {
    enumerable: true
  },
  ok: {
    enumerable: true
  },
  redirected: {
    enumerable: true
  },
  statusText: {
    enumerable: true
  },
  headers: {
    enumerable: true
  },
  clone: {
    enumerable: true
  }
});
Object.defineProperty(Response.prototype, Symbol.toStringTag, {
  value: 'Response',
  writable: false,
  enumerable: false,
  configurable: true
});
const INTERNALS$2 = Symbol('Request internals'); // fix an issue where "format", "parse" aren't a named export for node <10

const parse_url = Url__default['default'].parse;
const format_url = Url__default['default'].format;
const streamDestructionSupported = ('destroy' in Stream__default['default'].Readable.prototype);
/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */

function isRequest$2(input) {
  return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
  const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
  return !!(proto && proto.constructor.name === 'AbortSignal');
}
/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */


class Request {
  constructor(input) {
    let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let parsedURL; // normalize input

    if (!isRequest$2(input)) {
      if (input && input.href) {
        // in order to support Node.js' Url objects; though WHATWG's URL objects
        // will fall into this branch also (since their `toString()` will return
        // `href` property anyway)
        parsedURL = parse_url(input.href);
      } else {
        // coerce input to a string before attempting to parse
        parsedURL = parse_url(`${input}`);
      }

      input = {};
    } else {
      parsedURL = parse_url(input.url);
    }

    let method = init.method || input.method || 'GET';
    method = method.toUpperCase();

    if ((init.body != null || isRequest$2(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
      throw new TypeError('Request with GET/HEAD method cannot have body');
    }

    let inputBody = init.body != null ? init.body : isRequest$2(input) && input.body !== null ? clone(input) : null;
    Body.call(this, inputBody, {
      timeout: init.timeout || input.timeout || 0,
      size: init.size || input.size || 0
    });
    const headers = new Headers(init.headers || input.headers || {});

    if (inputBody != null && !headers.has('Content-Type')) {
      const contentType = extractContentType(inputBody);

      if (contentType) {
        headers.append('Content-Type', contentType);
      }
    }

    let signal = isRequest$2(input) ? input.signal : null;
    if ('signal' in init) signal = init.signal;

    if (signal != null && !isAbortSignal(signal)) {
      throw new TypeError('Expected signal to be an instanceof AbortSignal');
    }

    this[INTERNALS$2] = {
      method,
      redirect: init.redirect || input.redirect || 'follow',
      headers,
      parsedURL,
      signal
    }; // node-fetch-only options

    this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
    this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
    this.counter = init.counter || input.counter || 0;
    this.agent = init.agent || input.agent;
  }

  get method() {
    return this[INTERNALS$2].method;
  }

  get url() {
    return format_url(this[INTERNALS$2].parsedURL);
  }

  get headers() {
    return this[INTERNALS$2].headers;
  }

  get redirect() {
    return this[INTERNALS$2].redirect;
  }

  get signal() {
    return this[INTERNALS$2].signal;
  }
  /**
   * Clone this request
   *
   * @return  Request
   */


  clone() {
    return new Request(this);
  }

}

Body.mixIn(Request.prototype);
Object.defineProperty(Request.prototype, Symbol.toStringTag, {
  value: 'Request',
  writable: false,
  enumerable: false,
  configurable: true
});
Object.defineProperties(Request.prototype, {
  method: {
    enumerable: true
  },
  url: {
    enumerable: true
  },
  headers: {
    enumerable: true
  },
  redirect: {
    enumerable: true
  },
  clone: {
    enumerable: true
  },
  signal: {
    enumerable: true
  }
});
/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */

function getNodeRequestOptions(request) {
  const parsedURL = request[INTERNALS$2].parsedURL;
  const headers = new Headers(request[INTERNALS$2].headers); // fetch step 1.3

  if (!headers.has('Accept')) {
    headers.set('Accept', '*/*');
  } // Basic fetch


  if (!parsedURL.protocol || !parsedURL.hostname) {
    throw new TypeError('Only absolute URLs are supported');
  }

  if (!/^https?:$/.test(parsedURL.protocol)) {
    throw new TypeError('Only HTTP(S) protocols are supported');
  }

  if (request.signal && request.body instanceof Stream__default['default'].Readable && !streamDestructionSupported) {
    throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
  } // HTTP-network-or-cache fetch steps 2.4-2.7


  let contentLengthValue = null;

  if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
    contentLengthValue = '0';
  }

  if (request.body != null) {
    const totalBytes = getTotalBytes(request);

    if (typeof totalBytes === 'number') {
      contentLengthValue = String(totalBytes);
    }
  }

  if (contentLengthValue) {
    headers.set('Content-Length', contentLengthValue);
  } // HTTP-network-or-cache fetch step 2.11


  if (!headers.has('User-Agent')) {
    headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
  } // HTTP-network-or-cache fetch step 2.15


  if (request.compress && !headers.has('Accept-Encoding')) {
    headers.set('Accept-Encoding', 'gzip,deflate');
  }

  let agent = request.agent;

  if (typeof agent === 'function') {
    agent = agent(parsedURL);
  }

  if (!headers.has('Connection') && !agent) {
    headers.set('Connection', 'close');
  } // HTTP-network fetch step 4.2
  // chunked encoding is handled by Node.js


  return Object.assign({}, parsedURL, {
    method: request.method,
    headers: exportNodeCompatibleHeaders(headers),
    agent
  });
}
/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */


function AbortError(message) {
  Error.call(this, message);
  this.type = 'aborted';
  this.message = message; // hide custom error implementation details from end-users

  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError'; // fix an issue where "PassThrough", "resolve" aren't a named export for node <10

const PassThrough$1$1 = Stream__default['default'].PassThrough;
const resolve_url = Url__default['default'].resolve;
/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */

function fetch(url, opts) {
  // allow custom promise
  if (!fetch.Promise) {
    throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
  }

  Body.Promise = fetch.Promise; // wrap http.request into fetch

  return new fetch.Promise(function (resolve, reject) {
    // build request object
    const request = new Request(url, opts);
    const options = getNodeRequestOptions(request);
    const send = (options.protocol === 'https:' ? https__default['default'] : http__default['default']).request;
    const signal = request.signal;
    let response = null;

    const abort = function abort() {
      let error = new AbortError('The user aborted a request.');
      reject(error);

      if (request.body && request.body instanceof Stream__default['default'].Readable) {
        request.body.destroy(error);
      }

      if (!response || !response.body) return;
      response.body.emit('error', error);
    };

    if (signal && signal.aborted) {
      abort();
      return;
    }

    const abortAndFinalize = function abortAndFinalize() {
      abort();
      finalize();
    }; // send request


    const req = send(options);
    let reqTimeout;

    if (signal) {
      signal.addEventListener('abort', abortAndFinalize);
    }

    function finalize() {
      req.abort();
      if (signal) signal.removeEventListener('abort', abortAndFinalize);
      clearTimeout(reqTimeout);
    }

    if (request.timeout) {
      req.once('socket', function (socket) {
        reqTimeout = setTimeout(function () {
          reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
          finalize();
        }, request.timeout);
      });
    }

    req.on('error', function (err) {
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
      finalize();
    });
    req.on('response', function (res) {
      clearTimeout(reqTimeout);
      const headers = createHeadersLenient(res.headers); // HTTP fetch step 5

      if (fetch.isRedirect(res.statusCode)) {
        // HTTP fetch step 5.2
        const location = headers.get('Location'); // HTTP fetch step 5.3

        const locationURL = location === null ? null : resolve_url(request.url, location); // HTTP fetch step 5.5

        switch (request.redirect) {
          case 'error':
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
            finalize();
            return;

          case 'manual':
            // node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
            if (locationURL !== null) {
              // handle corrupted header
              try {
                headers.set('Location', locationURL);
              } catch (err) {
                // istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
                reject(err);
              }
            }

            break;

          case 'follow':
            // HTTP-redirect fetch step 2
            if (locationURL === null) {
              break;
            } // HTTP-redirect fetch step 5


            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
              finalize();
              return;
            } // HTTP-redirect fetch step 6 (counter increment)
            // Create a new Request object.


            const requestOpts = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: request.body,
              signal: request.signal,
              timeout: request.timeout,
              size: request.size
            }; // HTTP-redirect fetch step 9

            if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
              reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
              finalize();
              return;
            } // HTTP-redirect fetch step 11


            if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
              requestOpts.method = 'GET';
              requestOpts.body = undefined;
              requestOpts.headers.delete('content-length');
            } // HTTP-redirect fetch step 15


            resolve(fetch(new Request(locationURL, requestOpts)));
            finalize();
            return;
        }
      } // prepare response


      res.once('end', function () {
        if (signal) signal.removeEventListener('abort', abortAndFinalize);
      });
      let body = res.pipe(new PassThrough$1$1());
      const response_options = {
        url: request.url,
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: headers,
        size: request.size,
        timeout: request.timeout,
        counter: request.counter
      }; // HTTP-network fetch step 12.1.1.3

      const codings = headers.get('Content-Encoding'); // HTTP-network fetch step 12.1.1.4: handle content codings
      // in following scenarios we ignore compression support
      // 1. compression support is disabled
      // 2. HEAD request
      // 3. no Content-Encoding header
      // 4. no content response (204)
      // 5. content not modified response (304)

      if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
        response = new Response(body, response_options);
        resolve(response);
        return;
      } // For Node v6+
      // Be less strict when decoding compressed responses, since sometimes
      // servers send slightly invalid responses that are still accepted
      // by common browsers.
      // Always using Z_SYNC_FLUSH is what cURL does.


      const zlibOptions = {
        flush: zlib__default['default'].Z_SYNC_FLUSH,
        finishFlush: zlib__default['default'].Z_SYNC_FLUSH
      }; // for gzip

      if (codings == 'gzip' || codings == 'x-gzip') {
        body = body.pipe(zlib__default['default'].createGunzip(zlibOptions));
        response = new Response(body, response_options);
        resolve(response);
        return;
      } // for deflate


      if (codings == 'deflate' || codings == 'x-deflate') {
        // handle the infamous raw deflate response from old servers
        // a hack for old IIS and Apache servers
        const raw = res.pipe(new PassThrough$1$1());
        raw.once('data', function (chunk) {
          // see http://stackoverflow.com/questions/37519828
          if ((chunk[0] & 0x0F) === 0x08) {
            body = body.pipe(zlib__default['default'].createInflate());
          } else {
            body = body.pipe(zlib__default['default'].createInflateRaw());
          }

          response = new Response(body, response_options);
          resolve(response);
        });
        return;
      } // for br


      if (codings == 'br' && typeof zlib__default['default'].createBrotliDecompress === 'function') {
        body = body.pipe(zlib__default['default'].createBrotliDecompress());
        response = new Response(body, response_options);
        resolve(response);
        return;
      } // otherwise, use response as-is


      response = new Response(body, response_options);
      resolve(response);
    });
    writeToStream(req, request);
  });
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */


fetch.isRedirect = function (code) {
  return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
}; // expose Promise


fetch.Promise = global.Promise;

var lib = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': fetch,
    Headers: Headers,
    Request: Request,
    Response: Response,
    FetchError: FetchError
});

var nodeFetch = /*@__PURE__*/getAugmentedNamespace(lib);

var nodePonyfill = createCommonjsModule(function (module, exports) {
const realFetch = nodeFetch.default || nodeFetch;

const fetch = function (url, options) {
  // Support schemaless URIs on the server for parity with the browser.
  // Ex: //github.com/ -> https://github.com/
  if (/^\/\//.test(url)) {
    url = 'https:' + url;
  }

  return realFetch.call(this, url, options);
};

fetch.ponyfill = true;
module.exports = exports = fetch;
exports.fetch = fetch;
exports.Headers = nodeFetch.Headers;
exports.Request = nodeFetch.Request;
exports.Response = nodeFetch.Response; // Needed for TypeScript consumers without esModuleInterop.

exports.default = fetch;
});

/*! pako 2.0.3 https://github.com/nodeca/pako @license (MIT AND Zlib) */
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

/* eslint-disable space-unary-ops */

/* Public constants ==========================================================*/

/* ===========================================================================*/
//const Z_FILTERED          = 1;
//const Z_HUFFMAN_ONLY      = 2;
//const Z_RLE               = 3;
const Z_FIXED = 4; //const Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */

const Z_BINARY = 0;
const Z_TEXT = 1; //const Z_ASCII             = 1; // = Z_TEXT

const Z_UNKNOWN = 2;
/*============================================================================*/

function zero(buf) {
  let len = buf.length;

  while (--len >= 0) {
    buf[len] = 0;
  }
} // From zutil.h


const STORED_BLOCK = 0;
const STATIC_TREES = 1;
const DYN_TREES = 2;
/* The three kinds of block type */

const MIN_MATCH = 3;
const MAX_MATCH = 258;
/* The minimum and maximum match lengths */
// From deflate.h

/* ===========================================================================
 * Internal compression state.
 */

const LENGTH_CODES = 29;
/* number of length codes, not counting the special END_BLOCK code */

const LITERALS = 256;
/* number of literal bytes 0..255 */

const L_CODES = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

const D_CODES = 30;
/* number of distance codes */

const BL_CODES = 19;
/* number of codes used to transfer the bit lengths */

const HEAP_SIZE = 2 * L_CODES + 1;
/* maximum heap size */

const MAX_BITS = 15;
/* All codes must not exceed MAX_BITS bits */

const Buf_size = 16;
/* size of bit buffer in bi_buf */

/* ===========================================================================
 * Constants
 */

const MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

const END_BLOCK = 256;
/* end of block literal code */

const REP_3_6 = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

const REPZ_3_10 = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

const REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */

const extra_lbits =
/* extra bits for each length code */
new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
const extra_dbits =
/* extra bits for each distance code */
new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
const extra_blbits =
/* extra bits for each bit length code */
new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
const bl_order = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */
// We pre-fill arrays with 0 to avoid uninitialized gaps

const DIST_CODE_LEN = 512;
/* see definition of array dist_code below */
// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1

const static_ltree = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

const static_dtree = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

const _dist_code = new Array(DIST_CODE_LEN);

zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

const _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);

zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

const base_length = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

const base_dist = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */

function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
  this.static_tree = static_tree;
  /* static tree or NULL */

  this.extra_bits = extra_bits;
  /* extra bits for each code or NULL */

  this.extra_base = extra_base;
  /* base index for extra_bits */

  this.elems = elems;
  /* max number of elements in the tree */

  this.max_length = max_length;
  /* max bit length for the codes */
  // show if `static_tree` has data or dummy - needed for monomorphic objects

  this.has_stree = static_tree && static_tree.length;
}

let static_l_desc;
let static_d_desc;
let static_bl_desc;

function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;
  /* the dynamic tree */

  this.max_code = 0;
  /* largest code with non zero frequency */

  this.stat_desc = stat_desc;
  /* the corresponding static tree */
}

const d_code = dist => {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};
/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */


const put_short = (s, w) => {
  //    put_byte(s, (uch)((w) & 0xff));
  //    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = w & 0xff;
  s.pending_buf[s.pending++] = w >>> 8 & 0xff;
};
/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */


const send_bits = (s, value, length) => {
  if (s.bi_valid > Buf_size - length) {
    s.bi_buf |= value << s.bi_valid & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> Buf_size - s.bi_valid;
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= value << s.bi_valid & 0xffff;
    s.bi_valid += length;
  }
};

const send_code = (s, c, tree) => {
  send_bits(s, tree[c * 2]
  /*.Code*/
  , tree[c * 2 + 1]
  /*.Len*/
  );
};
/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */


const bi_reverse = (code, len) => {
  let res = 0;

  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);

  return res >>> 1;
};
/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */


const bi_flush = s => {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;
  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
};
/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */


const gen_bitlen = (s, desc) => //    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  const tree = desc.dyn_tree;
  const max_code = desc.max_code;
  const stree = desc.stat_desc.static_tree;
  const has_stree = desc.stat_desc.has_stree;
  const extra = desc.stat_desc.extra_bits;
  const base = desc.stat_desc.extra_base;
  const max_length = desc.stat_desc.max_length;
  let h;
  /* heap index */

  let n, m;
  /* iterate over the tree elements */

  let bits;
  /* bit length */

  let xbits;
  /* extra bits */

  let f;
  /* frequency */

  let overflow = 0;
  /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }
  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */


  tree[s.heap[s.heap_max] * 2 + 1]
  /*.Len*/
  = 0;
  /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]
    /*.Dad*/
    * 2 + 1]
    /*.Len*/
    + 1;

    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }

    tree[n * 2 + 1]
    /*.Len*/
    = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) {
      continue;
    }
    /* not a leaf node */


    s.bl_count[bits]++;
    xbits = 0;

    if (n >= base) {
      xbits = extra[n - base];
    }

    f = tree[n * 2]
    /*.Freq*/
    ;
    s.opt_len += f * (bits + xbits);

    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]
      /*.Len*/
      + xbits);
    }
  }

  if (overflow === 0) {
    return;
  } // Trace((stderr,"\nbit length overflow\n"));

  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */


  do {
    bits = max_length - 1;

    while (s.bl_count[bits] === 0) {
      bits--;
    }

    s.bl_count[bits]--;
    /* move one leaf down the tree */

    s.bl_count[bits + 1] += 2;
    /* move one overflow item as its brother */

    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */

    overflow -= 2;
  } while (overflow > 0);
  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */


  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];

    while (n !== 0) {
      m = s.heap[--h];

      if (m > max_code) {
        continue;
      }

      if (tree[m * 2 + 1]
      /*.Len*/
      !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]
        /*.Len*/
        ) * tree[m * 2]
        /*.Freq*/
        ;
        tree[m * 2 + 1]
        /*.Len*/
        = bits;
      }

      n--;
    }
  }
};
/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */


const gen_codes = (tree, max_code, bl_count) => //    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  const next_code = new Array(MAX_BITS + 1);
  /* next code value for each bit length */

  let code = 0;
  /* running code value */

  let bits;
  /* bit index */

  let n;
  /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */

  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = code + bl_count[bits - 1] << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));


  for (n = 0; n <= max_code; n++) {
    let len = tree[n * 2 + 1]
    /*.Len*/
    ;

    if (len === 0) {
      continue;
    }
    /* Now reverse the bits */


    tree[n * 2]
    /*.Code*/
    = bi_reverse(next_code[len]++, len); //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
};
/* ===========================================================================
 * Initialize the various 'constant' tables.
 */


const tr_static_init = () => {
  let n;
  /* iterates over tree elements */

  let bits;
  /* bit counter */

  let length;
  /* length value */

  let code;
  /* code value */

  let dist;
  /* distance index */

  const bl_count = new Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */
  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */

  /*#ifdef NO_INIT_GLOBAL_POINTERS
    static_l_desc.static_tree = static_ltree;
    static_l_desc.extra_bits = extra_lbits;
    static_d_desc.static_tree = static_dtree;
    static_d_desc.extra_bits = extra_dbits;
    static_bl_desc.extra_bits = extra_blbits;
  #endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */

  length = 0;

  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;

    for (n = 0; n < 1 << extra_lbits[code]; n++) {
      _length_code[length++] = code;
    }
  } //Assert (length == 256, "tr_static_init: length != 256");

  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */


  _length_code[length - 1] = code;
  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */

  dist = 0;

  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;

    for (n = 0; n < 1 << extra_dbits[code]; n++) {
      _dist_code[dist++] = code;
    }
  } //Assert (dist == 256, "tr_static_init: dist != 256");


  dist >>= 7;
  /* from now on, all distances are divided by 128 */

  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;

    for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
      _dist_code[256 + dist++] = code;
    }
  } //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */


  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;

  while (n <= 143) {
    static_ltree[n * 2 + 1]
    /*.Len*/
    = 8;
    n++;
    bl_count[8]++;
  }

  while (n <= 255) {
    static_ltree[n * 2 + 1]
    /*.Len*/
    = 9;
    n++;
    bl_count[9]++;
  }

  while (n <= 279) {
    static_ltree[n * 2 + 1]
    /*.Len*/
    = 7;
    n++;
    bl_count[7]++;
  }

  while (n <= 287) {
    static_ltree[n * 2 + 1]
    /*.Len*/
    = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */


  gen_codes(static_ltree, L_CODES + 1, bl_count);
  /* The static distance tree is trivial: */

  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1]
    /*.Len*/
    = 5;
    static_dtree[n * 2]
    /*.Code*/
    = bi_reverse(n, 5);
  } // Now data ready and we can init static trees


  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS); //static_init_done = true;
};
/* ===========================================================================
 * Initialize a new block.
 */


const init_block = s => {
  let n;
  /* iterates over tree elements */

  /* Initialize the trees. */

  for (n = 0; n < L_CODES; n++) {
    s.dyn_ltree[n * 2]
    /*.Freq*/
    = 0;
  }

  for (n = 0; n < D_CODES; n++) {
    s.dyn_dtree[n * 2]
    /*.Freq*/
    = 0;
  }

  for (n = 0; n < BL_CODES; n++) {
    s.bl_tree[n * 2]
    /*.Freq*/
    = 0;
  }

  s.dyn_ltree[END_BLOCK * 2]
  /*.Freq*/
  = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
};
/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */


const bi_windup = s => {
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }

  s.bi_buf = 0;
  s.bi_valid = 0;
};
/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */


const copy_block = (s, buf, len, header) => //DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);
  /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  } //  while (len--) {
  //    put_byte(s, *buf++);
  //  }


  s.pending_buf.set(s.window.subarray(buf, buf + len), s.pending);
  s.pending += len;
};
/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */


const smaller = (tree, n, m, depth) => {
  const _n2 = n * 2;

  const _m2 = m * 2;

  return tree[_n2]
  /*.Freq*/
  < tree[_m2]
  /*.Freq*/
  || tree[_n2]
  /*.Freq*/
  === tree[_m2]
  /*.Freq*/
  && depth[n] <= depth[m];
};
/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */


const pqdownheap = (s, tree, k) => //    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  const v = s.heap[k];
  let j = k << 1;
  /* left son of k */

  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */


    if (smaller(tree, v, s.heap[j], s.depth)) {
      break;
    }
    /* Exchange v with the smallest son */


    s.heap[k] = s.heap[j];
    k = j;
    /* And continue down the tree, setting j to the left son of k */

    j <<= 1;
  }

  s.heap[k] = v;
}; // inlined manually
// const SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */


const compress_block = (s, ltree, dtree) => //    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  let dist;
  /* distance of matched string */

  let lc;
  /* match length or unmatched char (if dist == 0) */

  let lx = 0;
  /* running index in l_buf */

  let code;
  /* the code to send */

  let extra;
  /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree);
        /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree);
        /* send the length code */

        extra = extra_lbits[code];

        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);
          /* send the extra length bits */
        }

        dist--;
        /* dist is now the match distance - 1 */

        code = d_code(dist); //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);
        /* send the distance code */

        extra = extra_dbits[code];

        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);
          /* send the extra distance bits */
        }
      }
      /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
};
/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */


const build_tree = (s, desc) => //    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  const tree = desc.dyn_tree;
  const stree = desc.stat_desc.static_tree;
  const has_stree = desc.stat_desc.has_stree;
  const elems = desc.stat_desc.elems;
  let n, m;
  /* iterate over heap elements */

  let max_code = -1;
  /* largest code with non zero frequency */

  let node;
  /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */

  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]
    /*.Freq*/
    !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;
    } else {
      tree[n * 2 + 1]
      /*.Len*/
      = 0;
    }
  }
  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */


  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
    tree[node * 2]
    /*.Freq*/
    = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]
      /*.Len*/
      ;
    }
    /* node is 0 or 1 so it does not have extra bits */

  }

  desc.max_code = max_code;
  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */

  for (n = s.heap_len >> 1
  /*int /2*/
  ; n >= 1; n--) {
    pqdownheap(s, tree, n);
  }
  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */


  node = elems;
  /* next internal node of the tree */

  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */

    /*** pqremove ***/
    n = s.heap[1
    /*SMALLEST*/
    ];
    s.heap[1
    /*SMALLEST*/
    ] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1
    /*SMALLEST*/
    );
    /***/

    m = s.heap[1
    /*SMALLEST*/
    ];
    /* m = node of next least frequency */

    s.heap[--s.heap_max] = n;
    /* keep the nodes sorted by frequency */

    s.heap[--s.heap_max] = m;
    /* Create a new node father of n and m */

    tree[node * 2]
    /*.Freq*/
    = tree[n * 2]
    /*.Freq*/
    + tree[m * 2]
    /*.Freq*/
    ;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]
    /*.Dad*/
    = tree[m * 2 + 1]
    /*.Dad*/
    = node;
    /* and insert the new node in the heap */

    s.heap[1
    /*SMALLEST*/
    ] = node++;
    pqdownheap(s, tree, 1
    /*SMALLEST*/
    );
  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1
  /*SMALLEST*/
  ];
  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */

  gen_bitlen(s, desc);
  /* The field len is now set, we can generate the bit codes */

  gen_codes(tree, max_code, s.bl_count);
};
/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */


const scan_tree = (s, tree, max_code) => //    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  let n;
  /* iterates over all tree elements */

  let prevlen = -1;
  /* last emitted length */

  let curlen;
  /* length of current code */

  let nextlen = tree[0 * 2 + 1]
  /*.Len*/
  ;
  /* length of next code */

  let count = 0;
  /* repeat count of the current code */

  let max_count = 7;
  /* max repeat count */

  let min_count = 4;
  /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  tree[(max_code + 1) * 2 + 1]
  /*.Len*/
  = 0xffff;
  /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]
    /*.Len*/
    ;

    if (++count < max_count && curlen === nextlen) {
      continue;
    } else if (count < min_count) {
      s.bl_tree[curlen * 2]
      /*.Freq*/
      += count;
    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        s.bl_tree[curlen * 2] /*.Freq*/++;
      }

      s.bl_tree[REP_3_6 * 2] /*.Freq*/++;
    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2] /*.Freq*/++;
    } else {
      s.bl_tree[REPZ_11_138 * 2] /*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};
/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */


const send_tree = (s, tree, max_code) => //    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  let n;
  /* iterates over all tree elements */

  let prevlen = -1;
  /* last emitted length */

  let curlen;
  /* length of current code */

  let nextlen = tree[0 * 2 + 1]
  /*.Len*/
  ;
  /* length of next code */

  let count = 0;
  /* repeat count of the current code */

  let max_count = 7;
  /* max repeat count */

  let min_count = 4;
  /* min repeat count */

  /* tree[max_code+1].Len = -1; */

  /* guard already set */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]
    /*.Len*/
    ;

    if (++count < max_count && curlen === nextlen) {
      continue;
    } else if (count < min_count) {
      do {
        send_code(s, curlen, s.bl_tree);
      } while (--count !== 0);
    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      } //Assert(count >= 3 && count <= 6, " 3_6?");


      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);
    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);
    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};
/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */


const build_bl_tree = s => {
  let max_blindex;
  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */

  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
  /* Build the bit length tree: */

  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */

  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]
    /*.Len*/
    !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */


  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4; //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
};
/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */


const send_all_trees = (s, lcodes, dcodes, blcodes) => //    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  let rank;
  /* index in bl_order */
  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));

  send_bits(s, lcodes - 257, 5);
  /* not +255 as stated in appnote.txt */

  send_bits(s, dcodes - 1, 5);
  send_bits(s, blcodes - 4, 4);
  /* not -3 as stated in appnote.txt */

  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]
    /*.Len*/
    , 3);
  } //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));


  send_tree(s, s.dyn_ltree, lcodes - 1);
  /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1);
  /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
};
/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */


const detect_data_type = s => {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  let black_mask = 0xf3ffc07f;
  let n;
  /* Check for non-textual ("black-listed") bytes. */

  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if (black_mask & 1 && s.dyn_ltree[n * 2]
    /*.Freq*/
    !== 0) {
      return Z_BINARY;
    }
  }
  /* Check for textual ("white-listed") bytes. */


  if (s.dyn_ltree[9 * 2]
  /*.Freq*/
  !== 0 || s.dyn_ltree[10 * 2]
  /*.Freq*/
  !== 0 || s.dyn_ltree[13 * 2]
  /*.Freq*/
  !== 0) {
    return Z_TEXT;
  }

  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]
    /*.Freq*/
    !== 0) {
      return Z_TEXT;
    }
  }
  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */


  return Z_BINARY;
};

let static_init_done = false;
/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */

const _tr_init = s => {
  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
  s.bi_buf = 0;
  s.bi_valid = 0;
  /* Initialize the first block of the first file: */

  init_block(s);
};
/* ===========================================================================
 * Send a stored block
 */


const _tr_stored_block = (s, buf, stored_len, last) => //DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
  /* send block type */

  copy_block(s, buf, stored_len, true);
  /* with header */
};
/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */


const _tr_align = s => {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
};
/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */


const _tr_flush_block = (s, buf, stored_len, last) => //DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  let opt_lenb, static_lenb;
  /* opt_len and static_len in bytes */

  let max_blindex = 0;
  /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */

  if (s.level > 0) {
    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }
    /* Construct the literal and distance trees */


    build_tree(s, s.l_desc); // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc); // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */

    max_blindex = build_bl_tree(s);
    /* Determine the best encoding. Compute the block lengths in bytes. */

    opt_lenb = s.opt_len + 3 + 7 >>> 3;
    static_lenb = s.static_len + 3 + 7 >>> 3; // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) {
      opt_lenb = static_lenb;
    }
  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5;
    /* force a stored block */
  }

  if (stored_len + 4 <= opt_lenb && buf !== -1) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);
  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);
  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  } // Assert (s->compressed_len == s->bits_sent, "bad compressed size");

  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */


  init_block(s);

  if (last) {
    bi_windup(s);
  } // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));

};
/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */


const _tr_tally = (s, dist, lc) => //    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //let out_length, in_length, dcode;
  s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;
  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2] /*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */

    dist--;
    /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2] /*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2] /*.Freq*/++;
  } // (!) This block is disabled in zlib defaults,
  // don't enable it for binary compatibility
  //#ifdef TRUNCATE_BLOCK
  //  /* Try to guess if it is profitable to stop the current block here */
  //  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
  //    /* Compute an upper bound for the compressed length */
  //    out_length = s.last_lit*8;
  //    in_length = s.strstart - s.block_start;
  //
  //    for (dcode = 0; dcode < D_CODES; dcode++) {
  //      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
  //    }
  //    out_length >>>= 3;
  //    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
  //    //       s->last_lit, in_length, out_length,
  //    //       100L - out_length*100L/in_length));
  //    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
  //      return true;
  //    }
  //  }
  //#endif


  return s.last_lit === s.lit_bufsize - 1;
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
};

var _tr_init_1 = _tr_init;
var _tr_stored_block_1 = _tr_stored_block;
var _tr_flush_block_1 = _tr_flush_block;
var _tr_tally_1 = _tr_tally;
var _tr_align_1 = _tr_align;
var trees = {
  _tr_init: _tr_init_1,
  _tr_stored_block: _tr_stored_block_1,
  _tr_flush_block: _tr_flush_block_1,
  _tr_tally: _tr_tally_1,
  _tr_align: _tr_align_1
}; // Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const adler32 = (adler, buf, len, pos) => {
  let s1 = adler & 0xffff | 0,
      s2 = adler >>> 16 & 0xffff | 0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = s1 + buf[pos++] | 0;
      s2 = s2 + s1 | 0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return s1 | s2 << 16 | 0;
};

var adler32_1 = adler32; // Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// Use ordinary array, since untyped makes no boost here

const makeTable = () => {
  let c,
      table = [];

  for (var n = 0; n < 256; n++) {
    c = n;

    for (var k = 0; k < 8; k++) {
      c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
    }

    table[n] = c;
  }

  return table;
}; // Create table on load. Just 255 signed longs. Not a problem.


const crcTable = new Uint32Array(makeTable());

const crc32 = (crc, buf, len, pos) => {
  const t = crcTable;
  const end = pos + len;
  crc ^= -1;

  for (let i = pos; i < end; i++) {
    crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return crc ^ -1; // >>> 0;
};

var crc32_1 = crc32; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var messages = {
  2: 'need dictionary',

  /* Z_NEED_DICT       2  */
  1: 'stream end',

  /* Z_STREAM_END      1  */
  0: '',

  /* Z_OK              0  */
  '-1': 'file error',

  /* Z_ERRNO         (-1) */
  '-2': 'stream error',

  /* Z_STREAM_ERROR  (-2) */
  '-3': 'data error',

  /* Z_DATA_ERROR    (-3) */
  '-4': 'insufficient memory',

  /* Z_MEM_ERROR     (-4) */
  '-5': 'buffer error',

  /* Z_BUF_ERROR     (-5) */
  '-6': 'incompatible version'
  /* Z_VERSION_ERROR (-6) */

}; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var constants = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,

  /* The deflate compression method */
  Z_DEFLATED: 8 //Z_NULL:                 null // Use -1 or null inline, depending on var type

}; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const {
  _tr_init: _tr_init$1,
  _tr_stored_block: _tr_stored_block$1,
  _tr_flush_block: _tr_flush_block$1,
  _tr_tally: _tr_tally$1,
  _tr_align: _tr_align$1
} = trees;
/* Public constants ==========================================================*/

/* ===========================================================================*/

const {
  Z_NO_FLUSH,
  Z_PARTIAL_FLUSH,
  Z_FULL_FLUSH,
  Z_FINISH,
  Z_BLOCK,
  Z_OK,
  Z_STREAM_END,
  Z_STREAM_ERROR,
  Z_DATA_ERROR,
  Z_BUF_ERROR,
  Z_DEFAULT_COMPRESSION,
  Z_FILTERED,
  Z_HUFFMAN_ONLY,
  Z_RLE,
  Z_FIXED: Z_FIXED$1,
  Z_DEFAULT_STRATEGY,
  Z_UNKNOWN: Z_UNKNOWN$1,
  Z_DEFLATED
} = constants;
/*============================================================================*/

const MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */

const MAX_WBITS = 15;
/* 32K LZ77 window */

const DEF_MEM_LEVEL = 8;
const LENGTH_CODES$1 = 29;
/* number of length codes, not counting the special END_BLOCK code */

const LITERALS$1 = 256;
/* number of literal bytes 0..255 */

const L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;
/* number of Literal or Length codes, including the END_BLOCK code */

const D_CODES$1 = 30;
/* number of distance codes */

const BL_CODES$1 = 19;
/* number of codes used to transfer the bit lengths */

const HEAP_SIZE$1 = 2 * L_CODES$1 + 1;
/* maximum heap size */

const MAX_BITS$1 = 15;
/* All codes must not exceed MAX_BITS bits */

const MIN_MATCH$1 = 3;
const MAX_MATCH$1 = 258;
const MIN_LOOKAHEAD = MAX_MATCH$1 + MIN_MATCH$1 + 1;
const PRESET_DICT = 0x20;
const INIT_STATE = 42;
const EXTRA_STATE = 69;
const NAME_STATE = 73;
const COMMENT_STATE = 91;
const HCRC_STATE = 103;
const BUSY_STATE = 113;
const FINISH_STATE = 666;
const BS_NEED_MORE = 1;
/* block not completed, need more input or more output */

const BS_BLOCK_DONE = 2;
/* block flush performed */

const BS_FINISH_STARTED = 3;
/* finish started, need only more output at next deflate */

const BS_FINISH_DONE = 4;
/* finish done, accept no more input or output */

const OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

const err = (strm, errorCode) => {
  strm.msg = messages[errorCode];
  return errorCode;
};

const rank = f => {
  return (f << 1) - (f > 4 ? 9 : 0);
};

const zero$1 = buf => {
  let len = buf.length;

  while (--len >= 0) {
    buf[len] = 0;
  }
};
/* eslint-disable new-cap */


let HASH_ZLIB = (s, prev, data) => (prev << s.hash_shift ^ data) & s.hash_mask; // This hash causes less collisions, https://github.com/nodeca/pako/issues/135
// But breaks binary compatibility
//let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;


let HASH = HASH_ZLIB;
/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */

const flush_pending = strm => {
  const s = strm.state; //_tr_flush_bits(s);

  let len = s.pending;

  if (len > strm.avail_out) {
    len = strm.avail_out;
  }

  if (len === 0) {
    return;
  }

  strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;

  if (s.pending === 0) {
    s.pending_out = 0;
  }
};

const flush_block_only = (s, last) => {
  _tr_flush_block$1(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);

  s.block_start = s.strstart;
  flush_pending(s.strm);
};

const put_byte = (s, b) => {
  s.pending_buf[s.pending++] = b;
};
/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */


const putShortMSB = (s, b) => {
  //  put_byte(s, (Byte)(b >> 8));
  //  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = b >>> 8 & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
};
/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */


const read_buf = (strm, buf, start, size) => {
  let len = strm.avail_in;

  if (len > size) {
    len = size;
  }

  if (len === 0) {
    return 0;
  }

  strm.avail_in -= len; // zmemcpy(buf, strm->next_in, len);

  buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);

  if (strm.state.wrap === 1) {
    strm.adler = adler32_1(strm.adler, buf, len, start);
  } else if (strm.state.wrap === 2) {
    strm.adler = crc32_1(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;
  return len;
};
/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */


const longest_match = (s, cur_match) => {
  let chain_length = s.max_chain_length;
  /* max hash chain length */

  let scan = s.strstart;
  /* current string */

  let match;
  /* matched string */

  let len;
  /* length of current match */

  let best_len = s.prev_length;
  /* best match length so far */

  let nice_match = s.nice_match;
  /* stop if match long enough */

  const limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0
  /*NIL*/
  ;
  const _win = s.window; // shortcut

  const wmask = s.w_mask;
  const prev = s.prev;
  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  const strend = s.strstart + MAX_MATCH$1;
  let scan_end1 = _win[scan + best_len - 1];
  let scan_end = _win[scan + best_len];
  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */

  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */


  if (nice_match > s.lookahead) {
    nice_match = s.lookahead;
  } // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");


  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;
    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
      continue;
    }
    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */


    scan += 2;
    match++; // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */

    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend); // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");


    len = MAX_MATCH$1 - (strend - scan);
    scan = strend - MAX_MATCH$1;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;

      if (len >= nice_match) {
        break;
      }

      scan_end1 = _win[scan + best_len - 1];
      scan_end = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }

  return s.lookahead;
};
/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */


const fill_window = s => {
  const _w_size = s.w_size;
  let p, n, m, more, str; //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart; // JS ints have 32 bit, block below not needed

    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}

    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */

    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
      s.window.set(s.window.subarray(_w_size, _w_size + _w_size), 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */

      s.block_start -= _w_size;
      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;

      do {
        m = s.head[--p];
        s.head[p] = m >= _w_size ? m - _w_size : 0;
      } while (--n);

      n = _w_size;
      p = n;

      do {
        m = s.prev[--p];
        s.prev[p] = m >= _w_size ? m - _w_size : 0;
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }

    if (s.strm.avail_in === 0) {
      break;
    }
    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");


    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;
    /* Initialize the hash value now that we have some input: */

    if (s.lookahead + s.insert >= MIN_MATCH$1) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];
      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */

      s.ins_h = HASH(s, s.ins_h, s.window[str + 1]); //#if MIN_MATCH != 3
      //        Call update_hash() MIN_MATCH-3 more times
      //#endif

      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH$1 - 1]);
        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;

        if (s.lookahead + s.insert < MIN_MATCH$1) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
  //  if (s.high_water < s.window_size) {
  //    const curr = s.strstart + s.lookahead;
  //    let init = 0;
  //
  //    if (s.high_water < curr) {
  //      /* Previous high water mark below current data -- zero WIN_INIT
  //       * bytes or up to end of window, whichever is less.
  //       */
  //      init = s.window_size - curr;
  //      if (init > WIN_INIT)
  //        init = WIN_INIT;
  //      zmemzero(s->window + curr, (unsigned)init);
  //      s->high_water = curr + init;
  //    }
  //    else if (s->high_water < (ulg)curr + WIN_INIT) {
  //      /* High water mark at or above current data, but below current data
  //       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
  //       * to end of window, whichever is less.
  //       */
  //      init = (ulg)curr + WIN_INIT - s->high_water;
  //      if (init > s->window_size - s->high_water)
  //        init = s->window_size - s->high_water;
  //      zmemzero(s->window + s->high_water, (unsigned)init);
  //      s->high_water += init;
  //    }
  //  }
  //
  //  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
  //    "not enough room for search");

};
/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */


const deflate_stored = (s, flush) => {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  let max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }
  /* Copy as much as possible from input to output: */


  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {
      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
      //      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
      //        s.block_start >= s.w_size)) {
      //        throw  new Error("slide too late");
      //      }
      fill_window(s);

      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */

    } //Assert(s->block_start >= 0L, "block gone");
    //    if (s.block_start < 0) throw new Error("block gone");


    s.strstart += s.lookahead;
    s.lookahead = 0;
    /* Emit a stored block if pending_buf will be full: */

    const max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/

      flush_block_only(s, false);

      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/

    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */


    if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);

      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/

    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);

    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/


    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);

    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/

  }

  return BS_NEED_MORE;
};
/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */


const deflate_fast = (s, flush) => {
  let hash_head;
  /* head of the hash chain */

  let bflush;
  /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);

      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
        /* flush the current block */
      }
    }
    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */


    hash_head = 0
    /*NIL*/
    ;

    if (s.lookahead >= MIN_MATCH$1) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH$1 - 1]);
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }
    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */


    if (hash_head !== 0
    /*NIL*/
    && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }

    if (s.match_length >= MIN_MATCH$1) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally$1(s, s.strstart - s.match_start, s.match_length - MIN_MATCH$1);
      s.lookahead -= s.match_length;
      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */

      if (s.match_length <= s.max_lazy_match
      /*max_insert_length*/
      && s.lookahead >= MIN_MATCH$1) {
        s.match_length--;
        /* string at strstart already in table */

        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/

          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH$1 - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/

          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);

        s.strstart++;
      } else {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */

        s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]); //#if MIN_MATCH != 3
        //                Call UPDATE_HASH() MIN_MATCH-3 more times
        //#endif

        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));

      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally$1(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
    }

    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);

      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/

    }
  }

  s.insert = s.strstart < MIN_MATCH$1 - 1 ? s.strstart : MIN_MATCH$1 - 1;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);

    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/


    return BS_FINISH_DONE;
  }

  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);

    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/

  }

  return BS_BLOCK_DONE;
};
/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */


const deflate_slow = (s, flush) => {
  let hash_head;
  /* head of hash chain */

  let bflush;
  /* set if current block must be flushed */

  let max_insert;
  /* Process the input block. */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);

      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */

    }
    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */


    hash_head = 0
    /*NIL*/
    ;

    if (s.lookahead >= MIN_MATCH$1) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH$1 - 1]);
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }
    /* Find the longest match, discarding those <= prev_length.
     */


    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH$1 - 1;

    if (hash_head !== 0
    /*NIL*/
    && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD
    /*MAX_DIST(s)*/
    ) {
        /* To simplify the code, we prevent matches with the string
         * of window index 0 (in particular we have to avoid a match
         * of the string with itself at the start of the input file).
         */
        s.match_length = longest_match(s, hash_head);
        /* longest_match() sets match_start */

        if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH$1 && s.strstart - s.match_start > 4096
        /*TOO_FAR*/
        )) {
          /* If prev_match is also MIN_MATCH, match_start is garbage
           * but we will ignore the current match anyway.
           */
          s.match_length = MIN_MATCH$1 - 1;
        }
      }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */


    if (s.prev_length >= MIN_MATCH$1 && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH$1;
      /* Do not insert strings in hash table beyond this. */
      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/

      bflush = _tr_tally$1(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH$1);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */

      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;

      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH$1 - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);

      s.match_available = 0;
      s.match_length = MIN_MATCH$1 - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);

        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/

      }
    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));

      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = _tr_tally$1(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }

      s.strstart++;
      s.lookahead--;

      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  } //Assert (flush != Z_NO_FLUSH, "no flush?");


  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));

    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = _tr_tally$1(s, 0, s.window[s.strstart - 1]);
    s.match_available = 0;
  }

  s.insert = s.strstart < MIN_MATCH$1 - 1 ? s.strstart : MIN_MATCH$1 - 1;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);

    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/


    return BS_FINISH_DONE;
  }

  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);

    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/

  }

  return BS_BLOCK_DONE;
};
/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */


const deflate_rle = (s, flush) => {
  let bflush;
  /* set if current block must be flushed */

  let prev;
  /* byte at distance one to match */

  let scan, strend;
  /* scan goes up to strend for length of run */

  const _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH$1) {
      fill_window(s);

      if (s.lookahead <= MAX_MATCH$1 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */

    }
    /* See how many times the previous byte repeats */


    s.match_length = 0;

    if (s.lookahead >= MIN_MATCH$1 && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];

      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH$1;

        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);

        s.match_length = MAX_MATCH$1 - (strend - scan);

        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      } //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");

    }
    /* Emit match if have run of MIN_MATCH or longer, else emit literal */


    if (s.match_length >= MIN_MATCH$1) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally$1(s, 1, s.match_length - MIN_MATCH$1);
      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));

      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally$1(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
    }

    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);

      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/

    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);

    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/


    return BS_FINISH_DONE;
  }

  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);

    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/

  }

  return BS_BLOCK_DONE;
};
/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */


const deflate_huff = (s, flush) => {
  let bflush;
  /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);

      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }

        break;
        /* flush the current block */
      }
    }
    /* Output a literal byte */


    s.match_length = 0; //Tracevv((stderr,"%c", s->window[s->strstart]));

    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/

    bflush = _tr_tally$1(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;

    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);

      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/

    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);

    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/


    return BS_FINISH_DONE;
  }

  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);

    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/

  }

  return BS_BLOCK_DONE;
};
/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */


function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

const configuration_table = [
/*      good lazy nice chain */
new Config(0, 0, 0, 0, deflate_stored),
/* 0 store only */
new Config(4, 4, 8, 4, deflate_fast),
/* 1 max speed, no lazy matches */
new Config(4, 5, 16, 8, deflate_fast),
/* 2 */
new Config(4, 6, 32, 32, deflate_fast),
/* 3 */
new Config(4, 4, 16, 16, deflate_slow),
/* 4 lazy matches */
new Config(8, 16, 32, 32, deflate_slow),
/* 5 */
new Config(8, 16, 128, 128, deflate_slow),
/* 6 */
new Config(8, 32, 128, 256, deflate_slow),
/* 7 */
new Config(32, 128, 258, 1024, deflate_slow),
/* 8 */
new Config(32, 258, 258, 4096, deflate_slow)
/* 9 max compression */
];
/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */

const lm_init = s => {
  s.window_size = 2 * s.w_size;
  /*** CLEAR_HASH(s); ***/

  zero$1(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */

  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;
  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH$1 - 1;
  s.match_available = 0;
  s.ins_h = 0;
};

function DeflateState() {
  this.strm = null;
  /* pointer back to this zlib stream */

  this.status = 0;
  /* as the name implies */

  this.pending_buf = null;
  /* output still pending */

  this.pending_buf_size = 0;
  /* size of pending_buf */

  this.pending_out = 0;
  /* next pending byte to output to the stream */

  this.pending = 0;
  /* nb of bytes in the pending buffer */

  this.wrap = 0;
  /* bit 0 true for zlib, bit 1 true for gzip */

  this.gzhead = null;
  /* gzip header information to write */

  this.gzindex = 0;
  /* where in extra, name, or comment */

  this.method = Z_DEFLATED;
  /* can only be DEFLATED */

  this.last_flush = -1;
  /* value of flush param for previous deflate call */

  this.w_size = 0;
  /* LZ77 window size (32K by default) */

  this.w_bits = 0;
  /* log2(w_size)  (8..16) */

  this.w_mask = 0;
  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;
  /* Heads of the hash chains or NIL. */

  this.ins_h = 0;
  /* hash index of string to be inserted */

  this.hash_size = 0;
  /* number of elements in hash table */

  this.hash_bits = 0;
  /* log2(hash_size) */

  this.hash_mask = 0;
  /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;
  /* length of best match */

  this.prev_match = 0;
  /* previous match */

  this.match_available = 0;
  /* set if previous match exists */

  this.strstart = 0;
  /* start of string to insert */

  this.match_start = 0;
  /* start of matching string */

  this.lookahead = 0;
  /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;

  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;
  /* compression level (1..9) */

  this.strategy = 0;
  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0;
  /* Stop searching when current match exceeds this */

  /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */
  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective

  this.dyn_ltree = new Uint16Array(HEAP_SIZE$1 * 2);
  this.dyn_dtree = new Uint16Array((2 * D_CODES$1 + 1) * 2);
  this.bl_tree = new Uint16Array((2 * BL_CODES$1 + 1) * 2);
  zero$1(this.dyn_ltree);
  zero$1(this.dyn_dtree);
  zero$1(this.bl_tree);
  this.l_desc = null;
  /* desc. for literal tree */

  this.d_desc = null;
  /* desc. for distance tree */

  this.bl_desc = null;
  /* desc. for bit length tree */
  //ush bl_count[MAX_BITS+1];

  this.bl_count = new Uint16Array(MAX_BITS$1 + 1);
  /* number of codes at each bit length for an optimal tree */
  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */

  this.heap = new Uint16Array(2 * L_CODES$1 + 1);
  /* heap used to build the Huffman trees */

  zero$1(this.heap);
  this.heap_len = 0;
  /* number of elements in the heap */

  this.heap_max = 0;
  /* element of largest frequency */

  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new Uint16Array(2 * L_CODES$1 + 1); //uch depth[2*L_CODES+1];

  zero$1(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;
  /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;
  /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;
  /* bit length of current block with optimal trees */

  this.static_len = 0;
  /* bit length of current block with static trees */

  this.matches = 0;
  /* number of string matches in current block */

  this.insert = 0;
  /* bytes at end of window left to insert */

  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */

  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */
  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;

  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}

const deflateResetKeep = strm => {
  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN$1;
  const s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }

  s.status = s.wrap ? INIT_STATE : BUSY_STATE;
  strm.adler = s.wrap === 2 ? 0 // crc32(0, Z_NULL, 0)
  : 1; // adler32(0, Z_NULL, 0)

  s.last_flush = Z_NO_FLUSH;

  _tr_init$1(s);

  return Z_OK;
};

const deflateReset = strm => {
  const ret = deflateResetKeep(strm);

  if (ret === Z_OK) {
    lm_init(strm.state);
  }

  return ret;
};

const deflateSetHeader = (strm, head) => {
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR;
  }

  if (strm.state.wrap !== 2) {
    return Z_STREAM_ERROR;
  }

  strm.state.gzhead = head;
  return Z_OK;
};

const deflateInit2 = (strm, level, method, windowBits, memLevel, strategy) => {
  if (!strm) {
    // === Z_NULL
    return Z_STREAM_ERROR;
  }

  let wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) {
    /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  } else if (windowBits > 15) {
    wrap = 2;
    /* write gzip wrapper instead */

    windowBits -= 16;
  }

  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED$1) {
    return err(strm, Z_STREAM_ERROR);
  }

  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */


  const s = new DeflateState();
  strm.state = s;
  s.strm = strm;
  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;
  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH$1 - 1) / MIN_MATCH$1);
  s.window = new Uint8Array(s.w_size * 2);
  s.head = new Uint16Array(s.hash_size);
  s.prev = new Uint16Array(s.w_size); // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << memLevel + 6;
  /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4; //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;

  s.pending_buf = new Uint8Array(s.pending_buf_size); // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);

  s.d_buf = 1 * s.lit_bufsize; //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;

  s.l_buf = (1 + 2) * s.lit_bufsize;
  s.level = level;
  s.strategy = strategy;
  s.method = method;
  return deflateReset(strm);
};

const deflateInit = (strm, level) => {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
};

const deflate = (strm, flush) => {
  let beg, val; // for gzip header write only

  if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  const s = strm.state;

  if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) {
    return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm;
  /* just in case */

  const old_flush = s.last_flush;
  s.last_flush = flush;
  /* Write the header */

  if (s.status === INIT_STATE) {
    if (s.wrap === 2) {
      // GZIP header
      strm.adler = 0; //crc32(0L, Z_NULL, 0);

      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);

      if (!s.gzhead) {
        // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      } else {
        put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, s.gzhead.time >> 8 & 0xff);
        put_byte(s, s.gzhead.time >> 16 & 0xff);
        put_byte(s, s.gzhead.time >> 24 & 0xff);
        put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
        put_byte(s, s.gzhead.os & 0xff);

        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, s.gzhead.extra.length >> 8 & 0xff);
        }

        if (s.gzhead.hcrc) {
          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
        }

        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    } else // DEFLATE header
      {
        let header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
        let level_flags = -1;

        if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
          level_flags = 0;
        } else if (s.level < 6) {
          level_flags = 1;
        } else if (s.level === 6) {
          level_flags = 2;
        } else {
          level_flags = 3;
        }

        header |= level_flags << 6;

        if (s.strstart !== 0) {
          header |= PRESET_DICT;
        }

        header += 31 - header % 31;
        s.status = BUSY_STATE;
        putShortMSB(s, header);
        /* Save the adler32 of the preset dictionary: */

        if (s.strstart !== 0) {
          putShortMSB(s, strm.adler >>> 16);
          putShortMSB(s, strm.adler & 0xffff);
        }

        strm.adler = 1; // adler32(0L, Z_NULL, 0);
      }
  } //#ifdef GZIP


  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra
    /* != Z_NULL*/
    ) {
        beg = s.pending;
        /* start of bytes to update crc */

        while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
          if (s.pending === s.pending_buf_size) {
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
            }

            flush_pending(strm);
            beg = s.pending;

            if (s.pending === s.pending_buf_size) {
              break;
            }
          }

          put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
          s.gzindex++;
        }

        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
        }

        if (s.gzindex === s.gzhead.extra.length) {
          s.gzindex = 0;
          s.status = NAME_STATE;
        }
      } else {
      s.status = NAME_STATE;
    }
  }

  if (s.status === NAME_STATE) {
    if (s.gzhead.name
    /* != Z_NULL*/
    ) {
        beg = s.pending;
        /* start of bytes to update crc */
        //int val;

        do {
          if (s.pending === s.pending_buf_size) {
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
            }

            flush_pending(strm);
            beg = s.pending;

            if (s.pending === s.pending_buf_size) {
              val = 1;
              break;
            }
          } // JS specific: little magic to add zero terminator to end of string


          if (s.gzindex < s.gzhead.name.length) {
            val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
          } else {
            val = 0;
          }

          put_byte(s, val);
        } while (val !== 0);

        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
        }

        if (val === 0) {
          s.gzindex = 0;
          s.status = COMMENT_STATE;
        }
      } else {
      s.status = COMMENT_STATE;
    }
  }

  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment
    /* != Z_NULL*/
    ) {
        beg = s.pending;
        /* start of bytes to update crc */
        //int val;

        do {
          if (s.pending === s.pending_buf_size) {
            if (s.gzhead.hcrc && s.pending > beg) {
              strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
            }

            flush_pending(strm);
            beg = s.pending;

            if (s.pending === s.pending_buf_size) {
              val = 1;
              break;
            }
          } // JS specific: little magic to add zero terminator to end of string


          if (s.gzindex < s.gzhead.comment.length) {
            val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
          } else {
            val = 0;
          }

          put_byte(s, val);
        } while (val !== 0);

        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
        }

        if (val === 0) {
          s.status = HCRC_STATE;
        }
      } else {
      s.status = HCRC_STATE;
    }
  }

  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }

      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, strm.adler >> 8 & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);

        s.status = BUSY_STATE;
      }
    } else {
      s.status = BUSY_STATE;
    }
  } //#endif

  /* Flush as much pending output as possible */


  if (s.pending !== 0) {
    flush_pending(strm);

    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }
    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */

  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }
  /* User must not provide more input after the first FINISH: */


  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }
  /* Start a new block or continue the current one.
   */


  if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
    let bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }

    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }

      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }

    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        _tr_align$1(s);
      } else if (flush !== Z_BLOCK) {
        /* FULL_FLUSH or SYNC_FLUSH */
        _tr_stored_block$1(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */


        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/

          /* forget history */
          zero$1(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }

      flush_pending(strm);

      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR at next call, see above */

        return Z_OK;
      }
    }
  } //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}


  if (flush !== Z_FINISH) {
    return Z_OK;
  }

  if (s.wrap <= 0) {
    return Z_STREAM_END;
  }
  /* Write the trailer */


  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, strm.adler >> 8 & 0xff);
    put_byte(s, strm.adler >> 16 & 0xff);
    put_byte(s, strm.adler >> 24 & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, strm.total_in >> 8 & 0xff);
    put_byte(s, strm.total_in >> 16 & 0xff);
    put_byte(s, strm.total_in >> 24 & 0xff);
  } else {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */

  if (s.wrap > 0) {
    s.wrap = -s.wrap;
  }
  /* write the trailer only once! */


  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
};

const deflateEnd = strm => {
  if (!strm
  /*== Z_NULL*/
  || !strm.state
  /*== Z_NULL*/
  ) {
      return Z_STREAM_ERROR;
    }

  const status = strm.state.status;

  if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;
  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
};
/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */


const deflateSetDictionary = (strm, dictionary) => {
  let dictLength = dictionary.length;

  if (!strm
  /*== Z_NULL*/
  || !strm.state
  /*== Z_NULL*/
  ) {
      return Z_STREAM_ERROR;
    }

  const s = strm.state;
  const wrap = s.wrap;

  if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
    return Z_STREAM_ERROR;
  }
  /* when using zlib wrappers, compute Adler-32 for provided dictionary */


  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;
  /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */

  if (dictLength >= s.w_size) {
    if (wrap === 0) {
      /* already empty otherwise */

      /*** CLEAR_HASH(s); ***/
      zero$1(s.head); // Fill with NIL (= 0);

      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);


    let tmpDict = new Uint8Array(s.w_size);
    tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */


  const avail = strm.avail_in;
  const next = strm.next_in;
  const input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);

  while (s.lookahead >= MIN_MATCH$1) {
    let str = s.strstart;
    let n = s.lookahead - (MIN_MATCH$1 - 1);

    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH$1 - 1]);
      s.prev[str & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = str;
      str++;
    } while (--n);

    s.strstart = str;
    s.lookahead = MIN_MATCH$1 - 1;
    fill_window(s);
  }

  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH$1 - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK;
};

var deflateInit_1 = deflateInit;
var deflateInit2_1 = deflateInit2;
var deflateReset_1 = deflateReset;
var deflateResetKeep_1 = deflateResetKeep;
var deflateSetHeader_1 = deflateSetHeader;
var deflate_2 = deflate;
var deflateEnd_1 = deflateEnd;
var deflateSetDictionary_1 = deflateSetDictionary;
var deflateInfo = 'pako deflate (from Nodeca project)';
/* Not implemented
module.exports.deflateBound = deflateBound;
module.exports.deflateCopy = deflateCopy;
module.exports.deflateParams = deflateParams;
module.exports.deflatePending = deflatePending;
module.exports.deflatePrime = deflatePrime;
module.exports.deflateTune = deflateTune;
*/

var deflate_1 = {
  deflateInit: deflateInit_1,
  deflateInit2: deflateInit2_1,
  deflateReset: deflateReset_1,
  deflateResetKeep: deflateResetKeep_1,
  deflateSetHeader: deflateSetHeader_1,
  deflate: deflate_2,
  deflateEnd: deflateEnd_1,
  deflateSetDictionary: deflateSetDictionary_1,
  deflateInfo: deflateInfo
};

const _has = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

var assign = function (obj
/*from1, from2, from3, ...*/
) {
  const sources = Array.prototype.slice.call(arguments, 1);

  while (sources.length) {
    const source = sources.shift();

    if (!source) {
      continue;
    }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (const p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
}; // Join array of chunks to single array.


var flattenChunks = chunks => {
  // calculate data length
  let len = 0;

  for (let i = 0, l = chunks.length; i < l; i++) {
    len += chunks[i].length;
  } // join chunks


  const result = new Uint8Array(len);

  for (let i = 0, pos = 0, l = chunks.length; i < l; i++) {
    let chunk = chunks[i];
    result.set(chunk, pos);
    pos += chunk.length;
  }

  return result;
};

var common = {
  assign: assign,
  flattenChunks: flattenChunks
}; // String encode/decode helpers
// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//

let STR_APPLY_UIA_OK = true;

try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch (__) {
  STR_APPLY_UIA_OK = false;
} // Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff


const _utf8len = new Uint8Array(256);

for (let q = 0; q < 256; q++) {
  _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
}

_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start
// convert string to array (typed, when possible)

var string2buf = str => {
  let buf,
      c,
      c2,
      m_pos,
      i,
      str_len = str.length,
      buf_len = 0; // count binary size

  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);

    if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
      c2 = str.charCodeAt(m_pos + 1);

      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }

    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  } // allocate buffer


  buf = new Uint8Array(buf_len); // convert

  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);

    if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
      c2 = str.charCodeAt(m_pos + 1);

      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }

    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | c >>> 6;
      buf[i++] = 0x80 | c & 0x3f;
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | c >>> 12;
      buf[i++] = 0x80 | c >>> 6 & 0x3f;
      buf[i++] = 0x80 | c & 0x3f;
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | c >>> 18;
      buf[i++] = 0x80 | c >>> 12 & 0x3f;
      buf[i++] = 0x80 | c >>> 6 & 0x3f;
      buf[i++] = 0x80 | c & 0x3f;
    }
  }

  return buf;
}; // Helper


const buf2binstring = (buf, len) => {
  // On Chrome, the arguments in a function call that are allowed is `65534`.
  // If the length of the buffer is smaller than that, we can use this optimization,
  // otherwise we will take a slower path.
  if (len < 65534) {
    if (buf.subarray && STR_APPLY_UIA_OK) {
      return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
    }
  }

  let result = '';

  for (let i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }

  return result;
}; // convert array to string


var buf2string = (buf, max) => {
  let i, out;
  const len = max || buf.length; // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.

  const utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    let c = buf[i++]; // quick process ascii

    if (c < 0x80) {
      utf16buf[out++] = c;
      continue;
    }

    let c_len = _utf8len[c]; // skip 5 & 6 byte codes

    if (c_len > 4) {
      utf16buf[out++] = 0xfffd;
      i += c_len - 1;
      continue;
    } // apply mask on first byte


    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07; // join the rest

    while (c_len > 1 && i < len) {
      c = c << 6 | buf[i++] & 0x3f;
      c_len--;
    } // terminated by end of string?


    if (c_len > 1) {
      utf16buf[out++] = 0xfffd;
      continue;
    }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
      utf16buf[out++] = 0xdc00 | c & 0x3ff;
    }
  }

  return buf2binstring(utf16buf, out);
}; // Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);


var utf8border = (buf, max) => {
  max = max || buf.length;

  if (max > buf.length) {
    max = buf.length;
  } // go back from last position, until start of sequence found


  let pos = max - 1;

  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) {
    pos--;
  } // Very small and broken sequence,
  // return max, because we should return something anyway.


  if (pos < 0) {
    return max;
  } // If we came to start of buffer - that means buffer is too small,
  // return max too.


  if (pos === 0) {
    return max;
  }

  return pos + _utf8len[buf[pos]] > max ? pos : max;
};

var strings = {
  string2buf: string2buf,
  buf2string: buf2string,
  utf8border: utf8border
}; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers

  this.next_in = 0;
  /* number of bytes available at input */

  this.avail_in = 0;
  /* total number of input bytes read so far */

  this.total_in = 0;
  /* next output byte should be put there */

  this.output = null; // JS specific, because we have no pointers

  this.next_out = 0;
  /* remaining free space at output */

  this.avail_out = 0;
  /* total number of bytes output so far */

  this.total_out = 0;
  /* last error message, NULL if no error */

  this.msg = ''
  /*Z_NULL*/
  ;
  /* not visible by applications */

  this.state = null;
  /* best guess about the data type: binary or text */

  this.data_type = 2
  /*Z_UNKNOWN*/
  ;
  /* adler32 value of the uncompressed data */

  this.adler = 0;
}

var zstream = ZStream;
const toString = Object.prototype.toString;
/* Public constants ==========================================================*/

/* ===========================================================================*/

const {
  Z_NO_FLUSH: Z_NO_FLUSH$1,
  Z_SYNC_FLUSH,
  Z_FULL_FLUSH: Z_FULL_FLUSH$1,
  Z_FINISH: Z_FINISH$1,
  Z_OK: Z_OK$1,
  Z_STREAM_END: Z_STREAM_END$1,
  Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1,
  Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1,
  Z_DEFLATED: Z_DEFLATED$1
} = constants;
/* ===========================================================================*/

/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/

/**
 * Deflate.result -> Uint8Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/

/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/

function Deflate(options) {
  this.options = common.assign({
    level: Z_DEFAULT_COMPRESSION$1,
    method: Z_DEFLATED$1,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY$1
  }, options || {});
  let opt = this.options;

  if (opt.raw && opt.windowBits > 0) {
    opt.windowBits = -opt.windowBits;
  } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
    opt.windowBits += 16;
  }

  this.err = 0; // error code, if happens (0 = Z_OK)

  this.msg = ''; // error message

  this.ended = false; // used to avoid multiple onEnd() calls

  this.chunks = []; // chunks of compressed data

  this.strm = new zstream();
  this.strm.avail_out = 0;
  let status = deflate_1.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);

  if (status !== Z_OK$1) {
    throw new Error(messages[status]);
  }

  if (opt.header) {
    deflate_1.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    let dict; // Convert data if needed

    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = deflate_1.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK$1) {
      throw new Error(messages[status]);
    }

    this._dict_set = true;
  }
}
/**
 * Deflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must
 * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
 * buffers and call [[Deflate#onEnd]].
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/


Deflate.prototype.push = function (data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;

  let status, _flush_mode;

  if (this.ended) {
    return false;
  }

  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;else _flush_mode = flush_mode === true ? Z_FINISH$1 : Z_NO_FLUSH$1; // Convert data if needed

  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  for (;;) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    } // Make sure avail_out > 6 to avoid repeating markers


    if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH$1) && strm.avail_out <= 6) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }

    status = deflate_1.deflate(strm, _flush_mode); // Ended => flush and finish

    if (status === Z_STREAM_END$1) {
      if (strm.next_out > 0) {
        this.onData(strm.output.subarray(0, strm.next_out));
      }

      status = deflate_1.deflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === Z_OK$1;
    } // Flush if out buffer full


    if (strm.avail_out === 0) {
      this.onData(strm.output);
      continue;
    } // Flush if requested and has data


    if (_flush_mode > 0 && strm.next_out > 0) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }

    if (strm.avail_in === 0) break;
  }

  return true;
};
/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array): output data.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/


Deflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};
/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/


Deflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK$1) {
    this.result = common.flattenChunks(this.chunks);
  }

  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};
/**
 * deflate(data[, options]) -> Uint8Array
 * - data (Uint8Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/


function deflate$1(input, options) {
  const deflator = new Deflate(options);
  deflator.push(input, true); // That will never happens, if you don't cheat with options :)

  if (deflator.err) {
    throw deflator.msg || messages[deflator.err];
  }

  return deflator.result;
}
/**
 * deflateRaw(data[, options]) -> Uint8Array
 * - data (Uint8Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/


function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate$1(input, options);
}
/**
 * gzip(data[, options]) -> Uint8Array
 * - data (Uint8Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/


function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate$1(input, options);
}

var Deflate_1 = Deflate;
var deflate_2$1 = deflate$1;
var deflateRaw_1 = deflateRaw;
var gzip_1 = gzip;
var constants$1 = constants;
var deflate_1$1 = {
  Deflate: Deflate_1,
  deflate: deflate_2$1,
  deflateRaw: deflateRaw_1,
  gzip: gzip_1,
  constants: constants$1
}; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// See state defs from inflate.js

const BAD = 30;
/* got a data error -- remain here until reset */

const TYPE = 12;
/* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */

var inffast = function inflate_fast(strm, start) {
  let _in;
  /* local strm.input */


  let last;
  /* have enough input while in < last */

  let _out;
  /* local strm.output */


  let beg;
  /* inflate()'s initial strm.output */

  let end;
  /* while out < end, enough space available */
  //#ifdef INFLATE_STRICT

  let dmax;
  /* maximum distance from zlib header */
  //#endif

  let wsize;
  /* window size or zero if not using window */

  let whave;
  /* valid bytes in the window */

  let wnext;
  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools

  let s_window;
  /* allocated sliding window, if wsize != 0 */

  let hold;
  /* local strm.hold */

  let bits;
  /* local strm.bits */

  let lcode;
  /* local strm.lencode */

  let dcode;
  /* local strm.distcode */

  let lmask;
  /* mask for first level of length codes */

  let dmask;
  /* mask for first level of distance codes */

  let here;
  /* retrieved table entry */

  let op;
  /* code bits, operation, extra bits, or */

  /*  window position, window bytes to copy */

  let len;
  /* match length, unused bytes */

  let dist;
  /* match distance */

  let from;
  /* where to copy match from */

  let from_source;
  let input, output; // JS specific, because we have no pointers

  /* copy state to local variables */

  const state = strm.state; //here = state.here;

  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257); //#ifdef INFLATE_STRICT

  dmax = state.dmax; //#endif

  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;
  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top: do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen: for (;;) {
      // Goto emulation
      op = here >>> 24
      /*here.bits*/
      ;
      hold >>>= op;
      bits -= op;
      op = here >>> 16 & 0xff
      /*here.op*/
      ;

      if (op === 0) {
        /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff
        /*here.val*/
        ;
      } else if (op & 16) {
        /* length base */
        len = here & 0xffff
        /*here.val*/
        ;
        op &= 15;
        /* number of extra bits */

        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }

          len += hold & (1 << op) - 1;
          hold >>>= op;
          bits -= op;
        } //Tracevv((stderr, "inflate:         length %u\n", len));


        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }

        here = dcode[hold & dmask];

        dodist: for (;;) {
          // goto emulation
          op = here >>> 24
          /*here.bits*/
          ;
          hold >>>= op;
          bits -= op;
          op = here >>> 16 & 0xff
          /*here.op*/
          ;

          if (op & 16) {
            /* distance base */
            dist = here & 0xffff
            /*here.val*/
            ;
            op &= 15;
            /* number of extra bits */

            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;

              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }

            dist += hold & (1 << op) - 1; //#ifdef INFLATE_STRICT

            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            } //#endif


            hold >>>= op;
            bits -= op; //Tracevv((stderr, "inflate:         distance %u\n", dist));

            op = _out - beg;
            /* max distance in output */

            if (dist > op) {
              /* see if copy from window */
              op = dist - op;
              /* distance back in window */

              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                } // (!) This block is disabled in zlib defaults,
                // don't enable it for binary compatibility
                //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
                //                if (len <= op - whave) {
                //                  do {
                //                    output[_out++] = 0;
                //                  } while (--len);
                //                  continue top;
                //                }
                //                len -= op - whave;
                //                do {
                //                  output[_out++] = 0;
                //                } while (--op > whave);
                //                if (op === 0) {
                //                  from = _out - dist;
                //                  do {
                //                    output[_out++] = output[from++];
                //                  } while (--len);
                //                  continue top;
                //                }
                //#endif

              }

              from = 0; // window index

              from_source = s_window;

              if (wnext === 0) {
                /* very common case */
                from += wsize - op;

                if (op < len) {
                  /* some from window */
                  len -= op;

                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);

                  from = _out - dist;
                  /* rest from output */

                  from_source = output;
                }
              } else if (wnext < op) {
                /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;

                if (op < len) {
                  /* some from end of window */
                  len -= op;

                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);

                  from = 0;

                  if (wnext < len) {
                    /* some from start of window */
                    op = wnext;
                    len -= op;

                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);

                    from = _out - dist;
                    /* rest from output */

                    from_source = output;
                  }
                }
              } else {
                /* contiguous in window */
                from += wnext - op;

                if (op < len) {
                  /* some from window */
                  len -= op;

                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);

                  from = _out - dist;
                  /* rest from output */

                  from_source = output;
                }
              }

              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }

              if (len) {
                output[_out++] = from_source[from++];

                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            } else {
              from = _out - dist;
              /* copy direct from output */

              do {
                /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);

              if (len) {
                output[_out++] = output[from++];

                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          } else if ((op & 64) === 0) {
            /* 2nd level distance code */
            here = dcode[(here & 0xffff) + (
            /*here.val*/
            hold & (1 << op) - 1)];
            continue dodist;
          } else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      } else if ((op & 64) === 0) {
        /* 2nd level length code */
        here = lcode[(here & 0xffff) + (
        /*here.val*/
        hold & (1 << op) - 1)];
        continue dolen;
      } else if (op & 32) {
        /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      } else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);
  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */


  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;
  /* update state and return */

  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
  strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
  state.hold = hold;
  state.bits = bits;
  return;
}; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.


const MAXBITS = 15;
const ENOUGH_LENS = 852;
const ENOUGH_DISTS = 592; //const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

const CODES = 0;
const LENS = 1;
const DISTS = 2;
const lbase = new Uint16Array([
/* Length codes 257..285 base */
3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
const lext = new Uint8Array([
/* Length codes 257..285 extra */
16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
const dbase = new Uint16Array([
/* Distance codes 0..29 base */
1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
const dext = new Uint8Array([
/* Distance codes 0..29 extra */
16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);

const inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) => {
  const bits = opts.bits; //here = opts.here; /* table entry for duplication */

  let len = 0;
  /* a code's length in bits */

  let sym = 0;
  /* index of code symbols */

  let min = 0,
      max = 0;
  /* minimum and maximum code lengths */

  let root = 0;
  /* number of index bits for root table */

  let curr = 0;
  /* number of index bits for current table */

  let drop = 0;
  /* code bits to drop for sub-table */

  let left = 0;
  /* number of prefix codes available */

  let used = 0;
  /* code entries in table used */

  let huff = 0;
  /* Huffman code */

  let incr;
  /* for incrementing code, index */

  let fill;
  /* index for replicating entries */

  let low;
  /* low bits for current root entry */

  let mask;
  /* mask for low root bits */

  let next;
  /* next available space in table */

  let base = null;
  /* base value table to use */

  let base_index = 0; //  let shoextra;    /* extra bits table to use */

  let end;
  /* use base and extra for symbol > end */

  const count = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */

  const offs = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */

  let extra = null;
  let extra_index = 0;
  let here_bits, here_op, here_val;
  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.
    This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.
    The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.
    The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */

  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }

  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }
  /* bound code lengths, force root to be within code lengths */


  root = bits;

  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) {
      break;
    }
  }

  if (root > max) {
    root = max;
  }

  if (max === 0) {
    /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = 1 << 24 | 64 << 16 | 0; //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;

    table[table_index++] = 1 << 24 | 64 << 16 | 0;
    opts.bits = 1;
    return 0;
    /* no symbols, but wait for decoding to report error */
  }

  for (min = 1; min < max; min++) {
    if (count[min] !== 0) {
      break;
    }
  }

  if (root < min) {
    root = min;
  }
  /* check for an over-subscribed or incomplete set of lengths */


  left = 1;

  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];

    if (left < 0) {
      return -1;
    }
    /* over-subscribed */

  }

  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;
    /* incomplete set */
  }
  /* generate offsets into symbol table for each length for sorting */


  offs[1] = 0;

  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }
  /* sort symbols by length, by symbol order within each length */


  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }
  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.
    root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.
    When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.
    used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.
    sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8


  if (type === CODES) {
    base = extra = work;
    /* dummy value--not used */

    end = 19;
  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;
  } else {
    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }
  /* initialize opts for loop */


  huff = 0;
  /* starting code */

  sym = 0;
  /* starting code symbol */

  len = min;
  /* starting code length */

  next = table_index;
  /* current table to fill in */

  curr = root;
  /* current table index bits */

  drop = 0;
  /* current bits to drop from code for index */

  low = -1;
  /* trigger new sub-table when len > root */

  used = 1 << root;
  /* use root table entries */

  mask = used - 1;
  /* mask for comparing low */

  /* check available table space */

  if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
    return 1;
  }
  /* process all codes and make table entries */


  for (;;) {
    /* create table entry */
    here_bits = len - drop;

    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    } else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    } else {
      here_op = 32 + 64;
      /* end of block */

      here_val = 0;
    }
    /* replicate for those indices with low len bits equal to huff */


    incr = 1 << len - drop;
    fill = 1 << curr;
    min = fill;
    /* save offset to next table */

    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
    } while (fill !== 0);
    /* backwards increment the len-bit code huff */


    incr = 1 << len - 1;

    while (huff & incr) {
      incr >>= 1;
    }

    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }
    /* go to next symbol, update count, len */


    sym++;

    if (--count[len] === 0) {
      if (len === max) {
        break;
      }

      len = lens[lens_index + work[sym]];
    }
    /* create new sub-table if needed */


    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }
      /* increment past last table */


      next += min;
      /* here min is 1 << curr */

      /* determine length of next table */

      curr = len - drop;
      left = 1 << curr;

      while (curr + drop < max) {
        left -= count[curr + drop];

        if (left <= 0) {
          break;
        }

        curr++;
        left <<= 1;
      }
      /* check for enough space */


      used += 1 << curr;

      if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
        return 1;
      }
      /* point entry in root table to sub-table */


      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/

      table[low] = root << 24 | curr << 16 | next - table_index | 0;
    }
  }
  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */


  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = len - drop << 24 | 64 << 16 | 0;
  }
  /* set return parameters */
  //opts.table_index += used;


  opts.bits = root;
  return 0;
};

var inftrees = inflate_table; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const CODES$1 = 0;
const LENS$1 = 1;
const DISTS$1 = 2;
/* Public constants ==========================================================*/

/* ===========================================================================*/

const {
  Z_FINISH: Z_FINISH$2,
  Z_BLOCK: Z_BLOCK$1,
  Z_TREES,
  Z_OK: Z_OK$2,
  Z_STREAM_END: Z_STREAM_END$2,
  Z_NEED_DICT,
  Z_STREAM_ERROR: Z_STREAM_ERROR$1,
  Z_DATA_ERROR: Z_DATA_ERROR$1,
  Z_MEM_ERROR,
  Z_BUF_ERROR: Z_BUF_ERROR$1,
  Z_DEFLATED: Z_DEFLATED$2
} = constants;
/* STATES ====================================================================*/

/* ===========================================================================*/

const HEAD = 1;
/* i: waiting for magic header */

const FLAGS = 2;
/* i: waiting for method and flags (gzip) */

const TIME = 3;
/* i: waiting for modification time (gzip) */

const OS = 4;
/* i: waiting for extra flags and operating system (gzip) */

const EXLEN = 5;
/* i: waiting for extra length (gzip) */

const EXTRA = 6;
/* i: waiting for extra bytes (gzip) */

const NAME = 7;
/* i: waiting for end of file name (gzip) */

const COMMENT = 8;
/* i: waiting for end of comment (gzip) */

const HCRC = 9;
/* i: waiting for header crc (gzip) */

const DICTID = 10;
/* i: waiting for dictionary check value */

const DICT = 11;
/* waiting for inflateSetDictionary() call */

const TYPE$1 = 12;
/* i: waiting for type bits, including last-flag bit */

const TYPEDO = 13;
/* i: same, but skip check to exit inflate on new block */

const STORED = 14;
/* i: waiting for stored size (length and complement) */

const COPY_ = 15;
/* i/o: same as COPY below, but only first time in */

const COPY = 16;
/* i/o: waiting for input or output to copy stored block */

const TABLE = 17;
/* i: waiting for dynamic block table lengths */

const LENLENS = 18;
/* i: waiting for code length code lengths */

const CODELENS = 19;
/* i: waiting for length/lit and distance code lengths */

const LEN_ = 20;
/* i: same as LEN below, but only first time in */

const LEN = 21;
/* i: waiting for length/lit/eob code */

const LENEXT = 22;
/* i: waiting for length extra bits */

const DIST = 23;
/* i: waiting for distance code */

const DISTEXT = 24;
/* i: waiting for distance extra bits */

const MATCH = 25;
/* o: waiting for output space to copy string */

const LIT = 26;
/* o: waiting for output space to write literal */

const CHECK = 27;
/* i: waiting for 32-bit check value */

const LENGTH = 28;
/* i: waiting for 32-bit length (gzip) */

const DONE = 29;
/* finished check, done -- remain here until reset */

const BAD$1 = 30;
/* got a data error -- remain here until reset */

const MEM = 31;
/* got an inflate() memory error -- remain here until reset */

const SYNC = 32;
/* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/

const ENOUGH_LENS$1 = 852;
const ENOUGH_DISTS$1 = 592; //const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

const MAX_WBITS$1 = 15;
/* 32K LZ77 window */

const DEF_WBITS = MAX_WBITS$1;

const zswap32 = q => {
  return (q >>> 24 & 0xff) + (q >>> 8 & 0xff00) + ((q & 0xff00) << 8) + ((q & 0xff) << 24);
};

function InflateState() {
  this.mode = 0;
  /* current inflate mode */

  this.last = false;
  /* true if processing last block */

  this.wrap = 0;
  /* bit 0 true for zlib, bit 1 true for gzip */

  this.havedict = false;
  /* true if dictionary provided */

  this.flags = 0;
  /* gzip header method and flags (0 if zlib) */

  this.dmax = 0;
  /* zlib header max distance (INFLATE_STRICT) */

  this.check = 0;
  /* protected copy of check value */

  this.total = 0;
  /* protected copy of output count */
  // TODO: may be {}

  this.head = null;
  /* where to save gzip header information */

  /* sliding window */

  this.wbits = 0;
  /* log base 2 of requested window size */

  this.wsize = 0;
  /* window size or zero if not using window */

  this.whave = 0;
  /* valid bytes in the window */

  this.wnext = 0;
  /* window write index */

  this.window = null;
  /* allocated sliding window, if needed */

  /* bit accumulator */

  this.hold = 0;
  /* input bit accumulator */

  this.bits = 0;
  /* number of bits in "in" */

  /* for string and stored block copying */

  this.length = 0;
  /* literal or length of data to copy */

  this.offset = 0;
  /* distance back to copy string from */

  /* for table and code decoding */

  this.extra = 0;
  /* extra bits needed */

  /* fixed and dynamic code tables */

  this.lencode = null;
  /* starting table for length/literal codes */

  this.distcode = null;
  /* starting table for distance codes */

  this.lenbits = 0;
  /* index bits for lencode */

  this.distbits = 0;
  /* index bits for distcode */

  /* dynamic table building */

  this.ncode = 0;
  /* number of code length code lengths */

  this.nlen = 0;
  /* number of length code lengths */

  this.ndist = 0;
  /* number of distance code lengths */

  this.have = 0;
  /* number of code lengths in lens[] */

  this.next = null;
  /* next available space in codes[] */

  this.lens = new Uint16Array(320);
  /* temporary storage for code lengths */

  this.work = new Uint16Array(288);
  /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new Int32Array(ENOUGH);       /* space for code tables */

  this.lendyn = null;
  /* dynamic table for length/literal codes (JS specific) */

  this.distdyn = null;
  /* dynamic table for distance codes (JS specific) */

  this.sane = 0;
  /* if false, allow invalid distance too far */

  this.back = 0;
  /* bits back of last unprocessed length/lit */

  this.was = 0;
  /* initial length of match */
}

const inflateResetKeep = strm => {
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }

  const state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = '';
  /*Z_NULL*/

  if (state.wrap) {
    /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }

  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null
  /*Z_NULL*/
  ;
  state.hold = 0;
  state.bits = 0; //state.lencode = state.distcode = state.next = state.codes;

  state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS$1);
  state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS$1);
  state.sane = 1;
  state.back = -1; //Tracev((stderr, "inflate: reset\n"));

  return Z_OK$2;
};

const inflateReset = strm => {
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }

  const state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);
};

const inflateReset2 = (strm, windowBits) => {
  let wrap;
  /* get the state */

  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }

  const state = strm.state;
  /* extract wrap request from windowBits parameter */

  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  } else {
    wrap = (windowBits >> 4) + 1;

    if (windowBits < 48) {
      windowBits &= 15;
    }
  }
  /* set number of window bits, free window if different */


  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR$1;
  }

  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }
  /* update state and reset the rest of it */


  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
};

const inflateInit2 = (strm, windowBits) => {
  if (!strm) {
    return Z_STREAM_ERROR$1;
  } //strm.msg = Z_NULL;                 /* in case we return an error */


  const state = new InflateState(); //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));

  strm.state = state;
  state.window = null
  /*Z_NULL*/
  ;
  const ret = inflateReset2(strm, windowBits);

  if (ret !== Z_OK$2) {
    strm.state = null
    /*Z_NULL*/
    ;
  }

  return ret;
};

const inflateInit = strm => {
  return inflateInit2(strm, DEF_WBITS);
};
/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */


let virgin = true;
let lenfix, distfix; // We have no pointers in JS, so keep tables separate

const fixedtables = state => {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    lenfix = new Int32Array(512);
    distfix = new Int32Array(32);
    /* literal/length table */

    let sym = 0;

    while (sym < 144) {
      state.lens[sym++] = 8;
    }

    while (sym < 256) {
      state.lens[sym++] = 9;
    }

    while (sym < 280) {
      state.lens[sym++] = 7;
    }

    while (sym < 288) {
      state.lens[sym++] = 8;
    }

    inftrees(LENS$1, state.lens, 0, 288, lenfix, 0, state.work, {
      bits: 9
    });
    /* distance table */

    sym = 0;

    while (sym < 32) {
      state.lens[sym++] = 5;
    }

    inftrees(DISTS$1, state.lens, 0, 32, distfix, 0, state.work, {
      bits: 5
    });
    /* do this just once */

    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
};
/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */


const updatewindow = (strm, src, end, copy) => {
  let dist;
  const state = strm.state;
  /* if it hasn't been done already, allocate space for the window */

  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;
    state.window = new Uint8Array(state.wsize);
  }
  /* copy state->wsize or less output bytes into the circular window */


  if (copy >= state.wsize) {
    state.window.set(src.subarray(end - state.wsize, end), 0);
    state.wnext = 0;
    state.whave = state.wsize;
  } else {
    dist = state.wsize - state.wnext;

    if (dist > copy) {
      dist = copy;
    } //zmemcpy(state->window + state->wnext, end - copy, dist);


    state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
    copy -= dist;

    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      state.window.set(src.subarray(end - copy, end), 0);
      state.wnext = copy;
      state.whave = state.wsize;
    } else {
      state.wnext += dist;

      if (state.wnext === state.wsize) {
        state.wnext = 0;
      }

      if (state.whave < state.wsize) {
        state.whave += dist;
      }
    }
  }

  return 0;
};

const inflate = (strm, flush) => {
  let state;
  let input, output; // input/output buffers

  let next;
  /* next input INDEX */

  let put;
  /* next output INDEX */

  let have, left;
  /* available input and output */

  let hold;
  /* bit buffer */

  let bits;
  /* bits in bit buffer */

  let _in, _out;
  /* save starting available input and output */


  let copy;
  /* number of stored or match bytes to copy */

  let from;
  /* where to copy match bytes from */

  let from_source;
  let here = 0;
  /* current decoding table entry */

  let here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //let last;                   /* parent table entry */

  let last_bits, last_op, last_val; // paked "last" denormalized (JS specific)

  let len;
  /* length to copy for repeats, bits to drop */

  let ret;
  /* return code */

  const hbuf = new Uint8Array(4);
  /* buffer for gzip header crc calculation */

  let opts;
  let n; // temporary variable for NEED_BITS

  const order =
  /* permutation of code lengths */
  new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);

  if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
    return Z_STREAM_ERROR$1;
  }

  state = strm.state;

  if (state.mode === TYPE$1) {
    state.mode = TYPEDO;
  }
  /* skip check */
  //--- LOAD() ---


  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits; //---

  _in = have;
  _out = left;
  ret = Z_OK$2;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        } //=== NEEDBITS(16);


        while (bits < 16) {
          if (have === 0) {
            break inf_leave;
          }

          have--;
          hold += input[next++] << bits;
          bits += 8;
        } //===//


        if (state.wrap & 2 && hold === 0x8b1f) {
          /* gzip header */
          state.check = 0
          /*crc32(0L, Z_NULL, 0)*/
          ; //=== CRC2(state.check, hold);

          hbuf[0] = hold & 0xff;
          hbuf[1] = hold >>> 8 & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0); //===//
          //=== INITBITS();

          hold = 0;
          bits = 0; //===//

          state.mode = FLAGS;
          break;
        }

        state.flags = 0;
        /* expect zlib header */

        if (state.head) {
          state.head.done = false;
        }

        if (!(state.wrap & 1) ||
        /* check if zlib header allowed */
        (((hold & 0xff) <<
        /*BITS(8)*/
        8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD$1;
          break;
        }

        if ((hold & 0x0f) !==
        /*BITS(4)*/
        Z_DEFLATED$2) {
          strm.msg = 'unknown compression method';
          state.mode = BAD$1;
          break;
        } //--- DROPBITS(4) ---//


        hold >>>= 4;
        bits -= 4; //---//

        len = (hold & 0x0f) +
        /*BITS(4)*/
        8;

        if (state.wbits === 0) {
          state.wbits = len;
        } else if (len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD$1;
          break;
        } // !!! pako patch. Force use `options.windowBits` if passed.
        // Required to always use max window size by default.


        state.dmax = 1 << state.wbits; //state.dmax = 1 << len;
        //Tracev((stderr, "inflate:   zlib header ok\n"));

        strm.adler = state.check = 1
        /*adler32(0L, Z_NULL, 0)*/
        ;
        state.mode = hold & 0x200 ? DICTID : TYPE$1; //=== INITBITS();

        hold = 0;
        bits = 0; //===//

        break;

      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) {
            break inf_leave;
          }

          have--;
          hold += input[next++] << bits;
          bits += 8;
        } //===//


        state.flags = hold;

        if ((state.flags & 0xff) !== Z_DEFLATED$2) {
          strm.msg = 'unknown compression method';
          state.mode = BAD$1;
          break;
        }

        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD$1;
          break;
        }

        if (state.head) {
          state.head.text = hold >> 8 & 1;
        }

        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = hold >>> 8 & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0); //===//
        } //=== INITBITS();


        hold = 0;
        bits = 0; //===//

        state.mode = TIME;

      /* falls through */

      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) {
            break inf_leave;
          }

          have--;
          hold += input[next++] << bits;
          bits += 8;
        } //===//


        if (state.head) {
          state.head.time = hold;
        }

        if (state.flags & 0x0200) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = hold >>> 8 & 0xff;
          hbuf[2] = hold >>> 16 & 0xff;
          hbuf[3] = hold >>> 24 & 0xff;
          state.check = crc32_1(state.check, hbuf, 4, 0); //===
        } //=== INITBITS();


        hold = 0;
        bits = 0; //===//

        state.mode = OS;

      /* falls through */

      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) {
            break inf_leave;
          }

          have--;
          hold += input[next++] << bits;
          bits += 8;
        } //===//


        if (state.head) {
          state.head.xflags = hold & 0xff;
          state.head.os = hold >> 8;
        }

        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = hold >>> 8 & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0); //===//
        } //=== INITBITS();


        hold = 0;
        bits = 0; //===//

        state.mode = EXLEN;

      /* falls through */

      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          state.length = hold;

          if (state.head) {
            state.head.extra_len = hold;
          }

          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = hold >>> 8 & 0xff;
            state.check = crc32_1(state.check, hbuf, 2, 0); //===//
          } //=== INITBITS();


          hold = 0;
          bits = 0; //===//
        } else if (state.head) {
          state.head.extra = null
          /*Z_NULL*/
          ;
        }

        state.mode = EXTRA;

      /* falls through */

      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;

          if (copy > have) {
            copy = have;
          }

          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;

              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Uint8Array(state.head.extra_len);
              }

              state.head.extra.set(input.subarray(next, // extra field is limited to 65536 bytes
              // - no need for additional size check
              next + copy),
              /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
              len); //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }

            if (state.flags & 0x0200) {
              state.check = crc32_1(state.check, input, copy, next);
            }

            have -= copy;
            next += copy;
            state.length -= copy;
          }

          if (state.length) {
            break inf_leave;
          }
        }

        state.length = 0;
        state.mode = NAME;

      /* falls through */

      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) {
            break inf_leave;
          }

          copy = 0;

          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */

            if (state.head && len && state.length < 65536
            /*state.head.name_max*/
            ) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if (state.flags & 0x0200) {
            state.check = crc32_1(state.check, input, copy, next);
          }

          have -= copy;
          next += copy;

          if (len) {
            break inf_leave;
          }
        } else if (state.head) {
          state.head.name = null;
        }

        state.length = 0;
        state.mode = COMMENT;

      /* falls through */

      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) {
            break inf_leave;
          }

          copy = 0;

          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */

            if (state.head && len && state.length < 65536
            /*state.head.comm_max*/
            ) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if (state.flags & 0x0200) {
            state.check = crc32_1(state.check, input, copy, next);
          }

          have -= copy;
          next += copy;

          if (len) {
            break inf_leave;
          }
        } else if (state.head) {
          state.head.comment = null;
        }

        state.mode = HCRC;

      /* falls through */

      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          if (hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD$1;
            break;
          } //=== INITBITS();


          hold = 0;
          bits = 0; //===//
        }

        if (state.head) {
          state.head.hcrc = state.flags >> 9 & 1;
          state.head.done = true;
        }

        strm.adler = state.check = 0;
        state.mode = TYPE$1;
        break;

      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) {
            break inf_leave;
          }

          have--;
          hold += input[next++] << bits;
          bits += 8;
        } //===//


        strm.adler = state.check = zswap32(hold); //=== INITBITS();

        hold = 0;
        bits = 0; //===//

        state.mode = DICT;

      /* falls through */

      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits; //---

          return Z_NEED_DICT;
        }

        strm.adler = state.check = 1
        /*adler32(0L, Z_NULL, 0)*/
        ;
        state.mode = TYPE$1;

      /* falls through */

      case TYPE$1:
        if (flush === Z_BLOCK$1 || flush === Z_TREES) {
          break inf_leave;
        }

      /* falls through */

      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7; //---//

          state.mode = CHECK;
          break;
        } //=== NEEDBITS(3); */


        while (bits < 3) {
          if (have === 0) {
            break inf_leave;
          }

          have--;
          hold += input[next++] << bits;
          bits += 8;
        } //===//


        state.last = hold & 0x01
        /*BITS(1)*/
        ; //--- DROPBITS(1) ---//

        hold >>>= 1;
        bits -= 1; //---//

        switch (hold & 0x03) {
          /*BITS(2)*/
          case 0:
            /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;

          case 1:
            /* fixed block */
            fixedtables(state); //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));

            state.mode = LEN_;
            /* decode codes */

            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2; //---//

              break inf_leave;
            }

            break;

          case 2:
            /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;

          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD$1;
        } //--- DROPBITS(2) ---//


        hold >>>= 2;
        bits -= 2; //---//

        break;

      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7; //---//
        //=== NEEDBITS(32); */

        while (bits < 32) {
          if (have === 0) {
            break inf_leave;
          }

          have--;
          hold += input[next++] << bits;
          bits += 8;
        } //===//


        if ((hold & 0xffff) !== (hold >>> 16 ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD$1;
          break;
        }

        state.length = hold & 0xffff; //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();

        hold = 0;
        bits = 0; //===//

        state.mode = COPY_;

        if (flush === Z_TREES) {
          break inf_leave;
        }

      /* falls through */

      case COPY_:
        state.mode = COPY;

      /* falls through */

      case COPY:
        copy = state.length;

        if (copy) {
          if (copy > have) {
            copy = have;
          }

          if (copy > left) {
            copy = left;
          }

          if (copy === 0) {
            break inf_leave;
          } //--- zmemcpy(put, next, copy); ---


          output.set(input.subarray(next, next + copy), put); //---//

          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        } //Tracev((stderr, "inflate:       stored end\n"));


        state.mode = TYPE$1;
        break;

      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) {
            break inf_leave;
          }

          have--;
          hold += input[next++] << bits;
          bits += 8;
        } //===//


        state.nlen = (hold & 0x1f) +
        /*BITS(5)*/
        257; //--- DROPBITS(5) ---//

        hold >>>= 5;
        bits -= 5; //---//

        state.ndist = (hold & 0x1f) +
        /*BITS(5)*/
        1; //--- DROPBITS(5) ---//

        hold >>>= 5;
        bits -= 5; //---//

        state.ncode = (hold & 0x0f) +
        /*BITS(4)*/
        4; //--- DROPBITS(4) ---//

        hold >>>= 4;
        bits -= 4; //---//
        //#ifndef PKZIP_BUG_WORKAROUND

        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD$1;
          break;
        } //#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));


        state.have = 0;
        state.mode = LENLENS;

      /* falls through */

      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          state.lens[order[state.have++]] = hold & 0x07; //BITS(3);
          //--- DROPBITS(3) ---//

          hold >>>= 3;
          bits -= 3; //---//
        }

        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        } // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table


        state.lencode = state.lendyn;
        state.lenbits = 7;
        opts = {
          bits: state.lenbits
        };
        ret = inftrees(CODES$1, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD$1;
          break;
        } //Tracev((stderr, "inflate:       code lengths ok\n"));


        state.have = 0;
        state.mode = CODELENS;

      /* falls through */

      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & (1 << state.lenbits) - 1];
            /*BITS(state.lenbits)*/

            here_bits = here >>> 24;
            here_op = here >>> 16 & 0xff;
            here_val = here & 0xffff;

            if (here_bits <= bits) {
              break;
            } //--- PULLBYTE() ---//


            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8; //---//
          }

          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits; //---//

            state.lens[state.have++] = here_val;
          } else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;

              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//
              //--- DROPBITS(here.bits) ---//


              hold >>>= here_bits;
              bits -= here_bits; //---//

              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD$1;
                break;
              }

              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03); //BITS(2);
              //--- DROPBITS(2) ---//

              hold >>>= 2;
              bits -= 2; //---//
            } else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;

              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//
              //--- DROPBITS(here.bits) ---//


              hold >>>= here_bits;
              bits -= here_bits; //---//

              len = 0;
              copy = 3 + (hold & 0x07); //BITS(3);
              //--- DROPBITS(3) ---//

              hold >>>= 3;
              bits -= 3; //---//
            } else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;

              while (bits < n) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//
              //--- DROPBITS(here.bits) ---//


              hold >>>= here_bits;
              bits -= here_bits; //---//

              len = 0;
              copy = 11 + (hold & 0x7f); //BITS(7);
              //--- DROPBITS(7) ---//

              hold >>>= 7;
              bits -= 7; //---//
            }

            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD$1;
              break;
            }

            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }
        /* handle error breaks in while */


        if (state.mode === BAD$1) {
          break;
        }
        /* check for end-of-block code (better have one) */


        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD$1;
          break;
        }
        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */


        state.lenbits = 9;
        opts = {
          bits: state.lenbits
        };
        ret = inftrees(LENS$1, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts); // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;

        state.lenbits = opts.bits; // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD$1;
          break;
        }

        state.distbits = 6; //state.distcode.copy(state.codes);
        // Switch to use dynamic table

        state.distcode = state.distdyn;
        opts = {
          bits: state.distbits
        };
        ret = inftrees(DISTS$1, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts); // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;

        state.distbits = opts.bits; // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD$1;
          break;
        } //Tracev((stderr, 'inflate:       codes ok\n'));


        state.mode = LEN_;

        if (flush === Z_TREES) {
          break inf_leave;
        }

      /* falls through */

      case LEN_:
        state.mode = LEN;

      /* falls through */

      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits; //---

          inffast(strm, _out); //--- LOAD() ---

          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits; //---

          if (state.mode === TYPE$1) {
            state.back = -1;
          }

          break;
        }

        state.back = 0;

        for (;;) {
          here = state.lencode[hold & (1 << state.lenbits) - 1];
          /*BITS(state.lenbits)*/

          here_bits = here >>> 24;
          here_op = here >>> 16 & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) {
            break;
          } //--- PULLBYTE() ---//


          if (have === 0) {
            break inf_leave;
          }

          have--;
          hold += input[next++] << bits;
          bits += 8; //---//
        }

        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;

          for (;;) {
            here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >>
            /*BITS(last.bits + last.op)*/
            last_bits)];
            here_bits = here >>> 24;
            here_op = here >>> 16 & 0xff;
            here_val = here & 0xffff;

            if (last_bits + here_bits <= bits) {
              break;
            } //--- PULLBYTE() ---//


            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8; //---//
          } //--- DROPBITS(last.bits) ---//


          hold >>>= last_bits;
          bits -= last_bits; //---//

          state.back += last_bits;
        } //--- DROPBITS(here.bits) ---//


        hold >>>= here_bits;
        bits -= here_bits; //---//

        state.back += here_bits;
        state.length = here_val;

        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }

        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE$1;
          break;
        }

        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD$1;
          break;
        }

        state.extra = here_op & 15;
        state.mode = LENEXT;

      /* falls through */

      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;

          while (bits < n) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          state.length += hold & (1 << state.extra) - 1
          /*BITS(state.extra)*/
          ; //--- DROPBITS(state.extra) ---//

          hold >>>= state.extra;
          bits -= state.extra; //---//

          state.back += state.extra;
        } //Tracevv((stderr, "inflate:         length %u\n", state.length));


        state.was = state.length;
        state.mode = DIST;

      /* falls through */

      case DIST:
        for (;;) {
          here = state.distcode[hold & (1 << state.distbits) - 1];
          /*BITS(state.distbits)*/

          here_bits = here >>> 24;
          here_op = here >>> 16 & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) {
            break;
          } //--- PULLBYTE() ---//


          if (have === 0) {
            break inf_leave;
          }

          have--;
          hold += input[next++] << bits;
          bits += 8; //---//
        }

        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;

          for (;;) {
            here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >>
            /*BITS(last.bits + last.op)*/
            last_bits)];
            here_bits = here >>> 24;
            here_op = here >>> 16 & 0xff;
            here_val = here & 0xffff;

            if (last_bits + here_bits <= bits) {
              break;
            } //--- PULLBYTE() ---//


            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8; //---//
          } //--- DROPBITS(last.bits) ---//


          hold >>>= last_bits;
          bits -= last_bits; //---//

          state.back += last_bits;
        } //--- DROPBITS(here.bits) ---//


        hold >>>= here_bits;
        bits -= here_bits; //---//

        state.back += here_bits;

        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD$1;
          break;
        }

        state.offset = here_val;
        state.extra = here_op & 15;
        state.mode = DISTEXT;

      /* falls through */

      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;

          while (bits < n) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          state.offset += hold & (1 << state.extra) - 1
          /*BITS(state.extra)*/
          ; //--- DROPBITS(state.extra) ---//

          hold >>>= state.extra;
          bits -= state.extra; //---//

          state.back += state.extra;
        } //#ifdef INFLATE_STRICT


        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD$1;
          break;
        } //#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));


        state.mode = MATCH;

      /* falls through */

      case MATCH:
        if (left === 0) {
          break inf_leave;
        }

        copy = _out - left;

        if (state.offset > copy) {
          /* copy from window */
          copy = state.offset - copy;

          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD$1;
              break;
            } // (!) This block is disabled in zlib defaults,
            // don't enable it for binary compatibility
            //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
            //          Trace((stderr, "inflate.c too far\n"));
            //          copy -= state.whave;
            //          if (copy > state.length) { copy = state.length; }
            //          if (copy > left) { copy = left; }
            //          left -= copy;
            //          state.length -= copy;
            //          do {
            //            output[put++] = 0;
            //          } while (--copy);
            //          if (state.length === 0) { state.mode = LEN; }
            //          break;
            //#endif

          }

          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          } else {
            from = state.wnext - copy;
          }

          if (copy > state.length) {
            copy = state.length;
          }

          from_source = state.window;
        } else {
          /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }

        if (copy > left) {
          copy = left;
        }

        left -= copy;
        state.length -= copy;

        do {
          output[put++] = from_source[from++];
        } while (--copy);

        if (state.length === 0) {
          state.mode = LEN;
        }

        break;

      case LIT:
        if (left === 0) {
          break inf_leave;
        }

        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;

      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }

            have--; // Use '|' instead of '+' to make sure that result is signed

            hold |= input[next++] << bits;
            bits += 8;
          } //===//


          _out -= left;
          strm.total_out += _out;
          state.total += _out;

          if (_out) {
            strm.adler = state.check =
            /*UPDATE(state.check, put - _out, _out);*/
            state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out);
          }

          _out = left; // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too

          if ((state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD$1;
            break;
          } //=== INITBITS();


          hold = 0;
          bits = 0; //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }

        state.mode = LENGTH;

      /* falls through */

      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }

            have--;
            hold += input[next++] << bits;
            bits += 8;
          } //===//


          if (hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD$1;
            break;
          } //=== INITBITS();


          hold = 0;
          bits = 0; //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }

        state.mode = DONE;

      /* falls through */

      case DONE:
        ret = Z_STREAM_END$2;
        break inf_leave;

      case BAD$1:
        ret = Z_DATA_ERROR$1;
        break inf_leave;

      case MEM:
        return Z_MEM_ERROR;

      case SYNC:
      /* falls through */

      default:
        return Z_STREAM_ERROR$1;
    }
  } // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */
  //--- RESTORE() ---


  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits; //---

  if (state.wsize || _out !== strm.avail_out && state.mode < BAD$1 && (state.mode < CHECK || flush !== Z_FINISH$2)) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
  }

  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;

  if (state.wrap && _out) {
    strm.adler = state.check =
    /*UPDATE(state.check, strm.next_out - _out, _out);*/
    state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out);
  }

  strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE$1 ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);

  if ((_in === 0 && _out === 0 || flush === Z_FINISH$2) && ret === Z_OK$2) {
    ret = Z_BUF_ERROR$1;
  }

  return ret;
};

const inflateEnd = strm => {
  if (!strm || !strm.state
  /*|| strm->zfree == (free_func)0*/
  ) {
      return Z_STREAM_ERROR$1;
    }

  let state = strm.state;

  if (state.window) {
    state.window = null;
  }

  strm.state = null;
  return Z_OK$2;
};

const inflateGetHeader = (strm, head) => {
  /* check state */
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }

  const state = strm.state;

  if ((state.wrap & 2) === 0) {
    return Z_STREAM_ERROR$1;
  }
  /* save header structure */


  state.head = head;
  head.done = false;
  return Z_OK$2;
};

const inflateSetDictionary = (strm, dictionary) => {
  const dictLength = dictionary.length;
  let state;
  let dictid;
  let ret;
  /* check state */

  if (!strm
  /* == Z_NULL */
  || !strm.state
  /* == Z_NULL */
  ) {
      return Z_STREAM_ERROR$1;
    }

  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR$1;
  }
  /* check for correct dictionary identifier */


  if (state.mode === DICT) {
    dictid = 1;
    /* adler32(0, null, 0)*/

    /* dictid = adler32(dictid, dictionary, dictLength); */

    dictid = adler32_1(dictid, dictionary, dictLength, 0);

    if (dictid !== state.check) {
      return Z_DATA_ERROR$1;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */


  ret = updatewindow(strm, dictionary, dictLength, dictLength);

  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }

  state.havedict = 1; // Tracev((stderr, "inflate:   dictionary set\n"));

  return Z_OK$2;
};

var inflateReset_1 = inflateReset;
var inflateReset2_1 = inflateReset2;
var inflateResetKeep_1 = inflateResetKeep;
var inflateInit_1 = inflateInit;
var inflateInit2_1 = inflateInit2;
var inflate_2 = inflate;
var inflateEnd_1 = inflateEnd;
var inflateGetHeader_1 = inflateGetHeader;
var inflateSetDictionary_1 = inflateSetDictionary;
var inflateInfo = 'pako inflate (from Nodeca project)';
/* Not implemented
module.exports.inflateCopy = inflateCopy;
module.exports.inflateGetDictionary = inflateGetDictionary;
module.exports.inflateMark = inflateMark;
module.exports.inflatePrime = inflatePrime;
module.exports.inflateSync = inflateSync;
module.exports.inflateSyncPoint = inflateSyncPoint;
module.exports.inflateUndermine = inflateUndermine;
*/

var inflate_1 = {
  inflateReset: inflateReset_1,
  inflateReset2: inflateReset2_1,
  inflateResetKeep: inflateResetKeep_1,
  inflateInit: inflateInit_1,
  inflateInit2: inflateInit2_1,
  inflate: inflate_2,
  inflateEnd: inflateEnd_1,
  inflateGetHeader: inflateGetHeader_1,
  inflateSetDictionary: inflateSetDictionary_1,
  inflateInfo: inflateInfo
}; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text = 0;
  /* modification time */

  this.time = 0;
  /* extra flags (not used when writing a gzip file) */

  this.xflags = 0;
  /* operating system */

  this.os = 0;
  /* pointer to extra field or Z_NULL if none */

  this.extra = null;
  /* extra field length (valid if extra != Z_NULL) */

  this.extra_len = 0; // Actually, we don't need it in JS,
  // but leave for few code modifications
  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;

  /* pointer to zero-terminated file name or Z_NULL */

  this.name = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;

  /* pointer to zero-terminated comment or Z_NULL */

  this.comment = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;

  /* true if there was or will be a header crc */

  this.hcrc = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */

  this.done = false;
}

var gzheader = GZheader;
const toString$1 = Object.prototype.toString;
/* Public constants ==========================================================*/

/* ===========================================================================*/

const {
  Z_NO_FLUSH: Z_NO_FLUSH$2,
  Z_FINISH: Z_FINISH$3,
  Z_OK: Z_OK$3,
  Z_STREAM_END: Z_STREAM_END$3,
  Z_NEED_DICT: Z_NEED_DICT$1,
  Z_STREAM_ERROR: Z_STREAM_ERROR$2,
  Z_DATA_ERROR: Z_DATA_ERROR$2,
  Z_MEM_ERROR: Z_MEM_ERROR$1
} = constants;
/* ===========================================================================*/

/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/

/**
 * Inflate.result -> Uint8Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/

/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/

function Inflate(options) {
  this.options = common.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ''
  }, options || {});
  const opt = this.options; // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.

  if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
    opt.windowBits = -opt.windowBits;

    if (opt.windowBits === 0) {
      opt.windowBits = -15;
    }
  } // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate


  if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
    opt.windowBits += 32;
  } // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible


  if (opt.windowBits > 15 && opt.windowBits < 48) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err = 0; // error code, if happens (0 = Z_OK)

  this.msg = ''; // error message

  this.ended = false; // used to avoid multiple onEnd() calls

  this.chunks = []; // chunks of compressed data

  this.strm = new zstream();
  this.strm.avail_out = 0;
  let status = inflate_1.inflateInit2(this.strm, opt.windowBits);

  if (status !== Z_OK$3) {
    throw new Error(messages[status]);
  }

  this.header = new gzheader();
  inflate_1.inflateGetHeader(this.strm, this.header); // Setup dictionary

  if (opt.dictionary) {
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString$1.call(opt.dictionary) === '[object ArrayBuffer]') {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }

    if (opt.raw) {
      //In raw mode we need to set the dictionary early
      status = inflate_1.inflateSetDictionary(this.strm, opt.dictionary);

      if (status !== Z_OK$3) {
        throw new Error(messages[status]);
      }
    }
  }
}
/**
 * Inflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer): input data
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
 *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
 *   `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. If end of stream detected,
 * [[Inflate#onEnd]] will be called.
 *
 * `flush_mode` is not needed for normal operation, because end of stream
 * detected automatically. You may try to use it for advanced things, but
 * this functionality was not tested.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/


Inflate.prototype.push = function (data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  const dictionary = this.options.dictionary;

  let status, _flush_mode, last_avail_out;

  if (this.ended) return false;
  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;else _flush_mode = flush_mode === true ? Z_FINISH$3 : Z_NO_FLUSH$2; // Convert data if needed

  if (toString$1.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  for (;;) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = inflate_1.inflate(strm, _flush_mode);

    if (status === Z_NEED_DICT$1 && dictionary) {
      status = inflate_1.inflateSetDictionary(strm, dictionary);

      if (status === Z_OK$3) {
        status = inflate_1.inflate(strm, _flush_mode);
      } else if (status === Z_DATA_ERROR$2) {
        // Replace code with more verbose
        status = Z_NEED_DICT$1;
      }
    } // Skip snyc markers if more data follows and not raw mode


    while (strm.avail_in > 0 && status === Z_STREAM_END$3 && strm.state.wrap > 0 && data[strm.next_in] !== 0) {
      inflate_1.inflateReset(strm);
      status = inflate_1.inflate(strm, _flush_mode);
    }

    switch (status) {
      case Z_STREAM_ERROR$2:
      case Z_DATA_ERROR$2:
      case Z_NEED_DICT$1:
      case Z_MEM_ERROR$1:
        this.onEnd(status);
        this.ended = true;
        return false;
    } // Remember real `avail_out` value, because we may patch out buffer content
    // to align utf8 strings boundaries.


    last_avail_out = strm.avail_out;

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === Z_STREAM_END$3) {
        if (this.options.to === 'string') {
          let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
          let tail = strm.next_out - next_out_utf8;
          let utf8str = strings.buf2string(strm.output, next_out_utf8); // move tail & realign counters

          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);
          this.onData(utf8str);
        } else {
          this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
        }
      }
    } // Must repeat iteration if out buffer is full


    if (status === Z_OK$3 && last_avail_out === 0) continue; // Finalize if end of stream reached.

    if (status === Z_STREAM_END$3) {
      status = inflate_1.inflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return true;
    }

    if (strm.avail_in === 0) break;
  }

  return true;
};
/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|String): output data. When string output requested,
 *   each chunk will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/


Inflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};
/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/


Inflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK$3) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = common.flattenChunks(this.chunks);
    }
  }

  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};
/**
 * inflate(data[, options]) -> Uint8Array|String
 * - data (Uint8Array): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako');
 * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
 * let output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/


function inflate$1(input, options) {
  const inflator = new Inflate(options);
  inflator.push(input); // That will never happens, if you don't cheat with options :)

  if (inflator.err) throw inflator.msg || messages[inflator.err];
  return inflator.result;
}
/**
 * inflateRaw(data[, options]) -> Uint8Array|String
 * - data (Uint8Array): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/


function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate$1(input, options);
}
/**
 * ungzip(data[, options]) -> Uint8Array|String
 * - data (Uint8Array): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


var Inflate_1 = Inflate;
var inflate_2$1 = inflate$1;
var inflateRaw_1 = inflateRaw;
var ungzip = inflate$1;
var constants$2 = constants;
var inflate_1$1 = {
  Inflate: Inflate_1,
  inflate: inflate_2$1,
  inflateRaw: inflateRaw_1,
  ungzip: ungzip,
  constants: constants$2
};
const {
  Deflate: Deflate$1,
  deflate: deflate$2,
  deflateRaw: deflateRaw$1,
  gzip: gzip$1
} = deflate_1$1;
const {
  Inflate: Inflate$1,
  inflate: inflate$2,
  inflateRaw: inflateRaw$1,
  ungzip: ungzip$1
} = inflate_1$1;
var Deflate_1$1 = Deflate$1;
var deflate_1$2 = deflate$2;
var deflateRaw_1$1 = deflateRaw$1;
var gzip_1$1 = gzip$1;
var Inflate_1$1 = Inflate$1;
var inflate_1$2 = inflate$2;
var inflateRaw_1$1 = inflateRaw$1;
var ungzip_1 = ungzip$1;
var constants_1 = constants;
var pako = {
  Deflate: Deflate_1$1,
  deflate: deflate_1$2,
  deflateRaw: deflateRaw_1$1,
  gzip: gzip_1$1,
  Inflate: Inflate_1$1,
  inflate: inflate_1$2,
  inflateRaw: inflateRaw_1$1,
  ungzip: ungzip_1,
  constants: constants_1
};

var customStore = createStore('package-control', '1.0.0');
var API = {
  getPackages: function (action) {
    return __awaiter(this, void 0, void 0, function () {
      var packages, sortPackages;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , get('packagesCache', customStore)];

          case 1:
            packages = _a.sent();
            sortPackages = String(getConfig('sortPackages'));

            switch (action) {
              case 'install':
                return [2
                /*return*/
                , sortPackages === 'name' ? sortByName(packages, sortPackages) : sortByCount(packages, sortPackages)];

              default:
                return [2
                /*return*/
                , sortByName(packages, 'name')];
            }
        }
      });
    });
  },
  setPackages: function (data) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , set('packagesCache', data, customStore)];

          case 1:
            _a.sent();

            return [4
            /*yield*/
            , set('lastUpdate', new Date().toISOString(), customStore)];

          case 2:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  },
  fetchPackages: function () {
    return __awaiter(this, void 0, void 0, function () {
      var lastUpdate, updateDifference, response, uintArray, _a, _b, data;

      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            return [4
            /*yield*/
            , get('lastUpdate', customStore)];

          case 1:
            lastUpdate = _c.sent() || "";
            updateDifference = differenceInMinutes(new Date(), new Date(lastUpdate));

            if (updateDifference < getConfig('updateInterval')) {
              Logger.log("Skipping package retrieval, last update was " + updateDifference + " minutes ago");
              return [2
              /*return*/
              ];
            }

            Logger.log('Downloading packages list');
            return [4
            /*yield*/
            , nodePonyfill('https://idleberg.github.io/atom-package-control-api/all.json.gz')];

          case 2:
            response = _c.sent();
            if (!response.ok) return [3
            /*break*/
            , 5];
            _b = (_a = pako).ungzip;
            return [4
            /*yield*/
            , response.arrayBuffer()];

          case 3:
            uintArray = _b.apply(_a, [_c.sent()]);
            data = JSON.parse(new TextDecoder().decode(uintArray));
            return [4
            /*yield*/
            , this.setPackages(data)];

          case 4:
            _c.sent();

            _c.label = 5;

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  }
};

var Browse = {
  browse: null,
  consumer: function (browse) {
    var _this = this;

    this.browse = browse;
    return new atom_1.Disposable(function () {
      _this.browse = null;
    });
  },
  packageView: function (packageName) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , atom.workspace.open("atom://config/packages/" + packageName, {
              searchAllPanes: true
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  },
  reveal: function (packageName) {
    return __awaiter(this, void 0, void 0, function () {
      var listAction, target;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            listAction = getConfig('listAction');
            if (!(listAction === 'packageView' || atom.packages.isBundledPackage(packageName))) return [3
            /*break*/
            , 2];
            Logger.log("Opening " + packageName + " in package view");
            return [4
            /*yield*/
            , this.packageView(packageName)];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];

          case 2:
            target = atom.packages.getLoadedPackage(packageName).path;
            Logger.log("Opening " + packageName + " in file manager");
            return [4
            /*yield*/
            , this.browse(target)];

          case 3:
            _a.sent();

            _a.label = 4;

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  }
};

var windows = isexe$2;
isexe$2.sync = sync$4;



function checkPathExt(path, options) {
  var pathext = options.pathExt !== undefined ? options.pathExt : process.env.PATHEXT;

  if (!pathext) {
    return true;
  }

  pathext = pathext.split(';');

  if (pathext.indexOf('') !== -1) {
    return true;
  }

  for (var i = 0; i < pathext.length; i++) {
    var p = pathext[i].toLowerCase();

    if (p && path.substr(-p.length).toLowerCase() === p) {
      return true;
    }
  }

  return false;
}

function checkStat$1(stat, path, options) {
  if (!stat.isSymbolicLink() && !stat.isFile()) {
    return false;
  }

  return checkPathExt(path, options);
}

function isexe$2(path, options, cb) {
  fs__default$1['default'].stat(path, function (er, stat) {
    cb(er, er ? false : checkStat$1(stat, path, options));
  });
}

function sync$4(path, options) {
  return checkStat$1(fs__default$1['default'].statSync(path), path, options);
}

var mode = isexe$1;
isexe$1.sync = sync$3;



function isexe$1(path, options, cb) {
  fs__default$1['default'].stat(path, function (er, stat) {
    cb(er, er ? false : checkStat(stat, options));
  });
}

function sync$3(path, options) {
  return checkStat(fs__default$1['default'].statSync(path), options);
}

function checkStat(stat, options) {
  return stat.isFile() && checkMode(stat, options);
}

function checkMode(stat, options) {
  var mod = stat.mode;
  var uid = stat.uid;
  var gid = stat.gid;
  var myUid = options.uid !== undefined ? options.uid : process.getuid && process.getuid();
  var myGid = options.gid !== undefined ? options.gid : process.getgid && process.getgid();
  var u = parseInt('100', 8);
  var g = parseInt('010', 8);
  var o = parseInt('001', 8);
  var ug = u | g;
  var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
  return ret;
}

var core$1;

if (process.platform === 'win32' || commonjsGlobal.TESTING_WINDOWS) {
  core$1 = windows;
} else {
  core$1 = mode;
}

var isexe_1 = isexe;
isexe.sync = sync$2;

function isexe(path, options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = {};
  }

  if (!cb) {
    if (typeof Promise !== 'function') {
      throw new TypeError('callback not provided');
    }

    return new Promise(function (resolve, reject) {
      isexe(path, options || {}, function (er, is) {
        if (er) {
          reject(er);
        } else {
          resolve(is);
        }
      });
    });
  }

  core$1(path, options || {}, function (er, is) {
    // ignore EACCES because that just means we aren't allowed to run it
    if (er) {
      if (er.code === 'EACCES' || options && options.ignoreErrors) {
        er = null;
        is = false;
      }
    }

    cb(er, is);
  });
}

function sync$2(path, options) {
  // my kingdom for a filtered catch
  try {
    return core$1.sync(path, options || {});
  } catch (er) {
    if (options && options.ignoreErrors || er.code === 'EACCES') {
      return false;
    } else {
      throw er;
    }
  }
}

const isWindows = process.platform === 'win32' || process.env.OSTYPE === 'cygwin' || process.env.OSTYPE === 'msys';



const COLON = isWindows ? ';' : ':';



const getNotFoundError = cmd => Object.assign(new Error(`not found: ${cmd}`), {
  code: 'ENOENT'
});

const getPathInfo = (cmd, opt) => {
  const colon = opt.colon || COLON; // If it has a slash, then we don't bother searching the pathenv.
  // just check the file itself, and that's it.

  const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? [''] : [// windows always checks the cwd first
  ...(isWindows ? [process.cwd()] : []), ...(opt.path || process.env.PATH ||
  /* istanbul ignore next: very unusual */
  '').split(colon)];
  const pathExtExe = isWindows ? opt.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM' : '';
  const pathExt = isWindows ? pathExtExe.split(colon) : [''];

  if (isWindows) {
    if (cmd.indexOf('.') !== -1 && pathExt[0] !== '') pathExt.unshift('');
  }

  return {
    pathEnv,
    pathExt,
    pathExtExe
  };
};

const which = (cmd, opt, cb) => {
  if (typeof opt === 'function') {
    cb = opt;
    opt = {};
  }

  if (!opt) opt = {};
  const {
    pathEnv,
    pathExt,
    pathExtExe
  } = getPathInfo(cmd, opt);
  const found = [];

  const step = i => new Promise((resolve, reject) => {
    if (i === pathEnv.length) return opt.all && found.length ? resolve(found) : reject(getNotFoundError(cmd));
    const ppRaw = pathEnv[i];
    const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
    const pCmd = path__default$1['default'].join(pathPart, cmd);
    const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
    resolve(subStep(p, i, 0));
  });

  const subStep = (p, i, ii) => new Promise((resolve, reject) => {
    if (ii === pathExt.length) return resolve(step(i + 1));
    const ext = pathExt[ii];
    isexe_1(p + ext, {
      pathExt: pathExtExe
    }, (er, is) => {
      if (!er && is) {
        if (opt.all) found.push(p + ext);else return resolve(p + ext);
      }

      return resolve(subStep(p, i, ii + 1));
    });
  });

  return cb ? step(0).then(res => cb(null, res), cb) : step(0);
};

const whichSync = (cmd, opt) => {
  opt = opt || {};
  const {
    pathEnv,
    pathExt,
    pathExtExe
  } = getPathInfo(cmd, opt);
  const found = [];

  for (let i = 0; i < pathEnv.length; i++) {
    const ppRaw = pathEnv[i];
    const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
    const pCmd = path__default$1['default'].join(pathPart, cmd);
    const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;

    for (let j = 0; j < pathExt.length; j++) {
      const cur = p + pathExt[j];

      try {
        const is = isexe_1.sync(cur, {
          pathExt: pathExtExe
        });

        if (is) {
          if (opt.all) found.push(cur);else return cur;
        }
      } catch (ex) {}
    }
  }

  if (opt.all && found.length) return found;
  if (opt.nothrow) return null;
  throw getNotFoundError(cmd);
};

var which_1 = which;
which.sync = whichSync;

const pathKey = (options = {}) => {
  const environment = options.env || process.env;
  const platform = options.platform || process.platform;

  if (platform !== 'win32') {
    return 'PATH';
  }

  return Object.keys(environment).reverse().find(key => key.toUpperCase() === 'PATH') || 'Path';
};

var pathKey_1 = pathKey; // TODO: Remove this for the next major release

var _default$3 = pathKey;
pathKey_1.default = _default$3;

function resolveCommandAttempt(parsed, withoutPathExt) {
  const env = parsed.options.env || process.env;
  const cwd = process.cwd();
  const hasCustomCwd = parsed.options.cwd != null; // Worker threads do not have process.chdir()

  const shouldSwitchCwd = hasCustomCwd && process.chdir !== undefined && !process.chdir.disabled; // If a custom `cwd` was specified, we need to change the process cwd
  // because `which` will do stat calls but does not support a custom cwd

  if (shouldSwitchCwd) {
    try {
      process.chdir(parsed.options.cwd);
    } catch (err) {
      /* Empty */
    }
  }

  let resolved;

  try {
    resolved = which_1.sync(parsed.command, {
      path: env[pathKey_1({
        env
      })],
      pathExt: withoutPathExt ? path__default$1['default'].delimiter : undefined
    });
  } catch (e) {
    /* Empty */
  } finally {
    if (shouldSwitchCwd) {
      process.chdir(cwd);
    }
  } // If we successfully resolved, ensure that an absolute path is returned
  // Note that when a custom `cwd` was used, we need to resolve to an absolute path based on it


  if (resolved) {
    resolved = path__default$1['default'].resolve(hasCustomCwd ? parsed.options.cwd : '', resolved);
  }

  return resolved;
}

function resolveCommand(parsed) {
  return resolveCommandAttempt(parsed) || resolveCommandAttempt(parsed, true);
}

var resolveCommand_1 = resolveCommand;

const metaCharsRegExp = /([()\][%!^"`<>&|;, *?])/g;

function escapeCommand(arg) {
  // Escape meta chars
  arg = arg.replace(metaCharsRegExp, '^$1');
  return arg;
}

function escapeArgument(arg, doubleEscapeMetaChars) {
  // Convert to string
  arg = `${arg}`; // Algorithm below is based on https://qntm.org/cmd
  // Sequence of backslashes followed by a double quote:
  // double up all the backslashes and escape the double quote

  arg = arg.replace(/(\\*)"/g, '$1$1\\"'); // Sequence of backslashes followed by the end of the string
  // (which will become a double quote later):
  // double up all the backslashes

  arg = arg.replace(/(\\*)$/, '$1$1'); // All other backslashes occur literally
  // Quote the whole thing:

  arg = `"${arg}"`; // Escape meta chars

  arg = arg.replace(metaCharsRegExp, '^$1'); // Double escape meta chars if necessary

  if (doubleEscapeMetaChars) {
    arg = arg.replace(metaCharsRegExp, '^$1');
  }

  return arg;
}

var command$2 = escapeCommand;
var argument = escapeArgument;

var _escape = {
	command: command$2,
	argument: argument
};

var shebangRegex = /^#!(.*)/;

var shebangCommand = (string = '') => {
  const match = string.match(shebangRegex);

  if (!match) {
    return null;
  }

  const [path, argument] = match[0].replace(/#! ?/, '').split(' ');
  const binary = path.split('/').pop();

  if (binary === 'env') {
    return argument;
  }

  return argument ? `${binary} ${argument}` : binary;
};

function readShebang(command) {
  // Read the first 150 bytes from the file
  const size = 150;
  const buffer = Buffer.alloc(size);
  let fd;

  try {
    fd = fs__default$1['default'].openSync(command, 'r');
    fs__default$1['default'].readSync(fd, buffer, 0, size, 0);
    fs__default$1['default'].closeSync(fd);
  } catch (e) {
    /* Empty */
  } // Attempt to extract shebang (null is returned if not a shebang)


  return shebangCommand(buffer.toString());
}

var readShebang_1 = readShebang;

const isWin$2 = process.platform === 'win32';
const isExecutableRegExp = /\.(?:com|exe)$/i;
const isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;

function detectShebang(parsed) {
  parsed.file = resolveCommand_1(parsed);
  const shebang = parsed.file && readShebang_1(parsed.file);

  if (shebang) {
    parsed.args.unshift(parsed.file);
    parsed.command = shebang;
    return resolveCommand_1(parsed);
  }

  return parsed.file;
}

function parseNonShell(parsed) {
  if (!isWin$2) {
    return parsed;
  } // Detect & add support for shebangs


  const commandFile = detectShebang(parsed); // We don't need a shell if the command filename is an executable

  const needsShell = !isExecutableRegExp.test(commandFile); // If a shell is required, use cmd.exe and take care of escaping everything correctly
  // Note that `forceShell` is an hidden option used only in tests

  if (parsed.options.forceShell || needsShell) {
    // Need to double escape meta chars if the command is a cmd-shim located in `node_modules/.bin/`
    // The cmd-shim simply calls execute the package bin file with NodeJS, proxying any argument
    // Because the escape of metachars with ^ gets interpreted when the cmd.exe is first called,
    // we need to double escape them
    const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile); // Normalize posix paths into OS compatible paths (e.g.: foo/bar -> foo\bar)
    // This is necessary otherwise it will always fail with ENOENT in those cases

    parsed.command = path__default$1['default'].normalize(parsed.command); // Escape command & arguments

    parsed.command = _escape.command(parsed.command);
    parsed.args = parsed.args.map(arg => _escape.argument(arg, needsDoubleEscapeMetaChars));
    const shellCommand = [parsed.command].concat(parsed.args).join(' ');
    parsed.args = ['/d', '/s', '/c', `"${shellCommand}"`];
    parsed.command = process.env.comspec || 'cmd.exe';
    parsed.options.windowsVerbatimArguments = true; // Tell node's spawn that the arguments are already escaped
  }

  return parsed;
}

function parse(command, args, options) {
  // Normalize arguments, similar to nodejs
  if (args && !Array.isArray(args)) {
    options = args;
    args = null;
  }

  args = args ? args.slice(0) : []; // Clone array to avoid changing the original

  options = Object.assign({}, options); // Clone object to avoid changing the original
  // Build our parsed object

  const parsed = {
    command,
    args,
    options,
    file: undefined,
    original: {
      command,
      args
    }
  }; // Delegate further parsing to shell or non-shell

  return options.shell ? parsed : parseNonShell(parsed);
}

var parse_1 = parse;

const isWin$1 = process.platform === 'win32';

function notFoundError(original, syscall) {
  return Object.assign(new Error(`${syscall} ${original.command} ENOENT`), {
    code: 'ENOENT',
    errno: 'ENOENT',
    syscall: `${syscall} ${original.command}`,
    path: original.command,
    spawnargs: original.args
  });
}

function hookChildProcess(cp, parsed) {
  if (!isWin$1) {
    return;
  }

  const originalEmit = cp.emit;

  cp.emit = function (name, arg1) {
    // If emitting "exit" event and exit code is 1, we need to check if
    // the command exists and emit an "error" instead
    // See https://github.com/IndigoUnited/node-cross-spawn/issues/16
    if (name === 'exit') {
      const err = verifyENOENT(arg1, parsed);

      if (err) {
        return originalEmit.call(cp, 'error', err);
      }
    }

    return originalEmit.apply(cp, arguments); // eslint-disable-line prefer-rest-params
  };
}

function verifyENOENT(status, parsed) {
  if (isWin$1 && status === 1 && !parsed.file) {
    return notFoundError(parsed.original, 'spawn');
  }

  return null;
}

function verifyENOENTSync(status, parsed) {
  if (isWin$1 && status === 1 && !parsed.file) {
    return notFoundError(parsed.original, 'spawnSync');
  }

  return null;
}

var enoent = {
  hookChildProcess,
  verifyENOENT,
  verifyENOENTSync,
  notFoundError
};

function spawn(command, args, options) {
  // Parse the arguments
  const parsed = parse_1(command, args, options); // Spawn the child process

  const spawned = childProcess__default['default'].spawn(parsed.command, parsed.args, parsed.options); // Hook into child process "exit" event to emit an error if the command
  // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16

  enoent.hookChildProcess(spawned, parsed);
  return spawned;
}

function spawnSync(command, args, options) {
  // Parse the arguments
  const parsed = parse_1(command, args, options); // Spawn the child process

  const result = childProcess__default['default'].spawnSync(parsed.command, parsed.args, parsed.options); // Analyze if the command does not exist, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16

  result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);
  return result;
}

var crossSpawn = spawn;
var spawn_1 = spawn;
var sync$1 = spawnSync;
var _parse = parse_1;
var _enoent = enoent;
crossSpawn.spawn = spawn_1;
crossSpawn.sync = sync$1;
crossSpawn._parse = _parse;
crossSpawn._enoent = _enoent;

var stripFinalNewline = input => {
  const LF = typeof input === 'string' ? '\n' : '\n'.charCodeAt();
  const CR = typeof input === 'string' ? '\r' : '\r'.charCodeAt();

  if (input[input.length - 1] === LF) {
    input = input.slice(0, input.length - 1);
  }

  if (input[input.length - 1] === CR) {
    input = input.slice(0, input.length - 1);
  }

  return input;
};

var npmRunPath_1 = createCommonjsModule(function (module) {





const npmRunPath = options => {
  options = {
    cwd: process.cwd(),
    path: process.env[pathKey_1()],
    execPath: process.execPath,
    ...options
  };
  let previous;
  let cwdPath = path__default$1['default'].resolve(options.cwd);
  const result = [];

  while (previous !== cwdPath) {
    result.push(path__default$1['default'].join(cwdPath, 'node_modules/.bin'));
    previous = cwdPath;
    cwdPath = path__default$1['default'].resolve(cwdPath, '..');
  } // Ensure the running `node` binary is used


  const execPathDir = path__default$1['default'].resolve(options.cwd, options.execPath, '..');
  result.push(execPathDir);
  return result.concat(options.path).join(path__default$1['default'].delimiter);
};

module.exports = npmRunPath; // TODO: Remove this for the next major release

module.exports.default = npmRunPath;

module.exports.env = options => {
  options = {
    env: process.env,
    ...options
  };
  const env = { ...options.env
  };
  const path = pathKey_1({
    env
  });
  options.path = env[path];
  env[path] = module.exports(options);
  return env;
};
});

const mimicFn = (to, from) => {
  for (const prop of Reflect.ownKeys(from)) {
    Object.defineProperty(to, prop, Object.getOwnPropertyDescriptor(from, prop));
  }

  return to;
};

var mimicFn_1 = mimicFn; // TODO: Remove this for the next major release

var _default$2 = mimicFn;
mimicFn_1.default = _default$2;

const calledFunctions = new WeakMap();

const onetime = (function_, options = {}) => {
  if (typeof function_ !== 'function') {
    throw new TypeError('Expected a function');
  }

  let returnValue;
  let callCount = 0;
  const functionName = function_.displayName || function_.name || '<anonymous>';

  const onetime = function (...arguments_) {
    calledFunctions.set(onetime, ++callCount);

    if (callCount === 1) {
      returnValue = function_.apply(this, arguments_);
      function_ = null;
    } else if (options.throw === true) {
      throw new Error(`Function \`${functionName}\` can only be called once`);
    }

    return returnValue;
  };

  mimicFn_1(onetime, function_);
  calledFunctions.set(onetime, callCount);
  return onetime;
};

var onetime_1 = onetime; // TODO: Remove this for the next major release

var _default$1 = onetime;

var callCount = function_ => {
  if (!calledFunctions.has(function_)) {
    throw new Error(`The given function \`${function_.name}\` is not wrapped by the \`onetime\` package`);
  }

  return calledFunctions.get(function_);
};
onetime_1.default = _default$1;
onetime_1.callCount = callCount;

var core = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIGNALS = void 0;
const SIGNALS = [{
  name: "SIGHUP",
  number: 1,
  action: "terminate",
  description: "Terminal closed",
  standard: "posix"
}, {
  name: "SIGINT",
  number: 2,
  action: "terminate",
  description: "User interruption with CTRL-C",
  standard: "ansi"
}, {
  name: "SIGQUIT",
  number: 3,
  action: "core",
  description: "User interruption with CTRL-\\",
  standard: "posix"
}, {
  name: "SIGILL",
  number: 4,
  action: "core",
  description: "Invalid machine instruction",
  standard: "ansi"
}, {
  name: "SIGTRAP",
  number: 5,
  action: "core",
  description: "Debugger breakpoint",
  standard: "posix"
}, {
  name: "SIGABRT",
  number: 6,
  action: "core",
  description: "Aborted",
  standard: "ansi"
}, {
  name: "SIGIOT",
  number: 6,
  action: "core",
  description: "Aborted",
  standard: "bsd"
}, {
  name: "SIGBUS",
  number: 7,
  action: "core",
  description: "Bus error due to misaligned, non-existing address or paging error",
  standard: "bsd"
}, {
  name: "SIGEMT",
  number: 7,
  action: "terminate",
  description: "Command should be emulated but is not implemented",
  standard: "other"
}, {
  name: "SIGFPE",
  number: 8,
  action: "core",
  description: "Floating point arithmetic error",
  standard: "ansi"
}, {
  name: "SIGKILL",
  number: 9,
  action: "terminate",
  description: "Forced termination",
  standard: "posix",
  forced: true
}, {
  name: "SIGUSR1",
  number: 10,
  action: "terminate",
  description: "Application-specific signal",
  standard: "posix"
}, {
  name: "SIGSEGV",
  number: 11,
  action: "core",
  description: "Segmentation fault",
  standard: "ansi"
}, {
  name: "SIGUSR2",
  number: 12,
  action: "terminate",
  description: "Application-specific signal",
  standard: "posix"
}, {
  name: "SIGPIPE",
  number: 13,
  action: "terminate",
  description: "Broken pipe or socket",
  standard: "posix"
}, {
  name: "SIGALRM",
  number: 14,
  action: "terminate",
  description: "Timeout or timer",
  standard: "posix"
}, {
  name: "SIGTERM",
  number: 15,
  action: "terminate",
  description: "Termination",
  standard: "ansi"
}, {
  name: "SIGSTKFLT",
  number: 16,
  action: "terminate",
  description: "Stack is empty or overflowed",
  standard: "other"
}, {
  name: "SIGCHLD",
  number: 17,
  action: "ignore",
  description: "Child process terminated, paused or unpaused",
  standard: "posix"
}, {
  name: "SIGCLD",
  number: 17,
  action: "ignore",
  description: "Child process terminated, paused or unpaused",
  standard: "other"
}, {
  name: "SIGCONT",
  number: 18,
  action: "unpause",
  description: "Unpaused",
  standard: "posix",
  forced: true
}, {
  name: "SIGSTOP",
  number: 19,
  action: "pause",
  description: "Paused",
  standard: "posix",
  forced: true
}, {
  name: "SIGTSTP",
  number: 20,
  action: "pause",
  description: "Paused using CTRL-Z or \"suspend\"",
  standard: "posix"
}, {
  name: "SIGTTIN",
  number: 21,
  action: "pause",
  description: "Background process cannot read terminal input",
  standard: "posix"
}, {
  name: "SIGBREAK",
  number: 21,
  action: "terminate",
  description: "User interruption with CTRL-BREAK",
  standard: "other"
}, {
  name: "SIGTTOU",
  number: 22,
  action: "pause",
  description: "Background process cannot write to terminal output",
  standard: "posix"
}, {
  name: "SIGURG",
  number: 23,
  action: "ignore",
  description: "Socket received out-of-band data",
  standard: "bsd"
}, {
  name: "SIGXCPU",
  number: 24,
  action: "core",
  description: "Process timed out",
  standard: "bsd"
}, {
  name: "SIGXFSZ",
  number: 25,
  action: "core",
  description: "File too big",
  standard: "bsd"
}, {
  name: "SIGVTALRM",
  number: 26,
  action: "terminate",
  description: "Timeout or timer",
  standard: "bsd"
}, {
  name: "SIGPROF",
  number: 27,
  action: "terminate",
  description: "Timeout or timer",
  standard: "bsd"
}, {
  name: "SIGWINCH",
  number: 28,
  action: "ignore",
  description: "Terminal window size changed",
  standard: "bsd"
}, {
  name: "SIGIO",
  number: 29,
  action: "terminate",
  description: "I/O is available",
  standard: "other"
}, {
  name: "SIGPOLL",
  number: 29,
  action: "terminate",
  description: "Watched event",
  standard: "other"
}, {
  name: "SIGINFO",
  number: 29,
  action: "ignore",
  description: "Request for process information",
  standard: "other"
}, {
  name: "SIGPWR",
  number: 30,
  action: "terminate",
  description: "Device running out of power",
  standard: "systemv"
}, {
  name: "SIGSYS",
  number: 31,
  action: "core",
  description: "Invalid system call",
  standard: "other"
}, {
  name: "SIGUNUSED",
  number: 31,
  action: "terminate",
  description: "Invalid system call",
  standard: "other"
}];
exports.SIGNALS = SIGNALS;
});

var realtime = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIGRTMAX = exports.getRealtimeSignals = void 0;

const getRealtimeSignals = function () {
  const length = SIGRTMAX - SIGRTMIN + 1;
  return Array.from({
    length
  }, getRealtimeSignal);
};

exports.getRealtimeSignals = getRealtimeSignals;

const getRealtimeSignal = function (value, index) {
  return {
    name: `SIGRT${index + 1}`,
    number: SIGRTMIN + index,
    action: "terminate",
    description: "Application-specific signal (realtime)",
    standard: "posix"
  };
};

const SIGRTMIN = 34;
const SIGRTMAX = 64;
exports.SIGRTMAX = SIGRTMAX;
});

var signals$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSignals = void 0;







const getSignals = function () {
  const realtimeSignals = (0, realtime.getRealtimeSignals)();
  const signals = [...core.SIGNALS, ...realtimeSignals].map(normalizeSignal);
  return signals;
};

exports.getSignals = getSignals;

const normalizeSignal = function ({
  name,
  number: defaultNumber,
  description,
  action,
  forced = false,
  standard
}) {
  const {
    signals: {
      [name]: constantSignal
    }
  } = os__default$1['default'].constants;
  const supported = constantSignal !== undefined;
  const number = supported ? constantSignal : defaultNumber;
  return {
    name,
    number,
    description,
    supported,
    action,
    forced,
    standard
  };
};
});

var main = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signalsByNumber = exports.signalsByName = void 0;







const getSignalsByName = function () {
  const signals = (0, signals$2.getSignals)();
  return signals.reduce(getSignalByName, {});
};

const getSignalByName = function (signalByNameMemo, {
  name,
  number,
  description,
  supported,
  action,
  forced,
  standard
}) {
  return { ...signalByNameMemo,
    [name]: {
      name,
      number,
      description,
      supported,
      action,
      forced,
      standard
    }
  };
};

const signalsByName = getSignalsByName();
exports.signalsByName = signalsByName;

const getSignalsByNumber = function () {
  const signals = (0, signals$2.getSignals)();
  const length = realtime.SIGRTMAX + 1;
  const signalsA = Array.from({
    length
  }, (value, number) => getSignalByNumber(number, signals));
  return Object.assign({}, ...signalsA);
};

const getSignalByNumber = function (number, signals) {
  const signal = findSignalByNumber(number, signals);

  if (signal === undefined) {
    return {};
  }

  const {
    name,
    description,
    supported,
    action,
    forced,
    standard
  } = signal;
  return {
    [number]: {
      name,
      number,
      description,
      supported,
      action,
      forced,
      standard
    }
  };
};

const findSignalByNumber = function (number, signals) {
  const signal = signals.find(({
    name
  }) => os__default$1['default'].constants.signals[name] === number);

  if (signal !== undefined) {
    return signal;
  }

  return signals.find(signalA => signalA.number === number);
};

const signalsByNumber = getSignalsByNumber();
exports.signalsByNumber = signalsByNumber;
});

const {
  signalsByName
} = main;

const getErrorPrefix = ({
  timedOut,
  timeout,
  errorCode,
  signal,
  signalDescription,
  exitCode,
  isCanceled
}) => {
  if (timedOut) {
    return `timed out after ${timeout} milliseconds`;
  }

  if (isCanceled) {
    return 'was canceled';
  }

  if (errorCode !== undefined) {
    return `failed with ${errorCode}`;
  }

  if (signal !== undefined) {
    return `was killed with ${signal} (${signalDescription})`;
  }

  if (exitCode !== undefined) {
    return `failed with exit code ${exitCode}`;
  }

  return 'failed';
};

const makeError = ({
  stdout,
  stderr,
  all,
  error,
  signal,
  exitCode,
  command,
  timedOut,
  isCanceled,
  killed,
  parsed: {
    options: {
      timeout
    }
  }
}) => {
  // `signal` and `exitCode` emitted on `spawned.on('exit')` event can be `null`.
  // We normalize them to `undefined`
  exitCode = exitCode === null ? undefined : exitCode;
  signal = signal === null ? undefined : signal;
  const signalDescription = signal === undefined ? undefined : signalsByName[signal].description;
  const errorCode = error && error.code;
  const prefix = getErrorPrefix({
    timedOut,
    timeout,
    errorCode,
    signal,
    signalDescription,
    exitCode,
    isCanceled
  });
  const execaMessage = `Command ${prefix}: ${command}`;
  const isError = Object.prototype.toString.call(error) === '[object Error]';
  const shortMessage = isError ? `${execaMessage}\n${error.message}` : execaMessage;
  const message = [shortMessage, stderr, stdout].filter(Boolean).join('\n');

  if (isError) {
    error.originalMessage = error.message;
    error.message = message;
  } else {
    error = new Error(message);
  }

  error.shortMessage = shortMessage;
  error.command = command;
  error.exitCode = exitCode;
  error.signal = signal;
  error.signalDescription = signalDescription;
  error.stdout = stdout;
  error.stderr = stderr;

  if (all !== undefined) {
    error.all = all;
  }

  if ('bufferedData' in error) {
    delete error.bufferedData;
  }

  error.failed = true;
  error.timedOut = Boolean(timedOut);
  error.isCanceled = isCanceled;
  error.killed = killed && !timedOut;
  return error;
};

var error = makeError;

const aliases = ['stdin', 'stdout', 'stderr'];

const hasAlias = opts => aliases.some(alias => opts[alias] !== undefined);

const normalizeStdio = opts => {
  if (!opts) {
    return;
  }

  const {
    stdio
  } = opts;

  if (stdio === undefined) {
    return aliases.map(alias => opts[alias]);
  }

  if (hasAlias(opts)) {
    throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${aliases.map(alias => `\`${alias}\``).join(', ')}`);
  }

  if (typeof stdio === 'string') {
    return stdio;
  }

  if (!Array.isArray(stdio)) {
    throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
  }

  const length = Math.max(stdio.length, aliases.length);
  return Array.from({
    length
  }, (value, index) => stdio[index]);
};

var stdio = normalizeStdio; // `ipc` is pushed unless it is already present

var node$1 = opts => {
  const stdio = normalizeStdio(opts);

  if (stdio === 'ipc') {
    return 'ipc';
  }

  if (stdio === undefined || typeof stdio === 'string') {
    return [stdio, stdio, stdio, 'ipc'];
  }

  if (stdio.includes('ipc')) {
    return stdio;
  }

  return [...stdio, 'ipc'];
};
stdio.node = node$1;

var signals$1 = createCommonjsModule(function (module) {
// This is not the set of all possible signals.
//
// It IS, however, the set of all signals that trigger
// an exit on either Linux or BSD systems.  Linux is a
// superset of the signal names supported on BSD, and
// the unknown signals just fail to register, so we can
// catch that easily enough.
//
// Don't bother with SIGKILL.  It's uncatchable, which
// means that we can't fire any callbacks anyway.
//
// If a user does happen to register a handler on a non-
// fatal signal like SIGWINCH or something, and then
// exit, it'll end up firing `process.emit('exit')`, so
// the handler will be fired anyway.
//
// SIGBUS, SIGFPE, SIGSEGV and SIGILL, when not raised
// artificially, inherently leave the process in a
// state from which it is not safe to try and enter JS
// listeners.
module.exports = ['SIGABRT', 'SIGALRM', 'SIGHUP', 'SIGINT', 'SIGTERM'];

if (process.platform !== 'win32') {
  module.exports.push('SIGVTALRM', 'SIGXCPU', 'SIGXFSZ', 'SIGUSR2', 'SIGTRAP', 'SIGSYS', 'SIGQUIT', 'SIGIOT' // should detect profiler and enable/disable accordingly.
  // see #21
  // 'SIGPROF'
  );
}

if (process.platform === 'linux') {
  module.exports.push('SIGIO', 'SIGPOLL', 'SIGPWR', 'SIGSTKFLT', 'SIGUNUSED');
}
});

// Note: since nyc uses this module to output coverage, any lines
// that are in the direct sync flow of nyc's outputCoverage are
// ignored, since we can never get coverage for them.


var signals = signals$1;

var isWin = /^win/i.test(process.platform);

var EE = require$$1__default['default'];
/* istanbul ignore if */


if (typeof EE !== 'function') {
  EE = EE.EventEmitter;
}

var emitter;

if (process.__signal_exit_emitter__) {
  emitter = process.__signal_exit_emitter__;
} else {
  emitter = process.__signal_exit_emitter__ = new EE();
  emitter.count = 0;
  emitter.emitted = {};
} // Because this emitter is a global, we have to check to see if a
// previous version of this library failed to enable infinite listeners.
// I know what you're about to say.  But literally everything about
// signal-exit is a compromise with evil.  Get used to it.


if (!emitter.infinite) {
  emitter.setMaxListeners(Infinity);
  emitter.infinite = true;
}

var signalExit = function (cb, opts) {
  assert__default['default'].equal(typeof cb, 'function', 'a callback must be provided for exit handler');

  if (loaded === false) {
    load();
  }

  var ev = 'exit';

  if (opts && opts.alwaysLast) {
    ev = 'afterexit';
  }

  var remove = function () {
    emitter.removeListener(ev, cb);

    if (emitter.listeners('exit').length === 0 && emitter.listeners('afterexit').length === 0) {
      unload();
    }
  };

  emitter.on(ev, cb);
  return remove;
};

var unload_1 = unload;

function unload() {
  if (!loaded) {
    return;
  }

  loaded = false;
  signals.forEach(function (sig) {
    try {
      process.removeListener(sig, sigListeners[sig]);
    } catch (er) {}
  });
  process.emit = originalProcessEmit;
  process.reallyExit = originalProcessReallyExit;
  emitter.count -= 1;
}

function emit(event, code, signal) {
  if (emitter.emitted[event]) {
    return;
  }

  emitter.emitted[event] = true;
  emitter.emit(event, code, signal);
} // { <signal>: <listener fn>, ... }


var sigListeners = {};
signals.forEach(function (sig) {
  sigListeners[sig] = function listener() {
    // If there are no other listeners, an exit is coming!
    // Simplest way: remove us and then re-send the signal.
    // We know that this will kill the process, so we can
    // safely emit now.
    var listeners = process.listeners(sig);

    if (listeners.length === emitter.count) {
      unload();
      emit('exit', null, sig);
      /* istanbul ignore next */

      emit('afterexit', null, sig);
      /* istanbul ignore next */

      if (isWin && sig === 'SIGHUP') {
        // "SIGHUP" throws an `ENOSYS` error on Windows,
        // so use a supported signal instead
        sig = 'SIGINT';
      }

      process.kill(process.pid, sig);
    }
  };
});

var signals_1 = function () {
  return signals;
};

var load_1 = load;
var loaded = false;

function load() {
  if (loaded) {
    return;
  }

  loaded = true; // This is the number of onSignalExit's that are in play.
  // It's important so that we can count the correct number of
  // listeners on signals, and don't wait for the other one to
  // handle it instead of us.

  emitter.count += 1;
  signals = signals.filter(function (sig) {
    try {
      process.on(sig, sigListeners[sig]);
      return true;
    } catch (er) {
      return false;
    }
  });
  process.emit = processEmit;
  process.reallyExit = processReallyExit;
}

var originalProcessReallyExit = process.reallyExit;

function processReallyExit(code) {
  process.exitCode = code || 0;
  emit('exit', process.exitCode, null);
  /* istanbul ignore next */

  emit('afterexit', process.exitCode, null);
  /* istanbul ignore next */

  originalProcessReallyExit.call(process, process.exitCode);
}

var originalProcessEmit = process.emit;

function processEmit(ev, arg) {
  if (ev === 'exit') {
    if (arg !== undefined) {
      process.exitCode = arg;
    }

    var ret = originalProcessEmit.apply(this, arguments);
    emit('exit', process.exitCode, null);
    /* istanbul ignore next */

    emit('afterexit', process.exitCode, null);
    return ret;
  } else {
    return originalProcessEmit.apply(this, arguments);
  }
}
signalExit.unload = unload_1;
signalExit.signals = signals_1;
signalExit.load = load_1;

const DEFAULT_FORCE_KILL_TIMEOUT = 1000 * 5; // Monkey-patches `childProcess.kill()` to add `forceKillAfterTimeout` behavior

const spawnedKill$1 = (kill, signal = 'SIGTERM', options = {}) => {
  const killResult = kill(signal);
  setKillTimeout(kill, signal, options, killResult);
  return killResult;
};

const setKillTimeout = (kill, signal, options, killResult) => {
  if (!shouldForceKill(signal, options, killResult)) {
    return;
  }

  const timeout = getForceKillAfterTimeout(options);
  const t = setTimeout(() => {
    kill('SIGKILL');
  }, timeout); // Guarded because there's no `.unref()` when `execa` is used in the renderer
  // process in Electron. This cannot be tested since we don't run tests in
  // Electron.
  // istanbul ignore else

  if (t.unref) {
    t.unref();
  }
};

const shouldForceKill = (signal, {
  forceKillAfterTimeout
}, killResult) => {
  return isSigterm(signal) && forceKillAfterTimeout !== false && killResult;
};

const isSigterm = signal => {
  return signal === os__default$1['default'].constants.signals.SIGTERM || typeof signal === 'string' && signal.toUpperCase() === 'SIGTERM';
};

const getForceKillAfterTimeout = ({
  forceKillAfterTimeout = true
}) => {
  if (forceKillAfterTimeout === true) {
    return DEFAULT_FORCE_KILL_TIMEOUT;
  }

  if (!Number.isFinite(forceKillAfterTimeout) || forceKillAfterTimeout < 0) {
    throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${forceKillAfterTimeout}\` (${typeof forceKillAfterTimeout})`);
  }

  return forceKillAfterTimeout;
}; // `childProcess.cancel()`


const spawnedCancel$1 = (spawned, context) => {
  const killResult = spawned.kill();

  if (killResult) {
    context.isCanceled = true;
  }
};

const timeoutKill = (spawned, signal, reject) => {
  spawned.kill(signal);
  reject(Object.assign(new Error('Timed out'), {
    timedOut: true,
    signal
  }));
}; // `timeout` option handling


const setupTimeout$1 = (spawned, {
  timeout,
  killSignal = 'SIGTERM'
}, spawnedPromise) => {
  if (timeout === 0 || timeout === undefined) {
    return spawnedPromise;
  }

  if (!Number.isFinite(timeout) || timeout < 0) {
    throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${timeout}\` (${typeof timeout})`);
  }

  let timeoutId;
  const timeoutPromise = new Promise((resolve, reject) => {
    timeoutId = setTimeout(() => {
      timeoutKill(spawned, killSignal, reject);
    }, timeout);
  });
  const safeSpawnedPromise = spawnedPromise.finally(() => {
    clearTimeout(timeoutId);
  });
  return Promise.race([timeoutPromise, safeSpawnedPromise]);
}; // `cleanup` option handling


const setExitHandler$1 = async (spawned, {
  cleanup,
  detached
}, timedPromise) => {
  if (!cleanup || detached) {
    return timedPromise;
  }

  const removeExitHandler = signalExit(() => {
    spawned.kill();
  });
  return timedPromise.finally(() => {
    removeExitHandler();
  });
};

var kill = {
  spawnedKill: spawnedKill$1,
  spawnedCancel: spawnedCancel$1,
  setupTimeout: setupTimeout$1,
  setExitHandler: setExitHandler$1
};

const isStream = stream => stream !== null && typeof stream === 'object' && typeof stream.pipe === 'function';

isStream.writable = stream => isStream(stream) && stream.writable !== false && typeof stream._write === 'function' && typeof stream._writableState === 'object';

isStream.readable = stream => isStream(stream) && stream.readable !== false && typeof stream._read === 'function' && typeof stream._readableState === 'object';

isStream.duplex = stream => isStream.writable(stream) && isStream.readable(stream);

isStream.transform = stream => isStream.duplex(stream) && typeof stream._transform === 'function' && typeof stream._transformState === 'object';

var isStream_1 = isStream;

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
var wrappy_1 = wrappy;

function wrappy(fn, cb) {
  if (fn && cb) return wrappy(fn)(cb);
  if (typeof fn !== 'function') throw new TypeError('need wrapper function');
  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k];
  });
  return wrapper;

  function wrapper() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    var ret = fn.apply(this, args);
    var cb = args[args.length - 1];

    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k];
      });
    }

    return ret;
  }
}

var once_1 = wrappy_1(once);
var strict = wrappy_1(onceStrict);
once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this);
    },
    configurable: true
  });
  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this);
    },
    configurable: true
  });
});

function once(fn) {
  var f = function () {
    if (f.called) return f.value;
    f.called = true;
    return f.value = fn.apply(this, arguments);
  };

  f.called = false;
  return f;
}

function onceStrict(fn) {
  var f = function () {
    if (f.called) throw new Error(f.onceError);
    f.called = true;
    return f.value = fn.apply(this, arguments);
  };

  var name = fn.name || 'Function wrapped with `once`';
  f.onceError = name + " shouldn't be called more than once";
  f.called = false;
  return f;
}
once_1.strict = strict;

var noop$1 = function () {};

var isRequest$1 = function (stream) {
  return stream.setHeader && typeof stream.abort === 'function';
};

var isChildProcess = function (stream) {
  return stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3;
};

var eos = function (stream, opts, callback) {
  if (typeof opts === 'function') return eos(stream, null, opts);
  if (!opts) opts = {};
  callback = once_1(callback || noop$1);
  var ws = stream._writableState;
  var rs = stream._readableState;
  var readable = opts.readable || opts.readable !== false && stream.readable;
  var writable = opts.writable || opts.writable !== false && stream.writable;
  var cancelled = false;

  var onlegacyfinish = function () {
    if (!stream.writable) onfinish();
  };

  var onfinish = function () {
    writable = false;
    if (!readable) callback.call(stream);
  };

  var onend = function () {
    readable = false;
    if (!writable) callback.call(stream);
  };

  var onexit = function (exitCode) {
    callback.call(stream, exitCode ? new Error('exited with error code: ' + exitCode) : null);
  };

  var onerror = function (err) {
    callback.call(stream, err);
  };

  var onclose = function () {
    process.nextTick(onclosenexttick);
  };

  var onclosenexttick = function () {
    if (cancelled) return;
    if (readable && !(rs && rs.ended && !rs.destroyed)) return callback.call(stream, new Error('premature close'));
    if (writable && !(ws && ws.ended && !ws.destroyed)) return callback.call(stream, new Error('premature close'));
  };

  var onrequest = function () {
    stream.req.on('finish', onfinish);
  };

  if (isRequest$1(stream)) {
    stream.on('complete', onfinish);
    stream.on('abort', onclose);
    if (stream.req) onrequest();else stream.on('request', onrequest);
  } else if (writable && !ws) {
    // legacy streams
    stream.on('end', onlegacyfinish);
    stream.on('close', onlegacyfinish);
  }

  if (isChildProcess(stream)) stream.on('exit', onexit);
  stream.on('end', onend);
  stream.on('finish', onfinish);
  if (opts.error !== false) stream.on('error', onerror);
  stream.on('close', onclose);
  return function () {
    cancelled = true;
    stream.removeListener('complete', onfinish);
    stream.removeListener('abort', onclose);
    stream.removeListener('request', onrequest);
    if (stream.req) stream.req.removeListener('finish', onfinish);
    stream.removeListener('end', onlegacyfinish);
    stream.removeListener('close', onlegacyfinish);
    stream.removeListener('finish', onfinish);
    stream.removeListener('exit', onexit);
    stream.removeListener('end', onend);
    stream.removeListener('error', onerror);
    stream.removeListener('close', onclose);
  };
};

var endOfStream = eos;

// we only need fs to get the ReadStream and WriteStream prototypes


var noop = function () {};

var ancient = /^v?\.0/.test(process.version);

var isFn = function (fn) {
  return typeof fn === 'function';
};

var isFS = function (stream) {
  if (!ancient) return false; // newer node version do not need to care about fs is a special way

  if (!fs__default$1['default']) return false; // browser

  return (stream instanceof (fs__default$1['default'].ReadStream || noop) || stream instanceof (fs__default$1['default'].WriteStream || noop)) && isFn(stream.close);
};

var isRequest = function (stream) {
  return stream.setHeader && isFn(stream.abort);
};

var destroyer = function (stream, reading, writing, callback) {
  callback = once_1(callback);
  var closed = false;
  stream.on('close', function () {
    closed = true;
  });
  endOfStream(stream, {
    readable: reading,
    writable: writing
  }, function (err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function (err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true;
    if (isFS(stream)) return stream.close(noop); // use close for fs streams to avoid fd leaks

    if (isRequest(stream)) return stream.abort(); // request.destroy just do .end - .abort is what we want

    if (isFn(stream.destroy)) return stream.destroy();
    callback(err || new Error('stream was destroyed'));
  };
};

var call = function (fn) {
  fn();
};

var pipe = function (from, to) {
  return from.pipe(to);
};

var pump = function () {
  var streams = Array.prototype.slice.call(arguments);
  var callback = isFn(streams[streams.length - 1] || noop) && streams.pop() || noop;
  if (Array.isArray(streams[0])) streams = streams[0];
  if (streams.length < 2) throw new Error('pump requires two streams per minimum');
  var error;
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
};

var pump_1 = pump;

const {
  PassThrough: PassThroughStream
} = Stream__default['default'];

var bufferStream = options => {
  options = { ...options
  };
  const {
    array
  } = options;
  let {
    encoding
  } = options;
  const isBuffer = encoding === 'buffer';
  let objectMode = false;

  if (array) {
    objectMode = !(encoding || isBuffer);
  } else {
    encoding = encoding || 'utf8';
  }

  if (isBuffer) {
    encoding = null;
  }

  const stream = new PassThroughStream({
    objectMode
  });

  if (encoding) {
    stream.setEncoding(encoding);
  }

  let length = 0;
  const chunks = [];
  stream.on('data', chunk => {
    chunks.push(chunk);

    if (objectMode) {
      length = chunks.length;
    } else {
      length += chunk.length;
    }
  });

  stream.getBufferedValue = () => {
    if (array) {
      return chunks;
    }

    return isBuffer ? Buffer.concat(chunks, length) : chunks.join('');
  };

  stream.getBufferedLength = () => length;

  return stream;
};

const {
  constants: BufferConstants
} = require$$0__default['default'];





class MaxBufferError extends Error {
  constructor() {
    super('maxBuffer exceeded');
    this.name = 'MaxBufferError';
  }

}

async function getStream(inputStream, options) {
  if (!inputStream) {
    return Promise.reject(new Error('Expected a stream'));
  }

  options = {
    maxBuffer: Infinity,
    ...options
  };
  const {
    maxBuffer
  } = options;
  let stream;
  await new Promise((resolve, reject) => {
    const rejectPromise = error => {
      // Don't retrieve an oversized buffer.
      if (error && stream.getBufferedLength() <= BufferConstants.MAX_LENGTH) {
        error.bufferedData = stream.getBufferedValue();
      }

      reject(error);
    };

    stream = pump_1(inputStream, bufferStream(options), error => {
      if (error) {
        rejectPromise(error);
        return;
      }

      resolve();
    });
    stream.on('data', () => {
      if (stream.getBufferedLength() > maxBuffer) {
        rejectPromise(new MaxBufferError());
      }
    });
  });
  return stream.getBufferedValue();
}

var getStream_1 = getStream; // TODO: Remove this for the next major release

var _default = getStream;

var buffer = (stream, options) => getStream(stream, { ...options,
  encoding: 'buffer'
});

var array = (stream, options) => getStream(stream, { ...options,
  array: true
});

var MaxBufferError_1 = MaxBufferError;
getStream_1.default = _default;
getStream_1.buffer = buffer;
getStream_1.array = array;
getStream_1.MaxBufferError = MaxBufferError_1;

const {
  PassThrough
} = Stream__default['default'];

var mergeStream = function ()
/*streams...*/
{
  var sources = [];
  var output = new PassThrough({
    objectMode: true
  });
  output.setMaxListeners(0);
  output.add = add;
  output.isEmpty = isEmpty;
  output.on('unpipe', remove);
  Array.prototype.slice.call(arguments).forEach(add);
  return output;

  function add(source) {
    if (Array.isArray(source)) {
      source.forEach(add);
      return this;
    }

    sources.push(source);
    source.once('end', remove.bind(null, source));
    source.once('error', output.emit.bind(output, 'error'));
    source.pipe(output, {
      end: false
    });
    return this;
  }

  function isEmpty() {
    return sources.length == 0;
  }

  function remove(source) {
    sources = sources.filter(function (it) {
      return it !== source;
    });

    if (!sources.length && output.readable) {
      output.end();
    }
  }
};

// `input` option


const handleInput$1 = (spawned, input) => {
  // Checking for stdin is workaround for https://github.com/nodejs/node/issues/26852
  // TODO: Remove `|| spawned.stdin === undefined` once we drop support for Node.js <=12.2.0
  if (input === undefined || spawned.stdin === undefined) {
    return;
  }

  if (isStream_1(input)) {
    input.pipe(spawned.stdin);
  } else {
    spawned.stdin.end(input);
  }
}; // `all` interleaves `stdout` and `stderr`


const makeAllStream$1 = (spawned, {
  all
}) => {
  if (!all || !spawned.stdout && !spawned.stderr) {
    return;
  }

  const mixed = mergeStream();

  if (spawned.stdout) {
    mixed.add(spawned.stdout);
  }

  if (spawned.stderr) {
    mixed.add(spawned.stderr);
  }

  return mixed;
}; // On failure, `result.stdout|stderr|all` should contain the currently buffered stream


const getBufferedData = async (stream, streamPromise) => {
  if (!stream) {
    return;
  }

  stream.destroy();

  try {
    return await streamPromise;
  } catch (error) {
    return error.bufferedData;
  }
};

const getStreamPromise = (stream, {
  encoding,
  buffer,
  maxBuffer
}) => {
  if (!stream || !buffer) {
    return;
  }

  if (encoding) {
    return getStream_1(stream, {
      encoding,
      maxBuffer
    });
  }

  return getStream_1.buffer(stream, {
    maxBuffer
  });
}; // Retrieve result of child process: exit code, signal, error, streams (stdout/stderr/all)


const getSpawnedResult$1 = async ({
  stdout,
  stderr,
  all
}, {
  encoding,
  buffer,
  maxBuffer
}, processDone) => {
  const stdoutPromise = getStreamPromise(stdout, {
    encoding,
    buffer,
    maxBuffer
  });
  const stderrPromise = getStreamPromise(stderr, {
    encoding,
    buffer,
    maxBuffer
  });
  const allPromise = getStreamPromise(all, {
    encoding,
    buffer,
    maxBuffer: maxBuffer * 2
  });

  try {
    return await Promise.all([processDone, stdoutPromise, stderrPromise, allPromise]);
  } catch (error) {
    return Promise.all([{
      error,
      signal: error.signal,
      timedOut: error.timedOut
    }, getBufferedData(stdout, stdoutPromise), getBufferedData(stderr, stderrPromise), getBufferedData(all, allPromise)]);
  }
};

const validateInputSync$1 = ({
  input
}) => {
  if (isStream_1(input)) {
    throw new TypeError('The `input` option cannot be a stream in sync mode');
  }
};

var stream = {
  handleInput: handleInput$1,
  makeAllStream: makeAllStream$1,
  getSpawnedResult: getSpawnedResult$1,
  validateInputSync: validateInputSync$1
};

const nativePromisePrototype = (async () => {})().constructor.prototype;

const descriptors = ['then', 'catch', 'finally'].map(property => [property, Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property)]); // The return value is a mixin of `childProcess` and `Promise`

const mergePromise$1 = (spawned, promise) => {
  for (const [property, descriptor] of descriptors) {
    // Starting the main `promise` is deferred to avoid consuming streams
    const value = typeof promise === 'function' ? (...args) => Reflect.apply(descriptor.value, promise(), args) : descriptor.value.bind(promise);
    Reflect.defineProperty(spawned, property, { ...descriptor,
      value
    });
  }

  return spawned;
}; // Use promises instead of `child_process` events


const getSpawnedPromise$1 = spawned => {
  return new Promise((resolve, reject) => {
    spawned.on('exit', (exitCode, signal) => {
      resolve({
        exitCode,
        signal
      });
    });
    spawned.on('error', error => {
      reject(error);
    });

    if (spawned.stdin) {
      spawned.stdin.on('error', error => {
        reject(error);
      });
    }
  });
};

var promise = {
  mergePromise: mergePromise$1,
  getSpawnedPromise: getSpawnedPromise$1
};

const SPACES_REGEXP = / +/g;

const joinCommand$1 = (file, args = []) => {
  if (!Array.isArray(args)) {
    return file;
  }

  return [file, ...args].join(' ');
}; // Handle `execa.command()`


const parseCommand$1 = command => {
  const tokens = [];

  for (const token of command.trim().split(SPACES_REGEXP)) {
    // Allow spaces to be escaped by a backslash if not meant as a delimiter
    const previousToken = tokens[tokens.length - 1];

    if (previousToken && previousToken.endsWith('\\')) {
      // Merge previous token with current one
      tokens[tokens.length - 1] = `${previousToken.slice(0, -1)} ${token}`;
    } else {
      tokens.push(token);
    }
  }

  return tokens;
};

var command$1 = {
  joinCommand: joinCommand$1,
  parseCommand: parseCommand$1
};

const {
  spawnedKill,
  spawnedCancel,
  setupTimeout,
  setExitHandler
} = kill;

const {
  handleInput,
  getSpawnedResult,
  makeAllStream,
  validateInputSync
} = stream;

const {
  mergePromise,
  getSpawnedPromise
} = promise;

const {
  joinCommand,
  parseCommand
} = command$1;

const DEFAULT_MAX_BUFFER = 1000 * 1000 * 100;

const getEnv = ({
  env: envOption,
  extendEnv,
  preferLocal,
  localDir,
  execPath
}) => {
  const env = extendEnv ? { ...process.env,
    ...envOption
  } : envOption;

  if (preferLocal) {
    return npmRunPath_1.env({
      env,
      cwd: localDir,
      execPath
    });
  }

  return env;
};

const handleArguments = (file, args, options = {}) => {
  const parsed = crossSpawn._parse(file, args, options);

  file = parsed.command;
  args = parsed.args;
  options = parsed.options;
  options = {
    maxBuffer: DEFAULT_MAX_BUFFER,
    buffer: true,
    stripFinalNewline: true,
    extendEnv: true,
    preferLocal: false,
    localDir: options.cwd || process.cwd(),
    execPath: process.execPath,
    encoding: 'utf8',
    reject: true,
    cleanup: true,
    all: false,
    windowsHide: true,
    ...options
  };
  options.env = getEnv(options);
  options.stdio = stdio(options);

  if (process.platform === 'win32' && path__default$1['default'].basename(file, '.exe') === 'cmd') {
    // #116
    args.unshift('/q');
  }

  return {
    file,
    args,
    options,
    parsed
  };
};

const handleOutput = (options, value, error) => {
  if (typeof value !== 'string' && !Buffer.isBuffer(value)) {
    // When `execa.sync()` errors, we normalize it to '' to mimic `execa()`
    return error === undefined ? undefined : '';
  }

  if (options.stripFinalNewline) {
    return stripFinalNewline(value);
  }

  return value;
};

const execa = (file, args, options) => {
  const parsed = handleArguments(file, args, options);
  const command = joinCommand(file, args);
  let spawned;

  try {
    spawned = childProcess__default['default'].spawn(parsed.file, parsed.args, parsed.options);
  } catch (error$1) {
    // Ensure the returned error is always both a promise and a child process
    const dummySpawned = new childProcess__default['default'].ChildProcess();
    const errorPromise = Promise.reject(error({
      error: error$1,
      stdout: '',
      stderr: '',
      all: '',
      command,
      parsed,
      timedOut: false,
      isCanceled: false,
      killed: false
    }));
    return mergePromise(dummySpawned, errorPromise);
  }

  const spawnedPromise = getSpawnedPromise(spawned);
  const timedPromise = setupTimeout(spawned, parsed.options, spawnedPromise);
  const processDone = setExitHandler(spawned, parsed.options, timedPromise);
  const context = {
    isCanceled: false
  };
  spawned.kill = spawnedKill.bind(null, spawned.kill.bind(spawned));
  spawned.cancel = spawnedCancel.bind(null, spawned, context);

  const handlePromise = async () => {
    const [{
      error: error$1,
      exitCode,
      signal,
      timedOut
    }, stdoutResult, stderrResult, allResult] = await getSpawnedResult(spawned, parsed.options, processDone);
    const stdout = handleOutput(parsed.options, stdoutResult);
    const stderr = handleOutput(parsed.options, stderrResult);
    const all = handleOutput(parsed.options, allResult);

    if (error$1 || exitCode !== 0 || signal !== null) {
      const returnedError = error({
        error: error$1,
        exitCode,
        signal,
        stdout,
        stderr,
        all,
        command,
        parsed,
        timedOut,
        isCanceled: context.isCanceled,
        killed: spawned.killed
      });

      if (!parsed.options.reject) {
        return returnedError;
      }

      throw returnedError;
    }

    return {
      command,
      exitCode: 0,
      stdout,
      stderr,
      all,
      failed: false,
      timedOut: false,
      isCanceled: false,
      killed: false
    };
  };

  const handlePromiseOnce = onetime_1(handlePromise);

  crossSpawn._enoent.hookChildProcess(spawned, parsed.parsed);

  handleInput(spawned, parsed.options.input);
  spawned.all = makeAllStream(spawned, parsed.options);
  return mergePromise(spawned, handlePromiseOnce);
};

var execa_1 = execa;

var sync = (file, args, options) => {
  const parsed = handleArguments(file, args, options);
  const command = joinCommand(file, args);
  validateInputSync(parsed.options);
  let result;

  try {
    result = childProcess__default['default'].spawnSync(parsed.file, parsed.args, parsed.options);
  } catch (error$1) {
    throw error({
      error: error$1,
      stdout: '',
      stderr: '',
      all: '',
      command,
      parsed,
      timedOut: false,
      isCanceled: false,
      killed: false
    });
  }

  const stdout = handleOutput(parsed.options, result.stdout, result.error);
  const stderr = handleOutput(parsed.options, result.stderr, result.error);

  if (result.error || result.status !== 0 || result.signal !== null) {
    const error$1 = error({
      stdout,
      stderr,
      error: result.error,
      signal: result.signal,
      exitCode: result.status,
      command,
      parsed,
      timedOut: result.error && result.error.code === 'ETIMEDOUT',
      isCanceled: false,
      killed: result.signal !== null
    });

    if (!parsed.options.reject) {
      return error$1;
    }

    throw error$1;
  }

  return {
    command,
    exitCode: 0,
    stdout,
    stderr,
    failed: false,
    timedOut: false,
    isCanceled: false,
    killed: false
  };
};

var command = (command, options) => {
  const [file, ...args] = parseCommand(command);
  return execa(file, args, options);
};

var commandSync = (command, options) => {
  const [file, ...args] = parseCommand(command);
  return execa.sync(file, args, options);
};

var node = (scriptPath, args, options = {}) => {
  if (args && !Array.isArray(args) && typeof args === 'object') {
    options = args;
    args = [];
  }

  const stdio$1 = stdio.node(options);
  const defaultExecArgv = process.execArgv.filter(arg => !arg.startsWith('--inspect'));
  const {
    nodePath = process.execPath,
    nodeOptions = defaultExecArgv
  } = options;
  return execa(nodePath, [...nodeOptions, scriptPath, ...(Array.isArray(args) ? args : [])], { ...options,
    stdin: undefined,
    stdout: undefined,
    stderr: undefined,
    stdio: stdio$1,
    shell: false
  });
};
execa_1.sync = sync;
execa_1.command = command;
execa_1.commandSync = commandSync;
execa_1.node = node;

let isDocker;

function hasDockerEnv() {
  try {
    fs__default$1['default'].statSync('/.dockerenv');
    return true;
  } catch (_) {
    return false;
  }
}

function hasDockerCGroup() {
  try {
    return fs__default$1['default'].readFileSync('/proc/self/cgroup', 'utf8').includes('docker');
  } catch (_) {
    return false;
  }
}

var isDocker_1 = () => {
  if (isDocker === undefined) {
    isDocker = hasDockerEnv() || hasDockerCGroup();
  }

  return isDocker;
};

var isWsl_1 = createCommonjsModule(function (module) {







const isWsl = () => {
  if (process.platform !== 'linux') {
    return false;
  }

  if (os__default$1['default'].release().toLowerCase().includes('microsoft')) {
    if (isDocker_1()) {
      return false;
    }

    return true;
  }

  try {
    return fs__default$1['default'].readFileSync('/proc/version', 'utf8').toLowerCase().includes('microsoft') ? !isDocker_1() : false;
  } catch (_) {
    return false;
  }
};

if (process.env.__IS_WSL_TEST__) {
  module.exports = isWsl;
} else {
  module.exports = isWsl();
}
});

var defineLazyProp = (object, propertyName, fn) => {
  const define = value => Object.defineProperty(object, propertyName, {
    value,
    enumerable: true,
    writable: true
  });

  Object.defineProperty(object, propertyName, {
    configurable: true,
    enumerable: true,

    get() {
      const result = fn();
      define(result);
      return result;
    },

    set(value) {
      define(value);
    }

  });
  return object;
};

const {
  promises: fs
} = fs__default$1['default'];





 // Path to included `xdg-open`.


const localXdgOpenPath = path__default$1['default'].join(__dirname, 'xdg-open');
const {
  platform,
  arch
} = process;
/**
Get the mount point for fixed drives in WSL.

@inner
@returns {string} The mount point.
*/

const getWslDrivesMountPoint = (() => {
  // Default value for "root" param
  // according to https://docs.microsoft.com/en-us/windows/wsl/wsl-config
  const defaultMountPoint = '/mnt/';
  let mountPoint;
  return async function () {
    if (mountPoint) {
      // Return memoized mount point value
      return mountPoint;
    }

    const configFilePath = '/etc/wsl.conf';
    let isConfigFileExists = false;

    try {
      await fs.access(configFilePath, fs.constants.F_OK);
      isConfigFileExists = true;
    } catch {}

    if (!isConfigFileExists) {
      return defaultMountPoint;
    }

    const configContent = await fs.readFile(configFilePath, {
      encoding: 'utf8'
    });
    const configMountPoint = /root\s*=\s*(?<mountPoint>.*)/g.exec(configContent);

    if (!configMountPoint) {
      return defaultMountPoint;
    }

    mountPoint = configMountPoint.groups.mountPoint.trim();
    mountPoint = mountPoint.endsWith('/') ? mountPoint : `${mountPoint}/`;
    return mountPoint;
  };
})();

const pTryEach = async (array, mapper) => {
  let latestError;

  for (const item of array) {
    try {
      return await mapper(item); // eslint-disable-line no-await-in-loop
    } catch (error) {
      latestError = error;
    }
  }

  throw latestError;
};

const open = async (target, options) => {
  if (typeof target !== 'string') {
    throw new TypeError('Expected a `target`');
  }

  options = {
    wait: false,
    background: false,
    allowNonzeroExitCode: false,
    ...options
  };

  if (Array.isArray(options.app)) {
    return pTryEach(options.app, singleApp => open(target, { ...options,
      app: singleApp
    }));
  }

  let {
    name: app,
    arguments: appArguments = []
  } = options.app || {};

  if (Array.isArray(app)) {
    return pTryEach(app, appName => open(target, { ...options,
      app: {
        name: appName,
        arguments: appArguments
      }
    }));
  }

  let command;
  const cliArguments = [];
  const childProcessOptions = {};

  if (platform === 'darwin') {
    command = 'open';

    if (options.wait) {
      cliArguments.push('--wait-apps');
    }

    if (options.background) {
      cliArguments.push('--background');
    }

    if (app) {
      cliArguments.push('-a', app);
    }
  } else if (platform === 'win32' || isWsl_1 && !isDocker_1()) {
    const mountPoint = await getWslDrivesMountPoint();
    command = isWsl_1 ? `${mountPoint}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe` : `${process.env.SYSTEMROOT}\\System32\\WindowsPowerShell\\v1.0\\powershell`;
    cliArguments.push('-NoProfile', '-NonInteractive', '–ExecutionPolicy', 'Bypass', '–WindowStyle', 'Hidden', '-EncodedCommand');

    if (!isWsl_1) {
      childProcessOptions.windowsVerbatimArguments = true;
    }

    const encodedArguments = ['Start'];

    if (options.wait) {
      encodedArguments.push('-Wait');
    }

    if (app) {
      // Double quote with double quotes to ensure the inner quotes are passed through.
      // Inner quotes are delimited for PowerShell interpretation with backticks.
      encodedArguments.push(`"\`"${app}\`""`, '-ArgumentList');
      appArguments.unshift(target);
    } else {
      encodedArguments.push(`"${target}"`);
    }

    if (appArguments.length > 0) {
      appArguments = appArguments.map(arg => `"\`"${arg}\`""`);
      encodedArguments.push(appArguments.join(','));
    } // Using Base64-encoded command, accepted by PowerShell, to allow special characters.


    target = Buffer.from(encodedArguments.join(' '), 'utf16le').toString('base64');
  } else {
    if (app) {
      command = app;
    } else {
      // When bundled by Webpack, there's no actual package file path and no local `xdg-open`.
      const isBundled = !__dirname || __dirname === '/'; // Check if local `xdg-open` exists and is executable.

      let exeLocalXdgOpen = false;

      try {
        await fs.access(localXdgOpenPath, fs.constants.X_OK);
        exeLocalXdgOpen = true;
      } catch {}

      const useSystemXdgOpen = process.versions.electron || platform === 'android' || isBundled || !exeLocalXdgOpen;
      command = useSystemXdgOpen ? 'xdg-open' : localXdgOpenPath;
    }

    if (appArguments.length > 0) {
      cliArguments.push(...appArguments);
    }

    if (!options.wait) {
      // `xdg-open` will block the process unless stdio is ignored
      // and it's detached from the parent even if it's unref'd.
      childProcessOptions.stdio = 'ignore';
      childProcessOptions.detached = true;
    }
  }

  cliArguments.push(target);

  if (platform === 'darwin' && appArguments.length > 0) {
    cliArguments.push('--args', ...appArguments);
  }

  const subprocess = childProcess__default['default'].spawn(command, cliArguments, childProcessOptions);

  if (options.wait) {
    return new Promise((resolve, reject) => {
      subprocess.once('error', reject);
      subprocess.once('close', exitCode => {
        if (options.allowNonzeroExitCode && exitCode > 0) {
          reject(new Error(`Exited with code ${exitCode}`));
          return;
        }

        resolve(subprocess);
      });
    });
  }

  subprocess.unref();
  return subprocess;
};

function detectArchBinary(binary) {
  if (typeof binary === 'string') {
    return binary;
  }

  const {
    [arch]: archBinary
  } = binary;

  if (!archBinary) {
    throw new Error(`${arch} is not supported`);
  }

  return archBinary;
}

function detectPlatformBinary({
  [platform]: platformBinary
}, {
  wsl
}) {
  if (wsl && isWsl_1) {
    return detectArchBinary(wsl);
  }

  if (!platformBinary) {
    throw new Error(`${platform} is not supported`);
  }

  return detectArchBinary(platformBinary);
}

const apps = {};
defineLazyProp(apps, 'chrome', () => detectPlatformBinary({
  darwin: 'google chrome',
  win32: 'chrome',
  linux: ['google-chrome', 'google-chrome-stable']
}, {
  wsl: {
    ia32: '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    x64: ['/mnt/c/Program Files/Google/Chrome/Application/chrome.exe', '/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe']
  }
}));
defineLazyProp(apps, 'firefox', () => detectPlatformBinary({
  darwin: 'firefox',
  win32: 'C:\\Program Files\\Mozilla Firefox\\firefox.exe',
  linux: 'firefox'
}, {
  wsl: '/mnt/c/Program Files/Mozilla Firefox/firefox.exe'
}));
open.apps = apps;
var open_1 = open;

function createList(action) {
  return __awaiter(this, void 0, void 0, function () {
    var allPackages, selectionPackages, installedPackages, enabledPackages, disabledPackages, _a, selection, _b;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          return [4
          /*yield*/
          , API.getPackages(action)];

        case 1:
          allPackages = _c.sent();
          if (allPackages === undefined) return [2
          /*return*/
          ];
          installedPackages = atom.packages.getAvailablePackageNames();
          enabledPackages = atom.packages.getLoadedPackages().map(function (item) {
            return item.name;
          });
          disabledPackages = installedPackages.filter(function (item) {
            return !enabledPackages.includes(item);
          });
          _a = action;

          switch (_a) {
            case 'install':
              return [3
              /*break*/
              , 2];

            case 'enable':
              return [3
              /*break*/
              , 3];

            case 'disable':
              return [3
              /*break*/
              , 4];

            case 'update':
              return [3
              /*break*/
              , 5];
          }

          return [3
          /*break*/
          , 7];

        case 2:
          selectionPackages = allPackages.filter(function (item) {
            return !installedPackages.includes(item['name']);
          });
          return [3
          /*break*/
          , 8];

        case 3:
          selectionPackages = allPackages.filter(function (item) {
            return installedPackages.includes(item['name']) && disabledPackages.includes(item['name']);
          });
          return [3
          /*break*/
          , 8];

        case 4:
          selectionPackages = allPackages.filter(function (item) {
            return installedPackages.includes(item['name']) && enabledPackages.includes(item['name']);
          });
          return [3
          /*break*/
          , 8];

        case 5:
          return [4
          /*yield*/
          , getOutdatedPackages()];

        case 6:
          selectionPackages = _c.sent();
          return [3
          /*break*/
          , 8];

        case 7:
          selectionPackages = allPackages.filter(function (item) {
            return installedPackages.includes(item['name']);
          });
          return [3
          /*break*/
          , 8];

        case 8:
          if (!selectionPackages.length) {
            Logger.log("No packages to " + action);
            atom.notifications.addInfo("**Package Control**: No packages to " + action);
            return [2
            /*return*/
            ];
          }

          _c.label = 9;

        case 9:
          _c.trys.push([9, 11,, 12]);

          return [4
          /*yield*/
          , selectListView(selectionPackages)];

        case 10:
          selection = _c.sent();
          return [3
          /*break*/
          , 12];

        case 11:
          _c.sent();
          Logger.log("Cancelled selection");
          return [2
          /*return*/
          ];

        case 12:
          if (selection === undefined) return [2
          /*return*/
          ];
          _b = action;

          switch (_b) {
            case 'install':
              return [3
              /*break*/
              , 13];

            case 'remove':
              return [3
              /*break*/
              , 13];

            case 'disable':
              return [3
              /*break*/
              , 13];

            case 'enable':
              return [3
              /*break*/
              , 13];

            case 'update':
              return [3
              /*break*/
              , 15];

            case 'list':
              return [3
              /*break*/
              , 17];
          }

          return [3
          /*break*/
          , 18];

        case 13:
          return [4
          /*yield*/
          , apm(action, selection)];

        case 14:
          _c.sent();

          return [3
          /*break*/
          , 19];

        case 15:
          return [4
          /*yield*/
          , apm(action, selection, ['--compatible', '--no-confirm'])];

        case 16:
          _c.sent();

          return [3
          /*break*/
          , 19];

        case 17:
          Browse.reveal(selection);
          return [3
          /*break*/
          , 19];

        case 18:
          return [3
          /*break*/
          , 19];

        case 19:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function apm(action, packageName, args) {
  if (args === void 0) {
    args = [];
  }

  return __awaiter(this, void 0, void 0, function () {
    var startTime, apmPath, err_2, endTime, timeDiff;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          startTime = new Date().getTime();
          apmPath = atom.packages.getApmPath();
          Logger.log(wording(action).continous + " " + packageName);
          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , execa_1(apmPath, __spreadArray([action, packageName], args))];

        case 2:
          _a.sent();

          return [3
          /*break*/
          , 4];

        case 3:
          err_2 = _a.sent();
          Logger.error(wording(action).noun + " failed: " + err_2.shortMessage);
          atom.notifications.addError("**Package Control**: " + wording(action).noun + " failed", {
            detail: err_2.shortMessage,
            dismissable: true
          });
          return [2
          /*return*/
          ];

        case 4:
          endTime = new Date().getTime();
          timeDiff = endTime - startTime;
          Logger.log(wording(action).perfect + " " + packageName + " in " + timeDiff / 1000 + " seconds");
          return [2
          /*return*/
          ];
      }
    });
  });
}

function updateAll() {
  return __awaiter(this, void 0, void 0, function () {
    var startTime, action, apmPath, err_3, endTime, timeDiff;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          startTime = new Date().getTime();
          action = 'update';
          apmPath = atom.packages.getApmPath();
          Logger.log(wording(action).continous + " all packages");
          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , execa_1(apmPath, ['update', '--no-confirm'])];

        case 2:
          _a.sent();

          return [3
          /*break*/
          , 4];

        case 3:
          err_3 = _a.sent();
          Logger.error(wording(action).continous + " all packages failed: " + err_3.shortMessage);
          atom.notifications.addError("**Package Control**: " + wording(action).continous + " all packages failed", {
            detail: err_3.shortMessage,
            dismissable: true
          });
          return [2
          /*return*/
          ];

        case 4:
          endTime = new Date().getTime();
          timeDiff = endTime - startTime;
          Logger.log(wording(action).perfect + " all packages in " + timeDiff / 1000 + " seconds");
          return [2
          /*return*/
          ];
      }
    });
  });
}

function satisfyDependencies() {
  return __awaiter(this, void 0, void 0, function () {
    var startTime, action, enabledPackages, endTime, timeDiff;

    var _this = this;

    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          startTime = new Date().getTime();
          action = 'satisfy';
          enabledPackages = atom.packages.getLoadedPackages().map(function (item) {
            return item.name;
          });
          Logger.log(wording(action).continous + " all packages dependencies");
          return [4
          /*yield*/
          , Promise.allSettled(enabledPackages.map(function (enabledPackage) {
            return __awaiter(_this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , install_1(enabledPackage, !getConfig('confirmSatisfyingDependencies'))];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          }))];

        case 1:
          _a.sent();

          endTime = new Date().getTime();
          timeDiff = endTime - startTime;
          Logger.log(wording(action).perfect + " all packages in " + timeDiff / 1000 + " seconds");
          return [2
          /*return*/
          ];
      }
    });
  });
}

function sortByName(items, sortBy) {
  return items.sort(function (a, b) {
    return a[sortBy].localeCompare(b[sortBy]);
  });
}

function sortByCount(items, sortBy) {
  return items.sort(function (a, b) {
    return b[sortBy] - a[sortBy];
  });
}

function wording(action) {
  switch (action) {
    case 'install':
      return {
        continous: 'Installing',
        noun: 'Installation',
        perfect: 'Installed'
      };

    case 'remove':
      return {
        continous: 'Removing',
        noun: 'Removal',
        perfect: 'Removed'
      };

    case 'enable':
      return {
        continous: 'Enabling',
        noun: 'Enabling',
        perfect: 'Enabled'
      };

    case 'disable':
      return {
        continous: 'Disabling',
        noun: 'Disabling',
        perfect: 'Disabled'
      };

    case 'list':
      return {
        continous: 'Listing',
        noun: 'Listing',
        perfect: 'Listed'
      };

    case 'satisfy':
      return {
        continous: 'Satisfying',
        noun: 'Satisfying',
        perfect: 'Satisfied'
      };

    case 'update':
      return {
        continous: 'Updating',
        noun: 'Update',
        perfect: 'Updated'
      };

    default:
      throw Error("Unsupported action: " + action);
  }
}

function openWebsite(type) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          Logger.log("Opening https://atom.io/" + type);
          return [4
          /*yield*/
          , open_1("https://atom.io/" + type)];

        case 1:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
}

function getOutdatedPackages() {
  return __awaiter(this, void 0, void 0, function () {
    var apmPath, response, err_4;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          Logger.log('Retrieving outdated packages');
          apmPath = atom.packages.getApmPath();
          _a.label = 1;

        case 1:
          _a.trys.push([1, 3,, 4]);

          return [4
          /*yield*/
          , execa_1(apmPath, ['update', '--compatible', '--json', '--list'])];

        case 2:
          response = _a.sent();
          return [3
          /*break*/
          , 4];

        case 3:
          err_4 = _a.sent();
          throw Error(err_4.message);

        case 4:
          return [2
          /*return*/
          , JSON.parse(response.stdout).map(function (_a) {
            var name = _a.name,
                version = _a.version,
                latestVersion = _a.latestVersion;
            return {
              name: name,
              version: version,
              latestVersion: latestVersion
            };
          }) || []];
      }
    });
  });
}

var PackageControl = {
  config: configSchema,
  subscriptions: new atom_1.CompositeDisposable(),
  activate: function () {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            Logger.log('Activating package');
            return [4
            /*yield*/
            , API.fetchPackages()];

          case 1:
            _a.sent(); // Register commands


            this.subscriptions.add(atom.commands.add("atom-workspace", {
              'package-control:install-package': function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , createList('install')];

                      case 1:
                        _a.sent();

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              }
            }), atom.commands.add("atom-workspace", {
              'package-control:remove-package': function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , createList('remove')];

                      case 1:
                        _a.sent();

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              }
            }), atom.commands.add("atom-workspace", {
              'package-control:enable-package': function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , createList('enable')];

                      case 1:
                        _a.sent();

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              }
            }), atom.commands.add("atom-workspace", {
              'package-control:disable-package': function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , createList('disable')];

                      case 1:
                        _a.sent();

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              }
            }), atom.commands.add("atom-workspace", {
              'package-control:list-packages': function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , createList('list')];

                      case 1:
                        _a.sent();

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              }
            }), atom.commands.add("atom-workspace", {
              'package-control:discover-packages': function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , openWebsite('packages')];

                      case 1:
                        _a.sent();

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              }
            }), atom.commands.add("atom-workspace", {
              'package-control:discover-themes': function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , openWebsite('themes')];

                      case 1:
                        _a.sent();

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              }
            }), atom.commands.add("atom-workspace", {
              'package-control:update-package': function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , createList('update')];

                      case 1:
                        _a.sent();

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              }
            }), atom.commands.add("atom-workspace", {
              'package-control:update-all-packages': function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , updateAll()];

                      case 1:
                        _a.sent();

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              }
            }), atom.commands.add("atom-workspace", {
              'package-control:satisfy-dependencies': function () {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , satisfyDependencies()];

                      case 1:
                        _a.sent();

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              }
            }));
            return [2
            /*return*/
            ];
        }
      });
    });
  },
  deactivate: function () {
    var _a;

    Logger.log('Deactivating package');
    (_a = this.subscriptions) === null || _a === void 0 ? void 0 : _a.dispose();
  },
  consumeBrowse: function (browse) {
    Logger.log('Consuming Browse service');
    Browse.consumer(browse);
  }
};

module.exports = PackageControl;
//# sourceMappingURL=index.js.map
