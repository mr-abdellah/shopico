import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function rating(rate) {
  return (
    <Stack spacing={1}>
      <Rating name="read-only" value={rate} precision={0.5} readOnly/>
    </Stack>
  );
}
