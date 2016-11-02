var Observable = require('FuseJS/Observable');
var sqlite = require('SQLite');
var db = sqlite.open('libraryTest.sqlite');
var dbData = Observable();
var id = dbData.map(function(x){ console.log(x.id); return x.id; });
var createTable = function () {
    console.log('createTable');
    db.execute('create table if not exists ids (id integer primary key)');
};

var insertData = function () {
    for (var i = 0; i < 10; i++) {
        try {
            console.log('insert data');
            db.execute('insert into ids values (?)', i);
        } catch (e) {
            console.log("Error with insert " + i);
        }
    }
}

var loadData = function () {
    var data = db.query('SELECT * FROM ids');
    console.log('load data : ' + JSON.stringify(data[0]));
    dbData.replaceAll(data);
}

createTable();

module.exports = {
    createTable: createTable,
    insertData: insertData,
    loadData: loadData,
    dbData: dbData,
    id: id
};
