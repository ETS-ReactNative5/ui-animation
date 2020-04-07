import HMap from "../layouts/horizontal-map/index.jsx"
import GMA29 from "../layouts/taiwan-golden-melody-awards-29/index.jsx"
import Gogoro from "../layouts/gogoro-market/index.jsx"
import Nuit from "../layouts/nuit-blanche/index.jsx"
import PeterHuangPhoto from '../layouts/peter-huang-photo'
import Design4x4x2018 from '../layouts/design-4x4x2018'
import TheWorldBetweenUs from '../layouts/the-world-between-us'

const indexRoutes = [{
    path: "/1", component: HMap
  }, {
    path: "/2", component: GMA29
  }, {
    path: "/3", component: Gogoro
  }, {
    path: "/4", component: Nuit
  },
  // {
  //   path: "/5", component: PeterHuangPhoto
  // },
  {
    path: "/6", component: Design4x4x2018
  }, 
  // {
  //   path: "/7", component: TheWorldBetweenUs
  // }
]
// const indexRoutes = [{ path: "/", component: HMap }]

export default indexRoutes
