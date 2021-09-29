module.exports = {
    components: {
      categories: [
        {
          name: 'Inputs',
          include: [
            'src/components/Button/Button.js',
            'src/components/Icon/Icon.js',
            'src/components/IconButton/IconButton.js',
            'src/components/TextField/TextField.js',
            'src/components/Tooltip/Tooltip.js'
          ],
        },
        { 
          name: 'Data Dispaly',
          include: [
            'src/components/Avatar/Avatar.js',
            'src/components/Badge/Badge.js',
              'src/components/Typography/Typography.js'
            
          ],
        },
        {
          name: 'Layout',
          include: [
              'src/components/Box/Box.js'
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