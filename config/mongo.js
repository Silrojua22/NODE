const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const DB_URI = process.env.DB_URI;
        await mongoose.connect(DB_URI, {
            // Otras opciones de configuración pueden ir aquí
        });
        console.log('**** CONEXION CORRECTA ****');
        mongoose.set('debug', true);

    } catch (error) {
        console.error('**** ERROR DE CONEXION ****', error);
    }
};

module.exports = dbConnect;
