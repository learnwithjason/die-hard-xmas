import { useState } from 'react'
import { useMutation, useQuery } from 'convex/react'
import {api} from '../convex/_generated/api'
import './App.css'

function App() {
  const votes = useQuery(api.vote.get);
  const saveVote = useMutation(api.vote.save);

  const handleVote = (vote: string) => {
    saveVote({ vote });
  };

  return (
      <div className="App">
        <h1>Is Die Hard a Christmas Movie?</h1>
        <div className="poll">
          <button onClick={() => handleVote('Yes')}>Yes</button>
          <button onClick={() => handleVote('No')}>No</button>
        </div>
        {votes && (
          <div className="results">
        {['Yes', 'No'].map(option => {
          const count = votes.filter(v => v.vote === option).length;
          const total = votes.length;
          const percentage = total ? (count / total) * 100 : 0;
          
          return (
            <div key={option} className="bar-container">
          <label>{option}: {count}</label>
          <div 
            className="bar"
            style={{
              width: `${percentage}%`,
              backgroundColor: option === 'Yes' ? '#4CAF50' : '#f44336',
              height: '30px',
              transition: 'width 0.3s ease'
            }}
          />
            </div>
          );
        })}
          </div>
        )}
      </div>
  )
}

export default App
