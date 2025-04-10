import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

 function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    
   // <div className="min-h-screen bg-purple-50 flex items-center justify-center">
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
     
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg w-full">
        <h1 className="text-3xl text-center font-semibold text-purple-800 my-5">
          Sign In
        </h1>
        <form  onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <input
            type="email"
            placeholder="Email"
            className="border p-3 w-full rounded-full transition focus:ring-2 focus:ring-purple-400 hover:shadow-lg"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-3 w-full rounded-full transition focus:ring-2 focus:ring-purple-400 hover:shadow-lg"
            id="password"
            onChange={handleChange}
          />
          <button className="bg-purple-800 text-white p-3 rounded-lg transition transform hover:scale-105 hover:bg-purple-900 w-1/3 mx-auto">
            Sign In
          </button>
          
          <OAuth/>
          
        </form>

        <div className="flex gap-2 mt-5 items-center justify-center">
          <p className="text-gray-600 font-medium">
            Do not have an account?
          </p>
          <Link to={"/signup"}>
          
          <span className="text-purple-700 font-semibold cursor-pointer hover:underline">
            Log In
          </span>
          </Link>
        </div>
        {error && <p className="text-red-500 m">{error}</p>}

        <div className="my-5">
          <hr className="border-gray-300" />
        </div>

        <div className="text-xl font-semibold text-purple-700 text-center">
          "Your cozy 'nest' is just a search away—find it now!!!"
        </div>
      </div>
    </div>
  );
}

export default SignIn;
