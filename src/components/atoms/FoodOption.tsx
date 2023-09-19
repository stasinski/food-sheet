import { useGlobalState } from "../../providers/stateProvider";
import { Food } from "../../types/Food";

interface Props {
  food: Food;
}

export const FoodOption: React.FC<Props> = ({ food }) => {
  const { setGlobalState } = useGlobalState();

  const handleOnCLick = () => {
    setGlobalState({ selectedFood: food });
  };
  return (
    <div className="food-option" onClick={handleOnCLick}>
      {food.name}
    </div>
  );
};
