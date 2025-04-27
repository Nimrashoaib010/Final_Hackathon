// // src/components/Layout.jsx
// import { Link, Outlet, useLocation } from 'react-router-dom';
// import { LogOut } from 'lucide-react';

// const sidebarLinks = [
//   { name: 'Dashboard', path: '/dashboard' },
//   { name: 'Check-In/Out', path: '/attendence' },
//   { name: 'Leaves', path: '/leaves' },
//   { name: 'Profile', path: '/profile' },
//   { name: 'Salary', path: '/salary' },
// ];

// export default function Layout() {
//   const location = useLocation();

//   return (
//     <div className="flex h-screen bg-gray-300 text-gray-900">
//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-700 text-white flex flex-col p-4 space-y-4">
//         <h1 className="text-2xl font-bold mb-6">Employee Panel</h1>
//         {sidebarLinks.map((link) => (
//           <Link
//             key={link.name}
//             to={link.path}
//             className={`px-3 py-2 rounded transition ${location.pathname === link.path
//                 ? 'bg-blue-600 font-semibold'
//                 : 'hover:bg-blue-600'
//               }`}
//           >
//             {link.name}
//           </Link>
//         ))}

//         <button className="mt-auto flex items-center gap-2 bg-red-600 px-3 py-2 rounded hover:bg-red-500 transition">
//           <LogOut size={18} />
//           Logout
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 overflow-y-auto">
//         <header className="mb-6">
//           <h2 className="text-2xl font-bold text-center pt-9">Welcome Back To the Employee-Dashboard System!</h2>
//         </header>
//         <Outlet />
//       </main>
//     </div>
//   );
// }
