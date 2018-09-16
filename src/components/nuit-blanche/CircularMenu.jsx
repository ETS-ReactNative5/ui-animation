import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 1;
  position: absolute;
  bottom: -5px;
  width: 100%;

  svg {
    // -webkit-filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.5));      
    // filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.5));
  }

  #itemsContainer {
    a.item {
      path {
        fill: white;
        stroke: #ddd;
      }
    }
  }
`

export default class CircularMenu extends React.Component {
  _handleClick = (e) => {
    e.preventDefault();
    console.log(`yo!`);
    
  }
  render () {
    return (
      <Wrapper>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 -100 700 350" id="menu">
          <g id="symbolsContainer">
            <symbol className="icon icon-" id="icon-1" viewBox="0 0 40 40"><path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z" fill="#444444"></path></symbol>
            <symbol className="icon icon-" id="icon-2" viewBox="0 0 40 40"><path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z" fill="#444444"></path></symbol>
            <symbol className="icon icon-" id="icon-3" viewBox="0 0 40 40"><path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z" fill="#444444"></path></symbol>
            <symbol className="icon icon-" id="icon-4" viewBox="0 0 40 40"><path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z" fill="#444444"></path></symbol>
            <symbol className="icon icon-" id="icon-5" viewBox="0 0 40 40"><path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z" fill="#444444"></path></symbol>
          </g>
          <g id="itemsContainer">
            <a className="item" id="item-1" xlinkHref="" xlinkTitle="" transform="matrix(1,0,0,1,0,0)" datasvgorigin="250 250"><path fill="none" stroke="#111" strokeWidth="1" className="sector" d="M250,250 l250,0 A250,250 0 0,0 452.25424859373686,103.05368692688171 z"></path><use xlinkHref="#icon-1" width="40" height="40" x="391.6795959472656" y="177.4671173095703" transform="rotate(72 411.6795959472656 197.4671173095703)"></use></a>
            <a className="item" id="item-2" xlinkHref="" xlinkTitle="" transform="matrix(0.80901,-0.58778,0.58778,0.80901,-99.20056166685515,194.69206447938143)" datasvgorigin="250 250"><path fill="none" stroke="#111" strokeWidth="1" className="sector" d="M250,250 l250,0 A250,250 0 0,0 452.25424859373686,103.05368692688171 z"></path><use xlinkHref="#icon-2" width="40" height="40" x="391.6795959472656" y="177.4671173095703" transform="rotate(72 411.6795959472656 197.4671173095703)"></use></a>
            <a className="item" id="item-3" xlinkHref="" xlinkTitle="" transform="matrix(0.30901,-0.95105,0.95105,0.30901,-65.01837766752521,410.5098804800515)" datasvgorigin="250 250"><path fill="none" stroke="#111" strokeWidth="1" className="sector" d="M250,250 l250,0 A250,250 0 0,0 452.25424859373686,103.05368692688171 z"></path><use xlinkHref="#icon-3" width="40" height="40" x="391.6795959472656" y="177.4671173095703" transform="rotate(72 411.6795959472656 197.4671173095703)"></use></a>
            <a className="item" id="item-4" xlinkHref="" xlinkTitle="" transform="matrix(-0.30901,-0.95105,0.95105,-0.30901,89.49011951994842,565.0183776675252)" datasvgorigin="250 250"><path fill="none" stroke="#111" strokeWidth="1" className="sector" d="M250,250 l250,0 A250,250 0 0,0 452.25424859373686,103.05368692688171 z"></path><use xlinkHref="#icon-4" width="40" height="40" x="391.6795959472656" y="177.4671173095703" transform="rotate(72 411.6795959472656 197.4671173095703)"></use></a>
            {/* <a className="item" id="item-5" xlinkHref="" xlinkTitle="" transform="matrix(-0.80901,-0.58778,0.58778,-0.80901,305.3079355206185,599.2005616668552)" datasvgorigin="250 250"><path fill="none" stroke="#111" strokeWidth="1" className="sector" d="M250,250 l250,0 A250,250 0 0,0 452.25424859373686,103.05368692688171 z"></path><use xlinkHref="#icon-5" width="40" height="40" x="391.6795959472656" y="177.4671173095703" transform="rotate(72 411.6795959472656 197.4671173095703)"></use></a> */}
            <a onClick={this._handleClick} className="item" id="item-5" xlinkHref="" xlinkTitle="" transform="matrix(-0.80901,-0.58778,0.58778,-0.80901,305.3079355206185,599.2005616668552)" datasvgorigin="250 250"><path fill="none" stroke="#111" d="M350,250 l150,0 A250,250 0 0,0 426.7766952966369,73.22330470336314 l-106.06601717798213,106.0660171779821 A100,100 0 0,1 350,250"></path><use xlinkHref="#icon-5" width="40" height="40" x="391.6795959472656" y="177.4671173095703" transform="rotate(72 411.6795959472656 197.4671173095703)"></use></a>
            
          </g>
          <g id="trigger" className="trigger menu-trigger">
            <circle cx="250" cy="250" r="40"></circle>
            <text id="label" textAnchor="middle" x="250" y="247" fill="#fff" fontSize="2em">+</text>
          </g>
        </svg>
      </Wrapper>
    )
  }
}