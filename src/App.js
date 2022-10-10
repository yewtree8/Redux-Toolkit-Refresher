import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeTheme from './components/ChangeTheme';

const App = () => {
  return (
    <div className="App">
      <h1>Hello world</h1>

      <Profile />
      
      <Login />

      <ChangeTheme />
    

    </div>
  );
}

export default App;
