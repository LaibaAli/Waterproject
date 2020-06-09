const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;

const option = {
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 10000, // Keep trying to send operations for 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};


// resolve deprecation warnings
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

mongoose
    .connect('mongodb://localhost:27017/Customers', option)
    .then(
        () => {
            console.info('Mongo Connected', { url: 'mongodb://localhost:27017/Customers' });
        },
        (err) => {
            console.error('MongoDB Failed', err);
        }
    );

mongoose.connection
    .on('error', err => console.error('Mongo onError: ', err))
    .on('disconnecting', err => console.error('Mongo disconnecting: ', err))
    .on('disconnected', err => console.error('Mongo disconnected: ', err))
    .on('close', err => console.error('Mongo close: ', err))
    .on('reconnected', err => console.error('Mongo reconnected: ', err))
    .on('fullsetup', err => console.error('Mongo fullsetup: ', err))
    .on('all', err => console.error('Mongo all: ', err))
    .on('reconnectFailed', err => console.error('Mongo reconnectFailed: ', err))
    .on('reconnectTries', err => console.error('Mongo reconnectTries: ', err))
    .on('connecting', err => console.error('Mongo connecting: ', err))
    .on('connected', err => console.error('Mongo connected: ', err))
    .on('open', err => console.error('Mongo open: ', err));

require('./model/addcustomers.model');
