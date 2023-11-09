import MainPage from "../components/MainPage";
import ErrorBoundary from "../shared/ui/ErrorBoundary";
import FallbackUi from "../shared/ui/FallbackUi";

function App() {
  return (
    <ErrorBoundary fallback={<FallbackUi />}>
      <MainPage />
    </ErrorBoundary>
  );
}

export default App;
