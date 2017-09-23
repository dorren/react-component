import React from 'react';
import WithSrc from './WithSrc';
import Octopus from '../components/octopus';


var DemoOctopus = function(props){
  let code = (<Octopus
                width={200}
                height={240}
                weights={[0.6, 0.2, 0.1, 0.1]}
              />);

  let src = `<Octopus
                width={200}
                height={240}
                weights={[0.6, 0.2, 0.1, 0.1]}
              />`;
  let demo = WithSrc.createDemo(code, src);


  let code2 = (
    <div className="Revenue">
      <div className="Left">Revenues</div>
      <Octopus
        width={200} height={240}
        weights={[0.6, 0.2, 0.1, 0.1]}
      />
      <div className="Lines">
        <div className="Line">
          <div className="Desc">General Merchandise</div>
          <div className="Value">$6B</div>
        </div>
        <div className="Line">
          <div className="Desc">Books & Media</div>
          <div className="Value">$2B</div>
        </div>
        <div className="Line">
          <div className="Desc">Cloud Service</div>
          <div className="Value">$1B</div>
        </div>
        <div className="Line">
          <div className="Desc">Other Revenues</div>
          <div className="Value">$1B</div>
        </div>
      </div>
    </div>);

  let src2 = `<div className="Revenue">
    <div className="Left">Revenues</div>
    <Octopus
      width={200} height={240}
      weights={[0.6, 0.2, 0.1, 0.1]}
    />
    <div className="Lines">
      <div className="Line">
        <div className="Desc">General Merchandise</div>
        <div className="Value">$6B</div>
      </div>
      <div className="Line">
        <div className="Desc">Books & Media</div>
        <div className="Value">$2B</div>
      </div>
      <div className="Line">
        <div className="Desc">Cloud Service</div>
        <div className="Value">$1B</div>
      </div>
      <div className="Line">
        <div className="Desc">Other Revenues</div>
        <div className="Value">$1B</div>
      </div>
    </div>
  </div>`;
  let demo2 = WithSrc.createDemo(code2, src2);

  return (
    <div>
      { demo }
      { demo2 }
    </div>);
}

export default DemoOctopus;
