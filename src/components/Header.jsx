import { useState, useEffect } from "react";
import { useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Main from "./Main";
import Project from "./Project";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contacts from "./Contacts";

function Header() {
    const header = useRef(null);
    const project = useRef(null);
    const aboutMe = useRef(null);
    const skills = useRef(null);
    const contacts = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    const [scrollToTop, setScrollToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 115) {
                setScrollToTop(true);
            } else {
                setScrollToTop(false);
            }
        });
    }, []);

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>JH'sPortfolio</Navbar.Brand>
                    <Nav>
                        <Nav.Link onClick={() => scrollToSection(project)}>Project</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection(skills)}>Skills</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection(aboutMe)}>AboutMe</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection(contacts)}>Contacts</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className="pages">
                <div>
                    <Main />
                </div>
                <div ref={project}>
                    <Project />
                </div>
                <div ref={aboutMe}>
                    <AboutMe />
                </div>
                <div ref={skills}>
                    <Skills />
                </div>
                <div ref={contacts}>
                    <Contacts />
                </div>
            </div>

            <div className="underNav">
                {scrollToTop && (
                    <div
                        style={{
                            position: "fixed",
                            top: "0px",
                            width: "100%",
                        }}
                    >
                        <Navbar bg="light" variant="light" ref={header}>
                            <Container>
                                <Navbar.Brand onClick={() => scrollToSection(header)}>
                                    JH'sPortfolio
                                </Navbar.Brand>
                                <Nav>
                                    <Nav.Link onClick={() => scrollToSection(project)}>
                                        Project
                                    </Nav.Link>
                                    <Nav.Link onClick={() => scrollToSection(skills)}>
                                        Skills
                                    </Nav.Link>
                                    <Nav.Link onClick={() => scrollToSection(aboutMe)}>
                                        AboutMe
                                    </Nav.Link>
                                    <Nav.Link onClick={() => scrollToSection(contacts)}>
                                        Contacts
                                    </Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Header;
