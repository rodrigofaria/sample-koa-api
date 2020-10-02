const mongoose = require('mongoose')
let count = 0

const options = {
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0,
  useUnifiedTopology: true,
  useNewUrlParser: true
}

const connectWithRetry = () => {
  console.log('MongoDB connection with retry')
  mongoose.connect('mongodb://mongo:27017/?gssapiServiceName=mongodb', options)
    .then(() => {
      console.log('MongoDB is connected!')
    }).catch(err => {
      console.log('MongoDB connection unsuccessful')
      console.log(err)

      if (isToTryToReconnect()) {
        console.log('Retry after 5 seconds. ', ++count)
        setTimeout(connectWithRetry, 5000)
      } else {
        console.log('Max attempts reached.')
      }
    })
}

const isToTryToReconnect = () => count === 5

connectWithRetry()

module.exports = mongoose
