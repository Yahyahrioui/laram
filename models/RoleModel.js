const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    confirm: {
        type: String,
    },
    maitrise: {
        type: String,
    },
    justify: {
        type: String
    }
}, {
    timestamps: true
});
const Role = mongoose.model('Role', RoleSchema)

module.exports = Role