import Pages from "./pages/Pages"
import Category from "./components/Category"
import Footer from "./components/Footer"
import Search from "./components/Search"
import { BrowserRouter } from "react-router-dom"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Search />
                <Category />
                <Pages />
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
