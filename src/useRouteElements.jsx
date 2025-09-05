import { useRoutes } from "react-router-dom"
import path from "./constants/path"
import TechHomepage from "./pages/homepage/TechHomepage"
import { Button, Result } from 'antd'
import AboutCompany from "./pages/AboutCompany/About"
import Careers from "./pages/Careers/Careers"
import Contact from "./components/client/Contact/Contact"
import HomepageLayout from "./components/layout/HomepageLayout/HomepageLayout"
import VideoTutorial from "./pages/Training/VideoTutorial"
import ChildrenLayout from "./components/layout/HomepageLayout/ChildrenLayout"
import Copytrade from "./pages/Product/Copytrade"
import Tool from "./pages/Product/Tool"
import CatalogDesign from "./pages/Product/CatalogDesign"
import TradingAdvice from "./pages/Product/TradingAdvice"
import Knowledge from "./pages/Training/knowledge"
import Ebook from "./pages/Training/Ebook"


import bannerCopyTrade from "./assets/copy-trade.jpg"
import bannerIndicator from "./assets/indicator.jpg"
import bannerTradingAdvice from "./assets/tu-van-giao-dich-ca-nhan.jpg"
import bannerCatalogDesign from "./assets/danh-muc-dau-tu.jpg"
import bannerKnowledge from "./assets/kien-thuc.jpg" 
import bannerEbook from "./assets/ebook.jpg" 
import bannerVideo from "./assets/breadcrumb-banner.png" 
import bannerNews from "./assets/tin-tuc.jpg" 
import News from "./pages/News/News"

export default function useRouteElements() {
    
  const clientRoutes = [
    {
      path: path.client.homepage,
      element: (
        <HomepageLayout>
          <TechHomepage />
        </HomepageLayout>
      ) //<TechHomepage />,
    },
    {
      path: path.client.about,
      element: <HomepageLayout>
        <AboutCompany />
      </HomepageLayout>
    },
    {
      path: path.client.careers,
      element: <HomepageLayout>
        <Careers />
      </HomepageLayout>
    },
    {
      path: path.client.contact,
      element: <HomepageLayout>
        <Contact />
      </HomepageLayout>
    },
    // training
    {
      path: path.client.training.video,
      element: <ChildrenLayout banner={bannerVideo}>
        <VideoTutorial />
      </ChildrenLayout>
    },
    {
      path: path.client.training.ebook,
      element: <ChildrenLayout banner={bannerEbook}>
        <Ebook />
      </ChildrenLayout>
    },
    // product
    {
      path: path.client.product.copytrade,
      element: <ChildrenLayout banner={bannerCopyTrade}>
        <Copytrade />
      </ChildrenLayout>
    },
    {
      path: path.client.product.congcu,
      element: <ChildrenLayout banner={bannerIndicator}>
        <Tool />
      </ChildrenLayout>
    },
    {
      path: path.client.product.tuvan,
      element: <ChildrenLayout banner={bannerTradingAdvice}>
        <TradingAdvice />
      </ChildrenLayout>
    },
    {
      path: path.client.product.thietkedanhmuc,
      element: <ChildrenLayout banner={bannerCatalogDesign}>
        <CatalogDesign />
      </ChildrenLayout>
    },
    {
      path: path.client.training.knowledge,
      element: <ChildrenLayout banner={bannerKnowledge}>
        <Knowledge />
      </ChildrenLayout>
    },

    // News
    {
      path: path.client.news,
      element: <ChildrenLayout banner={bannerNews}>
        <News />
      </ChildrenLayout>
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
