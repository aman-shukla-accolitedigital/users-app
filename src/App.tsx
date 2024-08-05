
import DataTable from './DataTable';
import './App.css'; // Import the CSS file for styling
import React from 'react';
const App: React.FC = () => {
  return (
    <div className="App">
      <h1>User Data</h1>
      <DataTable />
    </div>
  );
};

export default App;