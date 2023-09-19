import { Form, InputGroup } from "react-bootstrap";
import { AddFoodButton } from "../atoms/AddFoodButton";
import { useState } from "react";
import { AmountInput } from "../atoms/AmountInput";
import { useGlobalState } from "../../providers/stateProvider";
import { Food } from "../../types/Food";
import { parseNumber } from "../../helpers/parseNumber";

export const AddFoodForm: React.FC = () => {
  const [amount, setAmount] = useState<number | "">("");
  const { selectedFood, addFood } = useGlobalState();

  const handleAddFood = () => {
    if (selectedFood && amount) {
      const amountFactor =
        selectedFood.amountType === "gram" ? 0.01 * amount : amount;

      const newFood: Food = {
        ...selectedFood,
        amount,
        fat: parseNumber(selectedFood.fat * amountFactor),
        carb: parseNumber(selectedFood.carb * amountFactor),
        protein: parseNumber(selectedFood.protein * amountFactor),
        kcal: parseNumber(selectedFood.kcal * amountFactor),
      };

      addFood(newFood);
      setAmount("");
    }
  };

  if (!selectedFood) return null;

  return (
    <Form onSubmit={handleAddFood}>
      <InputGroup>
        <AmountInput value={amount} setValue={setAmount} />
        <AddFoodButton disabled={!amount || amount === 0} />
      </InputGroup>
    </Form>
  );
};
