
import { type JSX, useId } from "react";

export function InputLabel(
    { label, placeholder, type = "text",id }:  
    { label: string; placeholder: string; type?: string, id?:string }  
): JSX.Element {
    const inputId = id||useId()
    return (
        <div className="flex flex-col gap-48">
            <label htmlFor={inputId} >{label}</label>
            <input id={inputId} type={type} placeholder={placeholder} />
        </div>
    );
}
