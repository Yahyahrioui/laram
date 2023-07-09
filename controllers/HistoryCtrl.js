const History = require('../models/HistoryModel')

const HistoryCtrl = {
    GetHistory: async (req, res) => {
        try {
            const history = await History.find();
            return res.status(200).json({ success: true, data: history });
        } catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    },
    
    PostHistory: async (req, res) => {
        try {
            const history = new History({
              history: req.body
            });
            await history.save()
            return res.status(200).json({ success: true, data: history });
        } catch (err) {
            return res.status(500).json({ success: false, message: err.message })
        }
    },
    DeleteHistory: async (req, res) => {
        try {
            await History.findByIdAndDelete({ _id: req.params.id })
            
            return res.status(200).json({ success: true, data: 'History deleted successfuly' });
        } catch (err) {
            return res.status(500).json({ success: false, message: err.message })
        }
    },
}

module.exports = HistoryCtrl