import Child from './Child';
import './App.css';
import {TransactionsProvider} from './transactionsContext';

function App() {
    return (
      <TransactionsProvider>
        <div className="App">
          <Child />
        </div>
      </TransactionsProvider>
    );
}

export default App;
