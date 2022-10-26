import React from 'react';
import { Helmet } from 'react-helmet';
import Timers from '../src/components/Timers';
import Navbar from '../src/components/Nav';

const TITLE = 'krumodoro'

function App() {
  return (
    <div className="App">
        <Helmet>
            <title>{TITLE}</title>
        </Helmet>
      <div className="p-4 w-full h-screen flex flex-col items-center bg-slate-100   ">
        <Navbar />
        <Timers />
      </div>
    </div>
  );
}

export default App;
