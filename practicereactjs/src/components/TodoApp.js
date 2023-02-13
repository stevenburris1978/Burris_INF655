import { useState } from 'react';

export default function TodoApp({ onTodoApp }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onTodoApp(title);
      }}>Add</button>
    </>
  )
}
