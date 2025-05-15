import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <main className="relative z-0 "> {/* pushes content below fixed header */}
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
