
import './component_css/Attention.css'
import './component_css/Header.css'
import './component_css/Form.css'
import './component_css/Navbar.css'

import Homepage from './Router/Homepage'
import Form from './Router/Form';
import { Route, Routes } from 'react-router-dom';




function App() {
  
  return (
    

    <Routes>

      <Route path = '/' element={<Homepage/>}/>
      <Route path = '/form' element={<Form/>}/>
     
      
  </Routes>
  
  );
}

export default App;
