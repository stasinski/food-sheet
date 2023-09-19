import { Col, Row } from "react-bootstrap";
import { SearchResults } from "../molecules/SearchResults";
import { SelectedFoodData } from "../atoms/SelectedFoodData";
import { AddFoodForm } from "../molecules/AddFoodForm";
import { FoodsSheet } from "../molecules/FoodsSheet";

export const Panel: React.FC = () => {
  return (
    <Row style={{ marginTop: 16 }}>
      <Col xs={4}>
        <SearchResults />
      </Col>
      <Col xs={8}>
        <div style={{ height: 140 }}>
          <SelectedFoodData />
          <AddFoodForm />
        </div>
        <FoodsSheet />
      </Col>
    </Row>
  );
};
