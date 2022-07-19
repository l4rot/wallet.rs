/**
 * * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [{
      type: 'doc',
      id: 'welcome',
    },
    {
      type: 'doc',
      id: 'overview',
    },
    {
      type: 'category',
      label: 'Libraries',
      collapsed: false,
      items: [{
          type: 'doc',
          id: 'libraries/overview',
          label: 'Overview',
        },
        {
          type: 'category',
          label: 'Rust',
          items: [
            {
              type: 'doc',
              id: 'libraries/rust/getting_started',
              label: 'Getting Started'
            },
            {
              type: 'doc',
              id: 'libraries/rust/examples',
              label: 'Examples'
            },
            {
              type: 'doc',
              id: 'libraries/rust/api_reference',
              label: 'API Reference'
            },
          ]
        },
        {
          type: 'category',
          label: 'Node.js',
          items: [
            {
              type: 'doc',
              id: 'libraries/nodejs/getting_started',
              label: 'Getting Started'
            },
            {
              type: 'doc',
              id: 'libraries/nodejs/examples',
              label: 'Examples'
            },
            {
              type: 'doc',
              id: 'libraries/nodejs/exchange_guide',
              label: 'Exchange Guide'
            }
          ]
        }
      ]
    },
    {
      type: 'doc',
      id: 'troubleshooting',
      label: 'Troubleshooting'
    },
    {
      type: 'doc',
      id: 'contribute',
      label: 'Contribute',
    }
  ]
};