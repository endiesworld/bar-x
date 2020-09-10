import {arc, pie, line } from "d3";

//d3 node selector
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

//data consumed in management
const departmentData = [
  { Guards: 0 },
  { Waiters: 0 },
  { Barman: 0 },
  { Supervisors: 0 },
  { Manager: 0 },
];

//data consumed by dailyOps method
const dailyOrder = {
  recieved: 200,
  confirmed: 180,
  executed: 150,
};

//Append new Group and translate

const appendGroupAndTranslate = (viewport , xTranslate, yTranslate) => {
  return viewport.append("g").attr("transform", `translate(${xTranslate}, ${yTranslate})`)
}

const appendRect = (group, rectWidth, rectHeight, color) => {
  return group.append("rect")
    .style("width", rectWidth)
      .style("height", rectHeight)
      .style("fill", color);
}

const appendText = (group, text, color="#291563", size="0.6em") => {
  return group.append("text")
  .text(text)
  .attr("font-family", "sans-serif")
      .style("fill", color)
      .attr("font-size", size);
}

const drawLine = (group, data, color = "#ffba00") => {
  group
    .append("path")
    .attr("d", data)
    .attr("stroke", color)
    .attr("stroke-width", "0.15em")
    .attr("fill", "none");
};


export const drawArc = (viewport) => {
  let arcPath1;
  let DrawArc1 = arc();
  let arcs = pie()(inventoryData.value);
  let xStartPosition = viewport.d3SVGViewportWidth * 0.7 ;
  let yStartPosition = viewport.d3SVGViewportHeight * 0.5 ;
  let group = appendGroupAndTranslate(viewport.d3SVGViewport, xStartPosition , yStartPosition);
  
  arcs.forEach((drawArc, index) => {
    arcPath1 = group.append("path");
    DrawArc1.innerRadius(0)
      .outerRadius((viewport.d3SVGViewportHeight  + viewport.d3SVGViewportWidth) * 0.14)
      .startAngle(drawArc.startAngle)
      .endAngle(drawArc.endAngle)
      .padAngle(0.04);
    arcPath1.attr("d", DrawArc1()).style("fill", d3Selection.color[index]);
  });
};

export const legend = (viewport) => {
  let legendGroup;
  const viewPort = viewport.d3SVGViewport ;
  const rectHeight = 20;
  const rectWidth = 30;
  const yDisplacement = rectHeight * 1.5;
  const xPosForRect = viewport.d3SVGViewportWidth * 0.05;
  const yPosForRect = viewport.d3SVGViewportHeight * 0.15;
  const xPosForText = xPosForRect + 40 ;
  const yPosForText = yPosForRect + 12 ;

  //and appends an svg group for a new rect
  inventoryData.value.forEach((value, index) => {
    legendGroup = 
      appendGroupAndTranslate( viewPort, xPosForRect,(yPosForRect + index * yDisplacement) );
    appendRect(legendGroup, rectWidth, rectHeight, d3Selection.color[index]) ;
   
    //appends a new group for text
    legendGroup = appendGroupAndTranslate(viewPort, xPosForText, 
       (yPosForText + index * yDisplacement));
    appendText(legendGroup, inventoryData.name[index] ) ;
  });
};


export const management = (viewport) => {
  let group = viewport.d3SVGViewport.append("g");
  const viewportHieght = viewport.d3SVGViewportHeight ; 
  const viewportWidth = viewport.d3SVGViewportWidth ;
  const myLine = line().context(null);
  let departmentLineXPosition = viewportWidth * 0.25;
  let departmentLineLength = viewportWidth* 0.7;
  let yPosition;
  let startPosition;
  let lineTo;
  let initYPosition = viewportHieght / (departmentData.length + 1);

  const label = (textPostion, text) => {
    let textGroup = appendGroupAndTranslate(group, (textPostion[0] + 5), (textPostion[1] + 2) )
     appendText(textGroup, `${Object.values(text)} ${Object.keys(text)}`) ;
  };

  // Generates i numbers of parallel lines along the Y axis
  departmentData.forEach((dept, index) => {
    yPosition = initYPosition * (index + 1);
    startPosition = [departmentLineXPosition + 20, yPosition];
    lineTo = [departmentLineLength - 40, yPosition];
    drawLine(group, myLine([startPosition, lineTo]));
    label(lineTo, dept);

    //Draw a diagonal line to meet the parallel lines
    startPosition = [
      departmentLineXPosition - 40,
      viewportHieght / 2.3,
    ];
    lineTo = [departmentLineXPosition + 20, yPosition];
    drawLine(group, myLine([startPosition, lineTo]));
  });

  //Draw a straight line at the middle of the parallel lines
  startPosition = [5, viewportHieght / 2.3];
  lineTo = [departmentLineXPosition - 40, viewportHieght / 2.3];
  drawLine(group, myLine([startPosition, lineTo]));
};

export const dailyOps = (viewport) => {
  const viewportHieght = viewport.d3SVGViewportHeight ; 
  const viewportWidth = viewport.d3SVGViewportWidth ;
  const orders = Object.keys(dailyOrder) ;
  const orderSize = Object.values(dailyOrder) ;
  let parentGroup = viewport.d3SVGViewport ;
  const myLine = line().context(null);
  let viewportxStartPosition = 50;
  let viewportyStartPosition = 20;
  let viewportxStopPosition = viewportWidth * 0.5;
  let viewportyStopPosition = viewportHieght - 20;
  let lineStartPosition;
  let lineTo;
  let barWidth = 30;
  let chartGroup;

  //Draw vertical line
  lineStartPosition = [viewportxStartPosition, viewportyStartPosition];
  lineTo = [viewportxStartPosition, viewportyStopPosition];
  drawLine(parentGroup, myLine([lineStartPosition, lineTo]));

  //Draw horizontal line
  lineStartPosition = [viewportxStartPosition, viewportyStopPosition];
  lineTo = [viewportxStopPosition, viewportyStopPosition];
  drawLine(parentGroup, myLine([lineStartPosition, lineTo]));


  orderSize.forEach((value, index) => {
   chartGroup = appendGroupAndTranslate(parentGroup, 100 +(index *barWidth) , (viewportHieght - value/2 - viewportyStartPosition)) ;
   appendRect(chartGroup, barWidth, (value /2), d3Selection.color[index]); } )
  
};

