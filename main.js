// 1~100 사이의 번호 중 랜덤하게 정답 번호가 지정되도록 함k  
// 유저가 번호를 입력 go 라는 버튼 누름 k
// 만약 유저가 정답을 맞추면, 맞췄습니다 k
// 정답 < 유저번호 downk
// 정답 > 유저번호 upk
// reset 버튼을 누르면 게임 리셋k

// 5번의 기회를 다 쓰면 게임이 끝난다. 버튼이 disable
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려주고 기회를 깍지 않는다 
// 유저가 이미 입력한 숫자를 또 입력하면 알려주고 기회를 깍지 않는다. 

//컴퓨터가 랜덤으로 뽑은 번호를 저장해둘 변수 만듦 
let randomNum = 0 ;
let buttonGo = document.getElementById("When-click-go");
let inputNum = document.getElementById("input-num");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5 ;
let gameEnd = false ;
let history = [] ;
let chanceArea = document.getElementById("chance-area") ;

//컴퓨터가 랜덤 번호를 뽑는 함수 만듦 
function comPickNum () {
    randomNum = Math.floor(Math.random()*100)+1;
    console.log("정답",randomNum);
}

comPickNum () ;

//유저가 go라는 버튼을 클릭 했을때 입력한 숫자를 js로 가져오는 이벤트를 넣어줘야함 
//유저가 go라는 버튼을 눌렀을때 입력한 숫자를 가져오는 함수?
//콘솔창에 나왔던 결과값(up down 등)을 웹사이트로 옮겨오기?
buttonGo.addEventListener("click",judge);
resetButton.addEventListener("click",resetOption);
inputNum.addEventListener("focus",function(){inputNum.value=""});

function judge () {
    let userInputNum = inputNum.value ;

    if (userInputNum<1 || userInputNum>100) {
        resultArea.textContent ="1~100까지의 숫자를 입력해주세요!";
        return;
    }

    if (history.includes(userInputNum)) {
        resultArea.textContent ="중복된 숫자를 입력했습니다. 다시 입력해주세요";
        return;
    }

    chances -- ;
    chanceArea.textContent = `남은 기회는? ${chances}번` ;
    console.log("남은 기회:", chances) ;

    if (userInputNum>randomNum) {
        resultArea.textContent ="Down!";
    } else if (userInputNum<randomNum) {
        resultArea.textContent ="Up!";
    } else {resultArea.textContent ="정답입니다!";
        gameEnd = true ;
    }

    history.push(userInputNum) ;

    if (chances<1) {
        gameEnd = true ;
    }

    if (gameEnd == true) {
        buttonGo.disabled = true ;
    }

}


//reset 버튼을 누르면 게임 리셋
//user의 input 창에 아무것도 안뜨고 
//새로운 정답번호가 부여됨 
function resetOption() {
    inputNum.value = "" ;
    comPickNum () ;
     resultArea.textContent ="게임을 다시 시작합니다";
     buttonGo.disabled = false ; 
     chances = 5 ;
     chanceArea.textContent = `남은 기회는? ${chances}번` ;
}
