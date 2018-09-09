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

let PINK_DOT = `white`
let PINK_BG = `linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%);`

let SILVERBLUE_DOT = `#b8e2ff`
let SILVERBLUE_BG = `linear-gradient(60deg, #abecd6 0%, #fbed96 100%);`

let GOLD_DOT = `#ffe2b8`
let GOLD_BG = `linear-gradient(to bottom, #a3bded 0%, #6991c7 100%)`

let DARK_DOT = `#000`
let DARK_BG = `linear-gradient(120deg, #f093fb 0%, #f5576c 100%);`

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
          {
            title: `Aeroframe™鋁合金車架`,
            content: `100% 鋁合金環保材質，以一體成型沖壓製程，打造「車架下鈑」與「車架內鈑」獨特曲線，並結合航太級無死角黏合技術與中空腔體式車體結構，展現穩固的操控路感。`,
            img: require('assets/gogoro/g1p/gp-feature-04.jpg'),
          },
          {
            title: `可調式全彩智慧儀表板`,
            content: `透過 App 設定高達 129,600 種顏色與動態顯示主題，提供個人化設定選擇，同時能根據環境亮度而自動調節，確保儀表資訊不論是白天或夜晚皆清晰可見。`,
            img: require('assets/gogoro/g1p/gp-feature-07.jpg')
          },
          {
            title: `歐規後牌架及牌照燈`,
            content: `歐規後牌照架，能適用各種不同尺寸的車牌，並且牌照燈上移更加耐用，不易碰傷。`,
            img: require('assets/gogoro/g1p/gp-feature-02.jpg'),
          }
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
          {
            title: `Aeroframe™鋁合金車架`,
            content: `100% 鋁合金環保材質，以一體成型沖壓製程，打造「車架下鈑」與「車架內鈑」獨特曲線，並結合航太級無死角黏合技術與中空腔體式車體結構，展現穩固的操控路感。`,
            img: require('assets/gogoro/g1p/gp-feature-04.jpg'),
          },
          {
            title: `可調式全彩智慧儀表板`,
            content: `透過 App 設定高達 129,600 種顏色與動態顯示主題，提供個人化設定選擇，同時能根據環境亮度而自動調節，確保儀表資訊不論是白天或夜晚皆清晰可見。`,
            img: require('assets/gogoro/g1p/gp-feature-07.jpg')
          },
          {
            title: `歐規後牌架及牌照燈`,
            content: `歐規後牌照架，能適用各種不同尺寸的車牌，並且牌照燈上移更加耐用，不易碰傷。`,
            img: require('assets/gogoro/g1p/gp-feature-02.jpg'),
          }
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
  g1s: {
    title: `Gogoro S1`,
    price: `$95,000 起`,
    list: {
      white: {
        color: WHITE_DOT,
        bgColor: DARK_BG,
        img: [
          [
            require('assets/gogoro/gs/dark/gs-a1-base.png'),
            require('assets/gogoro/gs/dark/gs-a1-visor-std.png'),
            require('assets/gogoro/gs/dark/gs-a1-shellf-stdgraphite.png'),
            require('assets/gogoro/gs/dark/gs-a1-seatex-stdgraphite.png'),
          ],
          [
            require('assets/gogoro/gs/dark/gs-a2-base.png'),
            require('assets/gogoro/gs/dark/gs-a2-visor-std.png'),
            require('assets/gogoro/gs/dark/gs-a2-shellf-stdgraphite.png'),
            require('assets/gogoro/gs/dark/gs-a2-seatex-stdgraphite.png'),
          ],
          [
            require('assets/gogoro/gs/dark/gs-a3-base.png'),
            require('assets/gogoro/gs/dark/gs-a3-visor-std.png'),
            require('assets/gogoro/gs/dark/gs-a3-shellf-stdgraphite.png'),
            require('assets/gogoro/gs/dark/gs-a3-seatex-stdgraphite.png'),
          ]
        ],
        feature: [
          {
            title: `無邊界儀表板 / 燻黑風鏡`,
            content: `無邊界設計的全彩顯示字幕，不只醒目，更是賞心悅目。顏色加深的燻黑風鏡，除能引導緩和風阻之外，還能減低儀表板反光。`,
            img: require('assets/gogoro/gs/feature-01.jpg'),
          },
          {
            title: `燻黑煞車燈罩`,
            content: `有效提升煞車燈的垂直可視角度，安全更有保障，並以燻黑鏡片配合 Gogoro S1 的深色車架，更顯一體成型的質感。`,
            img: require('assets/gogoro/gs/feature-02.jpg')
          },
          {
            title: `G1 - S 馬達`,
            content: `馬力提升至 7.2 kW，輪上扭力高達 202 Nm；0 ~ 50km/h 直線加速最快僅 3.7 秒。`,
            img: require('assets/gogoro/gs/feature-03.jpg'),
          }
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
          {
            title: `大容量置物箱`,
            content: `輕鬆納入兩頂 ¾ 罩安全帽，創造收納最大值，通勤或旅遊都罩得住。`,
            img: require('assets/gogoro/g2/feature-01.jpg'),
          },
          {
            title: `雙人大座墊`,
            content: `沙發般舒適的加長座墊，更充裕的後座空間，兩人距離，自由決定。`,
            img: require('assets/gogoro/g2/feature-02.jpg')
          },
          {
            title: `隱藏式擴充點`,
            content: `多個配件擴充點完美的隱藏在車身各處的設計中，不論極簡或裝滿配件都一樣美。`,
            img: require('assets/gogoro/g2/feature-03.jpg'),
          }
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
          {
            title: `全彩智慧儀表板`,
            content: `全彩 LED 指示環，以不同顏色與動態顯示各種資訊，也提供個人化設定與多種模式選擇，兼具美觀與功能性。`,
            img: require('assets/gogoro/g2p/feature-01.jpg'),
          },
          {
            title: `過彎感應方向燈`,
            content: `轉過彎後，方向燈會感應方位角度的改變並自動關閉，你只要負責轉彎，其他的放心交給 Gogoro。`,
            img: require('assets/gogoro/g2p/feature-02.jpg')
          },
          {
            title: `前後光環式定位燈`,
            content: `標誌性的光環造型，有效提升可視度，不管白天黑夜，更加安全有型。`,
            img: require('assets/gogoro/g2p/feature-03.jpg'),
          }
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
            require('assets/gogoro/g2/white/z-a2-rearrack-std.png'),
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
  gs2: {
    title: `Gogoro S2`,
    price: `$61,800 起`,
    list: {
      white: {
        color: WHITE_DOT,
        bgColor: DARK_BG,
        img: [
          [
            require('assets/gogoro/gs2/dark/s2-a1-base.png'),
            require('assets/gogoro/gs2/dark/s2-a1-handle-std.png'),
            require('assets/gogoro/gs2/dark/s2-a1-backwheel-std.png'),
            require('assets/gogoro/gs2/dark/s2-a1-rearrack-std.png'),
            require('assets/gogoro/gs2/dark/s2-a1-frontwheel-stdgraphite.png'),
            require('assets/gogoro/gs2/dark/s2-a1-body-stdgraphite.png'),
          ],
          [
            require('assets/gogoro/gs2/dark/s2-a2-base.png'),
            require('assets/gogoro/gs2/dark/s2-a2-handle-std.png'),
            require('assets/gogoro/gs2/dark/s2-a2-backwheel-std.png'),
            require('assets/gogoro/gs2/dark/s2-a2-rearrack-std.png'),
            require('assets/gogoro/gs2/dark/s2-a2-frontwheel-stdgraphite.png'),
            require('assets/gogoro/gs2/dark/s2-a2-body-stdgraphite.png'),
          ],
          [
            require('assets/gogoro/gs2/dark/s2-a3-base.png'),
            require('assets/gogoro/gs2/dark/s2-a3-handle-std.png'),
            require('assets/gogoro/gs2/dark/s2-a3-backwheel-std.png'),
            require('assets/gogoro/gs2/dark/s2-a3-rearrack-std.png'),
            require('assets/gogoro/gs2/dark/s2-a3-frontwheel-stdgraphite.png'),
            require('assets/gogoro/gs2/dark/s2-a3-body-stdgraphite.png'),
          ]
        ],
        feature: [
          {
            title: `燻黑跑格風鏡`,
            content: `以影子與黑鉛石墨為靈感，讓完美弧形的外型更顯深度與力度，收斂成熱血的跑格線條。`,
            img: require('assets/gogoro/gs2/feature-01.png'),
          },
          {
            title: `裸裎風格握把`,
            content: `Gogoro S2 獨特的裸把風格充分體現在流線型的設計細節中，以更具穿透力的視覺，展現來自核心的熱血靈魂。`,
            img: require('assets/gogoro/gs2/feature-02.png')
          },
          {
            title: `S Performance 高止滑座墊`,
            content: `柔軟服貼的前座可強力支撐著騎士，加厚的後座則讓乘客備感舒適，在美感與舒適間達到完美平衡，伴你輕鬆地完成每一段征途。`,
            img: require('assets/gogoro/gs2/feature-03.png'),
          }
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
          {
            title: `鏡面電鍍細節`,
            content: `電鍍的後照鏡、後扶手、飛旋踏板，搭配燻黑的鏈條蓋，呈現內斂成熟的穩重感，你的移動風格，由你定義。`,
            img: require('assets/gogoro/g2d/feature-01.jpg'),
          },
          {
            title: `細緻仿皮座椅、浮雕鋁製徽章、珍珠光澤烤漆車身`,
            content: `精工細琢的仿皮座椅、層次分明的浮雕鋁製徽章、突顯立體感的珍珠光澤烤漆車身，打造獨特的自我風格。`,
            img: require('assets/gogoro/g2d/feature-02.jpg')
          },
          {
            title: `加亮 LED 頭燈`,
            content: `規格升級的 LED 頭燈，照明亮度及廣度顯著性提高，安全性再進化。`,
            img: require('assets/gogoro/g2d/feature-03.jpg'),
          }
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
  },
  g2dl: {
    title: `Gogoro 2 Delight`,
    price: `$49,800 起`,
    list: {
      white: {
        color: PINK_DOT,
        bgColor: PINK_BG,
        img: [
          [
            require('assets/gogoro/g2dl/pink/g2dl-a1-base.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a1-body-stdpink.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a1-frontwheel-stdpink.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a1-backwheel-std.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a1-handle-stdpink.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a1-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2dl/pink/g2dl-a2-base.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a2-body-stdpink.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a2-frontwheel-stdpink.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a2-backwheel-std.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a2-handle-stdpink.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a2-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2dl/pink/g2dl-a3-base.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a3-body-stdpink.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a3-frontwheel-stdpink.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a3-backwheel-std.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a3-handle-stdpink.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a3-rearrack-std.png'),
          ]
        ],
        feature: [
          {
            title: `流線設計，加大視野`,
            content: `輕盈與流線的儀表總成，以更加簡約的空間，提供更大的路面視野；微調後的握把，讓行進操控更得心應手。`,
            img: require('assets/gogoro/g2dl/feature-01.jpg'),
          },
          {
            title: `12 吋輪圈，降低座高`,
            content: `相較於歐規大輪圈，Gogoro 2 Delight 採用較小的 12 吋鋁合金輪圈，打造能適應各種體型的座位高度，騎得更自在輕易。`,
            img: require('assets/gogoro/g2dl/feature-02.jpg')
          },
          {
            title: `新駐車架，省力停車`,
            content: `專為 Gogoro 2 Delight 開發的省力駐車架，透過結構與重量配置，讓停車變得更輕鬆容易。每次停駐，都是優雅的止步。`,
            img: require('assets/gogoro/g2dl/feature-03.jpg'),
          }
        ]
      },
      blue: {
        color: SILVERBLUE_DOT,
        bgColor: SILVERBLUE_BG,
        img: [
          [
            require('assets/gogoro/g2dl/pink/g2dl-a1-base.png'),
            require('assets/gogoro/g2dl/silverblue/g2dl-a1-body-stdsilverblue.png'),
            require('assets/gogoro/g2dl/silverblue/g2dl-a1-frontwheel-stdsilverblue.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a1-backwheel-std.png'),
            require('assets/gogoro/g2dl/silverblue/g2dl-a1-handle-stdsilverblue.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a1-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2dl/pink/g2dl-a2-base.png'),
            require('assets/gogoro/g2dl/silverblue/g2dl-a2-body-stdsilverblue.png'),
            require('assets/gogoro/g2dl/silverblue/g2dl-a2-frontwheel-stdsilverblue.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a2-backwheel-std.png'),
            require('assets/gogoro/g2dl/silverblue/g2dl-a2-handle-stdsilverblue.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a2-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2dl/pink/g2dl-a3-base.png'),
            require('assets/gogoro/g2dl/silverblue/g2dl-a3-body-stdsilverblue.png'),
            require('assets/gogoro/g2dl/silverblue/g2dl-a3-frontwheel-stdsilverblue.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a3-backwheel-std.png'),
            require('assets/gogoro/g2dl/silverblue/g2dl-a3-handle-stdsilverblue.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a3-rearrack-std.png'),
          ]
        ],
        feature: [
          require('assets/gogoro/g1p/gp-feature-02.jpg'),
          require('assets/gogoro/g1p/gp-feature-04.jpg'),
          require('assets/gogoro/g1p/gp-feature-07.jpg')
        ]
      },
      gold: {
        color: GOLD_DOT,
        bgColor: GOLD_BG,
        img: [
          [
            require('assets/gogoro/g2dl/pink/g2dl-a1-base.png'),
            require('assets/gogoro/g2dl/gold/g2dl-a1-body-stdgold.png'),
            require('assets/gogoro/g2dl/gold/g2dl-a1-frontwheel-stdgold.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a1-backwheel-std.png'),
            require('assets/gogoro/g2dl/gold/g2dl-a1-handle-stdgold.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a1-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2dl/pink/g2dl-a2-base.png'),
            require('assets/gogoro/g2dl/gold/g2dl-a2-body-stdgold.png'),
            require('assets/gogoro/g2dl/gold/g2dl-a2-frontwheel-stdgold.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a2-backwheel-std.png'),
            require('assets/gogoro/g2dl/gold/g2dl-a2-handle-stdgold.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a2-rearrack-std.png'),
          ],
          [
            require('assets/gogoro/g2dl/pink/g2dl-a3-base.png'),
            require('assets/gogoro/g2dl/gold/g2dl-a3-body-stdgold.png'),
            require('assets/gogoro/g2dl/gold/g2dl-a3-frontwheel-stdgold.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a3-backwheel-std.png'),
            require('assets/gogoro/g2dl/gold/g2dl-a3-handle-stdgold.png'),
            require('assets/gogoro/g2dl/pink/g2dl-a3-rearrack-std.png'),
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