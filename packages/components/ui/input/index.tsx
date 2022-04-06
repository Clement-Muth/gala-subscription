import React, { useEffect, useState } from "react";
import { Input as InputRebass, InputProps as InputPropsRebass, Label } from "@rebass/forms";
import { Box } from "rebass";

interface InputProps extends InputPropsRebass {
  label?: string;
  error?: boolean;
}

export const Input: React.FC<InputProps> = React.forwardRef(({ error, label, ...props }, ref) => {
  const [sysError, setSysError] = useState(error);

  useEffect(() => {
    setSysError(error);
  }, [error]);

  return (
    <Box width="100%">
      <Label htmlFor={props.name} color="#c0a9a1" mb={2} ml={2} fontWeight={900}>
        {label}
      </Label>
      <InputRebass
        ref={ref}
        id={props.name}
        bg="#fcf5ef"
        px={4}
        height={56}
        color="#c0a9a1"
        {...props}
        onChange={(e) => {
          setSysError(false);
          props.onChange && props.onChange(e);
        }}
        sx={{
          outline: sysError ? "solid 1px #d9534f" : "none",
          border: "none",
          borderRadius: 5,
          ":focus": { outline: "none" },
          "::placeholder": { color: "lightGrey" },
          ...props.sx
        }}
      >
        {props.children}
      </InputRebass>
    </Box>
  );
});

Input.displayName = "Input";
