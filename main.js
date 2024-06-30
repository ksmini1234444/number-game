// 1~100 사이의 번호 중 랜덤하게 정답 번호가 지정되도록 함  
// 유저가 번호를 입력 go 라는 버튼 누름 
// 만약 유저가 정답을 맞추면, 맞췄습니다 
// 정답 < 유저번호 down
// 정답 > 유저번호 up
// reset 버튼을 누르면 게임 리셋
// 5번의 기회를 다 쓰면 게임으 끝난다. 버튼이 disable
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려주고 기회를 깍지 않는다 
// 유저가 이미 입력한 숫자를 또 입력하면 알려주고 기회를 깍지 않는다. 

//컴퓨터가 랜덤으로 뽑은 번호를 저장해둘 변수 만듦 
let randomNum = 0 ;
let playButton = document.getElementById("play-button") ;
let userInputNum = document.getElementById("user-input-num") ;
let resultShow = document.getElementById("result-out") ;

//컴퓨터가 랜덤 번호를 뽑는 함수 만듦 
function pickNum () {
    randomNum = Math.floor(Math.random()*100)+1;
    console.log("정답",randomNum);
}

pickNum () ;

//유저가 go라는 버튼을 클릭 했을때 입력한 숫자를 js로 가져오는 이벤트를 넣어줘야함 
//유저가 go라는 버튼을 눌렀을때 입력한 숫자를 가져오는 함수?
playButton.addEventListener("click",play) ;

function play (){
    let userInputNumValue = userInputNum.value ;

    if (userInputNumValue>randomNum) { 
        resultShow.textContent = "down!!" ;
    } else if (userInputNumValue<randomNum) {
        resultShow.textContent = "Up!!!" ;
    } else {resultShow.textContent="정답입니다^^"}
 
}

//콘솔창에 나왔던 결과값(up down 등)을 웹사이트로 옮겨오기?