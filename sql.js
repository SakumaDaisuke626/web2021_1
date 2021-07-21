const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

if( process.argv.length < 3 )	process.exit(0);

if( /select/.test( process.argv[2] )) {
	db.each( process.argv[2], (err, result ) => {
		console.log( result );
	});
} else {
	db.run( process.argv[2] );
}
db.close();