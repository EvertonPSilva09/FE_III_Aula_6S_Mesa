function Card(props) {
    //   const { data } = props
//    const { cidade, pais, populacao, cor } = props
    if (props.pais != "BRA") {

        return null
    }
    return (

        <div style={{ backgroundColor: props.cor }}>
            <h1>
                {props.pais}
            </h1>
            <h2>
                {props.cidade}
            </h2>
            <h3>
                {props.populacao}
            </h3>
        </div>
    )
}

export default Card