import { TarefaProvider } from "./contexts/TarefaContext";
import ListTarefa from "./pages/ListTarefa";
import FormTarefa from "./pages/FormTarefa";

function App () {
  return (
    <TarefaProvider>
      <h1>Lista de Tarefas</h1>
      <FormTarefa />
      <ListTarefa />
    </TarefaProvider>
  );
}

export default App;