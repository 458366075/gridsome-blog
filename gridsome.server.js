// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const request = require('./src/utils/request')

const getApiList = async (addCollection, names) => {
  for (const name of names) {
    const post = addCollection(name.charAt(0).toUpperCase() + name.slice(1))
    const { data } = await request.get(`${name}?populate=*`)
    for (const item of data.data) {
      post.addNode(item.attributes)
    }
  }
}

const getApiData = async (addCollection, names) => {
  for (const name of names) {
    const post = addCollection(name.charAt(0).toUpperCase() + name.slice(1))
    const { data } = await request.get(`${name}?populate=*`)
    post.addNode(data.data.attributes)
  }
}

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    await Promise.all([getApiList(addCollection, ['posts']), getApiData(addCollection, ['about'])])
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
