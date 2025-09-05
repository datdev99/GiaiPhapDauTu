import Footer from "../footer/Footer"
import Header from "../header/Header"

const ChildrenLayout = ({children, banner}) => {
//   https://pixner.net/html/tradexy/tradexy/assets/images/hero/breadcrumb-banner1.png
  return (
    <>
        <div className="relative font-livic">
            <Header />
            {
                banner && <img src={banner} className="w-full h-[700px] object-cover" alt="" />
            }
            {children}
            {/* <FooterLayout /> */}
            <Footer />
        </div>
    </>
  )
}

export default ChildrenLayout