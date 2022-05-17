import Corinthians from '../components/images/corinthians.png';
import styled from 'styled-components';

const Container = styled.header`
    width: 100%;
    background-color: #EEE;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    padding-left: 50px
`;

const Right = styled.div`
    padding-right: 50px
`;

const Ul = styled.ul`
    list-style: none;
    display: flex;
    font-size: 20px;
    font-family: 'Macondo', cursive;
`;

const Li = styled.li`
    padding-left: 40px;
    cursor: pointer;
    &:hover {
        color: #555
    }
`;

export const Header = () => {
    return (
        <Container>
            <Left className="left">
                <img style={{width: 50}} src={ Corinthians } />
            </Left>
            <Right className="right">
                <Ul>
                    <a><Li>Shop Timão</Li></a>
                    <a><Li>Elenco</Li></a>
                    <a><Li>Títulos</Li></a>
                    <a><Li>Ingressos</Li></a>
                </Ul>
            </Right>
        </Container>
    );
}