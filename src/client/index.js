import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import StyleContext from 'isomorphic-style-loader/StyleContext'
import reducers from "./reducers"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import { renderRoutes } from "react-router-config"
import Routes from "./Routes"
import { Helmet } from "react-helmet"

const state = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createStore(reducers, state, applyMiddleware(thunk))

const insertCss = (...styles) => {
  const removeCss = styles.map(x => x._insertCss())
  return () => {
    removeCss.forEach(f => f())
  }
}

const App = ({ location = "/" }) => (
  <StyleContext.Provider value={{ insertCss }}>
    <Provider store={store}>
      <Helmet titleTemplate="%s | Template" defaultTitle="Template React">
        <meta name="description" content="Template Webpack combined with React SSR and Isomorphic Style Loader" />
      </Helmet>
      <BrowserRouter>
        {renderRoutes(Routes)}
      </BrowserRouter>
    </Provider>
  </StyleContext.Provider>
)

let isInitialRender = true

const renderReactApp = isInitialRender ? ReactDOM.hydrate : ReactDOM.render
renderReactApp(
  <App />,
  document.getElementById('app'),
  () => {
    if (isInitialRender) {
      isInitialRender = !isInitialRender
      const elem = document.getElementById('css');
      if (elem) elem.parentNode.removeChild(elem);
      return;
    }
  }
)

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef
}