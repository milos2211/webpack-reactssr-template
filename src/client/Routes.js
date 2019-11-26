import HomePage from "./pages/Home/Home"
import Offline from "./pages/Offline/Offline"

import DefaultLayout from "./layout/DefaultLayout"
import Post from "./pages/Post/Post"


export default [
  {
    ...DefaultLayout,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...Offline,
        path: "/offline",
        exact: true,
      },
      {
        ...Post,
        path: "/posts/:url",
        exact: true
      }
    ]
  }
]
