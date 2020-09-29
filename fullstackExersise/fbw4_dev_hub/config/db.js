const mongoose = require('mongoose');
const config = require('config') // dependency : will read the default.json
const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('MongoDB Connected...'); // part of the acync block // only called when promise is successfull
    } catch (error) {
        console.error(error.message)
        //Exit process when failure
        process.exit(1) // 1 = exit with failure
    }
}

module.exports = connectDB