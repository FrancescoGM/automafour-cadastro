const firebird = require('node-firebird')
const options = {}
options.host = '127.0.0.1';
options.port = 3050;
options.database = 'BANCO.FDB';
options.user = 'SYSDBA';
options.password = 'masterkey';
options.lowercase_keys = false; // set to true to lowercase keys
options.role = null;            // default
options.pageSize = 4096;

var sql1 = 'SELECT * FROM TBL_USER WHERE ID>' + firebird.escape(1);
