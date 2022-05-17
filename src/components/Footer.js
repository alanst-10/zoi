import styled from 'styled-components';

const Rodape = styled.footer`
    width: 100%;
    height: 4vh;
    background-color: #777;
    display: flex;
    justify-content: center;
    align-items: center;
`; 

export const Footer = () => {
    return(
        <Rodape className="footer">
            Desenvolvido por Alan de Santana Thimotheo
        </Rodape>
    );
}
