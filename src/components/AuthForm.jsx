import { useState } from 'react';

export const AuthForm = ({ onLogin }) => {
  const [name, setName] = useState('');
  return (
    <form onSubmit={(e) => { e.preventDefault(); onLogin(name); }} className="flex flex-col gap-2">
      <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)} className="border p-2"/>
      <button className="bg-blue-500 text-white p-2">Login</button>
    </form>
  );
};