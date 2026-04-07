
import { Routes, Route } from 'react-router-dom';
import TransactionsList from './pages/TransactionsList';
import TransactionDetails from './pages/TransactionDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TransactionsList />} />
      <Route path="/transaction/:id" element={<TransactionDetails />} />
    </Routes>
  );
}

export default App;