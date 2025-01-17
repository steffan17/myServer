const db = require(`../db/db.js`)

const api = {

getTables: (req, res) => {res.send(db.getTables())},
getTable: (req, res) => {res.send(db.getTable(req.query.tableName))},
deleteRow: (req, res) =>{res.send(db.deleteRow(req.query.id, req.query.tableName))},


testFunction: (req, res) => {res.send(`api testFunction`)},

testFunc: (req, res) => {res.send(db.dev.testFunc())},
createTestTable: (req, res) => {res.send(db.dev.createTestTable())},
putTestData: (req, res) => {res.send(db.dev.putTestData())},
getTestTable: (req, res) => {res.send(db.dev.getTestTable())}


}

module.exports = api