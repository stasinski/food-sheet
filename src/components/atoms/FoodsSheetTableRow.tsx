import React from "react";
import { Food } from "../../types/Food";
import { Button } from "react-bootstrap";
import { useGlobalState } from "../../providers/stateProvider";
import { Trash } from "tabler-icons-react";

interface Props {
  food: Food;
  index: number;
}

export const FoodsSheetTableRow: React.FC<Props> = ({ food, index }) => {
  const { removeFood } = useGlobalState();
  return (
    <tr>
      <td>
        <div className="center">
          <Button
            size="sm"
            variant="danger"
            onClick={() => removeFood(food.id)}
          >
            <Trash size={16} />
          </Button>
        </div>
      </td>
      <td>{index}</td>
      <td style={{ textTransform: "capitalize" }}>{food.name}</td>
      <td>{food.amount}</td>
      <td>{food.fat}</td>
      <td>{food.carb}</td>
      <td>{food.protein}</td>
      <td>{food.kcal}</td>
    </tr>
  );
};
