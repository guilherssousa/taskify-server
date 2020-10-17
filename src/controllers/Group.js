const Group = require('../models/Group.js');
const User = require('../models/User.js');

module.exports = {
    store: async (req, res) => {
        const { id, name, bussiness } = req.body;

        var group = await Group.findOne({ name, owner: id });

        if(!group) {
            group = await Group.create({
                owner: id,
                name,
                bussiness,
                members: [id],
            })
            
            var user = await User.findOne({ _id: id });
            user.groups.push(group._id);

            await user.save();

            console.log(`[api] O grupo ${name} foi criado.`);
            return res.json(group);
        } 

        return { error: 'error' }
    },
    update: async (req, res) => {
        const { name, groupId, ownerId } = req.body;


        if (group && group.owner == ownerId) {
            group.name = name
            group.save()
            console.log(`[api] O administrador do grupo de ID ${groupId} renomeou o grupo para ${name}.`)
        }

        return res.json(group);
    },
    index: async (req, res) => {
        const { id } = req.params;

        var group = await Group.findOne({_id: id});

        if (!group) {
            return { error: 'error' };
        };

        console.log(`[api] Procurando informações de um grupo...`)

        return res.json(group);
    }
}