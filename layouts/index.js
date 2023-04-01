import {Navbar} from "./navbar"
import {Footer} from "./footer"

export const Layout = ({ children }) => {
  return (
    <>
    <div className="content">
    <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
    </>
  )
}