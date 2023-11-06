import Converter from "../converter/Converter.tsx";
import ErrorBoundary from "../shared/ui/ErrorBoundary.tsx";
import FallbackUi from "../shared/ui/FallbackUi.tsx";

function App() {
  return (
    <ErrorBoundary fallback={<FallbackUi />}>
      <Converter />
    </ErrorBoundary>
  );
}

export default App;
