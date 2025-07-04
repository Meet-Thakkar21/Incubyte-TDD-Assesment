function add(numbers) {
  if(numbers == "") return 0;
  if(!numbers.includes(',')){
    return parseInt(numbers);
  }
  const parts = numbers.split(',').map(n => parseInt(n));
  return parts.reduce((acc,num) => acc + parseInt(num),0);
}

module.exports = { add };
