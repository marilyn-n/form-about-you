const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema({
  fullName: String,
  age: String,
  country: String,
  color: String,
  birthday: String,
  favBook: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

const Form = mongoose.model('Form', formSchema);
module.exports = Form;
