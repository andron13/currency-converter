import MainPage from "../components/MainPage.tsx";
import ErrorBoundary from "../components/shared/ui/ErrorBoundary.tsx";
import FallbackUi from "../components/shared/ui/FallbackUi.tsx";

function App() {
  return (
    <ErrorBoundary fallback={<FallbackUi />}>
      <MainPage />
    </ErrorBoundary>
  );
}

export default App;
