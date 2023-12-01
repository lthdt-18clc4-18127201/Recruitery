import mongoose from 'mongoose';    

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log('Successful connect to mongoDB');

    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
        throw error;
    }
}

export default connection;