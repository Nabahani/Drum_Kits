const containerEl = document.querySelector(".container");
const kits = ["crash", "tom", "kick", "snare"];


kits.forEach(kit => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    btnEl.style.backgroudImage = "url(images/" + kit + `${kit === "crash" ? ".jpeg" : kit === "snare" ? ".jpeg" : ".jpg"})`;
    containerEl.appendChild(btnEl);

    const audioEl = document.createElement("audio");
    audioEl.src = "audio/" + kit + ".mp4";

    btnEl.addEventListener("click", () => {
        audioEl.play();
    })

    window.addEventListener("keydown", (event) => {
        if (event.key === kit.slice(0, 1)) {
            audioEl.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout(() => {
                btnEl.style.transform = "scale(1)";
            }, 100)
        }
    })
})