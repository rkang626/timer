const alarms = process.argv.slice(2);
const sortedAlarms = alarms.sort((a, b) => {return a - b});
const finalTime = sortedAlarms[sortedAlarms.length - 1];

for (alarm of sortedAlarms) {
  if (alarm >= 0 && !isNaN(alarm)) {
    setTimeout(() => {
      process.stdout.write('*** ALARM SOUND ***'); 
    }, alarm * 1000);
  }
};

setTimeout(() => {
  process.stdout.write('\n');
}, finalTime * 1000);