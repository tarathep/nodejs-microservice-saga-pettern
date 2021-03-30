const Produce = require('./Produce');

const producer = new Produce();


const messageTypeToTopicMessaging = {
    HOME_CHECKIN_CREATED : ["HOME_CHECKIN_SERVICE"]
}

module.exports = (payload) => {
    messageTypeToTopicMessaging[payload.topic].forEach(topic => {
        console.log(payload.topic)
        console.log(topic)
        producer.produce(topic,JSON.stringify(payload));
    })
}