import { Button } from "react-bootstrap";

interface Props {
  disabled: boolean;
}

export const AddFoodButton: React.FC<Props> = ({ disabled }) => {
  return (
    <Button variant="outline-secondary" disabled={disabled} type="submit">
      ADD
    </Button>
  );
};
