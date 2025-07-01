import "./Button.css";

interface Props {
  label: string;
  parentMethod: () => void;
}
//se puede hacer de esta manera o usando la palabra funtion
export const Button = ({ label, parentMethod }: Props) => {
  return (
    <>
      <button className="custom-button" onClick={parentMethod}>
        {label}
      </button>
    </>
  );
};

// creacion de un componente sin usar la funcion flecha
// import "./Button.css";
// interface Atributes {
//   label: string;
//   parenthMetodo: () => void;
// }

// export function Button({ label, parenthMetodo }: Atributes) {
//   return (
//     <button className="custom-button" onClick={parenthMetodo}>
//       {label}
//     </button>
//   );
// }
