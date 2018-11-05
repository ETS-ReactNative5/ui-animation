import React from 'react'
import styled from "styled-components";
import { Curtains } from 'curtainsjs';

const FrameWrapper = styled.div`
  display: inline-block;
  height: var(--Peter-Huang-Photo-height);
  width: var(--Peter-Huang-Photo-width);
`
const Frame = styled.div`
  height: 100%;
  width: 100%;
  background: transparent;

  display: grid;
  grid-template-columns: repeat(24, 1fr [col-start]);
  grid-template-rows: repeat(24, 1fr [row-start]);

  @media screen and (max-width: 768px) {}

  .item {
    background: var(--Peter-Huang-Photo-secondary-color);
  }

  .title-item {
    grid-column: col-start 3 / col-start 12;
    grid-row: row-start 4 / row-start 6;
  }
  .photo-item {
    grid-column: col-start 8 / col-start 22;
    grid-row: row-start 12 / row-start 22;
    /* background-image: ${props => props.url ? props.url : `url(${require('assets/peter-huang-photo/cell.jpg')})`}; */
    background-position: center;
    background-size: cover;
    position: relative;

    .label {
      position: absolute;
      bottom: 10px;
      right: -20px;
      width: 50%;
      height: 20%;
      background: var(--Peter-Huang-Photo-secondary-color);
    }
  }
  .bg-item {
    background: linear-gradient(90deg, var(--Peter-Huang-Photo-bg-color) 16px, transparent 1%) center, linear-gradient(var(--Peter-Huang-Photo-bg-color) 16px, transparent 1%) center, var(--Peter-Huang-Photo-secondary-color);
    background-size: 18px 18px;
    grid-column: col-start 7 / col-start 21;
    grid-row: row-start 11 / row-start 21;
  }

`

const Canvas = styled.div`
  /* make the canvas wrapper fits the document */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
const Plane = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    display: none;
  }
`
export default class FrameComponent extends React.Component {
  componentDidMount() {
    this.setShader(this.props.idx)
  }
  setShader = (idx) => {
    const webGLCurtain = new Curtains(`canvas-${idx}`)
    const planeElement = document.getElementsByClassName(`plane-${idx}`)[0]
    
    const params = {
      vertexShaderID: "plane-vs",
      fragmentShaderID: "plane-fs",
      uniforms: {
        time: {
          name: "uTime", // uniform name that will be passed to our shaders
          type: "1f", // this means our uniform is a float
          value: 0,
        },
      }
    }
    const plane = webGLCurtain.addPlane(planeElement, params)
    plane.onRender(() => plane.uniforms.time.value++)
  }
  render() {
    const { idx, src } = this.props
    return (
      <FrameWrapper className="block">
        <Frame>
          <div className="item title-item"></div>
          <div className="item bg-item"></div>
          <div className="item photo-item">
            <Canvas id={`canvas-${idx}`}/>
            <Plane className={`plane-${idx}`}>
              <img src={src} />
            </Plane>
            {/* <div className="label"></div> */}
          </div>
        </Frame>
      </FrameWrapper>
    )
  }
}