import Corinthians from '../components/images/corinthians.png';
import styled from 'styled-components';

const Container = styled.header`
    width: 100%;
    background-color: #EEE;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Header = () => {
    return (
        <Container>
            <img style={{width: 50}} src={ Corinthians } />
        </Container>
    );
}