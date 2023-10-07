let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
let hasLiked = localStorage.getItem('hasLiked') === 'true' || false;

const heart = document.getElementById('heart');
const likes = document.getElementById('likes');

if (hasLiked) {
    heart.classList.add('liked');
    heart.innerHTML = '&#10084;&#65039;'; // Unicode za crveno srce
}

likes.textContent = `${likeCount} ljudi je lajkovalo ovo srce.`;

heart.addEventListener('click', () => {
    if (!hasLiked) {
        likeCount++;
        likes.textContent = `${likeCount} ljudi je lajkovalo ovo srce.`;
        localStorage.setItem('likeCount', likeCount.toString());
        localStorage.setItem('hasLiked', 'true');
        heart.classList.add('liked');
        heart.innerHTML = '&#10084;&#65039;'; // Unicode za crveno srce
        hasLiked = true;
    }
});
