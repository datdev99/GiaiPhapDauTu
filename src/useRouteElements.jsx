import { useRoutes } from "react-router-dom"
import path from "./constants/path"
import TechHomepage from "./pages/homepage/TechHomepage"
import { Button, Result } from 'antd'
import AboutCompany from "./pages/AboutCompany/About"

export default function useRouteElements() {
    
  const clientRoutes = [
    {
      path: path.client.homepage,
      element: <TechHomepage />,
    },
    {
      path: path.client.about,
      element: <AboutCompany />,
    }
  ]

  const routeElements = useRoutes([
    { children: clientRoutes },
    {
      path: '*',
      element: (
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button href="/" type="primary">Back Home</Button>}
        />
      )
    }
  ])

  return routeElements
}
