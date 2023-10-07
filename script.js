let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;
let hasLiked = localStorage.getItem('hasLiked') === 'true' || false;

const heart = document.getElementById('heart');
const likes = document.getElementById('likes');

function updateLikes() {
    likes.textContent = `${likeCount} ljudi je lajkovalo ovo srce.`;
}

if (hasLiked) {
    heart.classList.add('liked');
    heart.innerHTML = '&#10084;&#65039;';
    updateLikes();
}

heart.addEventListener('click', () => {
    if (!hasLiked && likeCount < 100) {
        likeCount++;
        localStorage.setItem('likeCount', likeCount.toString());
        localStorage.setItem('hasLiked', 'true');
        heart.classList.add('liked');
        heart.innerHTML = '&#10084;&#65039;';
        hasLiked = true;
        updateLikes();
    }
    else if (hasLiked) {
        likeCount--;
        localStorage.setItem('likeCount', likeCount.toString());
        localStorage.setItem('hasLiked', 'false');
        heart.classList.remove('liked');
        heart.innerHTML = '&#10084;';
        hasLiked = false;
        updateLikes();
    }
});
