import  {Kafka}  from 'kafkajs';

const kafka = new Kafka({
  clientId: '123456',
  brokers: ['zimolong.eu:9092']
});

const topicName = 'WWI22B4.MunisiMerita.Aufgabenblatt';

module.exports = {
  kafka,
  topicName
};
