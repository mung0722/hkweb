// 모든 'hover' 클래스 이미지를 선택
const hoverImages = document.querySelectorAll('.hover');

hoverImages.forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.style.display = 'none'; // 마우스를 올리면 이미지 숨기기
    });

    img.addEventListener('mouseout', () => {
        img.style.display = 'block'; // 마우스를 떼면 이미지 다시 보이기
    });
});
