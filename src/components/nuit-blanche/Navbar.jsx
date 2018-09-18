import React from "react";
import styled from "styled-components";
import scrollTo from "utils/scrollTo";
import Flipping from "flipping/dist/flipping.web.js";
const flipping = new Flipping();
const place = [`全部`, `捷運圓山站周邊`, `臺北市立美術館周邊`, `花博舞蝶館周邊`, `聖多福教堂周邊`]

const childHelper = (id) => {
  let _id = parseInt(id[0])
  return `
    &[data-state="${_id}"] {
      .navbar-cell:nth-child(${_id + 1}) {
        .bg {
          display: block;
        }
      }
    }
  `
}
const Navbar = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  margin: 0;
  height: 36px;
  box-sizing: border-box;
  position: relative;

  &.navbar::-webkit-scrollbar {
    display: none;
  }

  .navbar-cell {
    .bg {
      display: none;
    }
  }

  ${ childHelper`0` }
  ${ childHelper`1` }
  ${ childHelper`2` }
  ${ childHelper`3` }
  ${ childHelper`4` }
  ${ childHelper`5` }
`;

const Cell = styled.div`
  margin: 0 2.5px;
  padding: 5px 15px;
  color: #50514f;
  flex-shrink: 0;
  cursor: pointer;
  background: transparent;
  opacity: 0.75;
  font-size: 16px;
  font-weight: bold;

  &.active {
    opacity: 1;
    color: #fff;
    transition: all 0.25s ease;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: #3d3d3d;
    z-index: -1;
  }
`;

export default class NavbarComponent extends React.Component {
  state = {
    activeId: 0,
    currentState: `normal`,
    machine: {}
  };

  componentDidMount () {
    let { machine } = this.state
    machine[`states`] = place.map((p, id) => id)
    this.setState({ machine })
  }
  _onSelectNavbar = id => {
    this.setState({ activeId: id }, () => {this.send()});
    // scroll bar.
    let e = document.getElementsByClassName("navbar-cell")[id];
    let parent = document.getElementsByClassName("navbar")[0];
    scrollTo(parent, e.offsetLeft - 3, 350, `scrollLeft`);
  };

  send = () => {
    flipping.read();
    document
      .getElementById(`navbar`)
      .setAttribute("data-state", this.transition(this.state.activeId));
    flipping.flip();
  };
  
  transition = (state) => {
    return this.state.machine.states[state] || state;
  };

  render() {    
    return (
      <Navbar className="navbar" id="navbar" data-state={`0`}>
        {place.map((d, id) => (
          <Cell
            key={d}
            id={`cell-${id}`}
            className={id === this.state.activeId ? `active navbar-cell` : `navbar-cell`}
            onClick={() => this._onSelectNavbar(id)}>
            {d}
            <div className="bg" data-flip-key={`bg`} />
          </Cell>
        ))}
      </Navbar>
    );
  }
}
