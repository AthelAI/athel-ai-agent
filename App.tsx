
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ScribeView from './components/views/ScribeView';
import EmailDraftView from './components/views/EmailDraftView';
import TaskListView from './components/views/TaskListView';
import CalendarView from './components/views/CalendarView';
import DashboardView from './components/views/DashboardView';
import { type ViewType } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView setCurrentView={setCurrentView} />;
      case 'scribe':
        return <ScribeView />;
      case 'email':
        return <EmailDraftView />;
      case 'tasks':
        return <TaskListView />;
      case 'calendar':
        return <CalendarView />;
      default:
        return <DashboardView setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-background text-on-background">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-1 flex flex-col overflow-y-auto">
        {renderView()}
      </main>
    </div>
  );
};

export default App;
