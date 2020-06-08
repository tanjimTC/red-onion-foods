// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "../../firebase.config";
// import { useState, useEffect } from "react";
// firebase.initializeApp(firebaseConfig);
// const Auth = () => {
//   const [user, setUser] = useState(null);

//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     return firebase
//       .auth()
//       .signInWithPopup(provider)
//       .then((res) => {
//         const { displayName, email, photoURL } = user;
//         const signedInUser = { name: displayName, email, photo: photoURL };
//         setUser(signedInUser);
//         return res.user;
//       })
//       .catch((err) => {
//         return err.message;
//       });
//   };

//   const logInUser = (userEmail, passWord) => {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(userEmail, passWord)
//       .then((res) => {
//         console.log(res);
//         setUser({
//           name: userEmail,
//           email: res.user.email,
//           isLoggedIn :true,
//           error :'',
//       });
//         // return res.user;
//       })
//       .catch((err) => {
//         console.log(err.message);
//         return err.message;
//       });
//   };

//   const signOut = () => {
//     return firebase
//       .auth()
//       .signOut()
//       .then((res) => {
//         setUser(null);
//         return true;
//       })
//       .catch((err) => {
//         console.log(err);
//         return false
//       });
//   };

//   useEffect(() => {
//     firebase.auth().onAuthStateChanged(function (user) {
//       if (user) {
//         const { displayName, email, photoURL } = user;
//         const currentUser = { name: displayName, email, photo: photoURL };
//         // console.log(currentUser);
//         setUser(currentUser);
//       } else {
//         // No user is signed in.
//       }
//     });
//   }, []);
//   return {
//     user, //returning the user state
//     logInUser,
//     signInWithGoogle,
//     signOut,
//   };
// };

// // const Auth = () => {
// //     const [user, setUser] = useState({
// //       name:'',
// //       email:''
// //     });
// //   const createUser = (userEmail, passWord) => {
// //     firebase
// //       .auth()
// //       .createUserWithEmailAndPassword(userEmail, passWord)
// //       .then((res) => {
// //         console.log(res);
// //         return res.user;
// //       })
// //       .catch((err) => {
// //         console.log(err.message);
// //         return err.message;
// //       });
// //   };
// //   const logInUser = (userEmail, passWord) => {
// //     firebase
// //       .auth()
// //       .signInWithEmailAndPassword(userEmail, passWord)
// //       .then((res) => {
// //         console.log(res);
// //         setUser({
// //           name: userEmail,
// //           email: res.user.email
// //       });
// //         // return res.user;
// //       })
// //       .catch((err) => {
// //         console.log(err.message);
// //         return err.message;
// //       });
// //   };
// //   return {
// //     user,
// //     createUser,
// //     logInUser,
// //   };
// // };

// export default Auth;
import React, { useEffect, useState, useCallback } from "react";
import firebaseConfig from "../../firebase.config";
import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

export const AuthContext = React.createContext();
export const AuthProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Auth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const onSubmit = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log(email.value, password.value);
    try {
      await firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((res) => {
          const { displayName, email, photoURL } = res.user;
          const signedInUser = { name: displayName, email, photo: photoURL };
          setCurrentUser(signedInUser);
          return res.user;
        });
    } catch (error) {
      alert(error);
    }
  }, []);

  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const { email, password, name } = event.target.elements;
    try {
      await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {
          const { email } = res.user;
          const signedInUser = { name: name.value, email };
          setCurrentUser(signedInUser);
          return res.user;
        });
      event.target.reset();
    } catch (error) {
      alert(error);
    }
    const user = firebaseConfig.auth().currentUser;
    user
      .updateProfile({
        displayName: name.value,
        email: name.email,
      })
      .then(function (res) {
        console.log(user);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        const currentUser = { name: displayName, email, photo: photoURL };
        setCurrentUser(currentUser);
      } else {
        // No user is signed in.
      }
    });
  }, []);

  const signOut = () => {
    return firebaseConfig
      .auth()
      .signOut()
      .then((res) => {
        setCurrentUser(null);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  return {
    currentUser,
    handleSignUp,
    signOut,
    onSubmit,
  };
};

export default Auth;
