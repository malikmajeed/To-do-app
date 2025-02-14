const mongoose=require('mongoose');



const listSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: {
        type:String,
        enum:['pending', 'completed'],
        default: "pending"
    }
});


const list= mongoose.model('list', listSchema)



module.exports= list;