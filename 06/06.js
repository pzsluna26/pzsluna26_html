// 06.js 두번째 파일(주사위 던지기)

//문서에서 발생하는 모든 이벤트 감지할거야: (DOMContentLoaded)가 들어오면 {}를 할게
// ===>  메소드(인수,인수)
document.addEventListener('DOMContentLoaded', () => {
    
    // 쿼리셀렉터 : '.mdiv 이미지, 버튼' 가져올거야 (getid안써도됨)
    const img = document.querySelector(".mdiv > img");
    const bt = document.querySelector(".mdiv > button");

    // 이벤트발생감지 : button에 일어나는 이벤트(클릭) 발생하는지 감지하고, {}할거야
    bt.addEventListener('click', () =>{

        //1. 1에서 6까지 랜덤 수 생성
        let n = Math.floor(Math.random()*6)+1;

        //2. 랜덤 수에 해당하는 이미지 변경 (src를 ~로 바꿀꺼야)
        img.setAttribute('src',`../img/${n}.png`);
        img.setAttribute('alt', `${n}번 주사위`);
   
    });
});




    