import React, { useState, useEffect } from 'react';


const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  useEffect(() => {
    if (altura && peso) {
      const imcCalculado = peso / (altura * altura);
      setIMC(imcCalculado.toFixed(2));

      let classificacao = '';

      if (imcCalculado < 18.5) {
        classificacao = 'Abaixo do peso';
      } else if (imcCalculado < 24.9) {
        classificacao = 'Peso normal';
      } else if (imcCalculado < 29.9) {
        classificacao = 'Sobrepeso';
      } else if (imcCalculado < 34.9) {
        classificacao = 'Obesidade grau 1';
      } else if (imcCalculado < 39.9) {
        classificacao = 'Obesidade grau 2';
      } else {
        classificacao = 'Obesidade grau 3';
      }

      setClassificacao(classificacao);
    } else {
      setIMC(null);
      setClassificacao('');
    }
  }, [altura, peso]);

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <form className='formulario'>
        <label>Altura (m):</label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </form>
      {imc && classificacao && (
        <div className="container-resultado">
          <table className="resultado">
            <thead>
              <tr>
                <th>IMC</th>
                <th>Classificação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{imc}</td>
                <td>{classificacao}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
