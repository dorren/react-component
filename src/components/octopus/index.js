import ReactDOM from 'react-dom';
import React from 'react';
import './octopus.css';

class Octopus extends React.Component {
  constructor(props){
    super(props);

    // for drawing colored bezier curve blocks.
    this.nextDirection = {"NE": "SW", "SE": "NW"};
    this.default = {color: "#5DADE2"};
  }

  /**
   * draw a symmetric bezier curve requires 7 points. see
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Bezier_Curves
   * 6th point is skipped due to symmetry.
   * @param width
   * @param height
   * @param dx, x offset
   * @param dy, y offset
   * @param direction, "NE" or "SE"
   * @return one way bezier curve points in 2D array.
   */
  buildCurve(width, height, dx, dy, direction){
    if(direction === "NE"){
      return [
         [dx,             dy + height],
         [dx + width/5,   dy + height],
         [dx + width/3,   dy + height],
         [dx + width/2,   dy + height/2],   // inflection point
         [dx + width/5*4, dy],
         [dx + width,     dy]
        ];
    }else if(direction === "SW"){
      return [
         [dx + width,     dy],
         [dx + width/5*4, dy],
         [dx + width/3*2, dy],
         [dx + width/2,   dy + height/2],   // inflection point
         [dx + width/5,   dy + height ],
         [dx,             dy + height]
        ];
    }else if(direction === "SE"){
      return [
         [dx,             dy],
         [dx + width/5,   dy],
         [dx + width/3,   dy],
         [dx + width/2,   dy + height/2],   // inflection point
         [dx + width/5*4, dy + height],
         [dx + width,     dy + height]
        ];
    }else if(direction === "NW"){
      return [
         [dx + width,     dy + height],
         [dx + width/5*4, dy + height],
         [dx + width/3*2, dy + height],
         [dx + width/2,   dy + height/2],   // inflection point
         [dx + width/5,   dy],
         [dx,             dy]
        ];
    }
  }

  buildDots(curve){
    let dots = [
        <circle key={0} cx={curve[0][0]} cy={curve[0][1]} r="2" fill="red"/>,
        <circle key={1} cx={curve[1][0]} cy={curve[1][1]} r="2" fill="red"/>,
        <circle key={2} cx={curve[2][0]} cy={curve[2][1]} r="2" fill="red"/>,
        <circle key={3} cx={curve[3][0]} cy={curve[3][1]} r="2" fill="red"/>,
        <circle key={4} cx={curve[4][0]} cy={curve[4][1]} r="2" fill="red"/>,
        <circle key={5} cx={curve[5][0]} cy={curve[5][1]} r="2" fill="red"/>
    ];
    return dots;
  }

  curveToPath(curve){
    return   `M ${curve[0][0]} ${curve[0][1]} ` +
             `C ${curve[1][0]} ${curve[1][1]},` +
              ` ${curve[2][0]} ${curve[2][1]},` +
              ` ${curve[3][0]} ${curve[3][1]} ` +
             `S ${curve[4][0]} ${curve[4][1]},` +
              ` ${curve[5][0]} ${curve[5][1]}`;
  }

  // build one enclosed curve block.
  buildCurvePath(width, height, thickness, dx, dy, direction){
    let curve = this.buildCurve(width, height, dx, dy, direction);
    let path = this.curveToPath(curve);

    let curve2 = this.buildCurve(width, height, dx, dy+thickness, this.nextDirection[direction]);
    path += ` L ${curve2[0][0]} ${curve2[0][1]} `;

    path += this.curveToPath(curve2);
    path += ` L ${curve[0][0]} ${curve[0][1]}`;
    console.log(path);
    return path;
  }

  buildPaths(){
    let width = this.props.width;
    let height = this.props.height;
    let total_thickness = height / 4;  // all curve thickness total to 1/4 of height.

    let row_count = this.props.weights.length;
    let line_height = height / row_count;
    let thicknesses = this.props.weights.map( x => x * total_thickness);
    let dy = (height - total_thickness)/2;                 // left side y offset

    let paths = thicknesses.map((x, i) => {
      let dy1 = line_height * i + (line_height - x) / 2;  // right side y offset
      let min_dy = Math.min(dy, dy1);
      let curve_height = Math.abs(dy - dy1) + x;
      let dir = i < row_count / 2 ? "NE" : "SE";  // bottom half paths curve downward

      //console.log("i", i, 'w', width, 'h', curve_height, 't', x, 'dx', 0, 'dy', min_dy, dir);
      let path = this.buildCurvePath(width, curve_height-x, x, 0, min_dy, dir);
      dy += x;
      return path;
    });

    return paths;
  }

  render() {
    let paths = this.buildPaths();
    let path_elems = paths.map((path, i) => {
      return <path key={i} d={path}
                   stroke="transparent"
                   fill={ this.props.color || this.default.color }/>
    });

    return (
      <div className="Octopus">
        <svg xmlns="http://www.w3.org/2000/svg"
             width= { this.props.width  }
             height={ this.props.height }>
          { path_elems }
        </svg>
      </div>
    );
  }
}

export default Octopus;
