import React from 'react';
import Welcome from './components/Welcome';



function App() {
  const students = ['Deepak', 'Amit', 'Sara'];
  return (
    <div>
      {students.map(student => (
        <Welcome key={student} name={student} />
      ))}
    </div>
  );
}

export default App;
