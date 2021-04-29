//global
const brokers = "dev.tarathep.com:9092";

//consumer
const options = {
    encoding: 'utf8', // default is utf8, use 'buffer' for binary data
    fromOffset: -1, // default, latest
    autoCommit: true,
    groupId: "test"
};


module.exports.brokers = brokers;
module.exports.options = options;
