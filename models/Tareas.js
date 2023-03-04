
const Tarea = require('Tarea.js')

class Tareas{
    _listado = {}

    constructor (){
        this._listado = {};
    }

    agregarTarea( desc ){
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;

    }
}


module.exports = Tareas;