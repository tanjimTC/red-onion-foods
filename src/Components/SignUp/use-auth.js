import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
firebase.initializeApp(firebaseConfig);

const Auth = () => {
  const createUser = (userName, passWord) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(userName, passWord)
      .then((res) => {
        console.log(res);
        return res.user;
      })
      .catch((err) => {
        console.log(err.message);
        return err.message;
      });
  };
  return { createUser };
};

export default Auth;
