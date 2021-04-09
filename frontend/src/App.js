// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import AddUserScreen from './screens/AddUserScreen';
import ListUserScreen from './screens/ListUserScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Route path='/users' component={ListUserScreen} />
        <Route path='/' component={AddUserScreen} exact />
      </main>
    </Router>
  );
}

export default App;
