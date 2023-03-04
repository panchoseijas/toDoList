const { mostrarMenu, pausa, leerInput, listarCheckBox,listarTareasABorrar, confirmacion} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const {guardarDB, leerDB} = require('./helpers/guardarArchivo');



const menu = async() => {

    let opt = '';
    const tareas = new Tareas();
    const data = leerDB();

    if (data){
        tareas.cargarTareas(data);
    }


    do{
        opt =  await mostrarMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput();
                tareas.agregarTarea(desc);
                
                break;
        
            case '2':
                tareas.listarTareas(tareas.listadoArray);
                break;
            
            case '3':
                tareas.listarCompletadasPendientes(true);
                break;
            
            case '4':
                tareas.listarCompletadasPendientes(false);
            break;

            case '5':
                const ids = await listarCheckBox(tareas.listadoArray);
                tareas.toggleCompletar(ids);
            break;

            case '6':
                const id = await listarTareasABorrar(tareas.listadoArray);
                const confirm = await confirmacion();

                if (confirm){
                    tareas.borrarTarea(id);
                }

            break;
        }


        await pausa();

    }while( opt !== '0')

    guardarDB(tareas.listadoArray);
}


menu();