import Pages from "./pages/Pages"
import Category from "./components/Category"
import Footer from "./components/Footer"
import Search from "./components/Search"
import { BrowserRouter, Link } from "react-router-dom"
import { GiKnifeFork } from "react-icons/gi"
import styled from "styled-components"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav>
                    <Logo to={"/"}>
                        <GiKnifeFork />
                        <p>Yummio</p>
                    </Logo>
                </Nav>
                <Search />
                <Category />
                <Pages />
                <Footer />
            </BrowserRouter>
        </div>
    )
}

const Logo = styled(Link)`
    text-decoration: none;
    display: flex;
    background: linear-gradient(to right, #f27121, #e94057);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    p {
        font-size: 3.5rem;
        font-weight: 400;
        font-family: "Lobster Two", cursive;
    }

    svg {
        font-size: 4rem;
    }
`

const Nav = styled.div`
    padding: 4rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default App
