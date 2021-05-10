import React from 'react';

interface Person {
    firstname: string;
    lastname: string;
}

interface TextFieldProps {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string
    person: Person
}

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
   return ( <div>
       <h1>{props.text}</h1>
       <input type="text" />
   </div> );
}
 
export default TextField;