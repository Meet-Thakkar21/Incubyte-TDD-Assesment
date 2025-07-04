let callCount = 0;

function parseNumbers(numbers){
  let delimiter = /,|\n/;
  let numsSection = numbers;
  
  if(numbers.startsWith('//')){
    const endOfDelimiter = numbers.indexOf('\n');
    delimiterSection = numbers.substring(2, endOfDelimiter);
    if(delimiterSection.startsWith('[')){
      const delimiters = [...delimiterSection.matchAll(/\[(.*?)\]/g)].map(m=>m[1].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
      delimiter = new RegExp(delimiters.join('|'));
    }
    else{
      delimiter = new RegExp(numbers[2]);
    }
    numsSection = numbers.slice(endOfDelimiter + 1);
  }
  return numsSection.split(delimiter).map(n => parseInt(n, 10));
}

function filterValidNumbers(numbersArray){
  return numbersArray.filter(num => num <= 1000);
}

function add(numbers) {

  callCount++;

  if(numbers === "") return 0;

  const parts = parseNumbers(numbers);
  const negatives = parts.filter(num => num < 0);

  if(negatives.length > 0) {
    throw `Negatives not allowed: ${negatives.join(',')}`
  };

  const validParts = filterValidNumbers(parts);
  return validParts.reduce((acc, num) => acc + num, 0);
}

function getCalledCounts() {
  return callCount;
}
function resetCounts() {
  callCount = 0;
}
module.exports = { add, getCalledCounts,resetCounts};
