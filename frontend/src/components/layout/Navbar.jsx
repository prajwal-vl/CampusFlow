import React from 'react';
import { useAuth } from '../../context/AuthContext';
import DarkModeToggle from '../ui/DarkModeToggle';
import { LogOut, Bell } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="navbar-glass h-16 sticky top-0 z-20 flex items-center justify-between px-4 md:px-8 gap-4 flex-shrink-0">
      
      {/* Mobile Logo */}
      <div className="flex items-center gap-3 md:hidden">
        <div className="w-8 h-8 rounded-[10px] bg-gradient-emerald-teal flex items-center justify-center shadow-glow-emerald">
          <span className="text-white font-black text-sm">CF</span>
        </div>
        <span className="text-white font-extrabold text-lg tracking-tight">
          CampusFlow
        </span>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-4 ml-auto">
        
        {/* Notification bell */}
        <button
          type="button"
          className="relative p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 shadow-glow-emerald"></span>
        </button>

        <div className="w-px h-6 bg-white/10" />

        <DarkModeToggle />

        <div className="w-px h-6 bg-white/10" />

        {/* User chip */}
        {user && (
          <div className="hidden sm:flex items-center gap-3 pl-1">
            <div className="text-right">
              <div className="text-sm font-semibold text-white leading-tight">{user.name}</div>
              <div className="text-xs text-zinc-500">{user.branch} · Yr {user.year}</div>
            </div>
            <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold text-sm shadow-inner border border-white/10">
              {user.name ? user.name.charAt(0).toUpperCase() : '?'}
            </div>
          </div>
        )}

        <div className="w-px h-6 bg-white/10" />

        {/* Logout */}
        <button
          type="button"
          onClick={logout}
          className="p-2 rounded-full text-zinc-400 hover:text-rose-400 hover:bg-rose-500/10 transition-all"
          title="Logout"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
