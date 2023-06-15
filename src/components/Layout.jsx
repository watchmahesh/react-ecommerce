import Header from "./Header"
import Footer from "./Footer"
const Layout = ({children}) => {
  return (

    <div className="body-wrapper">
      <Header/>
        <div>{children}</div>
      <Footer />
      </div>

  )
}

export default Layout;