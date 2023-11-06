import LineConverter from "../converter/LineConverter.tsx";
import ErrorBoundary from "../shared/ui/ErrorBoundary.tsx";
import FallbackUi from "../shared/ui/FallbackUi.tsx";

function App() {
  return (
    <ErrorBoundary fallback={<FallbackUi />}>
      <LineConverter />
    </ErrorBoundary>
  );
}

export default App;
