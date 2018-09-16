import HMap from "../layouts/horizontal-map/index.jsx"
import GMA29 from "../layouts/taiwan-golden-melody-awards-29/index.jsx"
import Gogoro from "../layouts/gogoro-market/index.jsx"
import Nuit from "../layouts/nuit-blanche/index.jsx"

const indexRoutes = [{
    path: "/1", component: HMap
  }, {
    path: "/2", component: GMA29
  }, {
    path: "/3", component: Gogoro
  }, {
    path: "/4", component: Nuit
  }]
// const indexRoutes = [{ path: "/", component: HMap }]

export default indexRoutes
