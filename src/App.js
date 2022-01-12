
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import { store } from "./store/store";
import { CustomForm } from './components/CustomForm';

function App() {
  return (
    <Provider store={store}>
      <CustomForm/>
    </Provider>
  );
}

export default App;
