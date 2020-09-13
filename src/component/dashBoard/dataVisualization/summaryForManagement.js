import {line } from "d3"; 
import {appendGroupAndTranslate,  appendText, drawLine} from "./publicSVGtools" ;


//data consumed in management
const departmentData = [
    { Guards: 0 },
    { Waiters: 0 },
    { Barman: 0 },
    { Supervisors: 0 },
    { Manager: 0 },
  ];
  

export const management = (viewport) => {
    let group = viewport.d3SVGViewport.append("g");
    const viewportHieght = viewport.d3SVGViewportHeight;
    const viewportWidth = viewport.d3SVGViewportWidth;
    const myLine = line().context(null);
    let departmentLineXPosition = viewportWidth * 0.25;
    let departmentLineLength = viewportWidth * 0.7;
    let yPosition;
    let startPosition;
    let lineTo;
    let initYPosition = viewportHieght / (departmentData.length + 1);
  
    const label = (textPostion, text) => {
      let textGroup = appendGroupAndTranslate(
        group,
        textPostion[0] + 5,
        textPostion[1] + 2
      );
      appendText(textGroup, `${Object.values(text)} ${Object.keys(text)}`);
    };
  
    // Generates i numbers of parallel lines along the Y axis
    departmentData.forEach((dept, index) => {
      yPosition = initYPosition * (index + 1);
      startPosition = [departmentLineXPosition + 20, yPosition];
      lineTo = [departmentLineLength - 40, yPosition];
      drawLine(group, myLine([startPosition, lineTo]));
      label(lineTo, dept);
  
      //Draw a diagonal line to meet the parallel lines
      startPosition = [departmentLineXPosition - 40, viewportHieght / 2.3];
      lineTo = [departmentLineXPosition + 20, yPosition];
      drawLine(group, myLine([startPosition, lineTo]));
    });
  
    //Draw a straight line at the middle of the parallel lines
    startPosition = [5, viewportHieght / 2.3];
    lineTo = [departmentLineXPosition - 40, viewportHieght / 2.3];
    drawLine(group, myLine([startPosition, lineTo]));
  };
  