module.exports = {
    up: function(migration, DataTypes) {
        migration.createTable('Schools', {
            id: { 
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
            deletedAt: DataTypes.DATE
        }, 
        {
            charset: 'utf8'
        })
    },
    down: function(migration) {
        migration.dropTable('Schools');
    }
}