import { useState } from 'react'

import './App.css'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const [name, setName] = useState('')
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const addTodo = async () => {
    dispatch(addTodo({
      title: name
    }));
    setName('');

  }


  return (
    <div className='
    flex
    justify-center
    items-center
    flex-col
    h-screen
    bg-gray-200

    '>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border border-gray-500 p-2"
      />
      <button className="bg-blue-500 text-white p-2 mt-2" onClick={addTodo}>Submit</button>
      {
        todos?.map((todo) => (
          <div key={todo.id} className="border border-gray-500 p-2 mt-2">
            {todo.title}
          </div>
        ))

      }

    </div>
  )
}

export default App
