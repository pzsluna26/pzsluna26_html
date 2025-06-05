/* <필요함수>
    : 한국관광공사홈페이지에서, 검색어를 바탕으로 데이터(이미지, 장소이름, 위치) 가져올거야
    1) 겟데이터 함수는 검색어와 컨텐츠를 받아서, 검색하면 컨텐츠 돌려주는 함수야
    2) 내 api 키를 가져올게
    3) 사진갤러리 정보를 요청할 수 있는 웹사이트 주소도 가져올게
    4) 근데 이런이런 조건들(~에 관련된 사진 ~개만 json형식으로 ~페이지 주세요)로
        데이터를 줘! 라고 파라미터를 만들거야
        serviceKey=${apikey}	✔️ 내 API 인증키 (필수!)
        numOfRows=10	✔️ 한 페이지에 가져올 데이터 수
    5) fetch로 서버에 데이터 요청을 보내서, json형식으로 사용자가 입력한 검색어를 출력하게 만들게 
        **(fetch,then)은? 데이터주세요~ 하고 요청하는 함수    
        **json형식이란? 문자열 형식의 데이터! 거의 객체 배열의 형태야
            받은데이터를 객체 배열의 형태로 바꿔주는 함수야 
        -주소로 요청을 보내고
        -응답 받은 걸 json으로 바꾸고
        -데이터 꺼내서 html로 만들고 화면에 보여줘
            a. api에서 받아온 사진데이터 배열을 items 라는 변수에 담을게
            b. items 는 배열이니까, map()함수를 쓰면 새로운 배열 tags로 만들어줘   
                  **map()은 배열을 하나씩 꺼내서 새배열로 만들어주는 함수
            c. html 에서 content를 tags로 보이게 바꿔줘
        -오류가 생기면 알려줘 */
const getData = (txt1, content) => {
const apikey ="";
const baseUrl ="https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?"
let url=`${baseUrl}serviceKey=${apikey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
url=`${url}&_type=json&keyword=${txt1.value}` ;

console.log(url);

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        const items = data.response.body.items.item;
        let tags = items.map(item =>`
           
        <div class="card">
          <div class="cardImg">
            <img src=${item.galWebImageUrl} />
          </div>
          <div class="cardDiv">
            <span class="sp1">${item.galTitle}</span>
            <span class="sp2">${item.galPhotographyLocation}</span>
          </div>
        </div> 

            `);  
        tags = tags.join("");
        content.innerHTML = tags;
    
    }).catch(err => console.log(err));
}



/*1. 돔작성 완료됐으니, 이벤트 만들자.
     1) 인풋창, 확인버튼, 취소버튼, 컨텐츠박스 변수선언
     2) 이벤트 만들기
        -확인눌렀을때:
            텍스트창이 비었으면, "키워드를 입력하세요." 팝업창 띄우기
            텍스트창에 입력되면, 해당 데이터를 불러오기(함수선언필요)
        -취소눌렀을때:
            컨텐츠박스 초기화해서 화면 안 내용 없애기 */


document.addEventListener("DOMContentLoaded", ()=>{
    const txt1=document.querySelector("#txt1");
    const bt1=document.querySelector(".formDiv > button");
    const bt2=document.querySelector(".formDiv > [type=reset]");
    const content=document.querySelector(".content");

    bt1.addEventListener("click", (e)=>{
        e.preventDefault();

        if(txt1.value == "") {
            alert("키워드를 입력하세요");
            txt1.focus();
            return;
        }

        getData(txt1, content);

    })
})
