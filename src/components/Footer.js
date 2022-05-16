import styled from 'styled-components';

const Rodape = styled.footer`
    width: 100vw;
    height: 4vh;
    background-color: #777;
    display: flex;
    justify-content: center;
    align-items: center;
`; 

export const Footer = () => {
    return(
        <Rodape className="footer">
            Desenvolvido por Alan's Developer
        </Rodape>
    );
}
