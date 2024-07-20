const fs = require('fs');

async function cargarConjuntoDeDatos(nombreArchivo) {
    return new Promise((resolve, reject) => {
        fs.readFile(nombreArchivo, 'utf-8', (err, data) => {
            if (err) reject(err);
            resolve(JSON.parse(data));
        });
    });
}

module.exports = cargarConjuntoDeDatos;
