const express = require("express")
const router = express.Router();
const Contact = require("../models/contact");

router.get('/', async(req,res)=>{
    try {
        const contact = await Contact.find(req.query)
        res.json(contact)
    } catch (error) {
        res.send(error)
    }
})

router.get('/:id', async(req,res)=>{
    try {
        const contact = await Contact.findById(req.params.id)
        res.json(contact)
    } catch (error) {
        res.send(error)
    }
})

router.post('/', async(req,res)=>{
    const contact = new Contact({
         name:req.body.name,
         e_mail:req.body.e_mail,
         subject:req.body.subject,
         msg:req.body.msg
    })
    try {
        const c1 = await contact.save()
        res.json(c1)
    } catch (error) {
        res.send('error')
    }
})

module.exports = router;