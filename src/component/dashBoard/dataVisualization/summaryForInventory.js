import { arc, pie} from "d3"; 
import {appendGroupAndTranslate} from "./publicSVGtools" ;
import {legend} from "./dataLabel" ;

const d3Selection = {
  color: ["green", "tomato", "#ffba00", "#291563", "#03fcba"],
};

//data consumed in inventory
const inventoryData = {
  value: [1, 1, 1, 1, 1],
  name: [
    "Issued L.P.O's ",
    "Recieved items",
    "Items in store",
    "Items in refrigirators",
    "Items sold",
  ],
};


export const drawArc = (viewport) => {
  let arcPath1;
  let DrawArc1 = arc();
  let arcs = pie()(inventoryData.value);
  let xStartPosition = viewport.d3SVGViewportWidth * 0.7;
  let yStartPosition = viewport.d3SVGViewportHeight * 0.5;
  let group = appendGroupAndTranslate(
    viewport.d3SVGViewport,
    xStartPosition,
    yStartPosition
  );

  arcs.forEach((drawArc, index) => {
    arcPath1 = group.append("path");
    DrawArc1.innerRadius(0)
      .outerRadius(
        (viewport.d3SVGViewportHeight + viewport.d3SVGViewportWidth) * 0.14
      )
      .startAngle(drawArc.startAngle)
      .endAngle(drawArc.endAngle)
      .padAngle(0.04);
    arcPath1.attr("d", DrawArc1()).style("fill", d3Selection.color[index]);
  });
  legend(viewport, inventoryData.name);
};
