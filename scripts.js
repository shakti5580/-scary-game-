function nextPage(page) {
    window.location.href = page;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const scaryVideo = document.getElementById('scaryVideo');
    const continueButton = document.getElementById('continueButton');
    
    if (scaryVideo) {
        scaryVideo.onended = function() {
            continueButton.style.display = 'block';
        };
    }
});
