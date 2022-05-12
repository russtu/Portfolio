import { useState } from 'react';
import './App.css';
import { Landing } from './layout/Landing';

export const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
        <Landing open={open} setOpen={setOpen}/>
    </div>
  );
}

