import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './Routes/AppRoutes';


const App=()=> {
  return (
    <BrowserRouter>
      <div className='App'>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}


export default App;
