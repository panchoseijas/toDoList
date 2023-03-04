
const Tarea = require('./tarea');


class Tareas{
    _listado = {}

    constructor (){
        this._listado = {};
    }

    get listadoArray(){
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            listado.push(this._listado[key]);
        })

        return listado;
    }

    agregarTarea( desc ){
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;

    }

    listarTareas( tareas = []){
        tareas.forEach( (tarea,i) => {
            const ind = `${i + 1}.`.green;
            const estado  = (tarea.completadaEn) ? 'COMPLETADA'.green : 'PENDIENTE'.red;

            console.log(`${ind} ${tarea.desc} :: ${estado}`);
        })
    }

    cargarTareas( tareas = [] ){
        tareas.forEach ( tarea => {
            this._listado [tarea.id] = tarea;
        })
    }

    listarCompletadasPendientes( completadas = true) {
        const listado = this.listadoArray;
        let i = 0;

        listado.forEach( tarea => {
            if (completadas){
                if (tarea.completadaEn){
                    i++;
                    console.log(`${ (i.toString() + '.').green} ${tarea.desc} :: ${tarea.completadaEn.green}`);
                }
            }else{
                if (!tarea.completadaEn){
                    i++;
                    console.log(`${ (i.toString() + '.').green} ${tarea.desc} :: ${'PENDIENTE'.red}`);
                }
            }
        })

    }


    toggleCompletar(ids = []){
        
        Object.keys(this._listado).forEach (key => {
            const tarea = this._listado[key];

            (ids.includes(tarea.id))
                ? tarea.completadaEn = new Date().toISOString()
                : tarea.completadaEn = null;
        })

    }

    borrarTarea( id ){
        if (this._listado[id]){
            delete this._listado[id];
        }
    }



}


module.exports = Tareas;