import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (
      savedUser &&
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {
      toast.success(`Welcome, ${savedUser.name}!`, {
        style: { backgroundColor: '#A3FFBF', color: '#000' }
      });
      setTimeout(() => {
        navigate('/task-tracker');
      }, 2000);
    } else {
      toast.error('Wrong credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-gradient-to-r from-pink-100 via-red-300 to-pink-200">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold text-center">Login to Your Account</h2>

        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md shadow-md" required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md shadow-md" required />

        <button type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-green-700 transition">
          Login
        </button>

        <div className="flex justify-between text-sm">
          <Link to="/signup" className="text-blue-600 hover:underline">Create new account</Link>
          <Link to="#" className="text-red-600 hover:underline">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
}
