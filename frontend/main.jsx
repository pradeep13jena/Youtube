import { createRoot } from 'react-dom/client'
import App from './src/components/App'
import "./src/styles/index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Playlist from './src/components/Playlist'
import Channel from './src/components/Channel'
import Home from './src/components/Home'
import Watch from './src/components/Watch'
import { store } from './src/features/store'
import { Provider } from 'react-redux'
import Account from './src/components/Account'
import Subscription from './src/components/Subscription'
import Playlistseen from './src/components/Playlistseen'
import Channelseen from './src/components/Channelseen'
import ChannelOwner from './src/components/ChannelOwner'
import Signin from './src/components/Signin'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }, 
      {
        path: "/watch",
        element: <Watch/>
      },
      {
        path: '/channel/:channel',
        element: <Channel/>
      },
      {
        path: '/feed/playlists',
        element: <Playlistseen/>
      },
      {
        path: '/feed/channels',
        element: <Channelseen/>
      },
      {
        path: '/feed/subscriptions',
        element: <Subscription/>
      },
      {
        path: "/playlist/:playlist",
        element: <Playlist/>
      },
      {
        path: '/feed/you',
        element: <Account/>
      },
      {
        path: '/owner/:channel',
        element: <ChannelOwner/>
      },
      {
        path: '/signin',
        element: <Signin/>
      }
    ]
  }
])

const root = createRoot(document.getElementById("root"))

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);