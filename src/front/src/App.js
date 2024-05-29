import React from 'react';
import './styles/global.scss';
import ScrollToTop from './hooks/scrollToTop';
import Routing from './router/routing';
import { routes } from './router/routes';
import useCheckAuth from './hooks/useCheckAuth';


const App = () => {
  useCheckAuth();
  return (
    <>
      <ScrollToTop />
      <div className='App'>

        <div className='Content'>
          <Routing routes={routes} />
        </div>
      </div>
    </>
  );
}

export default App;
