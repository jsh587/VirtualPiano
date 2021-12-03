/*document.addEventListener("keydown", function(event) {
    if (event.code === "KeyA") {
        let soundOfA = new Audio("media/A.mp3");
        soundOfA.load();
        soundOfA.play();
    } else if (event.code === "KeyS") {
        let soundOfS = new Audio("media/S.mp3");
        soundOfS.load();
        soundOfS.play();
    } else if (event.code === "KeyD") {
        let soundOfD = new Audio("media/D.mp3");
        soundOfD.load();
        soundOfD.play();
    } else if (event.code === "KeyF") {
        let soundOfF = new Audio("media/F.mp3");
        soundOfF.load();
        soundOfF.play();
    } else if (event.code === "KeyG") {
        let soundOfG = new Audio("media/G.mp3")
        soundOfG.load();
        soundOfG.play();
    } else if (event.code === "KeyH") {
        let soundOfH = new Audio("media/H.mp3")
        soundOfH.load();
        soundOfH.play();
    } else if (event.code === "KeyJ") {
        let soundOfJ = new Audio("media/J.mp3")
        soundOfJ.load();
        soundOfJ.play();
    } else {
        console.log("Warning! you pressed wrong button.");
    }

});    */
const keys = new Map([
    ["KeyA","a"],
    ["KeyS","s"],
    ["KeyD","d"],
    ["KeyF","f"],
    ["KeyG","g"],
    ["KeyH","h"],
    ["KeyJ","j"],
    ["KeyW","w"],
    ["KeyE","e"],
    ["KeyT","t"],
    ["KeyY","y"],
    ["KeyU","u"],
])

document.addEventListener("keydown", function(event) {
    let key = event.code;
    if (keys.has(key)) {
        let sound = new Audio("media/" +keys.get(key).toUpperCase() + ".mp3");
        sound.play()
    } else {
        console.log("Warning! you pressed wrong button.");
    }
});











