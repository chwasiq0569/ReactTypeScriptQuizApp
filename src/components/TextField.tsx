import React, { useRef, useState } from 'react';

interface Person {
    firstname: string;
    lastname: string;
}

interface TextFieldProps {
    text: string;
    male?: boolean;
    age?: number;
    fn: (name: string) => string
    fullname: Person
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => string
}

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
    const [name, setName] = useState<string | null | undefined>("");
    const [password, setPassword] = useState<string | null | undefined>("");

    const inputRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLDivElement>(null)
    console.log(inputRef.current)
    console.log(divRef.current)
    return ( <div ref={divRef}>
        <h1>{props.text}</h1>
        <p>Male: {props.fullname.firstname + " " + props.fullname.lastname}</p>
        <p>Age: {props.age}</p>
        <p>{props.fn("Wasiq")}</p>
        <p>Name: {name}</p>
        <p>Password: {password}</p>
        <button onClick={() => {setName("Ch Wasiq"); setPassword("myPassword")}}>CHANGE</button>
        <br />
        INPUT FIELD<input type='text' ref={inputRef} onChange={props.handleChange} />
    </div> );
}
 
export default TextField;