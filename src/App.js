import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  // ID for item being edited
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert if value is empty
      showAlert(true, 'Please enter a value', 'danger');
    } else if (name && isEditing) {
      // deal with edit
    } else {
      showAlert(true, 'Item added', 'success');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  // using ES6 default parameters
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, 'List cleared', 'success');
    setList([]);
  };

  return (
    <section className="section-center">
      {/* alternative to onSubmit on form is onClick on a button */}
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g., eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          {/* default type for button is submit in modern browsers */}
          <button className="submit-btn">
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List items={list} />
        {list.length > 0 && (
          <button className="clear-btn" onClick={clearList}>
            Clear Items
          </button>
        )}
      </div>
    </section>
  );
}

export default App;
