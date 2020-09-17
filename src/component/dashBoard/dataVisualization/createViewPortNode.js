import { select } from "d3";

export default class D3SVGViewPortGenerator {
  constructor(parentNode) {
    this.parentNode = parentNode;
    this.htmlSVGnode = 0;
    this.d3SVGViewport = 0;
    this.d3SVGViewportHeight = 0;
    this.d3SVGViewportWidth = 0;
  }

  svgDOMProcessor = () => {
    this.d3SVGViewport = select(this.parentNode);
    this.d3SVGViewportHeight = this.numberExtractor(
      this.d3SVGViewport.style("height")
    );
    this.d3SVGViewportWidth = this.numberExtractor(
      this.d3SVGViewport.style("width")
    );
  };

  //used to extract px from drawing viewport
  numberExtractor = (param) => {
    const values = param.split("px");
    return +values[0];
  };

  d3SVGViewportHeight() {
    return this.d3SVGViewportHeight;
  }

  d3SVGViewportWidth() {
    return this.d3SVGViewportWidth;
  }

  d3SVGViewport() {
    return this.d3SVGViewport;
  }
}
