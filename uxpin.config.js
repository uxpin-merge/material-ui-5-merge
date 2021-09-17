module.exports = {
    components: {
      categories: [
        {
          name: 'Inputs',
          include: [
            'src/components/Button/Button.js',
            'src/components/Icon/Icon.js',
          ],
        },
        { 
          name: 'Data Dispaly',
          include: [
            
          ],
        },
      ],
      wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
      webpackConfig: 'uxpin.webpack.config.js',
    },
    name: 'material-ui-uxpin'
  };