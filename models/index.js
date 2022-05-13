const Character = require('./Character');
const User = require('./User');

// create associations
User.hasMany(Character, {
    foreignKey: 'user_id'
});

Character.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Character };