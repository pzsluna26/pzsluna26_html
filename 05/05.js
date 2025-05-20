
//onclick 클릭하면 로또번호가 생성되게
const lotto = () => {
    //버튼 누르면 초기화 되는 설정
    //.nlist에 heigh를 잡아놓으면 초기화시 안 움직임
    document.getElementById("nlist").innerHTML = "";


    //숫자랜덤 생성
    let arr = [];
    //중복되지 않게 6개의 숫자 생성
    while (arr.length < 6) {
        //math.floor소수점 떼는것
        let n = Math.floor(Math.random() * 45) + 1; // 1~45
        //랜덤수가 이미 있는 경우 
        //==> n이 이 배열안에 들어있니? -> 있으면 다시 생성
        if (arr.includes(n)) continue;
        //랜덤 수를 배열에 추가
        arr.push(n);
        // console.log(arr)
    }
    //숫자 배열 정렬
    arr.sort((a, b) => a - b);
    // console.log(arr)

    //보너스번호
    let bonus = [];
    while (bonus.length < 1) {
        // while(true) {
        let n = Math.floor(Math.random() * 45) + 1; // 1~45
        //랜덤수가 이미 있는 경우 
        //==> n이 이 배열안에 들어있니? -> 있으면 다시 생성
        if (arr.includes(n)) continue;

        bonus.push(n);
    }
    console.log(arr, bonus)
    //전체 배열
    arr = [...arr, ...bonus];
    console.log(arr)

    //태그 배열
    let tags = arr.map(item=>`<span class = "sp${Math.floor(item/10)}">${item}</span>`);
    //splice() : 배열 중간에 값 삽입하는 함수
    tags.splice(6,0, "<span id = 'spPlus'>+</span>");
    

    tags = tags.join('');
    console.log(tags)
    document.getElementById("nlist").innerHTML = tags;
}