const images = document.querySelectorAll('.hover');

images.forEach((img) => {
    const parent = img.parentElement;
    parent.addEventListener('mouseover', () => {
        img.classList.add('hidden');
    });

    parent.addEventListener('mouseout', () => {
        img.classList.remove('hidden');
    });
});
