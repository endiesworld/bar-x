export default class D3SVGViewPortGenerator {
  constructor(parentNode) {
    this.d3SVGViewport = parentNode;
    this.d3SVGViewportHeight = this.numberExtractor(parentNode.style("height"));
    this.d3SVGViewportWidth = this.numberExtractor(parentNode.style("width"));
  }

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

  remove = () => {
    this.d3SVGViewport.remove();
  };
}
