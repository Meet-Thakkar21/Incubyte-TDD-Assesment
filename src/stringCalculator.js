function add(numbers) {
  if(numbers == "") return 0;
  if(!numbers.includes(',')){
    return parseInt(numbers);
  }
  const parts = numbers.split(/,|\n/).map(n => parseInt(n, 10));
  return parts.reduce((acc, num) => acc + num, 0);
}

module.exports = { add };
