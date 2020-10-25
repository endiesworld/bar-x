export const appendGroupAndTranslate = (viewport, xTranslate, yTranslate) => {
  return viewport
    .append("g")
    .attr("transform", `translate(${xTranslate}, ${yTranslate})`);
};

export const appendRect = (group, rectWidth, rectHeight, color) => {
  return group
    .append("rect")
    .style("width", rectWidth)
    .style("height", rectHeight)
    .style("fill", color);
};

export const appendText = (group, text, color = "#291563", size = "0.6em") => {
  return group
    .append("text")
    .text(text)
    .attr("font-family", "sans-serif")
    .style("fill", color)
    .attr("font-size", size);
};

export const drawLine = (group, data, color = "#ffba00") => {
  group
    .append("path")
    .attr("d", data)
    .attr("stroke", color)
    .attr("stroke-width", "0.15em")
    .attr("fill", "none");
};
