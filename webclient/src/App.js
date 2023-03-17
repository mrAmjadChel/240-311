import './App.css';
import FBuser from './components/FBuser';
import Feed from './components/Feed';
import React,{ useState } from 'react';


function App() {
  const [logedin,setLogedin] = useState(false)
  
  return (
    <div className="mainApp">
      <FBuser logedin={logedin} setLogedin={setLogedin} />
      {logedin ? <Feed/>:<></>}
    </div>
  );
}
export default App;