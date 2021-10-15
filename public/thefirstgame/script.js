document.addEventListener('DOMContentLoaded', function () {

  try {
    let app = firebase.app();
    let db = firebase.firestore();
    let analytics = firebase.analytics();
    let countDownDate = new Date("Oct 27, 2021 23:59:59").getTime();

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

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
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
        countdownTimer.innerHTML = "Game Over";
      }
    }, 1000);

    let savedPlayerId = getCookie("playerId");
    if (savedPlayerId.length < 3) {
      window.location.href = "/";
    }

    const playerDocRef = db.collection('players').doc(savedPlayerId);
    playerDocRef.get().then((playerDoc) => {
      let playerData = playerDoc.data();
      if (playerData['phoneNumber'].endsWith(getCookie("phoneNumber"))) {
        // Setup Puzzles
        let board = Array.from({ length: 24 }, (_, i) => { return { puzzleId: i + 1, solved: false } });
        if (playerData['bingoBoard']) {
          board = playerData['bingoBoard'];
        } else {
          shuffleArray(board);
          playerData['bingoBoard'] = board;
          playerDocRef.set(playerData);
        }

        board.forEach((it, i) => {
          if (i == 12) {
            const colItem = document.getElementById(`column_2`);
            const bingoBox = document.createElement("p");
            bingoBox.innerText = "Free Space";
            colItem.appendChild(bingoBox);
            i++;
          } else if (i > 12) {
            i++;
          }
          let colNum = i % 5;
          const colItem = document.getElementById(`column_${colNum}`);
          const bingoBox = document.createElement("p");
          bingoBox.id = `puzzle_${it.puzzleId}`;
          bingoBox.innerText = it.puzzleId;
          bingoBox.className = (it.solved) ? "completed-puzzle" : "locked-puzzle";
          colItem.appendChild(bingoBox);
        });

        db.collection('game_1').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let puzzleData = doc.data();
            const puzzleBtn = document.getElementById(puzzleData['puzzleId']);
            puzzleBtn.className = puzzleBtn.className.replace("locked-puzzle", "");
            puzzleBtn.addEventListener("click", () => {
              window.location.href = puzzleData['puzzleUrl'];
            });
          });
        });
      } else {
        window.location.href = "/";
      }
    });
  } catch (e) {
    console.error(e);
  }

  let rulesBtn = document.getElementById('rulesbtn');
  rulesBtn.addEventListener("click", () => {
    let rulesPage = document.getElementById('rules');
    rulesPage.style.visibility = 'visible';
  });
});