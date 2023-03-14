//짝수와 홀수
function solution(num) {
  var answer = "";
  if (num % 2 == 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  return answer;
}

//수박
function solution(n) {
  var answer = "";
  let waterMelon = "수박";
  if (n % 2 == 0) {
    answer = waterMelon.repeat(n / 2);
  } else {
    answer = waterMelon.repeat(n / 2);
    answer = answer + waterMelon[0];
  }
  return answer;
}

//약수의 합
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      answer += i;
      if (i != n / i) {
        // 중복방지
        answer += n / i;
      }
    }
  }
  return answer;
}

// 자릿수 더하기
function solution(n) {
  var answer = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    answer = answer + parseInt(n[i]);
  }
  return answer;
}

// 없는 수 더하기
function solution(numbers) {
  let answer;
  let total_sum = 45;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  answer = total_sum - sum;
  return answer;
}
