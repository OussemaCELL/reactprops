
import './App.css';
import Profile from './profile/Profile';
import logo from './logo.svg'
const App = () => {
  const style = {color: 'red', textAlign : 'center', backgroundColor : 'black'}
  const alertMyInput = fullName => alert(fullName);
  return (
    <div style={style}>
      <Profile fullName='mohsen' bio='lorem' profession='retard' alertMyInput={alertMyInput}>{logo}</Profile>
    </div>
  );
 };

export default App;
