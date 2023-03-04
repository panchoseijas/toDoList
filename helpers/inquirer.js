const inquirer = require('inquirer');
const { asyncScheduler } = require('rxjs');
require('colors');

const questions = [
    {
        type:'list',
        name: 'options',
        message: 'Seleccione una opcion',
        choices: [
            {
                value: '1',
                name: `${ '1.'.green } Crear Tarea`
            },
            {
                value: '2',
                name: `${ '2.'.green } Listar Tareas`
            },
            {
                value: '3',
                name: `${ '3.'.green } Listar tareas completadas`
            },
            {
                value: '4',
                name: `${ '4.'.green } Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5.'.green } Completar tarea(s)`
            },
            {
                value: '6',
                name: `${ '6.'.green } Borrar tarea`
            },
            {
                value: '0',
                name: `${ '7.'.green } Salir`
            },


        ]
    }
]


const mostrarMenu = async() => {

   
    console.clear();
    console.log('=========================='.green);
    console.log(' Selecione una aplicacion'.green);
    console.log('==========================\n'.green);
    
    const {options} = await inquirer.prompt(questions)

    return options;
}

const pausa = async( ) => {
    const question = [
        {
            name: 'eneter',
            message: '\nPresiona ' + `${'ENTER'.green}` + 'para volver al menu principal\n',
        }
    ]

    await inquirer.prompt(question);

}

const leerInput = async( ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message: 'Descripcion: ',
        }
    ]

    const {desc} = await inquirer.prompt(question);

    return desc;
}

const listarCheckBox = async( tareas )  => {

    const choices = [];
    tareas.forEach( (tarea,i) => {

        const ind = `${i + 1}.`.green;
        const checked = (tarea.completadaEn) ? true : false;
        choices.push({
            value: tarea.id,
            name: `${ind} ${tarea.desc}`,
            checked
        })
    })


    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Indica que tarea quieres borrar',
            choices
        }
    ]
    
    const {ids} = await inquirer.prompt(question);

    return ids;

}


const listarTareasABorrar = async( tareas = []) => {
    // console.log(this.listadoArray);

    const choices = tareas.map( (tarea,i) => {
        const ind = `${i + 1}. `.green;
        return {
            value: tarea.id,
            name: `${ind} ${tarea.desc}`
        }
    });

    const question = [
        {
            type: 'list',
            name: 'id',
            choices,
        }
    ]
    
    const {id} = await inquirer.prompt(question);

    return id;

}



const confirmacion = async() => {

    const question = [
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Seguro quieres borrar?'
        }
    ]

    const {confirm} = await inquirer.prompt(question);


    return confirm;

}




module.exports = {
    mostrarMenu,
    pausa,
    leerInput,
    listarCheckBox,
    listarTareasABorrar,
    confirmacion
}