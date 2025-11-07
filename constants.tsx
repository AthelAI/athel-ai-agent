
import React from 'react';
import { LayoutDashboard, Mic, Mail, ListTodo, Calendar } from 'lucide-react';
import { type ViewType } from './types';

interface NavItem {
  id: ViewType;
  label: string;
  icon: React.ReactNode;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { id: 'scribe', label: 'Scribe', icon: <Mic className="w-5 h-5" /> },
  { id: 'email', label: 'Email', icon: <Mail className="w-5 h-5" /> },
  { id: 'tasks', label: 'Tasks', icon: <ListTodo className="w-5 h-5" /> },
  { id: 'calendar', label: 'Calendar', icon: <Calendar className="w-5 h-5" /> },
];
