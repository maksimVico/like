let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;

const heart = document.getElementById('heart');
const likes = document.getElementById('likes');
const saveButton = document.getElementById('saveButton');

function updateLikes() {
    likes.textContent = `${likeCount} ljudi je lajkovalo ovo srce.`;
}

heart.addEventListener('click', () => {
    if (likeCount < 100) { // Provera da li je broj lajkova manji od 100
        likeCount++;
        localStorage.setItem('likeCount', likeCount.toString());
        updateLikes();
    }
});

saveButton.addEventListener('click', () => {
    // Kopiranje broja lajkova u privremeno skladište
    let savedLikes = parseInt(localStorage.getItem('savedLikes')) || 0;
    savedLikes += likeCount;
    localStorage.setItem('savedLikes', savedLikes.toString());
    alert(`Broj lajkova (${likeCount}) je sačuvan. Sada imate ukupno ${savedLikes} lajkova.`);
});

updateLikes(); // Dodajte ovo kako biste ažurirali broj lajkova pri prvom učitavanju stranice
