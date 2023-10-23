import client from 'prom-client';

const counter = new client.Counter({
  name: 'counter_kinda_useless',
  help: 'Description of my custom counter',
  labelNames: ['custom_label'],
});

export default counter;