// 06.js 첫번째 파일

// 오브젝트 생성
let obj1 = {}; //빈 오브젝트
let obj2 = new Object(); //위에랑 같은 식이지만 위에걸 더 많이 사용함

// 오브젝트 초기화
obj1 = {'a' : 1 , 'b' : 2}; // 키+값을 같이 가짐

console.log(`a = ${obj1['a']}`) // obj1 'a'의 값 알고 싶을때
console.log(`b = ${obj1['b']}`) // obj2 'b'의 값 알고 싶을때

// 수정
obj1['a'] = 10; // a값이 1에서 10으로 수정됨
console.log(obj1); // obj1안의 모든 값 알고 싶을때

// 추가
obj1['c'] = 30; // 없는 키를 쓰면 추가가 됨
console.log(obj1);

// 삭제
delete obj1['b']; // obj1에서 b를 삭제함
console.log(obj1);

// object = 배열(키,값) 데이터 순회 ==> for of/ map / filter 다 쓸 수 있음
console.log("오브젝트 키목록 :", Object.keys(obj1)); //오브젝트 키(인덱스) 가져올 수 있음
console.log("오브젝트 키목록 :", Object.values(obj1)); //오브젝트 값 가져올 수 있음
console.log("오브젝트 키목록 :", Object.entries(obj1)); //오브젝트 키+값 가져올 수 있음

for(let k of Object.keys(obj1)) {
    console.log(obj1[k]);
}

for(let v of Object.values(obj1)) {
    console.log(obj1[v]);
}

for(let [k,v] of Object.entries(obj1)) {
    console.log(`키 : ${k}, 값: ${v}`);
}

// 오브젝트(객체) 복사 및 병합
obj1 = {'apple': '🍎','banana' : '🍌'};
obj2 = {...obj2, 'orange' : '🍊'};

console.log(obj1);
console.log(obj2);



