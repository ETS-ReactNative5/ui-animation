let WHITE_BG = `#FFDA56`
let WHITE_DOT = `white`

let BLACK_BG = `#EEE`
let BLACK_DOT = `#50514F`

let ORANGE_BG = `#6BAAFF`
let ORANGE_DOT = `#FFA06D`

let YELLOW_BG = `#90e5ee`
let YELLOW_DOT = `#F7E302`

let BLUE_BG = `#ee8080`
let BLUE_DOT = `#43D8FF`

let MINT_DOT = `white`
let MINT_BG = `linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);`
let GREY_BG = `linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%), linear-gradient(to bottom, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.02) 61%, rgba(0,0,0,0.02) 73%), linear-gradient(33deg, rgba(255,255,255,0.20) 0%, rgba(0,0,0,0.20) 100%); background-blend-mode: normal,color-burn;`

export const Gogoro = {
  g1: {
    title: `Gogoro 1`,
    price: `$74,000 起`,
    list: {
      white: {
        color: WHITE_DOT,
        bgColor: WHITE_BG,
        img: [
          [
            require('assets/gogoro/g1/white/g-a1-base.png'),
            require('assets/gogoro/g1/white/g-a1-seatex-stdwhite.png'),
            require('assets/gogoro/g1/white/g-a1-shellf-stdwhite.png'),
            require('assets/gogoro/g1/white/g-a1-visor-std.png')
          ],
          [
            require('assets/gogoro/g1/white/g-a2-base.png'),
            require('assets/gogoro/g1/white/g-a2-seatex-stdwhite.png'),
            require('assets/gogoro/g1/white/g-a2-shellf-stdwhite.png'),
            require('assets/gogoro/g1/white/g-a2-visor-std.png')
          ]
        ],
        feature: [
          require('assets/gogoro/g1p/gp-feature-02.jpg'),
          require('assets/gogoro/g1p/gp-feature-04.jpg'),
          require('assets/gogoro/g1p/gp-feature-07.jpg')
        ]
      },
      black: {
        color: BLACK_DOT,
        bgColor: BLACK_BG,
        img: [
          [
            require('assets/gogoro/g1/white/g-a1-base.png'),
            require('assets/gogoro/g1/black/g-a1-seatex-stdmidnight.png'),
            require('assets/gogoro/g1/black/g-a1-shellf-stdmidnight.png'),
            require('assets/gogoro/g1/white/g-a1-visor-std.png')
          ],
          [
            require('assets/gogoro/g1/white/g-a2-base.png'),
            require('assets/gogoro/g1/black/g-a2-seatex-stdmidnight.png'),
            require('assets/gogoro/g1/black/g-a2-shellf-stdmidnight.png'),
            require('assets/gogoro/g1/white/g-a2-visor-std.png')
          ]
        ]
      }
    }
  },
  gp1: {
    title: `Gogoro 1 Plus`,
    price: `$84,000 起`,
    list: {
      white: {
        color: WHITE_DOT,
        bgColor: WHITE_BG,
        img: [
          [
            require('assets/gogoro/g1p/white/gp-a1-base.png'),
            require('assets/gogoro/g1p/white/gp-a1-seatex-stdwhite.png'),
            require('assets/gogoro/g1p/white/gp-a1-shellf-stdwhite.png'),
            require('assets/gogoro/g1p/white/gp-a1-visor-std.png')
          ],
          [
            require('assets/gogoro/g1p/white/gp-a3-base.png'),
            require('assets/gogoro/g1p/white/gp-a3-seatex-stdwhite.png'),
            require('assets/gogoro/g1p/white/gp-a3-shellf-stdwhite.png'),
            require('assets/gogoro/g1p/white/gp-a3-visor-std.png')
          ]
        ],
        feature: [
          require('assets/gogoro/g1p/gp-feature-02.jpg'),
          require('assets/gogoro/g1p/gp-feature-04.jpg'),
          require('assets/gogoro/g1p/gp-feature-07.jpg')
        ]
      },
      orange: {
        color: ORANGE_DOT,
        bgColor: ORANGE_BG,
        img: [
          [
            require('assets/gogoro/g1p/white/gp-a1-base.png'),
            require('assets/gogoro/g1p/orange/gp-a1-seatex-stdorange.png'),
            require('assets/gogoro/g1p/orange/gp-a1-shellf-stdorange.png'),
            require('assets/gogoro/g1p/white/gp-a1-visor-std.png')
          ],
          [
            require('assets/gogoro/g1p/white/gp-a3-base.png'),
            require('assets/gogoro/g1p/orange/gp-a3-seatex-stdorange.png'),
            require('assets/gogoro/g1p/white/gp-a3-shellf-stdwhite.png'),
            require('assets/gogoro/g1p/white/gp-a3-visor-std.png')
          ]
        ]
      }
    }
  },
  g2: {
    title: `Gogoro 2`,
    price: `$39,800 起`,
    list: {
      white: {
        color: WHITE_DOT,
        bgColor: WHITE_BG,
        img: [
          [
            require('assets/gogoro/g2/white/g2-a1-base.png'),
            require('assets/gogoro/g2/white/g2-a1-body-stdwhite.png'),
            require('assets/gogoro/g2/white/g2-a1-frontwheel-stdwhite.png'),
            require('assets/gogoro/g2/white/g2-a1-backwheel-std.png'),
            require('assets/gogoro/g2/white/g2-a1-handle-std.png'),
            require('assets/gogoro/g2/white/z-a1-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2/white/g2-a2-base.png'),
            require('assets/gogoro/g2/white/g2-a2-body-stdwhite.png'),
            require('assets/gogoro/g2/white/g2-a2-frontwheel-stdwhite.png'),
            require('assets/gogoro/g2/white/g2-a2-backwheel-std.png'),
            require('assets/gogoro/g2/white/g2-a2-handle-std.png'),
            require('assets/gogoro/g2/white/z-a2-rearrack-std.png'),
          ]
        ],
        feature: [
          require('assets/gogoro/g1p/gp-feature-02.jpg'),
          require('assets/gogoro/g1p/gp-feature-04.jpg'),
          require('assets/gogoro/g1p/gp-feature-07.jpg')
        ]
      },
      black: {
        color: BLACK_DOT,
        bgColor: BLACK_BG,
        img: [
          [
            require('assets/gogoro/g2/white/g2-a1-base.png'),
            require('assets/gogoro/g2/black/g2-a1-body-stdmidnight.png'),
            require('assets/gogoro/g2/black/g2-a1-frontwheel-stdmidnight.png'),
            require('assets/gogoro/g2/white/g2-a1-backwheel-std.png'),
            require('assets/gogoro/g2/white/g2-a1-handle-std.png'),
            require('assets/gogoro/g2/white/z-a1-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2/white/g2-a2-base.png'),
            require('assets/gogoro/g2/black/g2-a2-body-stdmidnight.png'),
            require('assets/gogoro/g2/black/g2-a2-frontwheel-stdmidnight.png'),
            require('assets/gogoro/g2/white/g2-a2-backwheel-std.png'),
            require('assets/gogoro/g2/white/g2-a2-handle-std.png'),
            require('assets/gogoro/g2/white/z-a2-rearrack-std.png'),
          ]
        ]
      }
    }
  },
  g2p: {
    title: `Gogoro 2 Plus`,
    price: `$45,800 起`,
    list: {
      white: {
        color: WHITE_DOT,
        bgColor: WHITE_BG,
        img: [
          [
            require('assets/gogoro/g2p/white/gp2-a1-base.png'),
            require('assets/gogoro/g2p/white/gp2-a1-body-stdwhite.png'),
            require('assets/gogoro/g2p/white/gp2-a1-frontwheel-stdwhite.png'),
            require('assets/gogoro/g2p/white/gp2-a1-backwheel-std.png'),
            require('assets/gogoro/g2p/white/gp2-a1-handle-std.png'),
            require('assets/gogoro/g2/white/z-a1-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2p/white/gp2-a2-base.png'),
            require('assets/gogoro/g2p/white/gp2-a2-body-stdwhite.png'),
            require('assets/gogoro/g2p/white/gp2-a2-frontwheel-stdwhite.png'),
            require('assets/gogoro/g2p/white/gp2-a2-backwheel-std.png'),
            require('assets/gogoro/g2p/white/gp2-a2-handle-std.png'),
            require('assets/gogoro/g2/white/z-a2-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2p/white/gp2-a3-base.png'),
            require('assets/gogoro/g2p/white/gp2-a3-body-stdwhite.png'),
            require('assets/gogoro/g2p/white/gp2-a3-frontwheel-stdwhite.png'),
            require('assets/gogoro/g2p/white/gp2-a3-backwheel-std.png'),
            require('assets/gogoro/g2p/white/gp2-a3-handle-std.png'),
            require('assets/gogoro/g2/white/z-a3-rearrack-std.png'),
          ]
        ],
        feature: [
          require('assets/gogoro/g1p/gp-feature-02.jpg'),
          require('assets/gogoro/g1p/gp-feature-04.jpg'),
          require('assets/gogoro/g1p/gp-feature-07.jpg')
        ]
      },
      orange: {
        color: ORANGE_DOT,
        bgColor: ORANGE_BG,
        img: [
          [
            require('assets/gogoro/g2p/white/gp2-a1-base.png'),
            require('assets/gogoro/g2p/orange/gp2-a1-body-stdorange.png'),
            require('assets/gogoro/g2p/orange/gp2-a1-frontwheel-stdorange.png'),
            require('assets/gogoro/g2p/white/gp2-a1-backwheel-std.png'),
            require('assets/gogoro/g2p/white/gp2-a1-handle-std.png'),
            require('assets/gogoro/g2/white/z-a1-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2p/white/gp2-a2-base.png'),
            require('assets/gogoro/g2p/orange/gp2-a2-body-stdorange.png'),
            require('assets/gogoro/g2p/orange/gp2-a2-frontwheel-stdorange.png'),
            require('assets/gogoro/g2p/white/gp2-a2-backwheel-std.png'),
            require('assets/gogoro/g2p/white/gp2-a2-handle-std.png'),
            require('assets/gogoro/g2/white/z-a2-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2p/white/gp2-a3-base.png'),
            require('assets/gogoro/g2p/orange/gp2-a3-body-stdorange.png'),
            require('assets/gogoro/g2p/orange/gp2-a3-frontwheel-stdorange.png'),
            require('assets/gogoro/g2p/white/gp2-a3-backwheel-std.png'),
            require('assets/gogoro/g2p/white/gp2-a3-handle-std.png'),
            require('assets/gogoro/g2/white/z-a3-rearrack-std.png'),
          ]
        ]
      },
      yellow: {
        color: YELLOW_DOT,
        bgColor: YELLOW_BG,
        img: [
          [
            require('assets/gogoro/g2p/white/gp2-a1-base.png'),
            require('assets/gogoro/g2p/yellow/gp2-a1-body-stdyellow.png'),
            require('assets/gogoro/g2p/yellow/gp2-a1-frontwheel-stdyellow.png'),
            require('assets/gogoro/g2p/white/gp2-a1-backwheel-std.png'),
            require('assets/gogoro/g2p/white/gp2-a1-handle-std.png'),
            require('assets/gogoro/g2/white/z-a1-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2p/white/gp2-a2-base.png'),
            require('assets/gogoro/g2p/yellow/gp2-a2-body-stdyellow.png'),
            require('assets/gogoro/g2p/yellow/gp2-a2-frontwheel-stdyellow.png'),
            require('assets/gogoro/g2p/white/gp2-a2-backwheel-std.png'),
            require('assets/gogoro/g2p/white/gp2-a2-handle-std.png'),
            require('assets/gogoro/g2/white/z-a3-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2p/white/gp2-a3-base.png'),
            require('assets/gogoro/g2p/yellow/gp2-a3-body-stdyellow.png'),
            require('assets/gogoro/g2p/yellow/gp2-a3-frontwheel-stdyellow.png'),
            require('assets/gogoro/g2p/white/gp2-a3-backwheel-std.png'),
            require('assets/gogoro/g2p/white/gp2-a3-handle-std.png'),
            require('assets/gogoro/g2/white/z-a3-rearrack-std.png'),
          ]
        ]
      },
      blue: {
        color: BLUE_DOT,
        bgColor: BLUE_BG,
        img: [
          [
            require('assets/gogoro/g2p/white/gp2-a1-base.png'),
            require('assets/gogoro/g2p/blue/gp2-a1-body-stdblue.png'),
            require('assets/gogoro/g2p/blue/gp2-a1-frontwheel-stdblue.png'),
            require('assets/gogoro/g2p/white/gp2-a1-backwheel-std.png'),
            require('assets/gogoro/g2p/white/gp2-a1-handle-std.png'),
            require('assets/gogoro/g2/white/z-a1-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2p/white/gp2-a2-base.png'),
            require('assets/gogoro/g2p/blue/gp2-a2-body-stdblue.png'),
            require('assets/gogoro/g2p/blue/gp2-a2-frontwheel-stdblue.png'),
            require('assets/gogoro/g2p/white/gp2-a2-backwheel-std.png'),
            require('assets/gogoro/g2p/white/gp2-a2-handle-std.png'),
            require('assets/gogoro/g2/white/z-a2-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2p/white/gp2-a3-base.png'),
            require('assets/gogoro/g2p/blue/gp2-a3-body-stdblue.png'),
            require('assets/gogoro/g2p/blue/gp2-a3-frontwheel-stdblue.png'),
            require('assets/gogoro/g2p/white/gp2-a3-backwheel-std.png'),
            require('assets/gogoro/g2p/white/gp2-a3-handle-std.png'),
            require('assets/gogoro/g2/white/z-a3-rearrack-std.png'),
          ]
        ]
      }
    }
  },
  g2d: {
    title: `Gogoro 2 Deluxe`,
    price: `$52,800 起`,
    list: {
      white: {
        color: MINT_DOT,
        bgColor: MINT_BG,
        img: [
          [
            require('assets/gogoro/g2d/mint/gd2-a1-base.png'),
            require('assets/gogoro/g2d/mint/gd2-a1-body-stdmint.png'),
            require('assets/gogoro/g2d/mint/gd2-a1-frontwheel-stdmint.png'),
            require('assets/gogoro/g2d/mint/gd2-a1-backwheel-std.png'),
            require('assets/gogoro/g2d/mint/gd2-a1-handle-std.png'),
            require('assets/gogoro/g2/white/z-a1-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2d/mint/gd2-a2-base.png'),
            require('assets/gogoro/g2d/mint/gd2-a2-body-stdmint.png'),
            require('assets/gogoro/g2d/mint/gd2-a2-frontwheel-stdmint.png'),
            require('assets/gogoro/g2d/mint/gd2-a2-backwheel-std.png'),
            require('assets/gogoro/g2d/mint/gd2-a2-handle-std.png'),
            require('assets/gogoro/g2/white/z-a2-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2d/mint/gd2-a3-base.png'),
            require('assets/gogoro/g2d/mint/gd2-a3-body-stdmint.png'),
            require('assets/gogoro/g2d/mint/gd2-a3-frontwheel-stdmint.png'),
            require('assets/gogoro/g2d/mint/gd2-a3-backwheel-std.png'),
            require('assets/gogoro/g2d/mint/gd2-a3-handle-std.png'),
            require('assets/gogoro/g2/white/z-a3-rearrack-std.png'),
          ]
        ],
        feature: [
          require('assets/gogoro/g1p/gp-feature-02.jpg'),
          require('assets/gogoro/g1p/gp-feature-04.jpg'),
          require('assets/gogoro/g1p/gp-feature-07.jpg')
        ]
      },
      black: {
        color: BLACK_DOT,
        bgColor: GREY_BG,
        img: [
          [
            require('assets/gogoro/g2d/mint/gd2-a1-base.png'),
            require('assets/gogoro/g2d/dynamogrey/gd2-a1-body-stddynamogrey.png'),
            require('assets/gogoro/g2d/dynamogrey/gd2-a1-frontwheel-stddynamogrey.png'),
            require('assets/gogoro/g2d/mint/gd2-a1-backwheel-std.png'),
            require('assets/gogoro/g2d/mint/gd2-a1-handle-std.png'),
            require('assets/gogoro/g2/white/z-a1-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2d/mint/gd2-a2-base.png'),
            require('assets/gogoro/g2d/dynamogrey/gd2-a2-body-stddynamogrey.png'),
            require('assets/gogoro/g2d/dynamogrey/gd2-a2-frontwheel-stddynamogrey.png'),
            require('assets/gogoro/g2d/mint/gd2-a2-backwheel-std.png'),
            require('assets/gogoro/g2d/mint/gd2-a2-handle-std.png'),
            require('assets/gogoro/g2/white/z-a2-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2d/mint/gd2-a3-base.png'),
            require('assets/gogoro/g2d/dynamogrey/gd2-a3-body-stddynamogrey.png'),
            require('assets/gogoro/g2d/dynamogrey/gd2-a3-frontwheel-stddynamogrey.png'),
            require('assets/gogoro/g2d/mint/gd2-a3-backwheel-std.png'),
            require('assets/gogoro/g2d/mint/gd2-a3-handle-std.png'),
            require('assets/gogoro/g2/white/z-a3-rearrack-std.png'),
          ]
        ],
        feature: [
          require('assets/gogoro/g1p/gp-feature-02.jpg'),
          require('assets/gogoro/g1p/gp-feature-04.jpg'),
          require('assets/gogoro/g1p/gp-feature-07.jpg')
        ]
      },
    }
  }
}