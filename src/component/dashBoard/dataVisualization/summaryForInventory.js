import {select, arc, pie} from "d3" ;

const d3Selection = {
    node: "" ,
    group: "",
    nodeHeight: "",
    nodeWidth: ""
} ;

const numberExtractor = (param) => {
    const values = param.split("px")
    return +(values[0]) ;
}

const SVGnodeExtractor = (unProcessedNode) => {
    if (typeof(unProcessedNode.childNodes[0]) === "undefined")
        return unProcessedNode ;  
    return SVGnodeExtractor(unProcessedNode.childNodes[0]) ;    
}

export const DOMSVG = (parentNode) => {
    const HTMLSVGnode = SVGnodeExtractor(parentNode) ;
    d3Selection.node = select(HTMLSVGnode) ;
    d3Selection.group = d3Selection.node.append('g') ;
    d3Selection.nodeHeight = numberExtractor(d3Selection.node.style("height")) ;
    d3Selection.nodeWidth = numberExtractor(d3Selection.node.style("width") ) ;
    d3Selection.group.attr('transform', 
    `translate(${d3Selection.nodeWidth-(d3Selection.nodeWidth/3)},
     ${d3Selection.nodeHeight-(d3Selection.nodeHeight/2)})`) ;
}

export const drawArc = () => {
   const data = [  12, 21, 15,  25];
   const color = [ "green", "tomato", "#ffba00", "#291563"] ;
   let arcPath1 ;
   let  DrawArc1 = arc() ;  ;
   let arcs = pie()(data);
   arcs.forEach((drawArc, index )=>{
    arcPath1 = d3Selection.group.append("path") ;
    DrawArc1.innerRadius(0)
       .outerRadius((d3Selection.nodeHeight + d3Selection.nodeWidth)*0.14) 
       .startAngle(drawArc.startAngle)
       .endAngle(drawArc.endAngle) ;
    arcPath1.attr('d', DrawArc1()).style("fill", color[index]) ; 
    } ) ;                
    
}        