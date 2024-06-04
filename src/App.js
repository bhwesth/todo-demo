import "./App.sass";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import useList from "./hooks/useList";

function App() {
  const {list, add, remove, edit} = useList()

  return (
      <>
          <Header />
          <main>
              <Form add={add} />
              <List list={list} edit={edit} remove={remove} />
          </main>
      </>
  );
}

export default App;
