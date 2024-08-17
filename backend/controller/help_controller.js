const HelpModel = require('../models/help_model')

const add = async(req,res)=> {
    try {
        const {title,description} = req.body;
        if (!title || !description){
            return res.status(400).send({message:"all fields are mandatory"})
        }
        const addNew = new HelpModel({title,description});
        const resp = await addNew.save();
        res.status(201).send({message:"help data is add ",resp})

    } catch (error) {

        res.status(500).send({ message: "error", error })
        
    }
    
}

const getall = async(req,res)=> {
    try {
        const resp = await HelpModel.find()
        res.status(200).send(resp)
    } catch (error) {
        res.status(500).send({ message: "error", error })
    }
}

const search = async(req,res)=> {
    
}

module.exports ={
    add,
    getall,
    search
}