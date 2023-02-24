const Amqp = require('amqplib/callback_api');
const { isEmpty } = require('lodash');

const rabbitConfig = {
    url: 'amqp://guest:guest@localhost',
    exchangeName: 'test-queue'
}

const connectionRabbit = function(main){
    Amqp.connect(rabbitConfig.url, function(err, conn) {
        if(err){
            console.log(err, 'Connection RabbitMQ Error');
        }
        main(conn);
    })
}

const sendToQueue = function (
    conn,
    queueName,
    exchangeName,
    message,
    callback
){
    return conn.createConfirmChannel(function(err, ch){
        ch.assertExchange(exchangeName, "direct");
        const params = {
            message: message,
        };
        ch.publish(
            exchangeName, 
            queueName,
            new Buffer(JSON.stringify({request: message, params: params}))
        );
        return callback();
    })
}

const produceQueue = function (message, queueName, callback){
    connectionRabbit(
        function(conn){
            return sendToQueue(
                conn,
                queueName,
                rabbitConfig.exchangeName,
                message,
                function(){
                    console.log('Successfully send queue to message broker');
                    return callback(null, 'Message is being processed');
                }
            )
        }
    )
}

const consumeQueue = (queueName, receiveHandler) => {
    let prefetchAmount = 3;
    connectionRabbit((conn) => {
        const exName = rabbitConfig.exchangeName;
        conn.createChannel((err, ch) => {
            ch.assertExchange(exName, "direct");
            ch.assertQueue(queueName, {durable: true}, (err, queue) => {
                if(err){
                    console.log(err, 'Waiting for Queue Error');
                    throw err;
                }
                ch.bindQueue(queue.queue, exName, queueName);
                ch.prefetch(prefetchAmount);
                ch.consume(
                    queue.queue,
                    async(msg) => {
                        try{
                            if(isEmpty(msg)){
                                console.log('Waiting for Queue');
                            } else {
                                await receiveHandler(ch, msg);
                            }
                        } catch (error){
                            console.log(error, 'Error When Consume Queue');
                        }
                    },
                    {
                        noAck: false,
                    }
                )
            })
        })
    })
}

module.exports = {sendToQueue, produceQueue, consumeQueue};

