import React from "react";

import { BarAndXHolder, WriteBar, XLogo } from "./barWithXLogo.styled";

function BarWithXLogo() {
  return (
    <div>
      <BarAndXHolder>
        <WriteBar> Bar </WriteBar>
        <XLogo />
      </BarAndXHolder>
    </div>
  );
}

export default BarWithXLogo;
