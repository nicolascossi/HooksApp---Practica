import { memo } from "react";

function Small({ value }) {
  return (
    <small>{value}</small>
  );
}

export default memo(Small);
