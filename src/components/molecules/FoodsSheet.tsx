import React from "react";
import { Table } from "react-bootstrap";
import { useGlobalState } from "../../providers/stateProvider";
import { FoodsSheetTableRow } from "../atoms/FoodsSheetTableRow";
import { FoodsSheetHeader } from "../atoms/FoodsSheetHeader";
import { FoodsSheetTotal } from "../atoms/FoodsSheetTotal";

export const FoodsSheet: React.FC = () => {
  const { foodsList } = useGlobalState();

  const foodsTotalData = foodsList.reduce(
    (acc, cur) => ({
      fat: acc.fat + cur.fat,
      carb: acc.carb + cur.carb,
      protein: acc.protein + cur.protein,
      kcal: acc.kcal + cur.kcal,
    }),
    {
      fat: 0,
      carb: 0,
      protein: 0,
      kcal: 0,
    }
  );

  return (
    <div style={{ marginTop: 36 }}>
      <Table striped bordered>
        <FoodsSheetHeader />
        <tbody>
          {foodsList.map((entry, index) => (
            <FoodsSheetTableRow key={entry.id} food={entry} index={index + 1} />
          ))}
          <FoodsSheetTotal foodsTotalData={foodsTotalData} />
        </tbody>
      </Table>
    </div>
  );
};
