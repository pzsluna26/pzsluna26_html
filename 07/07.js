//응용문제(주사위 게임) js파일

document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll(".mdiv img");
    const bts = document.querySelectorAll(".mdiv button");

    console.log(imgs);
    console.log(bts);

    /*for ...of : 배열의 '값'을 꺼냄
    for ...in: 배열의 '인덱스'를 꺼냄
    setAttrivute: 랜덤 수에 해당하는 이미지 변경 (src를 ~로 바꿀꺼야)
    innnerHTML :  html포함해서 내용을 가져오거나 바꿈
    */ 
    for(let [idx, bt] of bts.entries()) {
        bt.addEventListener('click' , (e) => {
            //0. 버튼 이벤트 방지 (홈버튼 눌렀다 다시들어가도 문제없음)
            e.preventDefault();

            //1. 컴퓨터 랜덤 수 생성, 이미지 변경
            let n = Math.floor(Math.random()*6)+1;
            imgs[0].setAttribute('src', `../img/${n}.png`);

            //2. 사용자 선택 수, 이미지 변경
            let usern = idx + 1; 
            // parseInt(bt.innerHTML[0]);
                                            //usern 사용자 주사위
            imgs[1].setAttribute('src', `../img/${usern}.png`);

            //3. 컴퓨터 수와 사용자 수가 같은지 비교
            if ( n == usern) {
                msg.innerHTML = "맞음"
            }
            else {
                msg.innerHTML = "틀림"
            }
        })
    }
});

/*응용문제: 주사위 내가 선택한거 하고 컴퓨터가 선택한거하고 맞으면 맞음, 아니면 틀림
1. 컴퓨터 나
2. 버튼 6개
3. 내가 누르면 해당값 나오기
4. 내가 선택 컴터 선택 비교*/