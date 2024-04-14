const { kafka, topicName } = require('./Gemeinsam');

const consumer = kafka.consumer({ groupId: 'test-group' });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: topicName, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, nachricht}) => {
      const data = JSON.parse(nachricht.value.toString());
      console.log('Nachricht:', data);
    },
  });
};

run().catch(console.error);

