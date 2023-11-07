import MainPage from "../components/MainPage";
import ErrorBoundary from "../components/shared/ui/ErrorBoundary";
import FallbackUi from "../components/shared/ui/FallbackUi";

function App() {
  return (
    <ErrorBoundary fallback={<FallbackUi />}>
      <MainPage />
    </ErrorBoundary>
  );
}

export default App;
