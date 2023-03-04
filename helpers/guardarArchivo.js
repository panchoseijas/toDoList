const fs = require('fs');

const file = './db/DB.JSON';

const guardarDB = ( listado = []) => {

    fs.writeFileSync(file,JSON.stringify(listado));

}

const leerDB = () => {

    if (fs.existsSync(file)){
        const data = fs.readFileSync(file);

        return JSON.parse(data);
    }else{
        return null;
    }
}


module.exports  = { guardarDB, leerDB};