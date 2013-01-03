module.exports = {
    up: function(migration, DataTypes) {
        migration.createTable('Users', {
            id: { 
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
            active: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
                allowNull: false
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
            deletedAt: DataTypes.DATE
        }, 
        {
            charset: 'utf8'
        })
    },
    down: function(migration) {
        migration.dropTable('Users');
    }
}