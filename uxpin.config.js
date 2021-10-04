module.exports = {
    components: {
      categories: [
        {
          name: 'Inputs',
          include: [
            'src/components/Button/Button.js',
            'src/components/Checkbox/Checkbox.js',
            'src/components/IconButton/IconButton.js',
            'src/components/FloatingActionButton/FloatingActionButton.js',
            'src/components/Radio/Radio.js',
            'src/components/Rating/Rating.js',
            'src/components/Select/Select.js',
            // 'src/components/Slider/Slider.js',
            'src/components/Switch/Switch.js',
            'src/components/TextField/TextField.js',
            'src/components/ToggleButton/ToggleButton.js',
          ],
        },
        { 
          name: 'Data Dispaly',
          include: [
            'src/components/Avatar/Avatar.js',
            'src/components/Badge/Badge.js',
            'src/components/Icon/Icon.js',
            'src/components/ListItemText/ListItemText.js',
            'src/components/Tooltip/Tooltip.js',
            'src/components/Typography/Typography.js'
          ],
        },
        {
          name: 'Navigation',
          include: [
            'src/components/MenuItem/MenuItem.js',
          ]
        },
        {
          name: 'Layout',
          include: [
              'src/components/Box/Box.js'
          ]  
        },
        {
          name: 'Grouping',
          include: [
            'src/components/ToggleButtonGroup/ToggleButtonGroup.js',
          ]
        },
        {
          name: 'Surfaces',
          include: [
              'src/components/Paper/Paper.js',
          ]  
        }
      ],
      wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
      webpackConfig: 'uxpin.webpack.config.js',
    },
    name: 'material-ui-uxpin'
  };