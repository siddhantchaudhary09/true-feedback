import mongoose from 'mongoose';


export Interface Message extends mongoose.Document{

    content: string;
    createdAt: Date;
}

const MessageSchema: Schema<Message> = new mongoose.Schema({
    content:{
        type:String ,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})


export Interface User extends mongoose.Document{


    username: string;
    email:string;
    password: string;
    verifycode:string;
    verifycodeExpiry:Date;
    isVerified:boolean;
    isAcceptingMessage:boolean;
    message: Message[];
}


const Userschema: Schema<User> = new mongoose.Schema({

    username:{
        type:String,
        required:[true,'Please provide a username']
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:[true,'Please provide a Email']
        unique:true,
        match:[^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$
        ,please  provide valid email]
       

    },
    password:{
        type:String,
        required:[true,'Please provide a password']
    },
    verifycode:{
        type:String,
        required:[true,'Please provide a verifycode']
    },
    verifycodeExpiry:{
        type:Date,
        required:[true,'Please provide a verifycodeExpiry']

    },
    isVerified:{
        type:Boolean,
        default:false
        
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true 
    }
    ,
    message:[MessageSchema]


})

const UserModel = mongoose.models.User as mongoose.Model<User>|| mongoose.model<User>("User" , Userschema);

export default UserModel;