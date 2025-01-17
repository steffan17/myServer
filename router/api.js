const express = require('express')
const api = require(`./actions`)
const router = express.Router();


router.get('/api/getTables', api.getTables)
router.get('/api/getTable', api.getTable)
router.get('/api/deleteRow',api.deleteRow)

//dev
router.get('/api/', (req, res)=>{res.send('api :-)')})
router.get('/api/test', api.testFunction)

router.get('/api/testFunc', api.testFunc)

router.get('/api/createTestTable', api.createTestTable)
router.get('/api/putTestData', api.putTestData)
router.get('/api/getTestTable', api.getTestTable)

module.exports = router