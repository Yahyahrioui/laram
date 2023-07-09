const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema(
  {
    history: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const History = mongoose.model("History", HistorySchema);

module.exports = History