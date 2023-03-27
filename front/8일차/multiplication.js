for (let i = 2; i <= 9; i++) {
  console.log(`--${i}단--`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i}x${j}=${i * j}`);
  }
}

let sum = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 == 0 || i % 5 == 0) {
    sum += i;
  }
}
console.log(sum);

// 2. while
let n2 = 1;
while (n2 <= 5) {
  console.log(n);
  n++;
}

n2 = 10;
while (n2 >= 5) {
  console.log(n2);
  n2--;
}

n2 = 10;
while (n2 >= 1) {
  if (n2 % 2 === 0) {
    console.log(n2);
  }
  n2--;
}

n2 = 1;
while (true) {
  console.log("안녕");
  if (n2 === 10) {
    break;
  }
  n2++;
}

n2 = 0;
while (confirm("계속 진행?")) {
  n2++;
  alert(`${n2}번째 alert창`);
}

//continue
let sum3 = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum3 += i;
}
