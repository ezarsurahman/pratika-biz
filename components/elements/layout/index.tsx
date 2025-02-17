import Footer from "./Footer"
import Navigation from "./Navigation"

const Layout = ({children} : {children: React.ReactNode}) => {
    return (
        <>
        <Navigation></Navigation>
        <main className="min-h-screen">
            {children}
        </main>
        <Footer></Footer>
        </>
    )
}

export default Layout