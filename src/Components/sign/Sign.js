// import React, { useState ,useCallback } from 'react';
// import { useFormik, Formik } from "formik";
// import { withRouter, Redirect } from "react-router";
// import Auth from '../SignUp/use-auth';

// const Sign = ({history}) => {
//   const auth = Auth();
//   const [userd, setUserd] = useState({
//     isLoggedIn: false,
//     name: "",
//     email: "",
//     imageUrl: "",
//     password: "",
//     error : '',
//     isValid: false,
//   });

//   const validateEmail = (email) =>/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
//   const handleChange = (e) => {
//     const newUserInfo = {
//       ...userd,
//     };
//     if (e.target.name === "email") {
//       newUserInfo.isValid = validateEmail(e.target.value);
//     }
//     newUserInfo[e.target.name] = e.target.value;
//     setUserd(newUserInfo);
//     console.log(userd);
//   };

//   const handleLogin = useCallback(
//     async event => {
//       event.preventDefault();
//       const { email, password } = event.target.elements;
//       try {
//         await auth
//           .auth()
//           .signInWithEmailAndPassword(email.value, password.value)
//           .then(res=>{console.log(res);})
//         history.push("/");
//       } catch (error) {
//         alert(error);
//       }
//     },
//     [history]
//   );
//     return (
//         <div>
//         {/* <form onSubmit={auth.createAccount}>
//           <input
//             // onBlur={handleChange}
//             type="text"
//             name="name"
//             required
//             placeholder="Your Name.."
//           />
//           <br />
//           <input
//             // onBlur={handleChange}
//             type="text"
//             name="email"
//             required
//             placeholder="Your Email.."
//           />
//           <br />
//           <input
//             // onBlur={handleChange}
//             type="password"
//             name="password"
//             required
//             placeholder="Password.."
//           />
//           <br />
//           <input type="submit" value="Sign up" />
//         </form> */}
//         <br/> <br/>
//         <form onSubmit={handleLogin}>
//           <br />
//           <input
//             onBlur={handleChange}
//             type="text"
//             name="email"
//             required
//             placeholder="Your Email.."
//           />
//           <br />
//           <input
//             onBlur={handleChange}
//             type="password"
//             name="password"
//             required
//             placeholder="Password.."
//           />
//           <br />
//           <input type="submit" value="Sign In" />
//         </form> <br/>
//         <button onClick={auth.signOut}>aa</button>
//         </div>
//     );
// };

// export default Sign;