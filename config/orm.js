var connection = require("./connection");

function printQuestion(num) {
    var arr = [];
    for (var i=0; i<num; i++) {
        arr.push("?");
    }
    return arr.toString();
}


function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value=ob[key];
        if(Object.hasOwnProperty.call(ob,key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key+ "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(table,callback){
        var query = "SELECT * FROM ??"
        connection.query(query,[table], (err,res) => {
            if(err){
                throw err;
            }
            callback(res);
        })
    },


    insertOne: function(table,cols,vals,callback) {
        var query = "INSERT INTO" + table;

        query += " (";
        query+= cols.toString();
        query += ")";
        query += "VALUES (";
        query += printQuestion(vals.length);
        query += ") ";

        console.log(query);
        connection.query(query, vals, (err,res) => {
            if(err) {
                throw err;
            }
            callback(res);
        })
    },

    updateOne: function(table, objColVals, condition, callback) {
        var query = "UPDATE" + table;


        query += " SET ";
        query += objToSql(objColVals);
        query += " WHERE ";
        query += condition;

        console.log(query);
        connection.query(query, function(err,res) {
            if(err){
                throw err;
            }
            callback(res);
        });
    }
}



module.exports=orm;