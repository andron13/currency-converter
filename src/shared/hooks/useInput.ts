import { ChangeEvent, useState } from "react";

/**
 * Custom hook for managing the value of an input field. Supports strings only.
 * @function useInput
 * @description Custom hook for managing the value of an input field. Supports strings only.
 * @param {string} initialValue The initial value of the input field.
 * @returns {[string, (e: ChangeEvent<HTMLInputElement>) => void]} Returns a tuple array with the current value and a change handler.
 */
export function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  /**
   * Event handler for changes to the input field's value.
   * @function handleChange
   * @description Event handler for changes to the input field's value.
   * @param {ChangeEvent<HTMLInputElement>} e Change event for the input field.
   * @returns {void}
   */
  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
  }

  return [value, handleChange];
}

export default useInput;
