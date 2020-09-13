import {appendGroupAndTranslate,  appendRect ,  appendText} from "./publicSVGtools" ;
const d3Selection = {
    color: ["green", "tomato", "#ffba00", "#291563", "#03fcba"],
  };

export const legend = (viewport, legendData, xStart=0.05, yStart = 0.15) => {
    let legendGroup;
    const viewPort = viewport.d3SVGViewport;
    const rectHeight = 20;
    const rectWidth = 30;
    const yDisplacement = rectHeight * 1.5;
    const xPosForRect = viewport.d3SVGViewportWidth * xStart;
    const yPosForRect = viewport.d3SVGViewportHeight * yStart;
    const xPosForText = xPosForRect + 33;
    const yPosForText = yPosForRect + 12;
  
    //and appends an svg group for a new rect
    legendData.forEach((value, index) => {
      legendGroup = appendGroupAndTranslate(
        viewPort,
        xPosForRect,
        yPosForRect + index * yDisplacement
      );
      appendRect(legendGroup, rectWidth, rectHeight, d3Selection.color[index]);
  
      //appends a new group for text
      legendGroup = appendGroupAndTranslate(
        viewPort,
        xPosForText,
        yPosForText + index * yDisplacement
      );
      appendText(legendGroup, legendData[index]);
    });
  };