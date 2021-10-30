const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(
        {
            "type": "service_account",
            "project_id": "mccclxxiv",
            "private_key_id": "7cd054471b3c3052f65d3063e5e1f1b56725bb94",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCyFOpIX+XTawyR\naoPHAghqcS+RbzE2tXzlpZOv4q5xGW39bzVppEN6cHpufe0Olo6nCmFBC8trygH9\ncA0an0rCWM/d+Woq8XR1eOz+xhVito1SsFi+hfuTMJBjzu3gO8+vFkC8ZHckZaAf\neTcO2njPbpUIdLwqwgWIzPB9taQFOrfvMZ8lHJ/aYG5Dm5bekohRoqFaKBksy3+W\nGI437mfOH80t++QKVXdjcmic2gFs6egmK53SVKhe7gqjZwLsKq+yBkpuGuNgEI0J\ncTpL+Y1qrDSH4fHm/eA1zuvfHi7uj9QXAZK2tg+Nf6UvCP6qV+BPnEdEbfqwRKcY\nvigRvw/VAgMBAAECggEAGOEbKilbroHSK6654l/CVTyi7KqgMYiBfoP3cic1P8/R\nsgqLZ8rvMnfsYuts5xDZtTSaCcBgFxsN1B6HdiSzCRvnTpe94WoCXzcZxS5fZn8i\nl17Txypoz1OFmKwcR6uThF6ThL50dr1L9Zm1u3mCT1ifsaK9dyvMIiSfpLBvzdr+\nlFKEWCDS8n6ZesFItCpZyvCefaEPfg/V9DbsXpOS/rzmzJ4mfISY3m3OgYAdBW4h\npaTj+AoPbQfK0aUdwKDGtBmSyX6ltZns9cI4OQpHe6QymdTk5lmLG2zoFAF8BSP7\nNYwqR62xx104ZCe1NJNQug4irGG63Y6lt+d0q4uZgQKBgQDZJZoFsLDos68kzfn9\n1arJHahTb+4FRIa440KOQwNsgMj8UewAQ1lfmoTjrD/1IZkySWsLLKk0mK0o2jV2\nRNSVQHC1QeCvkwFpyHd1DSyt4emEcPHFvOAXqDNN5xJ4Uo12vN11VYO2HeAXWPx9\nNb7hbI50kSfcJYjXDV3p8EE6SQKBgQDR8e98hrrPxlsPQ+W5F5Unn/JvhASy95wC\npJuaegIWo1islMs+2gXlX2N7ydUHVIKBMTtTxHsKcoH6A8yTULO7PndOLk/r4aXT\nTC66FQOo5ylnyON1VBl+JymqsW53dWy2x99zRs2nPxzuwyUvIkT3zYA21n3yuIuh\nVg0972FJLQKBgQC47Yn3UJvJAcWl/XjqkP4KmyRQMqGtgMePS5PR3gZbcG46XHY1\nXyYNAmYsEvTBCaUTK21rLdTIQ0Is6XDgUQwOM7wI0ZrNS8/HS/9YAylKyHt73Eg6\n03ixDQDsVl7nc76gIYYkt/gcr+K5X4JgC9aM2kuTwE8G8DxSkUKqyX5zaQKBgQCs\nCQuMyD52mfzuQl4RURDJOpkH5m+PU7WEuOxFJmtlr46vRPJTW4bvUT4NJvOooQib\n4wLRfrSwd+qoO8q8gKn26pYK+4pEKVCgF9JGa4fnNR1JzWUONM77AA51sBVsUE24\nbYpeRQuqW95SjJiAyh0nzj6dMSBd7/mDSCdrtCfNNQKBgQC3pEcGd1ZVZ79qES+4\nzGa58kgidBjUwyGyd6bKAd0W+DXtkTkkhRoMcEdzvg1znoPfKfPqcWNTcFuazc5T\nlCMoWaKleT0biCXBscw9MOM7AumHqdwvTzt5Q0R+WIue7wvoto4FMHKFqX62QLvh\ndvH46N1nJ1Xry2YiEdTrFtMicw==\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-v63df@mccclxxiv.iam.gserviceaccount.com",
            "client_id": "100513863426540770862",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-v63df%40mccclxxiv.iam.gserviceaccount.com"
        }
    )
});

const db = admin.firestore();
const indexDocRef = db.collection('players').doc('indexes');
const gameTeams = ["Circle", "Triangle", "Umbrella", "Star"];

exports.handler = function (context, event, callback) {
    indexDocRef.get().then((indexDoc) => {
        let phoneMap = indexDoc.data()['phoneMap'];
        let playerId = 0;
        let newPlayer = false;
        if (event.From in phoneMap) {
            playerId = phoneMap[event.From];
        } else {
            playerId = indexDoc.data()['lastPlayer'] + 1;
            phoneMap[event.From] = playerId;
            newPlayer = true;
            indexDocRef.set({
                'lastPlayer': playerId,
                'phoneMap': phoneMap
            });
        }

        let sPlayerId = playerId.toString().padStart(3, '0');
        const playerDocRef = db.collection('players').doc(sPlayerId);
        // New Players
        if (newPlayer) {
            let teamSelected = gameTeams[Math.floor(Math.random() * (gameTeams.length - 1))];
            playerDocRef.set({
                'phoneNumber': event.From,
                'team': teamSelected,
                'dateJoined': new Date(),
                'eliminated': false,
                'points': 0
            }).then((playerDoc) => {
                const twiml = new Twilio.twiml.VoiceResponse();
                twiml.pause({
                    length: 2
                });
                twiml.say({
                    voice: 'man'
                }, `Welcome, player ${sPlayerId}. Due to unforeseen circumstances, the games have been postponed until further notice.`);
                twiml.pause({
                    length: 1
                });
                return callback(null, twiml);
            });

        } else {
            playerDocRef.get().then((playerDoc) => {
                // Existing Players
                let playerData = playerDoc.data();
                const twiml = new Twilio.twiml.VoiceResponse();
                switch (playerId) {
                    case 0:
                    case 1: {
                        twiml.pause({
                            length: 2
                        });
                        twiml.say({
                            voice: 'man'
                        }, `Welcome back ${sPlayerId}.`);
                        twiml.pause({
                            length: 1
                        });
                        twiml.say({
                            voice: 'man'
                        }, `So far, ${Object.keys(phoneMap).length} have joined the games. We are still on hold until further notice.`);
                    } break;
                    default: {
                        // Kill calls for rejected players
                        if (playerData['eliminated']) {
                            twiml.reject();
                        }
                        // Continue
                        twiml.pause({
                            length: 2
                        });
                        twiml.say({
                            voice: 'man'
                        }, `Welcome back, player ${sPlayerId}. Due to unforeseen circumstances, the games have been postponed until further notice.`);
                    };
                }

                // Start Speech
                twiml.pause({
                    length: 1
                });
                return callback(null, twiml);
            });
        }
    });
}
