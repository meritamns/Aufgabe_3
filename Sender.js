const { kafka, topicName } = require('./Gemeinsam');
const { prompt } = require('readline-sync');

const producer = kafka.producer();

const run = async () => {
  await producer.connect();

  const isbnummer = prompt('Eingabe von ISBN-Nummer: ');
  const titelname = prompt('Eingabe des Titels: ');
  const autor = prompt('Eingabe des Autors: ');

  const nachricht= {
    ISBN: parseInt(isbnnummer),
    Titel: titelname
    Autor: autor,
  };

  await producer.send({
    topic: topicName,
    nachricht: [
      { value: JSON.stringify(nachricht) }
    ]
  });

  await producer.disconnect();
};

run().catch(console.error);
