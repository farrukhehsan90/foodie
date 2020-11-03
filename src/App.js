import Header from './components/Header';
import {Provider} from 'react-redux';
import Footer from './components/Footer';
import store from './redux/store';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Provider store={store}>
      {/* <Header/> */}
      <Dashboard/>
      {/* <Footer/> */}
    </Provider>
  );
}

export default App;
