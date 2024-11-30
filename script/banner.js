let currentIndex = 0; //현재 슬라이드 인덱스 번호 저장

const slides = document.querySelectorAll(".slide"); //.slide 클래스를 가진 모든 슬라이드를 선택하여 NodeList로 저장
const totalSlides = slides.length; //슬라이드의 총 개수 저장
const sliderWrapper = document.querySelector(".slider-wrapper"); // 슬라이드들이 담긴 컨테이너 선택

function slide() {
    currentIndex++; //슬라이드 인덱스 1증가
    //마지막 슬라이드에 도착하면 다음 처음으로
    if (currentIndex === totalSlides) { // 슬라이드 인덱스가 총 개수와 개수가 같아지면
        currentIndex = 0; // 슬라이드 처음으로
    }
    //슬라이드 이동을 위해 transform 속성 사용
    //currentIndex에 따라 슬라이드 컨테이너를 왼쪽으로 이동
    // 예를 들어 1번째 슬라이드는 -0 * 100%  = 0%, 2번째 슬라이드는 -1 * 100% = -100%, 3번째 슬라이드는 -2 * 100 = -200%
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 3초마다 슬라이드 이동
// 3초마다 slide 함수를 호출하여 슬라이드가 자동으로 이동하게 만듦
setInterval(slide, 3000);