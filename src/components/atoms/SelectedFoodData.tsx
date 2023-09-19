import React from "react";
import { useGlobalState } from "../../providers/stateProvider";
import { Table } from "react-bootstrap";

export const SelectedFoodData: React.FC = () => {
  const { selectedFood } = useGlobalState();
  if (!selectedFood) return null;
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>name</th>
          <th>amount</th>
          <th>fat</th>
          <th>carb</th>
          <th>protein</th>
          <th>kcal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ textTransform: "capitalize" }}>{selectedFood.name}</td>
          <td>{selectedFood.amount}</td>
          <td>{selectedFood.fat}</td>
          <td>{selectedFood.carb}</td>
          <td>{selectedFood.protein}</td>
          <td>{selectedFood.kcal}</td>
        </tr>
      </tbody>
    </Table>
  );
};
