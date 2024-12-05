import { useState } from 'react'

import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from './reducers/todoSlice';

function App() {
  const [name, setName] = useState('')
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos)
  const dispatch = useDispatch();
  const addTodoHandle = async () => {
    dispatch(addTodo({
      title: name
    }));
    setName('');


  }

  const handleEdit = () => {
    console.log('Edit')
  }
  const handleDelete = () => {
  }
  return (
    <div className='
    font-sans
    flex w-full 
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
      <button className="bg-blue-500  text-white p-2 mt-2" onClick={addTodoHandle}>Submit</button>
      {
        todos?.map((todo) => (
          <div key={todo.id} className="border-2  min-w-80  justify-between  flex  items-center font-semibold text-sm border-gray-300 p-2 mt-2 rounded-lg shadow-md  bg-white px-4 py-2 ">
            {todo.title}
            <div>

              <button
                onClick={handleEdit}
                className='bg-green-500 text-white  min-w-6 p-2 ml-2 hover:bg-green-600 rounded-lg shadow  text-xs '>Edit</button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text- p-2 ml-2 min-w-6  rounded-lg hover:bg-red-600 text-white shadow text-xs text-">Delete</button>
            </div>
          </div>
        ))

      }

    </div>
  )
}

export default App
