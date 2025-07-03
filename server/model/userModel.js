import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    creditBalance: {
        type: Number,
        default: 10
    }
})

// using this userSchema we are creating a model named User.
// If the model already exists, it will use the existing model.
// This is to avoid the error "Cannot overwrite `User` model once compiled."
const userModel = mongoose.models.user ||  mongoose.model('User', userSchema);

export default userModel;
