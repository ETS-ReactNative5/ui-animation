import React from "react";
import styled from "styled-components";
import scrollTo from "utils/scrollTo";
import _ from "lodash";

import Flipping from "flipping/dist/flipping.web.js";
const flipping = new Flipping();

const machine = {
  initial: "normal",
  states: [
    {
      on: { CLICK: "0" }
    }, {
      on: { CLICK: "1" }
    }, {
      on: { CLICK: "2" }
    }, {
      on: { CLICK: "3" }
    }, {
      on: { CLICK: "4" }
    }
  ]
};

const transition = (state, event) => {
  return machine.states[state].on[event] || state;
};
const Navbar = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  margin: 0;
  height: 36px;
  box-sizing: border-box;
  &.navbar::-webkit-scrollbar {
    display: none;
  }

  .navbar-cell {
    .bg {
      display: none;
    }
  }

  &[data-state="0"] {
    .navbar-cell:nth-child(1) {
      .bg {
        display: block;
      }
    }
  }

  &[data-state="1"] {
    .navbar-cell:nth-child(2) {
      .bg {
        display: block;
      }
    }
  }

  &[data-state="2"] {
    .navbar-cell:nth-child(3) {
      .bg {
        display: block;
      }
    }
  }
  &[data-state="3"] {
    .navbar-cell:nth-child(4) {
      .bg {
        display: block;
      }
    }
  }

  &[data-state="4"] {
    .navbar-cell:nth-child(5) {
      .bg {
        display: block;
      }
    }
  }
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
  position: relative;

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
    currentState: `normal`
  };
  _onSelectNavbar = id => {
    this.setState({ activeId: id }, () => {this.send(`click`)});
    // scroll bar.
    let e = document.getElementsByClassName("navbar-cell")[id];
    let parent = document.getElementsByClassName("navbar")[0];
    scrollTo(parent, e.offsetLeft - 3, 350, `scrollLeft`);
  };

  send = event => {
    flipping.read();
    document
      .getElementById(`navbar`)
      .setAttribute("data-state", transition(this.state.activeId, event));
    flipping.flip();
  };

  render() {
    return (
      <Navbar className="navbar" id="navbar" data-state={`0`}>
        {[
          `全部`,
          `捷運圓山站周邊`,
          `臺北市立美術館周邊`,
          `花博舞蝶館周邊`,
          `聖多福教堂周邊`
        ].map((d, id) => (
          <Cell
            key={d}
            id={`cell-${id}`}
            className={
              id === this.state.activeId ? `active navbar-cell` : `navbar-cell`
            }
            onClick={() => this._onSelectNavbar(id)}
          >
            {d}
            <div className="bg" data-flip-key={`bg`} />
          </Cell>
        ))}
      </Navbar>
    );
  }
}
