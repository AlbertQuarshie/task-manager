export const Navbar = ({ user, onLogout }) => (
  <nav className="p-4 bg-blue-600 text-white flex justify-between">
    <h1 className="font-bold">TaskManager</h1>
    {user && <button onClick={onLogout}>Logout</button>}
  </nav>
);