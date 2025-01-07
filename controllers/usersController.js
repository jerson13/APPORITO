const User = require('../models/user');

module.exports = {
    async getAll(req, res, next) { 
        try {
            const data = await User.getAll();
            console.log(`Usuarios: ${data}`);
            return res.status(200).json(data);
        }
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(500).json({
                success: false,
                message: 'Error al obtener los usuarios'
            });
            
        }

    }
   
};

(async function testConnection() {
    try {
        const data = await User.getAll(); // Asume que `getAll` realiza una consulta SELECT
        console.log('Conexión exitosa. Datos obtenidos:', data);
        
    } catch (error) {
        console.error('Error al conectar a la base de datos o ejecutar la consulta:', error.message);
    }
})();