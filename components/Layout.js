import Footer from "./Footer";
import NavBar from "./NavBar";


function Layout({children}) {
    return (
        <div className="layout">
        <NavBar />
            {children}
        <Footer />
        </div>
    );
}

export default Layout;