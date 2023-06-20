let number = 10

function solution(number){
    let sum = 0
    for (i = 1; i < number; i++){
      if (i % 3 === 0 || i % 5 === 0){
        console.log(i)
        sum += i
      }
    }
    return sum
  }

  console.log(solution(number))