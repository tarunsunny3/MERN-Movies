const mongoose = require('mongoose');
const  bcrypt = require('bcrypt');
var schemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
};

// Schema stores username, password, email, phone, profile picture path, and messages sent to admin
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true,'Username already exists'],
        required: true
    },
    password: {
        type: String,
        required: [true, 'Password required'],
    },
    favoriteMovies: {
      type: Array
    }

},schemaOptions);


// Hashes the password before saving it in database
userSchema.pre("save", function(next) {

    if(!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

// returns unhashed version of password to compare
userSchema.methods.comparePassword = function(plaintext, callback) {
    console.log(this.password, bcrypt.compareSync(plaintext, this.password));
    return callback(null, bcrypt.compareSync(plaintext, this.password));
};

var User = mongoose.model('User', userSchema);

module.exports = User;
