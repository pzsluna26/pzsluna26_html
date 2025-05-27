document.addEventListener("DOMContentLoaded", () => {
    //자바스크립트 작업할 아이들 다 가져오기
    //9개 셀들 NodeList, 버튼, 메세지
    const cols = document.querySelectorAll(".conl");
    const bt = document.querySelector(".row > button");
    const msg = document.querySelector("#msg");

    //배열을 사용해서 클릭이벤트 작성하기
    //flag: 상태표시/초기화 변수선언
        //false= 게임시작 전, True=게임 진행중
    let arr = [0,0,0,0,0,0,0,0,1];
    let flag = false;
    //성공조건표시(하트 8개 충족시 goodjob)
    let cnt = 0;

    /*셀을 클릭했을 때,
    1. 만약 시작전이면 "폭탄을 섞어주세요" 띄우고 나오기.
    2. 만약 실패했으면 "실패" 띄우기
    3. 만약 셀 값이 0이면 하트 이미지 띄우기 + 성공조건 증가
    4. 만약 그게 아니라면 폭탄 이미지 띄우기
    */
    //반복문을 이용해 cols안의 요소들을 하나씩 꺼내면서
    //동시에 인덱스와 요소 둘다 사용하기

    //반복문+키값 출력 문법 : for(let[,]of entries()){}
    for(let [idx,col] of cols.entries()){
        col.addEventListener("click", () => {
            if(!flag){
                msg.innerHTML="폭탄을 섞어주세요💣"
                return;
            }
            if (msg.innerHTML=="실패!") return;
            if (arr[idx]==0){
                col.innerHTML= `<img src="../img/hart.png" width="60"`;
                cnt++
                
                //콘솔에 성공조건이랑 폭탄위치 띄우기
                console.log(cnt,arr.indexOf(1))
                if(cnt==8){
                    cols[arr.indexOf(1)].innerHTML=`img src="../img/good.png" width="180"`
                }
            }
        })
    }

})