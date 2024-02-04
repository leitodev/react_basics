import { useState, useRef } from "react"

export default function Form(){

    // It's better to use ref for input, because useState runs re-render!

    const [form, setForm] = useState({
        name: 'Andrii',
        hasError: false
    });

    const secondInput = useRef('');

    function changeName(e) {
        setForm((prevState) => {
            return {...prevState, name: e.target.value }
        });
    }

    function submit() {
        console.log('submit', secondInput.current.value);
    }

    function typingOnRefInput() {
        console.log('typingOnRefInput...', secondInput.current.value);
    }

    return(
        <>
        <form action="#">
            <label htmlFor="name">name: </label>
            <input id="name" type="text" value={form.name} onChange={(e) => changeName(e)}/>
            <br />
            <br />
            <label htmlFor="useRef1">useRef: </label>
            <input ref={secondInput} id="useRef1" type="text" onChange={typingOnRefInput}/>
            <br />
            <button type="button" onClick={submit}>submit</button>
        </form>

        <pre>
            {JSON.stringify(form)}
        </pre>
        </>
    )
}