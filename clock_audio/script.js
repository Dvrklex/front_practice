const section = document.querySelector("section");
const icons = document.querySelector(".icons");
const bar = document.querySelector(".audio-fill");
const threshold = document.querySelector(".audio-threshold");

icons.onclick = () => section.classList.toggle("dark");

// CLOCK
setInterval(() => {
  const d = new Date();
  let h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();
  let ampm = h < 12 ? "AM" : "PM";

  h = h % 12 || 12;
  document.querySelector(".hour_num").innerText = String(h).padStart(2, "0");
  document.querySelector(".min_num").innerText = String(m).padStart(2, "0");
  document.querySelector(".sec_num").innerText = String(s).padStart(2, "0");
  document.querySelector(".am_pm").innerText = ampm;
}, 1000);

// AUDIO
function updateAudio(volume) {
  const percent = Math.min(volume * 120, 100);
  bar.style.width = percent + "%";
  threshold.style.left = percent + "%";
}

if (window.wallpaperRegisterAudioListener) {
  window.wallpaperRegisterAudioListener(data => {
    const avg = data.reduce((a,b) => a + b) / data.length;
    updateAudio(avg);
  });
} else {
  // Mock CodePen
  setInterval(() => {
    updateAudio(Math.random());
  }, 120);
}
const eqBars = document.querySelectorAll(".eq-bar");

if (window.wallpaperRegisterAudioListener) {
  window.wallpaperRegisterAudioListener(function (audioArray) {

    // DEBUG opcional (borrar luego)
    // console.log(audioArray[0]);

    eqBars.forEach((bar, i) => {
      const v = audioArray[i % audioArray.length];
      const height = Math.max(6, v * 90);
      bar.style.height = height + "px";
    });
  });
}
