const FetchDataService = require('./services/FetchData')

const init = async (state, url) => {
  const data = await FetchDataService(url)
}

module.exports = init