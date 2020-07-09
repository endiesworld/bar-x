import React from "react";

import { WhatWeDoText, Experience, Break } from "./whatWeDo.style";

function WhatWeDo() {
  return (
    <div>
      <WhatWeDoText>
        We are a company aimed at <Break />
        improving your Bar-<Experience>Xperience</Experience>
        <Break />
        as both a business and consumer
      </WhatWeDoText>
    </div>
  );
}

export default WhatWeDo;
