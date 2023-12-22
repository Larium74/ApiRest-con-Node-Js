const { connectiondb, conectiondb } = require("../../database/mysqldb");

let showU = (req, res) => {
    console.log("Ingresando a la ruta /showU");
    conectiondb.query ("SELECT * FROM USERS")
        .then((data) => {
            console.log("Los datos han sido obtenidos exitosamente", data[0]);
            res.status(200).json(data[0]);
        })
        .catch((error) => {
            console.log("Ha ocurrido un error en la obtención de los datos", error);
            res.status(400).json({
                mensaje: "Ha ocurrido un error en la obtención de los datos",
                error: error
            });
        });
};

let createU = (req, res) => {
    console.log("Ingresando a la ruta /createU");
    const { Username, PasswordU, BirthdateU, GenderU } = req.body;

    conectiondb.query ("INSERT INTO USERS (Username, Password_User, Birthdate_User, Gender_User) VALUES (?, ?, ?, ?)", [Username, PasswordU, BirthdateU, GenderU])
        .then((data) => {
            id_user_created = data[0].insertId
            console.log("El usuario ha sido creado exitosamente y su id es:", id_user_created);
            res.status(200).json({
                state: "success",
                mensaje: "El Usuario ha sido creado exitosamente"
            });

            conectiondb.query ("SELECT * FROM Users WHERE ID_User = ?", [id_user_created])
            .then ((result)=> {console.log ("Y el usuario creado es: ", result[0])})
            .catch ((error)=> {console.log ("Ocurrió un error", error)})
        })
        .catch((error) => {
            console.log("Ha ocurrido un error en la creación del Usuario", error);
            res.status(200).json({
                mensaje: "No se ha podido crear el Usuario",
                error: error
            });
        });
};


let updateU = (req, res) => {
    console.log ("Ingresando a la ruta /updateU")
    let {id} = req.params
    const { Username, PasswordU, BirthdateU, GenderU } = req.body;


    conectiondb.query ("UPDATE Users SET Username = IFNULL (?, Username), Password_User = IFNULL (?, Password_User), Birthdate_User = IFNULL (?, Birthdate_User), Gender_User = IFNULL(?, Gender_User) WHERE ID_User = ?", [Username, PasswordU, BirthdateU, GenderU, id])
    .then ((data)=> {
        console.log ("El usuario ha sido actualizado exitosamente", data)
        res.status (200).json ({
            state: "success",
            mensaje: "El usuario con id: "+ id+ " ha sido actualizado exitosamente" 
        })
    
    })
    .catch ((error)=> {
        console.log ("Hubo un error al actualizar el usuario", error)
        res.tatus (400).json ({
            state: "error",
            mensaje: "Hubo un error al actualizar el usuario",
            error: error
        })

})
}

let showOnlyU = (req, res) => {
    console.log ("Ingresando a la ruta /sohwOnlyU")
    const {id} = req.params
    conectiondb.query ("SELECT * FROM Users WHERE ID_User = ?", [id])
    .then ((data)=> {
        console.log ("Se ha encontrado el usuario correctamente", data [0])
        res.status (200).json ({
            state: "success",
            mensaje:"El usuario ha sido encontrado exitosamente",
            usuario: data [0]
        })
    }).catch ((error)=> {
        console.log ("No se pudo encontrar al usuario", error)
        res.status (400).json ({
            state: "error",
            mensaje: "No se ha podido encontrar al usuario"
        })
    })
}

let deleteU = (req, res) => {
    console.log ("Ingresando a la ruta /deleteU")
    const {id} = req.params
    conectiondb.query ("DELETE FROM Users WHERE ID_User = ?", [id])
    .then ((data)=> {
        console.log ("El usuario ha sido eliminado exitosamente", data[0])
        res.status (200).json (data)
    }).catch ((error)=> {
        console.log ("No se pudo eliminar el usuario", error)
        res.status (400).json (error)
    })
}


module.exports = {
    showU,
    createU,
    updateU,
    showOnlyU,
    deleteU, 
};