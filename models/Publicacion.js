const { sequelize, DataTypes } =  require('../database');

const Publicacion = sequelize.define('Publicacion', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    detalle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url_imagen: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
        url_sitio: {
        type: DataTypes.STRING(255),
        allowNull: true,
    }
}, {
    tableName: 'publicaciones',
    timestamps: false
})


module.exports = Publicacion;