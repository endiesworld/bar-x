import { appendGroupAndTranslate, appendText } from "./publicSVGtools";
import { legend } from "./dataLabel";
import { line, scaleBand } from "d3";

const color = ["green", "tomato", "#ffba00", "#291563", "#03fcba"];

//data consumed by dailyOps method
const dailyOrder = {
  recieved: 600,
  confirmed: 550,
  executed: 350,
};

export const dailyOps = (viewport) => {
  const chartTitle = "Today's Orders";
  const legendXPropotion = 0.05;
  const legendYPropotion = 0.3;
  const chartPadding = 10;
  const viewPort = viewport.d3SVGViewport;
  const viewportHeight = viewport.d3SVGViewportHeight;
  const viewportWidth = viewport.d3SVGViewportWidth;
  const orders = Object.keys(dailyOrder);
  const orderValue = Object.values(dailyOrder);
  const scalledOrder = scaleBand()
    .domain(orderValue)
    .range([viewportHeight - 30, 80]);

  const dataWidth = viewportWidth / (orders.length * 3);
  const halfWidth = viewportWidth / 2 + 20;
  const barXStart = halfWidth + chartPadding;
  const barYStart = viewportHeight - 3;
  const myLine = line()([
    [halfWidth, 5],
    [halfWidth, barYStart],
    [viewportWidth, barYStart],
  ]);

  appendChartLines(viewPort, myLine);
  appendBarCharts(
    viewPort,
    orderValue,
    scalledOrder,
    dataWidth,
    barXStart,
    viewportHeight
  );

  lineFromChartToValue(
    viewPort,
    orderValue,
    viewportHeight,
    halfWidth,
    scalledOrder
  );

  appendBarValue(
    viewPort,
    orderValue,
    scalledOrder,
    halfWidth - 30,
    viewportHeight
  );

  appendLegendTitle(
    viewPort,
    viewportWidth * legendXPropotion,
    viewportHeight * 0.2,
    chartTitle
  );
  legend(viewport, orders, legendXPropotion, legendYPropotion);
};

const appendBarCharts = (
  viewPort,
  data,
  barHeigth,
  barWidth,
  xPosition,
  viewportHeight
) => {
  return viewPort
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("height", (d) => barHeigth(d))
    .attr("width", barWidth)
    .attr("fill", (d, x) => color[x])
    .attr("x", (d, x) => {
      if (x === 0) return xPosition;
      return x * barWidth + xPosition;
    })
    .attr("y", (d) => {
      return viewportHeight - barHeigth(d) - 3;
    });
};
const appendLegendTitle = (viewPort, xPosition, yPosition, chartTitle) => {
  let chartGroup = appendGroupAndTranslate(viewPort, xPosition, yPosition);
  appendText(chartGroup, chartTitle);
};

const appendChartLines = (viewPort, line, color = "#291563") => {
  return viewPort
    .append("path")
    .attr("d", line)
    .attr("stroke", color)
    .attr("fill", "none");
};

const appendBarValue = (
  viewPort,
  data,
  barHeigth,
  xPosition,
  viewportHeight
) => {
  return viewPort
    .selectAll("text")
    .data(data)
    .join("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", "0.6em")
    .text((d) => d)
    .attr("x", xPosition)
    .attr("y", (d) => {
      return viewportHeight - barHeigth(d) - 3;
    });
};

const lineFromChartToValue = (
  viewPort,
  orderValue,
  viewportHeight,
  xPosition,
  yPosition
) => {
  let myline;
  orderValue.forEach((value) => {
    myline = line()([
      [xPosition, viewportHeight - yPosition(value) - 3],
      [xPosition - 5, viewportHeight - yPosition(value) - 3],
    ]);
    appendChartLines(viewPort, myline);
  });
};
