import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyA0QkOrSkOsAt_oGZW3rCrT_exSN5ltv7U",
    authDomain: "nline-pet-breeding.firebaseapp.com",
    projectId: "nline-pet-breeding",
    storageBucket: "nline-pet-breeding.appspot.com",
    messagingSenderId: "1046823156017",
    appId: "1:1046823156017:web:b3a109a962b4ac79a8d810"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export { firebaseApp };
export default db;
export const createUserInfo = async (user, username, contactnum, birthdate) => {
    if (!user) return;
    const userRef = db.doc("users/" + user.uid);
    const snaps = await userRef.get();

    if (!snaps.exist) {
        const { email } = user;
        const { uname } = username;
        const { contact } = contactnum;
        const { bdate } = birthdate;

        try {
            userRef.set({
                uname, email, contact, bdate, createdAt: new Date(),
            })
        } catch (error) {
            console.log("Error in creating user info", error);
        }
    }
}