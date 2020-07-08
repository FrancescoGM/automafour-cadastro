const firebird = require('node-firebird')

const options = {};

options.host = '127.0.0.1'
options.database = '/home/francesco/Documentos/Programming/Web-development/cadastro-automafour/automafour-cadastro/src/database/BANCO.FDB'
options.port = 3050
options.user = 'SYSDBA'
options.password = 'masterkey'
options.lowercase_keys = false
options.role = null

firebird.attach(options, (err, db) => {
    if (err) {
        console.log(err);
    }
    console.log(db)
    // db = DATABASE
    db.query('SELECT * FROM TABLE', (err, result) => {
        // IMPORTANT: close the connection
        console.log(result)
        db.detach();
    });

});