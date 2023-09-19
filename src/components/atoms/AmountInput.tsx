import { Form } from "react-bootstrap";
import { useRef, useEffect } from "react";
import { isValidQuantityInput } from "../../helpers/isValidQuantityInput";
import { useGlobalState } from "../../providers/stateProvider";

interface Props {
  value: number | "";
  setValue: React.Dispatch<React.SetStateAction<number | "">>;
}

export const AmountInput: React.FC<Props> = ({ setValue, value }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { selectedFood } = useGlobalState();

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [selectedFood]);

  const handleOnChange = (value: string) => {
    if (!value) {
      setValue("");
    } else if (isValidQuantityInput(value)) {
      setValue(Number(value));
    }
  };

  return (
    <Form.Control
      type="text"
      ref={inputRef}
      className="amount-input"
      value={value}
      onChange={({ target }) => handleOnChange(target.value)}
    />
  );
};
