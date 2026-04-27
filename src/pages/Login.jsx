import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/authSlice';
import { AuthForm } from '../components/AuthForm';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (username) => {
    // Basic validation to prevent empty submissions
    if (!username.trim()) return;
    
    // Dispatch the Redux action to save the user in state and localStorage
    dispatch(login({ name: username, id: Date.now() }));
    
    // Redirect the user to the dashboard route
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 border rounded-xl shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">TeamTask Login</h2>
          <p className="text-gray-500 text-sm">Enter your username to access the team dashboard.</p>
        </div>
        
        {/* Rendering the reusable AuthForm component */}
        <AuthForm onLogin={handleLogin} />
        
      </div>
    </div>
  );
};

export default Login;