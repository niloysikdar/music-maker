window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const colors = ["#ff4747", "#f0e56e", "#5b4fff", "#8cdbe6", "#df4fff", "#4fff52"]



    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            document.body.style.background = colors[index];
        });
    });
});