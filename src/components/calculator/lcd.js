import React from 'react';
import './calculator.css';

var Lcd = props => {
  let lcd_css = "lcd";
  if(props.type === "scientific"){
    // wide enough, no need to shrink text size.
  }else{
    let str = "" + props.value;

    if(str.length > 13){
      lcd_css += " digits20";
    }else if (str.length > 7){
      lcd_css += " digits13";
    }
  }

  return (
    <tbody>
      <tr>
        <td colSpan="100" className={ lcd_css }>
          { props.value }
        </td>
      </tr>
    </tbody>
  );
}

export default Lcd;
