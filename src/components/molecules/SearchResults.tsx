import { useGlobalState } from "../../providers/stateProvider";
import foods from "../../data/foods.json";
import { FoodOption } from "../atoms/FoodOption";

export const SearchResults: React.FC = () => {
  const { searchValue } = useGlobalState();

  const filteredFoods = foods.foods.filter((entry) =>
    entry.name.includes(searchValue)
  );

  return (
    <div className="foods-search-result">
      {filteredFoods.map((entry) => (
        <FoodOption key={entry.id} food={entry} />
      ))}
    </div>
  );
};
