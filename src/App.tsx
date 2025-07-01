import "./App.css";
import { useFetch } from "./hooks";

interface Data{
  name:string;
  lastname:string;
  age:number;
}

const url = "http://url-de-prueba.com";
function App() {
  const { data, loading, error } = useFetch<Data>(url);
  if (loading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div>hay un error {error.message}</div>;
  }

  // useEffect(()=>{
  //   console.log(loading)
  // },[loading])

  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  );
}

export default App;
