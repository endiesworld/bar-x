import React from 'react' ;
import { MenueSummaryDiv } from "./item-menue-summary.styled" ;
import { ReactComponent as Checked} from "../../../../assets/Check-sign.svg";
import { ReactComponent as Unchecked} from "../../../../assets/cancel.svg";

function ItemAndMenueSummary() {
    const itemCategory = {
        items: ["food", "pepper soup", "snacks", "water", "juice", "yoghort",
                "soft-drinks", "malt-drinks", "wine", "spirit","wisky","beer"] ,
        availability: [] ,        
    }
    return (
        <MenueSummaryDiv>
            {itemCategory.items.map((item , index) => (
                
                 <Checked /> 
                
               
            ))}
        </MenueSummaryDiv>
    )
}

export default ItemAndMenueSummary
