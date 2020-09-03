import { select, arc, pie, line } from "d3";

//d3 node selector
const d3Selection = {
  node: "",
  nodeHeight: "",
  nodeWidth: "",
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

//used to extract px from drawing viewport
const numberExtractor = (param) => {
  const values = param.split("px");
  return +values[0];
};

// to extract the specific node for drawing
const svgNodeExtractor = (unProcessedNode) => {
  if (typeof unProcessedNode.childNodes[0] === "undefined")
    return unProcessedNode;
  return svgNodeExtractor(unProcessedNode.childNodes[0]);
};

export const domSVG = (parentNode) => {
  const HTMLSVGnode = svgNodeExtractor(parentNode);
  d3Selection.node = select(HTMLSVGnode);
  d3Selection.nodeHeight = numberExtractor(d3Selection.node.style("height"));
  d3Selection.nodeWidth = numberExtractor(d3Selection.node.style("width"));
};

export const drawArc = () => {
  let group = d3Selection.node.append("g");
  group.attr(
    "transform",
    `translate(${d3Selection.nodeWidth - d3Selection.nodeWidth / 3},
     ${d3Selection.nodeHeight - d3Selection.nodeHeight / 2})`
  );
  let arcPath1;
  let DrawArc1 = arc();
  let arcs = pie()(inventoryData.value);
  arcs.forEach((drawArc, index) => {
    arcPath1 = group.append("path");
    DrawArc1.innerRadius(0)
      .outerRadius((d3Selection.nodeHeight + d3Selection.nodeWidth) * 0.14)
      .startAngle(drawArc.startAngle)
      .endAngle(drawArc.endAngle)
      .padAngle(0.04);
    arcPath1.attr("d", DrawArc1()).style("fill", d3Selection.color[index]);
  });
};

export const legend = () => {
  let legendGroup;
  const height = 20;
  const width = 30;
  const yDisplacement = height * 1.5;
  const xStartPoint = d3Selection.nodeWidth - d3Selection.nodeWidth * 0.95;
  const yStartPoint = d3Selection.nodeHeight - d3Selection.nodeHeight * 0.85;
  let Legend;

  //picks new position for the legend of each data represented in the piechart
  //and appends an svg group to that position with the translate attribute
  inventoryData.value.forEach((value, index) => {
    // appends a new group
    legendGroup = d3Selection.node.append("g");
    legendGroup.attr(
      "transform",
      `translate(${xStartPoint}, ${yStartPoint + index * yDisplacement})`
    );

    // appends a rectangle to the new group and sets the rectangle attributes
    Legend = legendGroup.append("rect");
    Legend.style("width", width)
      .style("height", height)
      .style("fill", d3Selection.color[index]);

    //appends a new group to the group holding the rectangle above more like a sub group
    legendGroup = d3Selection.node.append("g");

    //positions the new group formed with group name 'legendGroup'
    legendGroup.attr(
      "transform",
      `translate(${xStartPoint + 40}, ${
        yStartPoint + index * yDisplacement + 12
      })`
    );

    //appends a text to the new sub-group formed above
    Legend = legendGroup.append("text");
    Legend.text(inventoryData.name[index])
      .attr("font-family", "sans-serif")
      .style("fill", "#291563")
      .attr("font-size", "0.6em");
  });
};

const drawLine = (group1, data1, color = "#ffba00") => {
  group1
    .append("path")
    .attr("d", data1)
    .attr("stroke", color)
    .attr("stroke-width", "0.15em")
    .attr("fill", "none");
};

export const management = () => {
  let group = d3Selection.node.append("g");
  const myLine = line().context(null);
  let departmentLineXPosition = d3Selection.nodeWidth * 0.25;
  let departmentLineLength = d3Selection.nodeWidth * 0.7;
  let yPosition;
  let startPosition;
  let lineTo;
  let initYPosition = d3Selection.nodeHeight / (departmentData.length + 1);

  const label = (textPostion, text) => {
    let textGroup = group.append("g");
    textGroup
      .attr(
        "transform",
        `translate(${textPostion[0] + 5}, ${textPostion[1] + 2})`
      )
      .append("text")
      .text(`${Object.values(text)} ${Object.keys(text)}`)
      .attr("font-family", "sans-serif")
      .style("fill", "#291563")
      .attr("font-size", "0.7em");
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
      d3Selection.nodeHeight / 2.3,
    ];
    lineTo = [departmentLineXPosition + 20, yPosition];
    drawLine(group, myLine([startPosition, lineTo]));
  });

  //Draw a straight line at the middle of the parallel lines
  startPosition = [5, d3Selection.nodeHeight / 2.3];
  lineTo = [departmentLineXPosition - 40, d3Selection.nodeHeight / 2.3];
  drawLine(group, myLine([startPosition, lineTo]));
};

export const dailyOps = () => {
  let orderStage = ["recieved", "confirmed", "executed"];
  let parentGroup = d3Selection.node.append("g");
  const myLine = line().context(null);
  let viewportxStartPosition = 50;
  let viewportyStartPosition = 20;
  let viewportxStopPosition =
    d3Selection.nodeWidth - d3Selection.nodeWidth * 0.5;
  let viewportyStopPosition = d3Selection.nodeHeight - 20;
  let lineStartPosition;
  let lineTo;
  let barWidth = 50;
  let chartGroup;

  //Draw vertical line
  lineStartPosition = [viewportxStartPosition, viewportyStartPosition];
  lineTo = [viewportxStartPosition, viewportyStopPosition];
  drawLine(parentGroup, myLine([lineStartPosition, lineTo]));

  //Draw horizontal line
  lineStartPosition = [viewportxStartPosition, viewportyStopPosition];
  lineTo = [viewportxStopPosition, viewportyStopPosition];
  drawLine(parentGroup, myLine([lineStartPosition, lineTo]));

  chartGroup = parentGroup.append("g");
  //chartGroup = d3Selection.node.append("g");
  chartGroup
    .attr("transform", `translate(100, ${viewportyStopPosition})`)
    .attr("transform", `rotate(180deg)`);

  // appends a rectangle to the new group and sets the rectangle attributes
  let bar = chartGroup.append("rect");
  bar
    .style("width", 50)
    .style("height", 500)
    .style("fill", d3Selection.color[0]);
};
