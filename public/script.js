document.addEventListener('DOMContentLoaded', function () {
  // Select Items to Initialize
  const loginForm = document.getElementById('loginForm');
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  // // The Firebase SDK is initialized and available here!
  //
  // firebase.auth().onAuthStateChanged(user => { });
  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
  // firebase.firestore().doc('/foo/bar').get().then(() => { });
  // firebase.functions().httpsCallable('yourFunction')().then(() => { });
  // firebase.messaging().requestPermission().then(() => { });
  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
  // firebase.analytics(); // call to activate
  // firebase.analytics().logEvent('tutorial_completed');
  // firebase.performance(); // call to activate
  //
  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  try {
    let app = firebase.app();
    let db = firebase.firestore();
    let analytics = firebase.analytics();
    let features = [
      'auth',
      'database',
      'firestore',
      'functions',
      'messaging',
      'storage',
      'analytics',
      'remoteConfig',
      'performance',
    ].filter(feature => typeof app[feature] === 'function');

    Array.prototype.sample = function(){
      return this[Math.floor(Math.random()*this.length)];
    }

    const randomLinkSites = [
      "https://xkcd.com/1969/",
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://github.com/redis/redis/issues/3909",
      "https://www.google.com/search?q=google+in+1998",
      "https://mkorostoff.github.io/1-pixel-wealth/"
    ];

    const attemptLogin = (playerId, phoneDigits) => {
      const playerDocRef = db.collection('players').doc(playerId);

      playerDocRef.get().then((playerDoc) => {
        if (!playerDoc.exists) {
          window.location.href = randomLinkSites.sample();
        }
        let playerData = playerDoc.data();
        if (playerData['phoneNumber'].endsWith(phoneDigits)) {
          document.cookie = `playerId=${playerId}; phoneNumber=${phoneDigits}`;
          window.location.href = "/countdown/";
        }
      });
    }

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

    let savedPlayerId = getCookie("playerId");
    let savedPhoneDigits = getCookie("phoneNumber");
    if (savedPlayerId.length >= 3) {
      attemptLogin(savedPlayerId, savedPhoneDigits);
    }

    loginForm.addEventListener('submit', (event) => {
      let playerId = Number(loginForm.elements['playerId'].value).toString().padStart(3, '0');;
      let phoneDigits = loginForm.elements['phone'].value;
      attemptLogin(playerId, phoneDigits);
      event.preventDefault();
    });

  } catch (e) {
    console.error(e);
  }
});