import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import styles from "../assets/styles/navbar.module.css";
import Search from "./Search";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img src={logo} className={styles.logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/"} className={styles.link}>
                Inicio
              </Link>
            </Nav.Link>
            <NavDropdown title="Generos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={`/generos/${28}`}>
                Acción
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/generos/${12}`}>
                Aventura
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/generos/${35}`}>
                Comedia
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/generos/${53}`}>
                Suspenso
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/generos/${10749}`}>
                Romántica
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/generos/${16}`}>
                Animación
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/generos/${878}`}>
                Ciencia ficción
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/generos/${18}`}>
                Drama
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/generos/${27}`}>
                Terror
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Peliculas" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={`/movies/`}>
                Estrenos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/ranked/`}>
                Ranking
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/views/`}>
                Más vistas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to={"/series/"} className={styles.link}>
                Series
              </Link>
            </Nav.Link>
          </Nav>
          <Search />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
