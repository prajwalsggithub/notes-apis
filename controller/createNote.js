
const Note = require('../models/Note');
exports.createNote = async(req,res) =>{
    try {
        const {title,content} = req.body;

        const newNotes = await  Note.create({
            title,
            content
        })
        
        if(!newNotes){
            return res.status(200).json({
                success:false,
                message:'Notes not created',
            })
        }

        return res.status(200).json({
            success:true,
            message:'Notes Created successfully',
            data:newNotes
        })

    } catch (err) {
        res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:err.message,

        })
    }

}
