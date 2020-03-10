const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/TaskManager', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
