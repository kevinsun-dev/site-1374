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

    const attemptLogin = () => {
      let playerId = Number(loginForm.elements['playerId'].value).toString().padStart(3, '0');;
      let phoneDigits = loginForm.elements['phone'].value;

      const playerDocRef = db.collection('players').doc(playerId);

      playerDocRef.get().then((playerDoc) => {
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
      for(let i = 0; i <ca.length; i++) {
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
    if (savedPlayerId.length >= 3){
      window.location.href = "/countdown/";
    }

    loginForm.addEventListener('submit', (event) => {
      attemptLogin();
      event.preventDefault();
    });
    
  } catch (e) {
    console.error(e);
  }
});