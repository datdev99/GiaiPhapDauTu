import Footer from "../footer/Footer"
import Header from "../header/Header"

const HomepageLayout = ({children}) => {
  
  return (
    <>
        <div className="relative font-livic">
            <Header />
            {children}
            {/* <FooterLayout /> */}
            <Footer />
        </div>
    </>
  )
}

export default HomepageLayout