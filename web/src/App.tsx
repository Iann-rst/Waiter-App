import Header from './components/Header';
import { Order } from './components/Order';


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


import './styles/main.css';

function App() {
  return (
    <>
      <Header />
      <Order />
      <ToastContainer position='bottom-center' />
    </>
  );
}

export default App;
