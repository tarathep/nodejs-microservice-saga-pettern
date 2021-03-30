//global
const brokers = "10.138.38.65:9092";

//const brokers = "10.138.41.28:32105";

//consumer
const options = {
    encoding: 'utf8', // default is utf8, use 'buffer' for binary data
    fromOffset: -1, // default, latest
    autoCommit: true,
    groupId: "test"
};


module.exports.brokers = brokers;
module.exports.options = options;
