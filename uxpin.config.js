module.exports = {
    components: {
      categories: [
        {
          name: 'Inputs',
          include: [
            'src/components/Button/Button.js',
            'src/components/Checkbox/Checkbox.js',
            'src/components/Radio/Radio.js',
            'src/components/Rating/Rating.js',
            'src/components/Select/Select.js',
            'src/components/Switch/Switch.js',
            'src/components/Tooltip/Tooltip.js'
          ],
        },
        { 
          name: 'Data Dispaly',
          include: [
            'src/components/Icon/Icon.js',
          ],
        },
        {
          name: 'Layout',
          include: [
            'src/components/Stack/Stack.js',
          ]
        },
        {
          name: 'Navigation',
          include: [
            'src/components/MenuItem/MenuItem.js'
          ]
        }
      ],
      wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
      webpackConfig: 'uxpin.webpack.config.js',
    },
    name: 'material-ui-uxpin'
  };