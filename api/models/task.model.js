import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        description:{
            type:String,
            required: true,
        },
        userRef:{
            type:String,
            required: true,
        },
    },{timestamps: true}
)

const task = mongoose.model('Task', taskSchema);

export default task;
