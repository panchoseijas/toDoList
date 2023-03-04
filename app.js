const { mostrarMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/Tareas');


const menu = async() => {

    let opt = '';

    do{
        const tareas = new Tareas();
        opt =  await mostrarMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput();
                tareas.agregarTarea(desc);
                console.log(tareas._listado);
                
                break;
        
            case '2':

                break;
        }


        await pausa();

    }while( opt !== '0')

}


menu();