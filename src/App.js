import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  // ID for item being edited
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  return (
    <section className="section-center">
      {/* alternative to onSubmit on form is onClick on a button */}
      <form className="grocery-form"></form>
      <div className="grocery-container">
        <List />
        <button className="clear-btn">Clear Items</button>
      </div>
    </section>
  );
}

export default App;
