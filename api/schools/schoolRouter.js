const { addSchool, listSchools } = require('./schoolController')

const router = require('express').Router()

router.post('/addSchool', addSchool)
router.get('/listSchools', listSchools)

module.exports = router