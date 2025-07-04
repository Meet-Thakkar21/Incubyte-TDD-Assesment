function add(numbers) {
  if(numbers === "") return 0;
  
  let delimiter = /,|\n/;
  let numsSection = numbers;
  if(numbers.startsWith('//')){
    const endOfDelimiter = numbers.indexOf('\n');
    delimiter = new RegExp(numbers[2]);
    numsSection = numbers.slice(endOfDelimiter + 1);
  };

  const parts = numsSection.split(delimiter).map(n => parseInt(n, 10));
  const negatives = parts.filter(num => num < 0);
  if(negatives.length > 0) {
    throw `Negatives not allowed: ${negatives.join(',')}`
  };
  return parts.reduce((acc, num) => acc + num, 0);
}

module.exports = { add };
