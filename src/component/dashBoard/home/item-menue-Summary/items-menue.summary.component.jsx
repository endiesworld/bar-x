import React from "react";
import {
  MenueSummaryDiv,
  Items,
  ItemStatusHolder,
} from "./item-menue-summary.styled";
import { ReactComponent as Checked } from "../../../../assets/Check-sign.svg";
import { ReactComponent as Unchecked } from "../../../../assets/cancel.svg";

function ItemAndMenueSummary() {
  const itemCategory = {
    items: [
      "food",
      "pepper soup",
      "snacks",
      "water",
      "juice",
      "yoghort",
      "soft-drinks",
      "malt-drinks",
      "wine",
      "spirit",
      "wisky",
      "beer",
    ],
    availability: [true, false, true, true],
  };
  return (
    <MenueSummaryDiv>
      {itemCategory.items.map((item, index) => (
        <ItemStatusHolder>
          <Items>{item}</Items>
          {itemCategory.availability[index] ? <Checked /> : <Unchecked />}
        </ItemStatusHolder>
      ))}
    </MenueSummaryDiv>
  );
}

export default ItemAndMenueSummary;
