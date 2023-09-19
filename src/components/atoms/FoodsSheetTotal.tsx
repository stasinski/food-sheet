import { Button } from "react-bootstrap";
import { Copy } from "tabler-icons-react";
import { useGlobalState } from "../../providers/stateProvider";
import { copyFoodsToClipboard } from "../../helpers/copyFoodsToClipboard";

interface Props {
  foodsTotalData: {
    fat: number;
    carb: number;
    protein: number;
    kcal: number;
  };
}

export const FoodsSheetTotal: React.FC<Props> = ({ foodsTotalData }) => {
  const { foodsList } = useGlobalState();

  const handleCopyFoods = () => {
    copyFoodsToClipboard(foodsList);
  };

  return (
    <tr>
      <th></th>
      <th></th>
      <th className="center">
        <Button onClick={handleCopyFoods} size="sm">
          <Copy />
        </Button>
      </th>
      <th></th>
      <th>{foodsTotalData.fat}</th>
      <th>{foodsTotalData.carb}</th>
      <th>{foodsTotalData.protein}</th>
      <th>{foodsTotalData.kcal}</th>
    </tr>
  );
};
