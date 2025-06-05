/*데이터가져오기 링크에서(프론트)
  : 영화진흥원api - 데일리박스오피스리스트 */
document.addEventListener("DOMContentLoaded",()=>{
 const url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=581023657f7becce67c0cf9e98272f98&targetDt=20250528"
 const ul = document.querySelector("main > ul");    
 fetch(url) 
 .then(resp => resp.json()) //가져온 형태를 제이슨 방식으로 바꿔줘
 .then(data => {
    
    /*가져온 데이터에서 영화이름리스트 가져와서 브라우저에 목록으로 출력하기
        : map을 사용하여 반복하여 출력하기(item=데이터 한 행) */
    
        // console.log(data.boxOfficeResult.dailyBoxOfficeList)
    const dailyboxOfficeResult =data.boxOfficeResult.dailyBoxOfficeList;
    const mvList = data.boxOfficeResult.dailyBoxOfficeList.map((item)=>
                               /*콘솔에 출력: console.log(item.movieNm) );*/
                               /*브라우저에 출력*/ 
                                `<li>
                                    <span class="spRank">${item.rank}</span>
                                    <span class="spMv">${item.movieNm}</span>
                                </li>`);
    let tags=mvList.join('');
    console.log(tags)   
    ul.innerHTML=tags;


}) //제이슨 리턴값을 데이터로 받음
 .catch(err => console.log(err));
});






/* <get방식>
1. ?전 앤드포인트
    https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?
2. a=b& 값을 묶은것
    key=&
3. targetDt 날짜요청
    targetDt=20250528 */






// const funcB = () =>{
//     console.log("B");
// }

// /*비동기방식(응답오기전까지 다른작업함)
//  :동기방식으로 보이고 싶으면 {}안에 콜백을 집어 넣어줘야한다 */
// const funcA=()=>{
//     console.log("A");
//     setTimeout(()=>{
//         console.log("B")
//         setTimeout(() => {
//          console.log("C");
//         },500);
//     },1000);
// }



// document.addEventListener("DOMContentLoaded",()=>{
//     funcA();
// });



/*
1. promise :요청을 했을 때 비정상적인 상태를 처리하기 위해 기억하고 있어야 한다.
            1초를 기다리는 중 => 팬딩
            1초가 끝났으면 => 풀필드
2. fetch(url): 보내고 왔을 때 
            풀필드되면.then()
            오류가되면.catch()
*/

//날짜를 선택하면 나오게 하고싶음
//ul에다가 
