import React, {useRef, useState} from 'react'

interface Person {
    firstName: string
    lastName: string
}

// ? means props is optional
interface Props {
    text: string;
    ok?: Boolean;
    i?: Number;
    fn?: (bob: string) => string;
    person: Person;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface TextNode {
    text: string
}

export const TextField: React.FC<Props> = ({handleChange}) => {
    // hooks
    // useState<number | null>(5) type is a number OR null
    const [count, setCount] = useState<TextNode>({text: 'hello'})
    const inputRef = useRef<HTMLInputElement>(null)
    const divRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange} />
        </div>
    )
}
