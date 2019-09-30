// vue.config.js
const fs = require('fs')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/style/variables.scss";`
      }
    }
  }
}
