import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Loading } from 'components/Loading'

const router = createBrowserRouter([
  {
    path: '/',
    async lazy () {
      const { Root } = await import('./components/Root')
      return { Component: Root }
    },
    children: [
      {
        path: '/login',
        async lazy () {
          const { LoginPage } = await import('./Pages/Login')
          return { Component: LoginPage }
        }
      },
      {
        path: '/signup_login',
        async lazy () {
          const { LoginPage } = await import('./Pages/Login')
          return { Component: LoginPage }
        }
      },
      {
        path: '*',
        async lazy () {
          const { NotFoundPage } = await import('./Pages/404')
          return { Component: NotFoundPage }
        }
      }
    ]
  }
])

export function App (): JSX.Element {
  return (
      <RouterProvider router={router} fallbackElement={<Loading />} />
  )
}
