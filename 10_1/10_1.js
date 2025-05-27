document.addEventListener("DOMContentLoaded", () => {
    //자바스크립트 작업할 아이들 다 가져오기
    //9개 셀들 NodeList, 버튼, 메세지
    const cols = document.querySelectorAll(".conl");
    const bt = document.querySelector(".row > button");
    const msg = document.querySelector("#msg");

    //배열을 사용해서 클릭이벤트 작성하기
    //게임 시작 초기화 변수선언
    let arr = [0,0,0,0,0,0,0,0,1];
    let start = false;
//??  
    let cnt = 0;''

    /*셀을 클릭했을 때,
    1. 만약 시작전이면 "폭탄을 섞어주세요" 띄우기
    2. 만약 실패했으면 "실패" 띄우기
    3. 만약 셀 값이 0이면 하트 이미지 띄우기
    4. 만약 그게 아니라면 폭탄 이미지 띄우기
    */
    //반복문을 이용해 cols안의 요소들을 하나씩 꺼내면서
    //동시에 인덱스와 요소 둘다 사용하기
    for(let [idx,col] of cols.entries()){

        col.
    }

})