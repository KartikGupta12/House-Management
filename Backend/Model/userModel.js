const mongoose = require('mongoose');

const database_link="mongodb+srv://database_admin:ElDf7JgLLWdyHN8Q@cluster0.vsuxn2r.mongodb.net/?retryWrites=true&w=majority";
// const database_password=ElDf7JgLLWdyHN8Q;


// Connect to mongodb database
mongoose.connect(database_link)
.then(function(db){
    console.log('User Database Successfully Connected');
})
.catch(function(err){
    console.log('User Database Error',err);
})


const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        // validate: function(){
        //     return emailValidator.validate(this.email);
        // }
    },
    password:{
        type: String,
        required: true,
        minLength: 8
    },
    confirmPassword:{
        type: String,
        minLength: 8,
        validate: function(){
            return this.confirmPassword==this.password;
        }
    },
});

userSchema.pre('save',function(){
    this.confirmPassword=undefined;
});


const userModel = mongoose.model('userModel', userSchema);
module.exports = userModel;
