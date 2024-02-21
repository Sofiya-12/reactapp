// SignInForm.js
import React, { useState } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div>
     <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Sign In</button>
    </form>
    </div>
    
  );
};

export default SignInForm;

// // SignInForm.js
// import React, { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// const SignInForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await firebase.auth().signInWithEmailAndPassword(email, password);
//       // Redirect or perform any necessary action upon successful authentication
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button type="submit">Sign In</button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default SignInForm;
