import meta from '../package.json';

const INTERVAL = {
  six_hours: 360,
  fifteen_minutes: 15,
  one_week: 10080
};

const textStyles = [
  {
    value: 'normal',
    description: 'Normal'
  },
  {
    value: 'subtle',
    description: 'Subtle'
  },
  {
    value: 'highlight',
    description: 'Highlighted'
  },
  {
    value: 'info',
    description: 'Blue'
  },
  {
    value: 'success',
    description: 'Green'
  },
  {
    value: 'warning',
    description: 'Yellow'
  },
  {
    value: 'error',
    description: 'Red'
  }
];

const configSchema = {
  updateInterval: {
    title: 'Update Interval',
    description: 'Interval for how often the packages cache updates, in minutes',
    type: 'integer',
    default: INTERVAL.six_hours,
    minimum: INTERVAL.fifteen_minutes,
    maximum: INTERVAL.one_week,
    order: 1
  },
  maxResults: {
    title: 'Maximum results',
    description: 'Number of results shown in the select view. Lower values result in better UI performance.',
    type: 'integer',
    default: 30,
    minimum: 10,
    maximum: 120,
    order: 2
  },
  sortPackages: {
    title: 'Sort Packages',
    description: 'Default sorting for the *Install Packages* command.',
    type: 'string',
    default: 'name',
    enum: [
      {
        value: 'downloads',
        description: 'Downloads'
      },
      {
        value: 'name',
        description: 'Name'
      },
      {
        value: 'stars',
        description: 'Rating'
      }
    ],
    order: 3
  },
  listAction: {
    title: 'List Action',
    description: 'Specifies an action for the selected package in the list view. Bundled packages will always be shown in package view.',
    type: 'string',
    default: 'fileManager',
    enum: [
      {
        value: 'fileManager',
        description: 'Show in File Manager'
      },
      {
        value: 'packageView',
        description: 'Package View'
      }
    ],
    order: 4
  },
  confirmSatisfyingDependencies: {
    title: 'Confirm Satisfying Dependencies',
    description: 'Display confirmation dialog when satisfying package dependencies',
    type: 'boolean',
    default: true,
    order: 5
  },
  ui: {
    title: 'UI Customization',
    type: 'object',
    order: 6,
    properties: {
      packageTextStyle: {
        title: 'Package Text Style',
        description: '',
        type: 'string',
        default: 'normal',
        enum: textStyles,
        order: 1
      },
      descriptionTextStyle: {
        title: 'Description Text Style',
        description: '',
        type: 'string',
        default: 'normal',
        enum: textStyles,
        order: 2
      },
      versionTextStyle: {
        title: 'Version Text Style',
        description: '',
        type: 'string',
        default: 'subtle',
        enum: textStyles,
        order: 3
      },
      statsTextStyle: {
        title: 'Stats Text Style',
        description: '',
        type: 'string',
        default: 'normal',
        enum: textStyles,
        order: 4
      },
      showPackageTypeIcon: {
        title: 'Show Package Type Icon',
        description: '',
        type: 'boolean',
        default: true,
        order: 5
      },
      showPackageStats: {
        title: 'Show Package Stats',
        description: '',
        type: 'boolean',
        default: true,
        order: 6
      }
    }
  }
};

function getConfig(key = ''): unknown {
  return key?.length
    ? atom.config.get(`${meta.name}.${key}`)
    : atom.config.get(`${meta.name}`);
}

export {
  configSchema,
  getConfig
};
