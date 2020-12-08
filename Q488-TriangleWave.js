// http://www3.tcgs.tc.edu.tw/~sagit/luckycat/q488.htm

const input = [
  [3, 2],
  [5, 3],
];

function test(n) {
  for (let i = 0; i < n.length; i++) {
    const a = n[i][0];
    const f = n[i][1];

    for (let z = 1; z <= f; z++) {
      for (let x = 1; x <= a; x++) {
        let s = '';
        for (let y = 1; y <= x; y++) {
          s += x;
        }
        console.log(s);
      }
      for (let x = a - 1; x >= 1; x--) {
        let s = '';
        for (let y = 1; y <= x; y++) {
          s += x;
        }
        console.log(s);
      }
      console.log('\n');
    }
  }
}

test(input);
