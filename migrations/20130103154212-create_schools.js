module.exports = {
    up: function(migration, DataTypes) {
        migration.createTable('schools', {
            name: DataTypes.STRING
        }, 
        {
            charset: 'utf8'
        })
    },
    down: function(migration) {
        migration.dropTable('schools');
    }
}