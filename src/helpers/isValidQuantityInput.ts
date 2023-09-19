export const isValidQuantityInput = (value: string) => {
  const valueToNumber = +value; // convert to number
  if (valueToNumber !== +valueToNumber || valueToNumber < 0) {
    // if fails validity check
    return false;
  }

  return true;
};
