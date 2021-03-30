const Consumer = require('../../kafkaBroker/kafkaHandler/Consumer');
const eventHandler = require('./eventHandler');

try {

    const consumer = new Consumer();

    consumer.addTopics(["HOME_CHECKIN_CREATED"]).then(() => {
        consumer.consume(message => {
            //console.log(message.value);
            eventHandler(JSON.parse(message.value));
        })
    })

    console.log("Home CheckIn Service Started Successfully");

}
catch (e) {
    console.log(`Error ${e}`);
}