const { addSchool, listSchools, check } = require('./schoolController')

const router = require('express').Router()

router.post('/addSchool', addSchool)
router.get('/listSchools', listSchools)
router.get('/check', check)
module.exports = router