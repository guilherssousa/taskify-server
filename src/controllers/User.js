const User = require('../models/User.js');

module.exports = {
    store: async (req, res) => {
        const { name, first_name, google_id, photo_url } = req.body;

        var user = await User.findOne({ google_id });

        if (!user) {
            console.log('[api] Um novo usuário está se cadastrando...');
      
            user = await User.create({
              name,
              first_name,
              google_id,
              photo_url,
            });
      
            console.log(`[api] O usuário de nome ${name} foi criado.`);
            return res.json(user);
          }
        console.log('[api] O usuário já existe.');
        return res.json({ error: 'error' });
    }
}