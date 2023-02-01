import { RouteContextProvider } from './Context/RouteContext';
import { ToastContextProvider } from './Context/ToastContext';
import Todo  from './Component/Todo';

function App() {

  return (
    <ToastContextProvider>
      <RouteContextProvider>
          <Todo/>
      </RouteContextProvider>
    </ToastContextProvider>
  
  )
}
export default App;

 
