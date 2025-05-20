//배열
let arr1 = [];
let arr2 = [1,2,3];
let arr3 = new Array();
let arr4 = new Array(1,2,3);

console.log(arr1);
console.log(arr2);
console.log(arr3);

//배열 지우기(초기화)
// arr4.length = 0;
arr4=[];
console.log(arr4);

//배열 자료 추가 삭제
//랜덤 수 만들기(1부터 5까지) -push는 배열에 넣는것
let n = Math.floor(Math.random()*5) +1 //1~5까지 숫자 랜덤생성
arr4.push(n)
console.log(arr4);

//배열의 순회 - 1번째방법 for
for(let i = 0; i<arr2.length; i++){
    console.log(arr2[i]);
}

//배열의 순회 - 2번째방법 for-in
for(let i in arr2){
    console.log(arr2[i]);
}

//배열의 순회 - 3번째방법 for-of 한개씩 가져옴
for(let c of arr2) {
    console.log(c);
}

for(let[index, value] of arr2.entries()){
console.log(`index =${index},value=${value}`);
}

/*for-each => 배열을 순회하면서 요소(v)와 인덱스(i)를 출력하는 함수*/
arr2.forEach((v,i) => {
    console.log(`index =${i},value=${v}`)
})


/* 맥함수 => .map(...): 배열의 각 요소를 바꿔서 새로운 배열을 만들어주는 함수*/
// let arr5 = arr2.map((item) => {
//     return item * 2
// }) 아래랑 같음 인수가  하나면 괄호 생략가능, 화살표 뒤 바디에 중괄호에 바로 리턴문이 나오면 중괄호와 리턴문 생략가능
let arr5 = arr2.map(item =>  item * 2)
console.log(arr5);
        //.map (()=>{})
        // ()에는 arr2의 값이 들어옴(1,2,3)
        // {}에는 
                //(맵->for문)위의 함수랑 같은 함수
                let arr51 = [];
                for (let n of arr2){
                    arr51.push(n * 2)
                }

//필터
//리턴되는건 조건식이 들어감. 짝수만 나옴
//let arr6 = arr2.filter((item)=> {return item %2 == 0}) 아래랑 같은 함수
let arr6 = arr2.filter(item => item % 2 == 0);
console.log(arr6);
                //(필터->for,조건문)위의 함수랑 같은 함수
                let arr61 = [];
                for (let n of arr2){
                    if(n % 2 == 0) arr61.push(n)
                }



