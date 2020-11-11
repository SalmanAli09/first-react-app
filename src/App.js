import logo from './logo.svg';
import './App.css';
import Dinner from './dinner.js';


function App() {
  return (
    <div className="App">
     <Dinner  dishName= 'Burger' sweetDish = ' Kheer'    />


     <hr></hr>


     <Dinner  dishName= 'Burger , Qeema , Pizza , All you just want' sweetDish = ' Kheer'    />
    </div>
  );
}

export default App;
