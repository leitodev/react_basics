let SimpleButton = function({name, clickHandler}) {
    return (
        <button type="button" onClick={clickHandler}>{name}</button>
    )
}

export default SimpleButton;