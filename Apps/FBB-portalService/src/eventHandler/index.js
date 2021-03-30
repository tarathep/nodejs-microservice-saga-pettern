const executeHomeCheckIn = require('./executeHomeCheckIn');
module.exports = (message) => {
    console.log(message.topic)
    switch(message.topic){
        case 'HOME_CHECKIN_CREATED':
            executeHomeCheckIn(message.payload);
            break;
        default:
            break;
    }
}