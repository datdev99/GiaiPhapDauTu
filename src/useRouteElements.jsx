import { useRoutes } from "react-router-dom"
import path from "./constants/path"
import TechHomepage from "./pages/Client/homepage/TechHomepage"
import { Button, Result } from 'antd'
import AboutCompany from "./pages/Client/AboutCompany/About"
import Careers from "./pages/Client/Careers/Careers"
import Contact from "./components/client/Contact/Contact"
import HomepageLayout from "./components/layout/HomepageLayout/HomepageLayout"
import VideoTutorial from "./pages/Client/Training/VideoTutorial"
import ChildrenLayout from "./components/layout/HomepageLayout/ChildrenLayout"
import Copytrade from "./pages/Client/Product/Copytrade"
import Tool from "./pages/Client/Product/Tool"
import CatalogDesign from "./pages/Client/Product/CatalogDesign"
import TradingAdvice from "./pages/Client/Product/TradingAdvice"
import Knowledge from "./pages/Client/Training/knowledge"
import Ebook from "./pages/Client/Training/Ebook"


import bannerCopyTrade from "./assets/copy-trade.jpg"
import bannerIndicator from "./assets/indicator.jpg"
import bannerTradingAdvice from "./assets/tu-van-giao-dich-ca-nhan.jpg"
import bannerCatalogDesign from "./assets/danh-muc-dau-tu.jpg"
import bannerKnowledge from "./assets/kien-thuc.jpg" 
import bannerEbook from "./assets/ebook.jpg" 
import bannerVideo from "./assets/breadcrumb-banner.png" 
import bannerNews from "./assets/tin-tuc.jpg" 
import News from "./pages/Client/News/News"
import WordPressDashboard from "./pages/Admin/Articles/Articles"
import AdminLayout from "./components/layout/AdminLayout/AdminLayout"
import Articles from "./pages/Admin/Articles/Articles"
import ControlPanel from "./pages/Admin/ControlPanel"
import AdminCareerPage from "./pages/Admin/AdminCareerPage"
import CraeteArticles from "./pages/Admin/Articles/CraeteArticles"
import CreateCareer from "./pages/Admin/Careers/CreateCareer"
import EditArticles from "./pages/Admin/Articles/EditArticles"
import Login from "./pages/Admin/Auth/LoginPage"
import LoginPage from "./pages/Admin/Auth/LoginPage"
import RegisterPage from "./pages/Admin/Auth/Register"

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

  const adminRoutes = [
     {
      path: path.admin.articles.all,
      element: (
        <AdminLayout>
          <Articles />
        </AdminLayout>
      )
    },
    {
      path: path.admin.articles.add,
      element: (
        <AdminLayout>
          <CraeteArticles />
        </AdminLayout>
      )
    },
    {
      path: path.admin.articles.edit(':articleId'),
      element: (
        <AdminLayout>
          <EditArticles />
        </AdminLayout>
      )
    },
    {
      path: path.admin.control_panel,
      element: (
        <AdminLayout>
          <ControlPanel />
        </AdminLayout>
      )
    },
    {
      path: path.admin.career.all,
      element: (
        <AdminLayout>
          <AdminCareerPage />
        </AdminLayout>
      )
    },
    {
      path: path.admin.career.add,
      element: (
        <AdminLayout>
          <CreateCareer />
        </AdminLayout>
      )
    },
  ]

  const authRoutes = [
    {
      path: path.auth.login,
      element: (
          <LoginPage />
      )
    },
    {
      path: path.auth.register,
      element: (
          <RegisterPage />
      )
    }
  ]

  const routeElements = useRoutes([
    { children: clientRoutes },
    { children: adminRoutes },
    { children: authRoutes },
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
