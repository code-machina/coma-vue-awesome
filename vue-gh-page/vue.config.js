const path = require("path");

module.exports = {
  publicPath: '/coma-vue-awesome/',
  outputDir: path.resolve(__dirname, "../docs"),

  pluginOptions: {
    i18n: {
      locale: 'ko',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
