import { useState } from "react";

export default function App() {
  const [descricao, setDescricao] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = async () => {
    const res = await fetch("/api/analisar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ descricao })
    });

    const data = await res.json();
    setResultado(data);
  };

  return (
    <div>
      <h1>Freelancer IA</h1>

      <textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Descreva o projeto"
      />

      <button onClick={calcular}>Calcular</button>

      {resultado && (
        <div>
          <p>💰 {resultado.preco}</p>
          <p>⏱ {resultado.horas}</p>
          <p>{resultado.justificativa}</p>
        </div>
      )}
    </div>
  );
}
