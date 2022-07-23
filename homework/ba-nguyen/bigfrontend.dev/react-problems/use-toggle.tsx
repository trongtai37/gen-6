import { useState } from "react";

export function useToggle(on: boolean): [boolean, () => void] {
  const [isOn, setIsOn] = useState<boolean>(on);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return [isOn, handleToggle];
}
