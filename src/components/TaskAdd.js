// component used to add new task to task list

// still working on this

import { useState } from 'react';

function TaskAdd() {
  const [input, setInput] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    // onAdd(input)
    setInput('');
  }

  return (
    <form onSubmit={() => submitHandler}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="button"> + </button>

    </form>
  );
}

export default TaskAdd;
