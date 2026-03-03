import React, { useState } from 'react';

export default function Perfil() {
  // 1. Estado inicial como um objeto com múltiplas chaves
  const [usuario, setUsuario] = useState({
    nome: "Alex Silva",
    idade: 28,
    cargo: "Desenvolvedor Júnior"
  });

  // Função para atualizar a idade
  const atualizarIdade = () => {
    setUsuario(estadoAnterior => ({
      ...estadoAnterior, // Copia nome e cargo (Imutabilidade)
      idade: estadoAnterior.idade + 1 // Sobrescreve apenas a idade
    }));
  };

  // Função para atualizar o cargo
  const atualizarCargo = (novoCargo) => {
    setUsuario(estadoAnterior => ({
      ...estadoAnterior, // Mantém nome e idade intactos
      cargo: novoCargo    // Sobrescreve apenas o cargo
    }));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Perfil do Usuário</h1>
      <p><strong>Nome:</strong> {usuario.nome}</p>
      <p><strong>Idade:</strong> {usuario.idade}</p>
      <p><strong>Cargo:</strong> {usuario.cargo}</p>

      <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
        <button onClick={atualizarIdade}>Fazer Aniversário</button>
        
        <button onClick={() => atualizarCargo("Desenvolvedor Pleno")}>
          Promover para Pleno
        </button>
      </div>
    </div>
  );
}