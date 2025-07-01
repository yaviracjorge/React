import "./Button.css"

interface Props{
    label: string,
    parentMethod: ()=> void

}
//se puede hacer de esta manera o usando la palabra funtion
export const Button = ({label,parentMethod}:Props) => {

    return (
        <>
            <button className = "custom-button" onClick={parentMethod}>
               {label}
            </button>
        </>
    )
}