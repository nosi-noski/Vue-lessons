// import dotenv from 'dotenv'
import Express from 'express'
import Mongoose from 'mongoose'

// const express = require ('express')
import config from '@config'

import v1Router from '@routes'
Mongoose.connect(
    config.databaseUrl,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }
);
const app = Express();

app.use(v1Router)

app.listen(8080, () => {
    console.log('server successfully started')
});