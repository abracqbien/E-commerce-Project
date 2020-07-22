import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyDWCYPY7ShoItMKHDe8WCNA59c4hbbGVWs",
  authDomain: "crown-db-87db0.firebaseapp.com",
  databaseURL: "https://crown-db-87db0.firebaseio.com",
  projectId: "crown-db-87db0",
  storageBucket: "crown-db-87db0.appspot.com",
  messagingSenderId: "403801245645",
  appId: "1:403801245645:web:de451593fcdbabac00e684",
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
