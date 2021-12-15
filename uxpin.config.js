module.exports = {
  components: {
    categories: [
      {
        name: 'Inputs',
        include: [
          'src/components/Button/Button.js',
        ],
      },
      { 
        name: 'Data Display',
        include: [
          'src/components/Typography/Typography.js'
        ],
      },
      {
        name: 'Navigation',
        include: [

        ]
      },
      {
        name: 'Feedback',
        include: [

        ]
      },
      {
        name: 'Table',
        include: [

        ]
      },
      {
        name: 'Form',
        include: [

        ]  
      },
      {
        name: 'Layout',
        include: [

        ]  
      },
      {
        name: 'Surfaces',
        include: [

        ]  
      },
      {
        name: "HTML Wrappers and Spacing",
        include: [

        ]
      }
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'material-ui-uxpin'
};