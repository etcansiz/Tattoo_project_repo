import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
 
  height: {
    type: String,
    required: false,
},
  width: {
    type: String,
    required: false,
},

});

const User = mongoose.model('User', userSchema);

export default User;