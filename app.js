const images = [
    'assets/image1.jpg',
    'assets/image2.jpg',
    'assets/image3.jpg',
    'assets/image4.jpg',
    'assets/image5.jpg'
];

let currentIndex = 0;

const imageContainer = document.getElementById('image-container');
const displayedImage = document.getElementById('displayed-image');

imageContainer.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        displayedImage.src = images[currentIndex];
    }
    // Если достигли последнего изображения, ничего не делаем
});
