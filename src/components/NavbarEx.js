
import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import BlogList from "../blogList";
 

//NavBar

function NavbarEx (){
    return(
        
        <>
            <Navbar className="navBg" variant="dark" expand="lg">
            <Link to = "/BlogList" className="btn tbn-primary m-1">BlogList</Link>
            <Link to = "/BlogPost" className="btn tbn-primary m-1">BlogPost</Link>
            <Link to = "/Favorites" className="btn tbn-primary m-1">Favoritos</Link>
            <Link to = "/WatchList" className="btn tbn-primary m-1">Watchlist</Link>
                {/*<Container>
                <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" >BlogList</Nav.Link>
                    <Nav.Link as={Link} to="/BlogPost">BlogPost</Nav.Link>
                                   
                </Nav>
                </Navbar.Collapse>
                 </Container>*/}
                
               
            </Navbar>

            {/*<section>
                    <Outlet></Outlet>
                </section>*/}
        </>
    )
}

export {NavbarEx};