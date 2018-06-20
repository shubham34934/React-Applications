import React from 'react';

export default class Calc extends React.Component {

  render() {
    return (
                    <div className="calc-body">
                        <div className="calc-screen">
                          <div className="calc-operation">2536 + 419 + </div>
                          <div className="calc-typed">2955<span className="blink-me">_</span></div>
                        </div>
                        <div className="calc-button-row">
                          <div className="button c">C</div>
                          <div className="button l">≠</div>
                          <div className="button l">%</div>
                          <div className="button l">/</div>
                        </div>
                        <div className="calc-button-row">
                          <div className="button">7</div>
                          <div className="button">8</div>
                          <div className="button">9</div>
                          <div className="button l">x</div>
                        </div>
                        <div className="calc-button-row">
                          <div className="button">4</div>
                          <div className="button">5</div>
                          <div className="button">6</div>
                          <div className="button l">−</div>
                        </div>
                        <div className="calc-button-row">
                          <div className="button">1</div>
                          <div className="button">2</div>
                          <div className="button">3</div>
                          <div className="button l">+</div>
                        </div>
                        <div className="calc-button-row">
                          <div className="button">.</div>
                          <div className="button">0</div>
                          <div className="button">NA </div>
                          <div className="button l">=</div>
                        </div>
                    </div>
    );
  }
}
