const router = require('express').Router()

router.post('/register', (req, res) =>{
    res.json({msg:"test rouer"})
})

module.exports = router