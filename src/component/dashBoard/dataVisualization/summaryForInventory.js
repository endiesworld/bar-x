import { select, arc, pie, line } from "d3";

const d3Selection = {
  node: "",
  nodeHeight: "",
  nodeWidth: "",
  color: ["green", "tomato", "#ffba00", "#291563", "#03fcba"],
};

const data = {
  value: [1, 1, 1, 1, 1],
  name: [
    "Issued L.P.O's ",
    "Recieved items",
    "Items in store",
    "Items in refrigirators",
    "Items sold",
  ],
};

const numberExtractor = (param) => {
  const values = param.split("px");
  return +values[0];
};

const SVGnodeExtractor = (unProcessedNode) => {
  if (typeof unProcessedNode.childNodes[0] === "undefined")
    return unProcessedNode;
  return SVGnodeExtractor(unProcessedNode.childNodes[0]);
};

export const DOMSVG = (parentNode) => {
  const HTMLSVGnode = SVGnodeExtractor(parentNode);
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
  let arcs = pie()(data.value);
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
  data.value.forEach((value, index) => {

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
    Legend.text(data.name[index])
      .attr("font-family", "sans-serif")
      .style("fill", "#291563")
      .attr("font-size", "0.6em");
  });
};

export const management = () => {
  const Department = [{Guards: 0}, {Waiters: 0}, {Barman: 0}, {Supervisors: 0}, {Manager: 0}];
  let group = d3Selection.node.append("g");
  const myLine = line().context(null) ;
  let DepartmentLineXPosition = d3Selection.nodeWidth * 0.25 ;
  let DepartmentLineLength = d3Selection.nodeWidth * 0.7 ;;
  let yPosition ;
  let startPosition  ;
  let lineTo  ;
  let initYPosition = d3Selection.nodeHeight / (Department.length + 1)  ;

  const drawLine = () => {
    group.append("path") 
    .attr("d", myLine([startPosition, lineTo]))
    .attr("stroke", "#ffba00") 
    .attr("stroke-width", "0.15em")
    .attr("fill", "none") ;
  }

  const label = (textPostion, text) => {
    let textGroup = group.append("g") ;
    textGroup.attr("transform", `translate(${textPostion[0]+ 5 }, ${textPostion[1] + 2})`)
    .append("text") 
    .text(`${Object.values(text)} ${Object.keys(text)}`)
      .attr("font-family", "sans-serif")
      .style("fill", "#291563")
      .attr("font-size", "0.7em");
  }

  // Generates i numbers of parallel lines along the Y axis
  Department.forEach (( dept, index) => {
    yPosition = initYPosition * (index + 1) ;
    startPosition = [DepartmentLineXPosition + 20, yPosition] ;
    lineTo = [DepartmentLineLength -40 , yPosition] ;
    drawLine() ;
    label(lineTo, dept) ;

    //Draw a diagonal line to meet the parallel lines
    startPosition = [DepartmentLineXPosition - 40,  d3Selection.nodeHeight / 2.3]  ;
    lineTo = [DepartmentLineXPosition + 20, yPosition] ;
    drawLine() ;
  }
  )
  
  //Draw a straight line along the parallel lines
  // startPosition = [DepartmentLineXPosition , initYPosition -1] ;
  // lineTo = [DepartmentLineXPosition,  yPosition +2] ;
  // drawLine() ;

  //Draw a straight line at the middle of the parallel lines
  startPosition = [ 5 , d3Selection.nodeHeight / 2.3] ;
  lineTo = [DepartmentLineXPosition - 40,  d3Selection.nodeHeight / 2.3] ;
  drawLine() ;
  

}