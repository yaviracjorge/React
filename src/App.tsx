import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const jsonData = async () => {
   
    try {
      setLoading(true)
      const request = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      if (!request.ok) {
        throw new Error("al obtener datos");
      }
      const response = await request.json();
      setData(response);
    } catch (err) {
      setError(err as string);
    } finally{
      setLoading(false)
    }
  };

  //para obtner datos hay que comunicase con un endpoit(un enpoint es un entidad externa al componente)
  //se usa para
  // comunicarnos con un endpoint
  // operaciones asincronas
  // se modifica parametros de entrada
  useEffect(() => {
    //siempre que tenga "use" es un hook, [] esto es un arreglo de dependencias
    jsonData();
  }, []);

  if (loading) {
    return <div>Cargando....</div>;
  } else if (error) {
    return <div>Hay un error {error}</div>;
  }

  // useEffect(()=>{
  //   console.log(loading)
  // },[loading])

  return (
    <>
      <h1>Información del Pokémon</h1>
      {data.name ? (
        <div>
          <h2>Nombre: {data.name}</h2>
          <p>Altura: {data.height}</p>
          <p>Peso: {data.weight}</p>
          <h3>Habilidades:</h3>
          <ul>
            {data.abilities.map((item: any, i: any) => (
              <li key={i}>{item.ability.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}
    </>
  );
}

export default App;
