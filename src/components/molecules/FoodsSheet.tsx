import React from "react";
import { Table } from "react-bootstrap";
import { useGlobalState } from "../../providers/stateProvider";
import { FoodsSheetTableRow } from "../atoms/FoodsSheetTableRow";
import { FoodsSheetHeader } from "../atoms/FoodsSheetHeader";
import { FoodsSheetTotal } from "../atoms/FoodsSheetTotal";
import { parseNumber } from "../../helpers/parseNumber";

export const FoodsSheet: React.FC = () => {
  const { foodsList } = useGlobalState();

  const foodsTotalData = foodsList.reduce(
    (acc, cur) => ({
      fat: parseNumber(acc.fat + cur.fat),
      carb: parseNumber(acc.carb + cur.carb),
      protein: parseNumber(acc.protein + cur.protein),
      kcal: parseNumber(acc.kcal + cur.kcal),
    }),
    {
      fat: 0,
      carb: 0,
      protein: 0,
      kcal: 0,
    }
  );

  return (
    <div className="foods-table">
      <Table align="center" striped bordered>
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
