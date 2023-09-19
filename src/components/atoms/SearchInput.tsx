import { Form } from "react-bootstrap";
import { useGlobalState } from "../../providers/stateProvider";

export const SearchInput: React.FC = () => {
  const { searchValue, setGlobalState } = useGlobalState();
  return (
    <Form.Control
      type="text"
      value={searchValue}
      onChange={({ target }) => setGlobalState({ searchValue: target.value })}
    />
  );
};
