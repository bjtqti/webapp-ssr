let ReactDOMServer = require('react-dom/server')
let React = require('react')
let { resolve } = require('path')

exports.markupOfComponent = (route, initialState) => {
  let creatApp = require(resolve('dist', 'server', `${route}.js`))
    .default
  let app = creatApp(initialState)
  return ReactDOMServer.renderToString(app)
}