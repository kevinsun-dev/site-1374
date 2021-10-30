const circleMap = { "start": 15, "end": 4, "room_num_add": 314, "map": [{ "id": 0, "document_img": "puzzle_0.png", "correct_answer": "1247fe0d8b35b63a2c9409e7b2af850987d4b5c715612215b47eb66717006a350be33d1dc46a7dc052c87789e89e963800ab78b4fa8f5ccf465fbf412f169cda", "exits": [4] }, { "id": 1, "document_img": "puzzle_1.png", "correct_answer": "fc7b0fd4c50babf3df2bf3f4cbd422bdd6f3120aa70a13b29830968b0d10ac17303856d62b6f6146c529be8a65be025d55b1c89e258bd8a56f2dddb0bc1f9caa", "exits": [0, 21] }, { "id": 2, "document_img": "puzzle_2.png", "correct_answer": "37a798ddd211cb374e005b2c722dcf9d53dc50d6b14b619dbaa56dfe84f985361436e782bbaf9673a03bceeec307ca3519c5f2a58f7450e8b292c1e97ba5712d", "exits": [1] }, { "id": 3, "document_img": "puzzle_3.png", "correct_answer": "dd16587b8ccbd85b0d09602c326a658629a3460f1b205a7fef1b4f36c04a7d7771662b68dfc29597de879f4175f5123f429e88b14a09e58660dff43313309416", "exits": [1, 22] }, { "id": 4, "document_img": "404.png", "correct_answer": "", "exits": [] }, { "id": 5, "document_img": "puzzle_4.png", "correct_answer": "0a2231bd683ab3c1a6b29873f23f20a6518bf5217f782abe2bcc425198c484f5377cbfc5f22504554990bea89cd45e488308bcd7b070345501e5f366f7cc546c", "exits": [4, 1] }, { "id": 6, "document_img": "puzzle_5.png", "correct_answer": "ce0b0fcb8771c778dd4253f469f828626d16a26f0175dbc8defcfb697874b13738b77e35bd0e9839be1a624f8596706bba0f5ea96ddf033d85d461da2859cf90", "exits": [2, 7] }, { "id": 7, "document_img": "puzzle_6.png", "correct_answer": "a85a4de23a009a6c71e7f28786905d62cfb62cb064562bba4722dc34be1ee9d04b96e99aa6a68687d329fc5fdd71e96a912ac3b8d58af7dadb7707a78e99de1b", "exits": [3] }, { "id": 8, "document_img": "puzzle_7.png", "correct_answer": "2bd99c816141bc942f6e8559de03abc4ddab560ea8b86edfb3288294c43e0d8874f8b38414d3106bf511047482b9441bc3b524a0815c114fd51c4b0bfee276f6", "exits": [23, 9] }, { "id": 9, "document_img": "puzzle_8.png", "correct_answer": "7dabfb151716362cfbd26b717cd8dce135c60a53e68332416a41c6e324055ce0b09819c4584ac66e4a3453e19940903edcb9a847395bb886f755ab1bf80edd69", "exits": [5] }, { "id": 10, "document_img": "puzzle_9.png", "correct_answer": "1ac9f2bdb2f18b520ad4cee2193b24af27f992f5e85e92475418a297e0811ddf9b2ed481ed93f1c0471b7e8d565ff42af892e6b6659ec6bc35881fb089a43691", "exits": [6, 11] }, { "id": 11, "document_img": "puzzle_10.png", "correct_answer": "389a64c5bc2b259e28a59c4e5e3f288ab4c4d9f517691bf06182367760570eddf4c4c027929b5e749f5c327b7223c4fb1cd1d0937db3e0905da0a5e2c1ef9dd2", "exits": [7, 24] }, { "id": 12, "document_img": "puzzle_11.png", "correct_answer": "84e4c65aab70e9bb4870d1e5f48a65c3d22dbea4a2ec9a19726b39d029d4bbb86862cdd6172443447e6507d49d9663599527848cca2810b6f01d9c65c110266c", "exits": [8, 25] }, { "id": 13, "document_img": "puzzle_12.png", "correct_answer": "240496fdc2ee0f6bc9a8d731e56fa7ad610f02b73082c7801f4fe8d3ec3a054cabe3a5ea10418f90805ce83079bbd6df4911c576af66aa2e2efcc0644367d4b2", "exits": [12, 9] }, { "id": 14, "document_img": "puzzle_13.png", "correct_answer": "d14322194ed2f87ef011f16ca056ea0fa97fe0e9db92ded6f084e03b0813436acf372ca9e6c789dbe25da54436c806730400de467718f2c4f5cd99d86bc79ebb", "exits": [13, 10] }, { "id": 15, "document_img": "puzzle_14.png", "correct_answer": "ab4f30b1e8ef490e61e12f33e885b14543a6c4e46bcc24f3eb233ee9be9214c4f5a2df8e86e4fd16456dca071a8a52b1517a7c5fe571fc953c8bb25a5466f6d1", "exits": [14, 11] }] };
const triangleMap = { "start": 14, "end": 0, "room_num_add": 76, "map": [{ "id": 0, "document_img": "404.png", "correct_answer": "", "exits": [] }, { "id": 1, "document_img": "puzzle_0.png", "correct_answer": "1247fe0d8b35b63a2c9409e7b2af850987d4b5c715612215b47eb66717006a350be33d1dc46a7dc052c87789e89e963800ab78b4fa8f5ccf465fbf412f169cda", "exits": [0] }, { "id": 2, "document_img": "puzzle_1.png", "correct_answer": "fc7b0fd4c50babf3df2bf3f4cbd422bdd6f3120aa70a13b29830968b0d10ac17303856d62b6f6146c529be8a65be025d55b1c89e258bd8a56f2dddb0bc1f9caa", "exits": [1, 21] }, { "id": 3, "document_img": "puzzle_2.png", "correct_answer": "37a798ddd211cb374e005b2c722dcf9d53dc50d6b14b619dbaa56dfe84f985361436e782bbaf9673a03bceeec307ca3519c5f2a58f7450e8b292c1e97ba5712d", "exits": [2] }, { "id": 4, "document_img": "puzzle_3.png", "correct_answer": "dd16587b8ccbd85b0d09602c326a658629a3460f1b205a7fef1b4f36c04a7d7771662b68dfc29597de879f4175f5123f429e88b14a09e58660dff43313309416", "exits": [5] }, { "id": 5, "document_img": "puzzle_4.png", "correct_answer": "0a2231bd683ab3c1a6b29873f23f20a6518bf5217f782abe2bcc425198c484f5377cbfc5f22504554990bea89cd45e488308bcd7b070345501e5f366f7cc546c", "exits": [6, 1] }, { "id": 6, "document_img": "puzzle_5.png", "correct_answer": "ce0b0fcb8771c778dd4253f469f828626d16a26f0175dbc8defcfb697874b13738b77e35bd0e9839be1a624f8596706bba0f5ea96ddf033d85d461da2859cf90", "exits": [7] }, { "id": 7, "document_img": "puzzle_6.png", "correct_answer": "a85a4de23a009a6c71e7f28786905d62cfb62cb064562bba4722dc34be1ee9d04b96e99aa6a68687d329fc5fdd71e96a912ac3b8d58af7dadb7707a78e99de1b", "exits": [3, 22] }, { "id": 8, "document_img": "puzzle_7.png", "correct_answer": "2bd99c816141bc942f6e8559de03abc4ddab560ea8b86edfb3288294c43e0d8874f8b38414d3106bf511047482b9441bc3b524a0815c114fd51c4b0bfee276f6", "exits": [23, 4] }, { "id": 9, "document_img": "puzzle_8.png", "correct_answer": "7dabfb151716362cfbd26b717cd8dce135c60a53e68332416a41c6e324055ce0b09819c4584ac66e4a3453e19940903edcb9a847395bb886f755ab1bf80edd69", "exits": [8, 5] }, { "id": 10, "document_img": "puzzle_9.png", "correct_answer": "1ac9f2bdb2f18b520ad4cee2193b24af27f992f5e85e92475418a297e0811ddf9b2ed481ed93f1c0471b7e8d565ff42af892e6b6659ec6bc35881fb089a43691", "exits": [6, 9] }, { "id": 11, "document_img": "puzzle_10.png", "correct_answer": "389a64c5bc2b259e28a59c4e5e3f288ab4c4d9f517691bf06182367760570eddf4c4c027929b5e749f5c327b7223c4fb1cd1d0937db3e0905da0a5e2c1ef9dd2", "exits": [7, 10] }, { "id": 12, "document_img": "puzzle_11.png", "correct_answer": "84e4c65aab70e9bb4870d1e5f48a65c3d22dbea4a2ec9a19726b39d029d4bbb86862cdd6172443447e6507d49d9663599527848cca2810b6f01d9c65c110266c", "exits": [8] }, { "id": 13, "document_img": "puzzle_12.png", "correct_answer": "240496fdc2ee0f6bc9a8d731e56fa7ad610f02b73082c7801f4fe8d3ec3a054cabe3a5ea10418f90805ce83079bbd6df4911c576af66aa2e2efcc0644367d4b2", "exits": [12, 24] }, { "id": 14, "document_img": "puzzle_13.png", "correct_answer": "d14322194ed2f87ef011f16ca056ea0fa97fe0e9db92ded6f084e03b0813436acf372ca9e6c789dbe25da54436c806730400de467718f2c4f5cd99d86bc79ebb", "exits": [13, 15, 10] }, { "id": 15, "document_img": "puzzle_14.png", "correct_answer": "ab4f30b1e8ef490e61e12f33e885b14543a6c4e46bcc24f3eb233ee9be9214c4f5a2df8e86e4fd16456dca071a8a52b1517a7c5fe571fc953c8bb25a5466f6d1", "exits": [11, 25] }] };
const umbrellaMap = { "start": 3, "end": 8, "room_num_add": 825, "map": [{ "id": 0, "document_img": "puzzle_0.png", "correct_answer": "1247fe0d8b35b63a2c9409e7b2af850987d4b5c715612215b47eb66717006a350be33d1dc46a7dc052c87789e89e963800ab78b4fa8f5ccf465fbf412f169cda", "exits": [4, 21] }, { "id": 1, "document_img": "puzzle_1.png", "correct_answer": "fc7b0fd4c50babf3df2bf3f4cbd422bdd6f3120aa70a13b29830968b0d10ac17303856d62b6f6146c529be8a65be025d55b1c89e258bd8a56f2dddb0bc1f9caa", "exits": [0] }, { "id": 2, "document_img": "puzzle_2.png", "correct_answer": "37a798ddd211cb374e005b2c722dcf9d53dc50d6b14b619dbaa56dfe84f985361436e782bbaf9673a03bceeec307ca3519c5f2a58f7450e8b292c1e97ba5712d", "exits": [1, 22] }, { "id": 3, "document_img": "puzzle_3.png", "correct_answer": "dd16587b8ccbd85b0d09602c326a658629a3460f1b205a7fef1b4f36c04a7d7771662b68dfc29597de879f4175f5123f429e88b14a09e58660dff43313309416", "exits": [2, 7] }, { "id": 4, "document_img": "puzzle_4.png", "correct_answer": "0a2231bd683ab3c1a6b29873f23f20a6518bf5217f782abe2bcc425198c484f5377cbfc5f22504554990bea89cd45e488308bcd7b070345501e5f366f7cc546c", "exits": [5] }, { "id": 5, "document_img": "puzzle_5.png", "correct_answer": "ce0b0fcb8771c778dd4253f469f828626d16a26f0175dbc8defcfb697874b13738b77e35bd0e9839be1a624f8596706bba0f5ea96ddf033d85d461da2859cf90", "exits": [9] }, { "id": 6, "document_img": "puzzle_6.png", "correct_answer": "a85a4de23a009a6c71e7f28786905d62cfb62cb064562bba4722dc34be1ee9d04b96e99aa6a68687d329fc5fdd71e96a912ac3b8d58af7dadb7707a78e99de1b", "exits": [2] }, { "id": 7, "document_img": "puzzle_7.png", "correct_answer": "2bd99c816141bc942f6e8559de03abc4ddab560ea8b86edfb3288294c43e0d8874f8b38414d3106bf511047482b9441bc3b524a0815c114fd51c4b0bfee276f6", "exits": [6, 11] }, { "id": 8, "document_img": "404.png", "correct_answer": "", "exits": [] }, { "id": 9, "document_img": "puzzle_8.png", "correct_answer": "7dabfb151716362cfbd26b717cd8dce135c60a53e68332416a41c6e324055ce0b09819c4584ac66e4a3453e19940903edcb9a847395bb886f755ab1bf80edd69", "exits": [8] }, { "id": 10, "document_img": "puzzle_9.png", "correct_answer": "1ac9f2bdb2f18b520ad4cee2193b24af27f992f5e85e92475418a297e0811ddf9b2ed481ed93f1c0471b7e8d565ff42af892e6b6659ec6bc35881fb089a43691", "exits": [6, 9] }, { "id": 11, "document_img": "puzzle_10.png", "correct_answer": "389a64c5bc2b259e28a59c4e5e3f288ab4c4d9f517691bf06182367760570eddf4c4c027929b5e749f5c327b7223c4fb1cd1d0937db3e0905da0a5e2c1ef9dd2", "exits": [10, 15] }, { "id": 12, "document_img": "puzzle_11.png", "correct_answer": "84e4c65aab70e9bb4870d1e5f48a65c3d22dbea4a2ec9a19726b39d029d4bbb86862cdd6172443447e6507d49d9663599527848cca2810b6f01d9c65c110266c", "exits": [8, 23] }, { "id": 13, "document_img": "puzzle_12.png", "correct_answer": "240496fdc2ee0f6bc9a8d731e56fa7ad610f02b73082c7801f4fe8d3ec3a054cabe3a5ea10418f90805ce83079bbd6df4911c576af66aa2e2efcc0644367d4b2", "exits": [12, 9] }, { "id": 14, "document_img": "puzzle_13.png", "correct_answer": "d14322194ed2f87ef011f16ca056ea0fa97fe0e9db92ded6f084e03b0813436acf372ca9e6c789dbe25da54436c806730400de467718f2c4f5cd99d86bc79ebb", "exits": [13, 24] }, { "id": 15, "document_img": "puzzle_14.png", "correct_answer": "ab4f30b1e8ef490e61e12f33e885b14543a6c4e46bcc24f3eb233ee9be9214c4f5a2df8e86e4fd16456dca071a8a52b1517a7c5fe571fc953c8bb25a5466f6d1", "exits": [14, 25] }] };
const starMap = { "start": 3, "end": 8, "room_num_add": 39, "map": [{ "id": 0, "document_img": "puzzle_0.png", "correct_answer": "1247fe0d8b35b63a2c9409e7b2af850987d4b5c715612215b47eb66717006a350be33d1dc46a7dc052c87789e89e963800ab78b4fa8f5ccf465fbf412f169cda", "exits": [1, 21] }, { "id": 1, "document_img": "puzzle_1.png", "correct_answer": "fc7b0fd4c50babf3df2bf3f4cbd422bdd6f3120aa70a13b29830968b0d10ac17303856d62b6f6146c529be8a65be025d55b1c89e258bd8a56f2dddb0bc1f9caa", "exits": [5] }, { "id": 2, "document_img": "puzzle_2.png", "correct_answer": "37a798ddd211cb374e005b2c722dcf9d53dc50d6b14b619dbaa56dfe84f985361436e782bbaf9673a03bceeec307ca3519c5f2a58f7450e8b292c1e97ba5712d", "exits": [1, 22] }, { "id": 3, "document_img": "puzzle_3.png", "correct_answer": "dd16587b8ccbd85b0d09602c326a658629a3460f1b205a7fef1b4f36c04a7d7771662b68dfc29597de879f4175f5123f429e88b14a09e58660dff43313309416", "exits": [7] }, { "id": 4, "document_img": "puzzle_4.png", "correct_answer": "0a2231bd683ab3c1a6b29873f23f20a6518bf5217f782abe2bcc425198c484f5377cbfc5f22504554990bea89cd45e488308bcd7b070345501e5f366f7cc546c", "exits": [1, 8, 23] }, { "id": 5, "document_img": "puzzle_5.png", "correct_answer": "ce0b0fcb8771c778dd4253f469f828626d16a26f0175dbc8defcfb697874b13738b77e35bd0e9839be1a624f8596706bba0f5ea96ddf033d85d461da2859cf90", "exits": [4, 9] }, { "id": 6, "document_img": "puzzle_6.png", "correct_answer": "a85a4de23a009a6c71e7f28786905d62cfb62cb064562bba4722dc34be1ee9d04b96e99aa6a68687d329fc5fdd71e96a912ac3b8d58af7dadb7707a78e99de1b", "exits": [2, 5] }, { "id": 7, "document_img": "puzzle_7.png", "correct_answer": "2bd99c816141bc942f6e8559de03abc4ddab560ea8b86edfb3288294c43e0d8874f8b38414d3106bf511047482b9441bc3b524a0815c114fd51c4b0bfee276f6", "exits": [6, 11] }, { "id": 8, "document_img": "404.png", "correct_answer": "", "exits": [] }, { "id": 9, "document_img": "puzzle_8.png", "correct_answer": "7dabfb151716362cfbd26b717cd8dce135c60a53e68332416a41c6e324055ce0b09819c4584ac66e4a3453e19940903edcb9a847395bb886f755ab1bf80edd69", "exits": [13, 10] }, { "id": 10, "document_img": "puzzle_9.png", "correct_answer": "1ac9f2bdb2f18b520ad4cee2193b24af27f992f5e85e92475418a297e0811ddf9b2ed481ed93f1c0471b7e8d565ff42af892e6b6659ec6bc35881fb089a43691", "exits": [6] }, { "id": 11, "document_img": "puzzle_10.png", "correct_answer": "389a64c5bc2b259e28a59c4e5e3f288ab4c4d9f517691bf06182367760570eddf4c4c027929b5e749f5c327b7223c4fb1cd1d0937db3e0905da0a5e2c1ef9dd2", "exits": [10, 15] }, { "id": 12, "document_img": "puzzle_11.png", "correct_answer": "84e4c65aab70e9bb4870d1e5f48a65c3d22dbea4a2ec9a19726b39d029d4bbb86862cdd6172443447e6507d49d9663599527848cca2810b6f01d9c65c110266c", "exits": [8, 23] }, { "id": 13, "document_img": "puzzle_12.png", "correct_answer": "240496fdc2ee0f6bc9a8d731e56fa7ad610f02b73082c7801f4fe8d3ec3a054cabe3a5ea10418f90805ce83079bbd6df4911c576af66aa2e2efcc0644367d4b2", "exits": [12, 24] }, { "id": 14, "document_img": "puzzle_13.png", "correct_answer": "d14322194ed2f87ef011f16ca056ea0fa97fe0e9db92ded6f084e03b0813436acf372ca9e6c789dbe25da54436c806730400de467718f2c4f5cd99d86bc79ebb", "exits": [13, 10] }, { "id": 15, "document_img": "puzzle_14.png", "correct_answer": "ab4f30b1e8ef490e61e12f33e885b14543a6c4e46bcc24f3eb233ee9be9214c4f5a2df8e86e4fd16456dca071a8a52b1517a7c5fe571fc953c8bb25a5466f6d1", "exits": [14, 25] }] };

