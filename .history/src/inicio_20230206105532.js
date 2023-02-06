

function inicio(){
        return (
            <>
            <header>
                <img src={Logo} alt="logo do projeto" style={{width: 100, height: 50}}/>
            </header>
            <div className={"lado"}>
                {listagemdata.map((row) => {
                return (
                    <div className={"box"}>
                    <ul>
                        <il className={"events"}>Nome: {row.nome}</il>
                        <br />
                        <il className={"events"}>Data: {row.data}</il>
                        <br />
                        <il className={"events"}>Local: {row.local}</il>
                        <br />
                        <il className={"events"}>Résponsavel: {row.responsavel}</il>
                        <br />
                    </ul>
                    <button className={"button"}>inscrever-se</button>
                    </div>
                );
                })}
            </div>
            </>
        );
    }
export default inicio;
