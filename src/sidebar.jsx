import React from 'react';

function Sidebar({ activeSection, setActiveSection }) {
  return (
    <div className="sidebar">
      <div 
        className={`nav-item ${activeSection === 'notes' ? 'active' : ''}`}
        onClick={() => setActiveSection('notes')}
      >
        <div className="nav-icon">📝</div>
        <div>Notes</div>
      </div>
      <div 
        className={`nav-item ${activeSection === 'timer' ? 'active' : ''}`}
        onClick={() => setActiveSection('timer')}
      >
        <div className="nav-icon">⏱️</div>
        <div>Focus Timer</div>
      </div>
      <div 
        className={`nav-item ${activeSection === 'tasks' ? 'active' : ''}`}
        onClick={() => setActiveSection('tasks')}
      >
        <div className="nav-icon">✓</div>
        <div>Tasks & Reminders</div>
      </div>
    </div>
  );
}

export default Sidebar;
