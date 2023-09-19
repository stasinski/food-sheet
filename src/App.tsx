import { StateProvider } from "./providers/stateProvider";
import Container from "react-bootstrap/Container";
import "./App.scss";
import { SearchInputRow } from "./components/molecules/SearchInputRow";
import { Panel } from "./components/organisms/Panel";

export function App() {
  return (
    <StateProvider>
      <div className="app">
        <Container className="app-container">
          <SearchInputRow />
          <Panel />
        </Container>
      </div>
    </StateProvider>
  );
}
