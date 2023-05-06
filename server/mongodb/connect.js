import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('mongodb is connected.'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
};

export default connectDB;
