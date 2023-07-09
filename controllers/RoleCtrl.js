const Role = require('../models/RoleModel')

const RoleCtrl = {
    GetRole: async (req, res) => {
        try {
            const data = await Role.find()
            return res.status(200).json({ success: true, data: data });
        } catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    },
    PostRole: async (req, res) => {
        try {
            const { name, confirm, maitrise, justify } = req.body;
    
            const data = new Role(
                {
                    name: name,
                    confirm: confirm,
                    maitrise: maitrise,
                    justify: justify,
                }
            );
            await data.save()
    
            return res.status(200).json({ success: true, data: data });
        } catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    },
    UpdateRole: async (req, res) => {
        try {
            const { id, confirm, maitrise, justify } = req.body
    
            console.log({ id, confirm, maitrise, justify });
    
            const data = await Role.findByIdAndUpdate(
              { _id: id },
              {
                confirm: confirm,
                maitrise: maitrise,
                justify: justify,
              }
            )
    
            return res.status(200).json({ success: true, data: data });
        } catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    },
    DeleteRole: async (req, res) => {
        try {
            const data = await Role.findByIdAndDelete({ _id: req.params.id });
            return res.status(200).json({ success: true, data: { _id: data._id, msg: `${req.params.id} deleted successfuly!` } });
        } catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    },
}    

module.exports = RoleCtrl