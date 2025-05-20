/* 
function Hello(){
    alert("안녕하세요.자바스크립트입니다.!");
 }
*/

//화살표 함수(위에 것과 같음)
/*var변수와 let변수의 차이점
==> 스코프(유효범위)
var: 함수 범위를 가짐. 함수 밖에서는 못씀
let: 블록 범위를 가짐. {} 안에서만 유효함. if,for문 안에서 선언하면 밖에서는 못씀 */
const Hello = ()=> {
    
    //출력방법1.팝업창: alert("안녕하세요.자바스크립트입니다.!");
    //출력방법2. 웹페이지 개발자도구 콘솔:
    console.log(name + "님 안녕하세요.");
    
    var name = "PNU";
    console.log(name + "님 안녕하세요.");
}

//hello2(위에 것과 같은데 변수만 다름 let) -> 오류남
const Hello2 = ()=> {
    
    //출력방법1.팝업창: alert("안녕하세요.자바스크립트입니다.!");
    //출력방법2. 웹페이지 개발자도구 콘솔:
    
    let name = "PNU";
    //console.log(name + "님 안녕하세요."); 아래랑 같음
    console.log(`${name} 님 안녕하세요.`);
}

//체크함수 3번째 버튼
const check = () => {
    let s = "123";
    let x = "10";
    /*"123"문자열
    "string" 자료형
    "false(숫자맞음)" 숫자 인지 아닌지 검사*/

    console.log(s);
    console.log(typeof(s));
    console.log(isNaN(s));

    //inNaN(숫자만포함하냐?) - parseInt(숫자로변환) 숫자인지 아닌지 구분 하고, 연산
    /*isNaN : 숫자 아니냐? - false숫자맞음 
    !isNaN : 숫자야? - false숫자아님
    parseInt : 문자열을 숫자로 바꿔줌 */
    if( !isNaN(s) && !isNaN(x)) {
      //console.log(s+x);  
      s=  parseInt(s);
      x=  parseInt(x);
    }
    console.log(s+x);  
}

//문자열 순회
const checkFor= () => {
    let s = "토마토,바나나";

    console.log(s[0]);
    console.log(s.charAt(0));

    //문자열 분리
    console.log(s.split(','));

    //기타 기능
    console.log(s.indexOf(','));
    console.log(s.includes(','));

    //반복문
    for(let i=0; i<s.length; i++) {
        console.log(s[i]);
    }

    //
    for(let c of s){
        console.log(c);
}
}


