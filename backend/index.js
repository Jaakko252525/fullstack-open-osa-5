
const appFile = require('./app') // varsinainen Express-sovellus
const config = require('./utils/config')
const logger = require('./utils/logger')




appFile.app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})







