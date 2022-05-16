export const Listas = () => {
    let list = [
        'Alan',
        'Ester',
        'Giovana',
        'Luana',
        'Evandro',
        'Nilsa',
        'Valdir',
        'Zoio',
        'Kako',
        'Cito',
        'Pedrinho',
        'Paulo',
        'Mateus',
        'Samuel',
        'Vitão'
    ];

    return(
        <div>
            <h2>Lista de presença:</h2>
            <ul>
                {list.map((item) => {
                    <li>{item}</li>
                })}
            </ul>
        </div>
    );
}