document.addEventListener('DOMContentLoaded', function () {

  async function digestMessage(message) {
    const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest('SHA-512', msgUint8);           // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
    return hashHex;
  }

  try {
    let app = firebase.app();
    let db = firebase.firestore();
    let analytics = firebase.analytics();
    let countDownDate = new Date("Nov 4, 2021 23:59:59").getTime();
    const displayText = document.getElementById("instrText");
    const answerForm = document.getElementById('submitAnswer');

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
        let board = null;
        let chooseRoomInput = false;
        let displayImage = 0;

        switch (playerData['team']) {
          case "Circle": board = circleMap; break;
          case "Triangle": board = triangleMap; break;
          case "Umbrella": board = umbrellaMap; break;
          case "Star": board = starMap; break;
        }

        if (playerData['stairMaze']) {
          board = playerData['stairMaze'];
          displayImage = board.currentTile;
        } else {
          board['currentTile'] = board.start;
          displayImage = board.currentTile;
          board['history'] = [];
          playerData['stairMaze'] = board;
          playerDocRef.set(playerData);
        }

        const setCurrentRoom = () => {
          if (board.currentTile == board.start) {
            displayText.innerText = `You're huddled against the wall, breathing heavily. All that effort for just one folder. Was it worth it?
              You calm your breathing as you step into the staircase maze, eager to return to the player quarters. Your hand reaches out to grab the door handle.
              It won't move.
              You turn more forcefully, putting your weight into it. Still nothing.
              Dread fills your body as you realize that it is now past midnight and the doors are now locked. A large ${board.currentTile + board.room_num_add} is painted on the floor beneath your feet. A keypad glows ominously in the dim light, beckoning you forward.
              
              Available Doors: ${board.map[board.currentTile].exits.map(x => x + board.room_num_add).join(", ")}, and Back`;
          } else if (board.currentTile == board.end) {
            displayText.innerText = `You step into room ${board.currentTile + board.room_num_add}. Reaching into the folder, you search for a corresponding clue, yet none of them seem to match. Panicked, you scatter the papers onto the floor, searching for that one clue. 
            No dice.
            In desperation, you yank on the door handle ahead.

            It calmly opens with a *click*, revealing the a room full of sleeping players. You've made it.`;
          } else {
            displayText.innerText = `The door closes behind you with a sharp click. You step over the number ${board.currentTile + board.room_num_add} as you reach into your folder to find the next clue.
            
            Available Doors: ${board.map[board.currentTile].exits.map(x => x + board.room_num_add).join(", ")}, and Back`;
          }
        }

        const chooseRoom = () => {
          chooseRoomInput = true;
          displayText.innerText = `"Please, please work" you whisper under your breath. To your delight, the little LCD panel blinks twice, then the beautiful words "Access Granted" appear. These words then disappear as it prompts you to type in a particular door to unlock.

          Type in the room number you'd like to access.

          Available Doors: ${board.map[board.currentTile].exits.map(x => x + board.room_num_add)}`;
        }

        setCurrentRoom();

        // Get the modal
        let modal = document.getElementById("documentModal");
        let caption = document.getElementById("caption");

        let img = document.getElementById("folder");
        let modalImg = document.getElementById("img01");
        img.onclick = function () {
          modal.style.display = "block";
          displayImage = board.currentTile;
          if (displayImage == board.end) {
            displayImage = ((displayImage - 1) % 16);
          }
          modalImg.src = "/thesecondgame/assets/" + board.map[displayImage].document_img;
          caption.innerText = displayImage + board.room_num_add;
        }

        // Get the <span> element that closes the modal
        let span = document.getElementsByClassName("close")[0];
        let doc_left = document.getElementsByClassName("doc_left")[0];
        let doc_right = document.getElementsByClassName("doc_right")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          modal.style.display = "none";
        }
        doc_left.onclick = function () {
          displayImage = ((displayImage - 1) % 16);
          if (displayImage == board.end) {
            displayImage = ((displayImage - 1) % 16);
          }
          modalImg.src = "/thesecondgame/assets/" + board.map[displayImage].document_img;
          caption.innerText = displayImage + board.room_num_add;
        }
        doc_right.onclick = function () {
          displayImage = ((displayImage + 1) % 16);
          if (displayImage == board.end) {
            displayImage = ((displayImage + 1) % 16);
          }
          modalImg.src = "/thesecondgame/assets/" + board.map[displayImage].document_img;
          caption.innerText = displayImage + board.room_num_add;
        }

        // Set Up Submit
        answerForm.addEventListener('submit', (event) => {
          let answer = answerForm.elements['answer'].value.toUpperCase().trim();
          answerForm.elements['answer'].value = "";

          digestMessage(answer).then((hash) => {
            if (chooseRoomInput) {
              let anwserNum = parseInt(answer) - board.room_num_add;
              if (board.map[board.currentTile].exits.includes(anwserNum)) {
                if (anwserNum < 16) {
                  chooseRoomInput = false;
                  board.history.push(board.currentTile);
                  board.currentTile = anwserNum;
                  displayImage = board.currentTile;
                  setCurrentRoom();
                  playerData['stairMaze'] = board;
                  if (board.currentTile == board.end) {
                    playerData['escapedMaze'] = true;
                  }
                  playerDocRef.set(playerData);
                } else {
                  modal.style.display = "block";
                  modalImg.src = `/thesecondgame/assets/${anwserNum}.png`;
                  caption.innerText = "";
                }
              } else {
                answerForm.elements['answer'].placeholder = "Invalid"
                setTimeout(function () {
                  answerForm.elements['answer'].placeholder = ""
                }, 1000);
              }
            } else if (hash === board.map[board.currentTile].correct_answer) {
              chooseRoom();
            } else if (answer == "BACK") {
              let backRoom = board.history.pop();
              if (backRoom) {
                board.currentTile = backRoom;
                displayImage = board.currentTile;
                setCurrentRoom();
                playerData['stairMaze'] = board;
                if (board.currentTile == board.end) {
                  playerData['escapedMaze'] = true;
                }
                playerDocRef.set(playerData);
              }
            } else {
              answerForm.elements['answer'].placeholder = "Access Denied"
              setTimeout(function () {
                answerForm.elements['answer'].placeholder = ""
              }, 1000);
            }
          });
          event.preventDefault();
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