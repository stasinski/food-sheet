import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SearchInput } from "../atoms/SearchInput";

export const SearchInputRow: React.FC = () => {
  return (
    <Row>
      <Col>
        <SearchInput />
      </Col>
    </Row>
  );
};
