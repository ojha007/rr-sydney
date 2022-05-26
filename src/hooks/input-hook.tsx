import { useState } from "react";

export const useInput = (initialValue: any) => {
  const [payload, setValue] = useState(initialValue);

  return {
    payload,
    setValue,
    reset: () => setValue(""),
    bind: {
      payload,
      onChange: (event: any) => {
        setValue(event.target.value);
      },
    },
  };
};
