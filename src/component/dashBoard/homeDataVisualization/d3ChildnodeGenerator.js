import { select } from "d3";

export const d3ChildnodeGenerator = (domNode) => {
  const d3svgNode = select(domNode);

  return d3svgNode
    .append("svg")
    .style("height", d3svgNode.style("height"))
    .style("width", d3svgNode.style("width"));
};
