document.addEventListener('DOMContentLoaded', function () {
  try {
    let app = firebase.app();
    let db = firebase.firestore();
    let analytics = firebase.analytics();
    let countDownDate = new Date("Oct 22, 2021 17:00:00").getTime();

    const getCookie = (cname) => {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    // Countdown Timer
    let countdownTimer = document.getElementById("timeLeft");
    let x = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      if (distance < 0) {
        clearInterval(x);
        countdownTimer.innerHTML = "Let's Begin";
        window.location.href = "";
      }
    }, 1000);

    let savedPlayerId = getCookie("playerId");
    if (savedPlayerId.length < 3) {
      window.location.href = "/";
    }
  } catch (e) {
    console.error(e);
  }
});