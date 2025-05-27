const init = (cols) =>{
      msg.innerHTML = "" ;
      msg.innerHTML = "" ;
      for (let col of cols) {
        col.innerHTML = "" ;
      }
}

document.addEventListener("DOMContentLoaded", ()=>{
  const cols = document.querySelectorAll(".col") ;
  const bt = document.querySelector(".row > button") ;
  const msg = document.querySelector("#msg") ;
  let arr = [0,0,0,0,0,0,0,0,1] ;
  //상태표시기
  let flag = false ; 
  let cnt = 0;

  for(let [idx, col] of cols.entries()) {
                            //인덱스와벨류를 호출하는 함수
    // col.innerHTML = idx + 1 ;
    col.addEventListener("click" , ()=>{
      if ( !flag ) {
        msg.innerHTML = "폭탄을 섞어주세요" ;
        return ;
      }
      if (msg.innerHTML == "실패!")  return ;
      
      if ( arr[idx] == 0) {
        //하트
        col.innerHTML = '<img src="../img/hart.png" width="60">' ;
        cnt++ ;

        console.log(cnt, arr.indexOf(1))
        if ( cnt == 8 ) {
          cols[arr.indexOf(1)].innerHTML = '<img src="../img/hart.png" width="60">' ;
          msg.innerHTML = "성공!" ;
          flag = false ;
          bt.innerHTML = "폭탄섞기" ;
        }
      }
      else  {
        //폭탄
        col.innerHTML = '<img src="../img/boom.png" width="60">' ;
        msg.innerHTML = "실패!" ;
        flag = false ;
        bt.innerHTML = "폭탄섞기" ;
      }
    }) ;
  }

  bt.addEventListener("click", ()=>{
    if ( !flag ) {
      arr.sort(() => Math.random() - 0.5);
      bt.innerHTML = "게임중 ...." ;
      flag = true ;
      
      cnt = 0 ;
      console.log(arr);
      init(cols) ;
    }
  })
});