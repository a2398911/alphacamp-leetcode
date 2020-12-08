// http://www3.tcgs.tc.edu.tw/~sagit/luckycat/q496.htm

function test1(A, B) {
  if (A.length !== B.length) {
    let passNums = 0;
    if (A.length > B.length) {
      for (let i = 0; i < B.length; i++) {
        if (A.includes(B[i])) {
          passNums += 1;
        }
      }
      if (passNums === B.length) return 'B is a proper subset of A';
      return passNums ? `I'm confused!` : 'A and B are disjoint';
    }
    for (let i = 0; i < A.length; i++) {
      if (B.includes(A[i])) {
        passNums += 1;
      }
    }
    if (passNums === A.length) return 'A is a proper subset of B';
    return passNums ? `I'm confused!` : 'A and B are disjoint';
  }
  if (A.length === B.length) {
    let passNums = 0;
    for (let i = 0; i < A.length; i++) {
      if (B.includes(A[i])) {
        passNums += 1;
      }
    }
    if (passNums === A.length) return 'A equals B';
    return passNums ? `I'm confused!` : 'A and B are disjoint';
  }
}

function test2(A, B) {
  if (A.length === B.length) {
    const rest = A.filter((a) => !B.includes(a));
    if (rest.length === A.length) {
      return 'A and B are disjoint';
    }
    return rest.length ? `I'm confused!` : 'A equals B';
  } else if (A.length < B.length) {
    const rest = A.filter((a) => !B.includes(a));
    if (rest.length === A.length) {
      return `I'm confused!`;
    }
    return rest.length ? 'A and B are disjoint' : 'A is a proper subset of B';
  } else if (A.length > B.length) {
    const rest = B.filter((b) => !A.includes(b));
    if (rest.length === B.length) {
      return `I'm confused!`;
    }
    return rest.length ? 'A and B are disjoint' : 'B is a proper subset of A';
  }
}

console.log(test1([55, 27], [55, 27]));
console.log(test2([55, 27], [55, 27]));

console.log(test1([9, 24, 1995], [9, 24]));
console.log(test2([9, 24, 1995], [9, 24]));

console.log(test1([1, 2, 3], [1, 2, 3, 4]));
console.log(test2([1, 2, 3], [1, 2, 3, 4]));

console.log(test1([1, 2, 3], [4, 5, 6]));
console.log(test2([1, 2, 3], [4, 5, 6]));

console.log(test1([1, 2], [2, 3]));
console.log(test2([1, 2], [2, 3]));
