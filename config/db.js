const mongoose = require('mongoose')
const { URI } = require('./config')

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    console.log('MongoDB connected!')
  } catch (error) {
    console.error(error.message)
    // Exit process with failure
    process.exit(1)
  }
}

module.exports = connectDB
