//회문확인버튼 onclick, 입력창에 어떻게 값을 가져오느냐(.value)-input
    const check1 = (e) => {
    //e.preventDefault();
    console.log('check1');

    //입력창에 토마토 불러오기 
    let txt1 = document.getElementById("txt1").value ;

    //문자열에서 모든 공백 제거 (소주 만 병만 주소->오류:공백위치 달라서)
    txt1 = txt1.replaceAll(' ', '');

    //문자열 반복문(마지막글자, 거꾸로)- 1번째 방법(잘안씀,전통적인 방법)
    let s = '';
    for(let i = txt1.length - 1; i >=0; i--){
        s = s + txt1[i];
    }
            // 문자열 배열 - 2번째 방법(쪼개고 리버스쓰고 다시 글자 묶기)
            // split : 낱개로 쪼개줌arry
            // s=txt1.split('')


            //쪼개서 배열을 뒤집으면 거꾸로 됨.그리고 다시 join으로 붙이면 문자열이 됨
            //반복문을 사용하지 않고도 스플릿으로 해결할 수 있음
            s =txt1.split('').reverse().join('')
    console.log(s);

    //문자열 비교
    if(txt1==s) document.getElementById("txt2").value = "회문 입니다."
    else document.getElementById("txt2").value = "회문이 아닙니다."
}

//숫자합계버튼: pnu2025를 입력하면 숫자만 더해서 옆칸에 출력
    //숫자인지아닌지 확인하고 숫자면 다더하기
    const check2 = () => {
    console.log('check2');
    let txt1 = document.getElementById("txt1").value ;
    
    let hap = 0;
    for(let c of txt1){
        if(!isNaN(c)) hap = hap + parseInt(c);
    }
    document.getElementById("txt2").value = hap ;
} 


//취소버튼
const check3 = () => {
    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
}

//합치기
let arr7=[...arr5, ...arr6];
console.log(arr7);