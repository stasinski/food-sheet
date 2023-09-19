interface Props {
  foodsTotalData: {
    fat: number;
    carb: number;
    protein: number;
    kcal: number;
  };
}

export const FoodsSheetTotal: React.FC<Props> = ({ foodsTotalData }) => {
  return (
    <tr>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th>{foodsTotalData.fat}</th>
      <th>{foodsTotalData.carb}</th>
      <th>{foodsTotalData.protein}</th>
      <th>{foodsTotalData.kcal}</th>
    </tr>
  );
};
