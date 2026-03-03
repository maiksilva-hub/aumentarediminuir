import { useState } from "react";

export default function Home() {
  const [contagem, setContagem] = useState(0);

  const diminuir = () => setContagem(contagem - 1);
  return (
    <>
      <h2>Você clicou {contagem} vezes</h2>
      <button onClick={() => setContagem(contagem + 1)}>
        Clique aqui
      </button>
      <button onClick={()=> setContagem(contagem - 1)}>Diminuir</button>
    </>
  );
}