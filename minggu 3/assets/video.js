
var vid = document.getElementById("myVideo");

function playVid() {
    vid.play();
}
function pauseVid() {
    vid.pause();
}
function duration() {
    alert(vid.duration);
}
function toggleControls() {
    vid.controls = !vid.controls;
}
