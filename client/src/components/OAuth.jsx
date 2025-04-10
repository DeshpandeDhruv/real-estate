import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase.js';

import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
    const handleGoogleClick = async () => {
      try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
  
        const result = await signInWithPopup(auth, provider);
  
        const res = await fetch('/api/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          }),
        });
        const data = await res.json();
        dispatch(signInSuccess(data));
        navigate('/');
      }
      catch(error){
        console.log('could not sign in with google', error);
      }
    
};

   return (
    <button
    onClick={handleGoogleClick} 
    type='button'
    className='bg-purple-800 text-white p-3 rounded-lg transition transform hover:scale-105 hover:bg-purple-900 w-1/3 mx-auto'
     >
     USE GOOGLE
    </button>
 );
}






//<button className="bg-purple-800 text-white p-3 rounded-lg transition transform hover:scale-105 hover:bg-purple-900 w-1/3 mx-auto">
 //           Sign In
 //         </button>

