/* eslint-disable react/prop-types */
import styled from "styled-components";
import Navbar from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.div`
    flex-grow: 1;
`;


const Layout = ({ children, paginaActual }) => {
    // Para colocar el Header y el footer en la pagina
    return (
        <Wrapper>
            <Navbar paginaActual={paginaActual} />
            <Content>{children}</Content>
            <Footer />
        </Wrapper>
    );
};

export default Layout;
