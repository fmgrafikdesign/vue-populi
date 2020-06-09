module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].name = 'Civilizations - Vox Populi'
        args[0].title = 'Civilizations - Vox Populi'
        return args
      })
  },
  pwa: {
    name: 'Civilizations - Vox Populi',
    themeColor: '#022f29'
  }
}
