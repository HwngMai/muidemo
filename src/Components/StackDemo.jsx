import React from "react";
import { Stack } from "@mui/material";
export default function StackDemo() {
  return (
    <div>
      <Stack direction='row' justifyContent='space-between' p={5}>
        <p>Lorem ipsum, dolor sit amet consectetur</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, magnam
          quasi! Optio officiis in obcaecati
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, et!
        </p>
      </Stack>
    </div>
  );
}
