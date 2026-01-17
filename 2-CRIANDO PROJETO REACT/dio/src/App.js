import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>Olá React!</h1>
      <Button title="Entrar" onClick={() => alert('Clicou em Entrar')} />
      <Button title="Fechar" onClick={() => alert('Clicou em Fechar')} />
      <Button title="Abrir" onClick={() => alert('Clicou em Abrir')} />
      <Button title="Salvar" onClick={() => alert('Clicou em Salvar')} />
    </div>
  );
}

export default App;
