import { useEffect, useState } from 'react';

import MainPage from '../components/MainPage';
import {
  fetchBank1Data,
  fetchBank2Data,
} from '../components/services/fetchBankForBlock';
import ErrorBoundary from '../shared/ui/ErrorBoundary';
import FallbackUi from '../shared/ui/FallbackUi';

interface BankData {
  currencyRates: number[];
}

function App() {
  const [bank1Data, setBank1Data] = useState<BankData | null>(null);
  const [bank2Data, setBank2Data] = useState<BankData | null>(null);

  useEffect(() => {
    fetchBank1Data().then((data) => setBank1Data(data));
    fetchBank2Data().then((data) => setBank2Data(data));
  }, []);
  return (
    <ErrorBoundary fallback={<FallbackUi />}>
      <MainPage />
    </ErrorBoundary>
  );
}

export default App;
