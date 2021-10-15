document.addEventListener('DOMContentLoaded', function () {
  try {
    let app = firebase.app();
    let db = firebase.firestore();
    let analytics = firebase.analytics();

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

    let savedPlayerId = getCookie("playerId");
    if (savedPlayerId.length < 3) {
      window.location.href = "/";
    }

    const playersRef = db.collection('players');
    playersRef.get().then((playersDoc) => {
      let index = 0;
      playersDoc.forEach((playerDoc) => {
        if (playerDoc.id > 0) {
          let colNum = index % 5;
          const colItem = document.getElementById(`column_${colNum}`);
          const playerContainer = document.createElement("div");
          const playerFace = document.createElement("p");
          playerFace.id = `player_${playerDoc.id}`;
          playerFace.innerText = playerDoc.id;
          playerFace.className = "player-content";
          if (colNum % 2 == 1) {
            playerContainer.className = (!playerDoc.eliminated) ? "player-alt player-alive" : "player-alt player-dead";
          } else {
            playerContainer.className = (!playerDoc.eliminated) ? "player player-alive" : "player player-dead";
          }
          playerContainer.appendChild(playerFace);
          colItem.appendChild(playerContainer);
        }
        index++;
      });
      const playerDisp = document.getElementById(`playerDisp`);
      playerDisp.innerText = `Welcome Back, Player ${savedPlayerId}.`
    });
  } catch (e) {
    console.error(e);
  }
});