const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`Database Connected`.cyan.bold);
    } catch (error) {
        console.log(`ERROR:- ${error.message}`.red.bold);
    }
}

module.exports = connectDB;