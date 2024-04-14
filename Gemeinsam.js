const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['zimolong.eu:9092']
});

const topicName = 'WWI22B4.MunisiMerita.Aufgabenblatt';

module.exports = {
  kafka,
  topicName
};
