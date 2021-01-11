const alarms = process.argv.slice(2);
const filteredAlarms = alarms.filter(alarm => alarm >= 0 && !isNaN(alarm));
const sortedAlarms = filteredAlarms.sort((a, b) => {return a - b});

for (alarm of sortedAlarms) {
  if (alarm === sortedAlarms[sortedAlarms.length - 1]) {
    setTimeout(() => {
      console.log('*** ALARM SOUND ***'); 
    }, alarm * 1000);
  } else {
    setTimeout(() => {
      process.stdout.write('*** ALARM SOUND ***'); 
    }, alarm * 1000);
  }
};