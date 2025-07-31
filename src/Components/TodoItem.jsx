import React from 'react';
import tick from '../assets/image/ticked.png';
import deleteIcon from '../assets/image/delete.png';

const TodoItem = ({ text, id, isComplete, toggleComplete, deleteTodo }) => {
  return (
    <div className={`flex items-center justify-between my-4 p-3 rounded-lg ${isComplete ? 'bg-gray-50' : 'bg-white'}`}>
      <div 
        className="flex items-center gap-3 flex-1 cursor-pointer"
        onClick={() => toggleComplete(id)}
      >
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isComplete ? 'bg-green-100 border-green-300' : 'border-gray-300'}`}>
          {isComplete && <img src={tick} alt="Completed" className="w-4 h-4" />}
        </div>
        <p className={`text-lg ${isComplete ? 'line-through text-gray-400' : 'text-gray-700'}`}>
          {text}
        </p>
      </div>
      
      <button 
        onClick={() => deleteTodo(id)}
        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Delete task"
      >
        <img src={deleteIcon} alt="Delete" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TodoItem;