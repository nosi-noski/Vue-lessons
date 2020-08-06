// import dotenv from 'dotenv'
import Express, { response } from 'express'
import Mongoose from 'mongoose'
// const express = require ('express')
import config from '@config'
import path from 'path'
import v1Router from '@routes'
import Webpack from 'webpack'
import WebpackConfig from '../webpack.config'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'
import webpack from 'webpack'

Mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const app = Express()
const compiler = Webpack(WebpackConfig)

app.use(WebpackDevMiddleware(compiler, {
    hot: true,
    publicPath: WebpackConfig.output.publicPath
}))
app.use(WebpackHotMiddleware(compiler))

app.use(v1Router)
app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'public/index.html'))
})
app.listen(8080, () => {
    console.log('server successfully started')
})
