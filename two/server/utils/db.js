const mongoose = require('mongoose')
require('colors')

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`** MongoDB Connected: ${connect.connection.host}`.america)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
module.exports = connectDB
