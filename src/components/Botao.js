export const Botao = ({text, clickFunction}) => {
    
    const handleClick = (txt) => {
        clickFunction("O Senhor é meu pastor e nada me faltará!")
    }
    
    return (
        <button onClick={handleClick}>{text}</button>
    );
}