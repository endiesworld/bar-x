import { select, arc, pie } from "d3";

const d3Selection = {
  node: "",
  group: "",
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
  d3Selection.group = d3Selection.node.append("g");
  d3Selection.nodeHeight = numberExtractor(d3Selection.node.style("height"));
  d3Selection.nodeWidth = numberExtractor(d3Selection.node.style("width"));
  d3Selection.group.attr(
    "transform",
    `translate(${d3Selection.nodeWidth - d3Selection.nodeWidth / 3},
     ${d3Selection.nodeHeight - d3Selection.nodeHeight / 2})`
  );
};

export const drawArc = () => {
  let arcPath1;
  let DrawArc1 = arc();
  let arcs = pie()(data.value);
  arcs.forEach((drawArc, index) => {
    arcPath1 = d3Selection.group.append("path");
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
  data.value.forEach((value, index) => {
    legendGroup = d3Selection.node.append("g");
    legendGroup.attr(
      "transform",
      `translate(${xStartPoint}, ${yStartPoint + index * yDisplacement})`
    );
    Legend = legendGroup.append("rect");
    Legend.style("width", width)
      .style("height", height)
      .style("fill", d3Selection.color[index]);
    legendGroup = d3Selection.node.append("g");
    legendGroup.attr(
      "transform",
      `translate(${xStartPoint + 40}, ${
        yStartPoint + index * yDisplacement + 12
      })`
    );
    Legend = legendGroup.append("text");
    Legend.text(data.name[index])
      .attr("font-family", "sans-serif")
      .style("fill", "#291563")
      .attr("font-size", "0.6em");
  });
};
