const {get} = require('lodash');
const {produceQueue} = require('../library/rabbitmq')

const testProduceQueue = async(req, res) => {
    try{
        const message = {name: 'ica'};
        produceQueue(message, 'TestProduceQueue', (err, res) => {
            if(err){
                throw err;
            }
            console.log(res);
        })
    } catch (error) {
        console.log(error)
    }
}

const consumerRabbit = (ch, msg) => {
    console.log('Successfully Retrieve Queue');
    const message = JSON.parse(msg.content.toString());
    const messageRabbit = get(message, 'params.message');

    console.log('Message Retrieved : ', messageRabbit);
    ch.ack(msg);
}

module.exports={consumerRabbit, testProduceQueue}