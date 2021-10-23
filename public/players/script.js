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

    const playerDisp = document.getElementById(`playerDisp`);
    const chatDisp = document.getElementById(`chat`);
    const chatContainerDisp = document.getElementById(`chatContainer`);
    const chatBtn = document.getElementById('chatbtn');
    const inputMsg = document.getElementById('inputMsg');
    const sendMsg = document.getElementById('sendMsg');
    playerDisp.innerText = `Welcome Back, Player ${savedPlayerId}.`

    const playersRef = db.collection('players');
    playersRef.get().then((playersDoc) => {
      let index = 0;
      let chatList = [];
      let solvedCount = {};
      playersDoc.forEach((playerDoc) => {
        let playerData = playerDoc.data();
        if (playerDoc.id > 0) {
          let colNum = index % 5;
          const colItem = document.getElementById(`column_${colNum}`);
          const playerContainer = document.createElement("div");
          const playerFace = document.createElement("p");
          playerFace.id = `player_${playerDoc.id}`;
          playerFace.innerText = playerDoc.id;
          playerFace.className = "player-content";
          if (colNum % 2 == 1) {
            playerContainer.className = (!playerData.eliminated) ? "player-alt player-alive" : "player-alt player-dead";
          } else {
            playerContainer.className = (!playerData.eliminated) ? "player player-alive" : "player player-dead";
          }
          if (playerData.messages) {
            chatList = chatList.concat(playerData.messages);
          }

          let board = [];
          if (playerData['bingoBoard']) {
            board = playerData['bingoBoard'];
          }
          board.forEach((it, i) => {
            if (it.solved) {
              if (solvedCount[it.puzzleId]) {
                solvedCount[it.puzzleId]++;
              } else {
                solvedCount[it.puzzleId] = 1;
              }
            }
          });

          playerContainer.appendChild(playerFace);
          colItem.appendChild(playerContainer);
        }
        index++;
      });

      // Puzzles Solved
      console.log(solvedCount);

      let sortedChat = chatList.sort((a, b) => b.date - a.date);
      sortedChat.forEach((msg) => {
        const chatMsg = document.createElement("p");
        chatMsg.innerText = msg.title;
        chatContainerDisp.appendChild(chatMsg);
      });
    });

    sendMsg.addEventListener("click", () => {
      if (inputMsg.value.length > 0) {
        const playerDocRef = db.collection('players').doc(savedPlayerId);
        playerDocRef.get().then((playerDoc) => {
          let playerData = playerDoc.data();
          let msgList = [];
          if (playerData['messages']) {
            msgList = playerData['messages'];
          } else {
            playerData['messages'] = msgList;
          }
          msgList.push({ title: `Player ${savedPlayerId}: ${inputMsg.value}`, date: new Date() });

          playerDocRef.set(playerData).then(() => {
            const chatMsg = document.createElement("p");
            chatMsg.innerText = `Player ${savedPlayerId}: ${inputMsg.value}`;
            chatContainerDisp.prepend(chatMsg);
            inputMsg.value = "";
          });
        });
      }
    });

    inputMsg.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("sendMsg").click();
      }
    });

    chatBtn.addEventListener("click", () => {
      chatDisp.style.visibility = 'visible';
      chatBtn.style.visibility = 'hidden';
    });
  } catch (e) {
    console.error(e);
  }
});