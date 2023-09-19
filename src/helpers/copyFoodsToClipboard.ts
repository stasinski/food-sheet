import { Food } from "../types/Food";

export const copyFoodsToClipboard = (foods: Array<Food>) => {
  const text = foods
    .map(({ name, amount, amountType }) => `${name} ${amount} ${amountType}`)
    .join("\n");

  navigator.clipboard.writeText(text);
};
