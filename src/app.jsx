import { useState } from 'react';
import Sidebar from './sidebar';
import Notes from './note';
import Timer from './Timer';
import Tasks from './Task';

function App() {
  const [activeSection, setActiveSection] = useState('notes');
  return (
    <div className="app-container">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="main-content">
        {activeSection === 'notes' && <Notes />}
        {activeSection === 'timer' && <Timer />}
        {activeSection === 'tasks' && <Tasks />}
      </div>
    </div>
  );
}

export default App;