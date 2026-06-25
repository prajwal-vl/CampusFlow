import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, ClipboardList, Bell, CalendarCheck, Zap, 
  MessageSquare, Calendar, FolderOpen, Briefcase, Users, Rocket,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const NAV_GROUPS = [
  {
    label: 'Core',
    links: [
      { to: '/dashboard',       label: 'Dashboard',      icon: LayoutDashboard, mobile: true },
      { to: '/tasks',           label: 'Tasks',           icon: ClipboardList,   mobile: true },
      { to: '/notice',          label: 'AI Study Buddy',  icon: Bell,            mobile: true },
    ]
  },
  {
    label: 'Productivity',
    links: [
      { to: '/chat',            label: 'Chat Hub',        icon: MessageSquare,   mobile: true },
      { to: '/deadline-planner',label: 'Deadline Planner',icon: Calendar },
      { to: '/attendance',      label: 'Attendance',      icon: CalendarCheck },
    ]
  },
  {
    label: 'Career & Study',
    links: [
      { to: '/placement',       label: 'Placement Prep',  icon: Briefcase },
      { to: '/study-groups',    label: 'Study Groups',    icon: Users },
      { to: '/brainspace',      label: 'BrainSpace',      icon: Rocket },
      { to: '/knowledge',       label: 'RAG Library',     icon: FolderOpen },
    ]
  },
  {
    label: 'Automation',
    links: [
      { to: '/automations',     label: 'Automations',     icon: Zap,             mobile: true },
    ]
  },
];

const ALL_MOBILE_LINKS = NAV_GROUPS.flatMap(g => g.links).filter(l => l.mobile);

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <>
      {/* ── Desktop Sidebar ─────────────────────────────── */}
      <aside className="sidebar-glass w-64 hidden md:flex flex-col min-h-screen sticky top-0 flex-shrink-0 z-30">
        
        {/* Logo */}
        <div className="h-16 flex items-center px-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[10px] bg-gradient-emerald-teal flex items-center justify-center shadow-glow-emerald">
              <span className="text-white font-black text-sm">CF</span>
            </div>
            <span className="text-white font-extrabold text-lg tracking-tight">
              CampusFlow
            </span>
          </div>
        </div>

        {/* Nav groups */}
        <nav className="flex-1 py-6 px-3 space-y-8 overflow-y-auto custom-scrollbar">
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                {group.label}
              </p>
              <div className="space-y-1">
                {group.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `sidebar-link ${isActive ? 'active' : ''}`
                      }
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="flex-1">{link.label}</span>
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-40 transition-opacity" />
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* User footer */}
        <div className="p-4 border-t border-white/10">
          {user && (
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-default">
              <div className="w-9 h-9 rounded-[10px] bg-zinc-800 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-inner border border-white/10">
                {user.name ? user.name.charAt(0).toUpperCase() : '?'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-zinc-100 truncate">{user.name}</div>
                <div className="text-[10px] text-zinc-500 truncate">{user.branch} · Year {user.year}</div>
              </div>
            </div>
          )}
          <div className="mt-3 text-center">
            <span className="text-[9px] text-zinc-600 font-bold tracking-widest uppercase">
              CampusAI Hackathon 2025
            </span>
          </div>
        </div>
      </aside>

      {/* ── Mobile Bottom Tab Bar ────────────────────────── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-zinc-950/90 backdrop-blur-xl border-t border-white/10 flex justify-around items-center z-50 px-2 pb-safe">
        {ALL_MOBILE_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 py-1.5 rounded-xl text-[10px] font-semibold transition-all ${
                  isActive
                    ? 'text-emerald-400'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className={`p-1.5 rounded-lg transition-all ${isActive ? 'bg-emerald-500/15' : ''}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="mt-1">{link.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}
