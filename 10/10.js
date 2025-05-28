/*1. 초기화면
    : 아무것도 안눌렀을때, 초기화하고. 
    그림도 메시지도 다 지워서 모든 칸을 비운다. */
const init=(cols)=>{
    msg.innerHTML="";
    for(let col of cols){
        col.innerHTML="";
    }
};

/*2. 본격 코드 시작
    : HTML이 다 만들어진 다음에 JS를 실행해! */
document.addEventListener("DOMContentLoaded",()=>{

/*3. 필요한 모든 요소들 가져오기 (변수선언)
: 9개 셀/ 버튼/ 메세지/ 기본상태/ 히든상태  */
const bt=document.querySelector(".row > button");
const msg=document.querySelector("#msg");
const gbox = document.querySelector("#gbox");
const hbox = document.querySelector("#hbox");
const cols = Array.from(document.querySelectorAll(".col"));

/*4. 게임시작 전 초기화(시작 전 임을 표시)
    : 아직 시작 안해서 안 섞인 임의의 폭탄 위치 지정,
    게임 시작 했는지 표시할 변수 초기화,
    하트를 몇개 눌렀는지 표시할 변수 초기화 */
let arr=[0,0,0,0,0,0,0,0,1];
let flag = false;
let cnt = 0;

/*5. 게임중
    :모든 셀 클릭 했을 때 발생하는 이벤트 정의 
    1)만약에, 게임 시작 전이면, "폭탄을 섞어주세요" 라고 알려줘
    2)만약에, 실패한 다음이면, 아무것도 안해
    3)만약에, 눌렀는데 하트면, 하트 그림을 보여주고 개수를 세어
    4)만약에, 하트를 8개 다 찾으면, 기본상태 감추고, 히든 박스를 보여줘 => 굿잡 이미지
        그리고 "성공!" 메시지 보여주고, 버튼에 폭탄섞기 보여주기
    5)만약에, 눌렀는데 그게 폭탄이면, 폭탄 그림을 보여주고 "실패!"가 나와 */
for(let [idx,col] of cols.entries()){
    col.addEventListener("click",()=>{
        //1번
        if(!flag){
            msg.innerHTML="폭탄💣을 섞어주세요~"
            return;
        }
        //2번
        if(msg.innerHTML==="실패!") 
            return;
        //3번
        if(arr[idx] == 0){
            col.innerHTML=`<img src="../img/hart.png" width="60">`;
            cnt++
        
        //4번
        if(cnt===8){
            gbox.style.display = "none";
            hbox.style.display = "flex";
            hbox.innerHTML=`<img src="../img/good.png" width="180" height="180">`;
        
            msg.innerHTML="성공!!🎉";
            flag=false;
            bt.innerHTML="폭탄 섞기";
        }
        //5
    }else {
            col.innerHTML=`<img src ="../img/boom.png" width="60">`;
            msg.innerHTML="실패!!🥹";
            flag=false;
            bt.innerHTML="폭탄 섞기";
        }
    });
}
/*6. 게임종료 후 다시시작
    : 버튼을 눌렀을때, 만약에 게임 시작 전이면,
    1) 랜덤정렬하고 
    2) 버튼에 게임중 띄워
    3) 그리고 게임시작 표시
    4) 하트 누른 갯수 초기화
    5) 콘솔창에 폭탄위치 보여주고
    6) 히든박스 숨기고,
    7) 원래상태 보여주기
    8) 모든 이미지, 메세지 없애기 초기화면  */

bt.addEventListener("click",()=>{
   if(!flag){
    //1번
    arr.sort(()=> Math.random()-0.5);
    //2번
    bt.innerHTML="게임중...";
    //3번
    flag=true;
    //4번
    cnt=0;
    //5번
    console.log(arr);
    //6번
    hbox.style.display="none";
    gbox.style.display="flex";
    init(cols);
   }
});
});