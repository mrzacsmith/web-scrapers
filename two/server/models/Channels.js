const mongoose = require('mongoose')

const ChannelSchema = new mongoose.Schema(
  {
    name: { type: String },
    avatar: { type: String },
    channelData: { type: String },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Channel', ChannelSchema)
