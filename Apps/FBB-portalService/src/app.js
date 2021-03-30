const Consumer = require('../../../Libs/kafkaBroker/kafkaHandler/Consumer');
const eventHandler = require('./eventHandler');

try {
    //CONSUMEING MESSAGE
    const consumer = new Consumer();
    consumer.addTopics(["HOME_CHECKIN_CREATED"]).then(() => {
        consumer.consume(message => {
            //SENDER MESSAGE TO EVENT
            eventHandler(JSON.parse(message.value));
        })
    })

    console.log("Home CheckIn Service Started Successfully");

}
catch (e) {
    console.log(`Error ${e}`);
}