// http://www3.tcgs.tc.edu.tw/~sagit/luckycat/q382.htm

const input = '15 28 6 56 60000 22 496 0';

function getTotal(n) {
  let total = 1;
  const middle = Math.floor(n / 2);
  for (let i = 2; i <= middle; i++) {
    if (n % i === 0) {
      total += i;
    }
  }
  return total;
}

function getResult(n, total) {
  if (n > total) {
    return 'DEFICIENT';
  } else if (n === total) {
    return 'PERFECT';
  } else {
    return 'ABUNDANT';
  }
}

function perfection(numsString) {
  const nums = numsString.split(' ');
  console.log('PERFECTION OUTPUT');

  for (let i = 0; i < nums.length; i++) {
    const n = +nums[i];
    if (n === 0) break;
    const total = getTotal(n);
    const output = `${n} ${getResult(n, total)}`;
    console.log(output);
  }

  console.log('END OF OUTPUT');
}

perfection(input);
