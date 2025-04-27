import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // TODO: Save to backend later
    localStorage.setItem('user', JSON.stringify(form)); // temporarily store
    toast.success('Account created successfully! Please login.');

    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 via-red-300 to-peach-300">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg bg-gray-380 w-full max-w-md space-y-4"
        style={{
          boxShadow: "0 5px 10px rgba(15, 11, 11, 0.5)", // Black shadow
        }}
      >
        <h2 className="text-xl font-bold text-center">Create an Account</h2>

        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md shadow-md" required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md shadow-md" required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md shadow-md" required />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md shadow-md" required />

        <button type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-green-700 shadow-md transition">
          Sign Up
        </button>

        <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-700 shadow-md transition">
          Continue with Google
        </button>

        <div className="text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </div>
      </form>
    </div>
  );
}
