import {appendGroupAndTranslate,  appendRect ,  appendText, drawLine} from "./publicSVGtools" ;
import {legend} from "./dataLabel" ;
import { line } from "d3"; 

const d3Selection = {
  color: ["green", "tomato", "#ffba00", "#291563", "#03fcba"],
};

//data consumed by dailyOps method
const dailyOrder = {
  recieved: 600,
  confirmed: 550,
  executed: 350,
};

export const dailyOps = (viewport) => {
  const viewportHieght = viewport.d3SVGViewportHeight;
  const viewportWidth = viewport.d3SVGViewportWidth;
  const orders = Object.keys(dailyOrder);
  const orderValue = Object.values(dailyOrder);
  let parentGroup = viewport.d3SVGViewport;
  const myLine = line().context(null);
  const viewportxStartPosition = viewportWidth * 0.55;
  const viewportyStartPosition = viewportHieght * 0.1;
  const barStartPositionX = viewportxStartPosition * 1.1;
  const viewportxStopPosition = viewportxStartPosition + 120;
  const viewportyStopPosition = viewportHieght * 0.9;
  let lineStartPosition;
  const verticalLineHeight =  viewportHieght - viewportyStartPosition ;
  let lineTo;
  const barWidth = 30;
  let chartGroup;
  const verticalLineValueTag = 10 ;
  const barHorizontalOffset = 1 ;
  const verticalLineValueTagOffset = 3 ;
  const legendXPropotion = 0.05 ;
  const legendYPropotion = 0.3 ;
  const barLineAndTextColor = "#291563" ;
  const chartTitle = "Today's Orders" ;
  const formatedOrderSize = orderValueFomarter(
    orderValue,
    viewportyStopPosition
  );

  //Draw vertical line
  lineStartPosition = [viewportxStartPosition, viewportyStartPosition];
  lineTo = [viewportxStartPosition, viewportyStopPosition];
  drawLine(parentGroup, myLine([lineStartPosition, lineTo]), barLineAndTextColor );

  //Draw horizontal line
  lineStartPosition = [viewportxStartPosition, viewportyStopPosition];
  lineTo = [viewportxStopPosition, viewportyStopPosition];
  drawLine(parentGroup, myLine([lineStartPosition, lineTo]) , barLineAndTextColor);

  formatedOrderSize.forEach((value, index) => {
    chartGroup = appendGroupAndTranslate(
      parentGroup,
      barStartPositionX + index * barWidth,
      verticalLineHeight - value 
    );
    appendRect(chartGroup, barWidth, value-barHorizontalOffset, d3Selection.color[index]);
   
    lineStartPosition = [viewportxStartPosition, verticalLineHeight - value];
    lineTo = [viewportxStartPosition - verticalLineValueTag, verticalLineHeight - value];
    drawLine(parentGroup, myLine([lineStartPosition, lineTo]) , barLineAndTextColor);

    //insert value for bar drawn
    chartGroup = appendGroupAndTranslate(
      parentGroup,
      viewportxStartPosition - barWidth,
      verticalLineHeight - value + verticalLineValueTagOffset
    );
    appendText(chartGroup, orderValue[index]);
  });

  chartGroup = appendGroupAndTranslate(
    parentGroup,
    viewportxStartPosition * legendXPropotion,
    viewportHieght * 0.2 
  );
  appendText(chartGroup, chartTitle);
  
  legend(viewport, orders, legendXPropotion, legendYPropotion);
};

const orderValueFomarter = (array, testCase) => {
  const delimiter = testCase * 0.8;
  let commonFactor;
  let modifiedArray;
  const found = array.find((value) => value > testCase);
  if (found) {
    modifiedArray = array.map((value) => {
      commonFactor = found / delimiter;
      return value / commonFactor;
    });
    return modifiedArray;
  }
  return array;
};