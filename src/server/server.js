import renderer from "./renderer"
import createStore from "../store/createStore"
import flushChunks from 'webpack-flush-chunks';
import { matchRoutes } from "react-router-config"
import Routes from '../client/Routes';

export default ({ clientStats }) => (req, res) => {
  const store = createStore()
  const { js } = flushChunks(clientStats, { chunkNames: [] })

  const routes = matchRoutes(Routes, req.path);
  const promises = routes.map(({ route, match }) => {
    return route.loadData ? route.loadData(store, match.params) : null
  }).map(promise => {
    if(promise)
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(resolve)
      })
    return null
  })

  Promise.all(promises).then(() => {
    const markup = renderer(req, store, {js})
    res.send(markup)
  })
}
