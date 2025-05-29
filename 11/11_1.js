/*어제 날짜 지정하고 콘솔에 찍기*/
const yesterday = () =>{
    let yday = new Date();
    yday.setDate(yday.getDate() -1) //어제날짜
    return yday.toISOString().slice(0,10); //년월일 추출

    // let y = yday.getFullYear(); //연도4자리
    // let m = yday.getMonth() +1 //월
    // m = m < 10 ? '0'+ m : m; //m이 19보다 작으면 0+m,그렇지 않으면m
    // let d = yday.getDate(); //일
    // d = d < 10 ? '0'+ d : d;
    // return y+m+d;
}

const getMvList = (dt, ul) => {
    const url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=581023657f7becce67c0cf9e98272f98&targetDt="+dt;
      
    console.log(url)

fetch(url) 
 .then(resp => resp.json()) 
 .then(data => {
    const mvList = data.boxOfficeResult.dailyBoxOfficeList.map((item)=>
    
                               /*콘솔에 출력: console.log(item.movieNm) );*/
                               /*브라우저에 출력(3번은 순위등락-삼항연산)*/ 
                                `<li>
                                    <span class="spRank">${item.rank}</span>
                                    <span class="spMv">${item.movieNm}</span>
                                    
                                    ${parseInt(item.rankInten)}
                                </li>`);
    let tags=mvList.join('');
    ul.innerHTML=tags;
}) 
 .catch(err => console.log(err));
}

/*날짜를 변경하면 그 날짜의 영화 랭킹 나오게 만들기*/
document.addEventListener("DOMContentLoaded", ()=>{
    const ul = document.querySelector("main > ul");  
    const dtIn = document.querySelector("#dt");
    dtIn.setAttribute("max",yesterday()); //디폴트로 어제까지만 날짜 잡을 수 있음
    
    dtIn.value = yesterday(); 
    getMvList(dtIn.value.replaceAll('-',''), ul);
    console.log(yesterday())

    dtIn.addEventListener("change",() => {
        getMvList(dtIn.value.replaceAll('-',''), ul);
     });
});

/*날짜를 변경하면, 그 날짜의 영화 랭킹과 랭킹등락 나오게 만들기*/
document.addEventListener("DOMContentLoaded", ()=>{
function a(ud) {
  if (ud > 0) return ud;
  return ;
}
});

 