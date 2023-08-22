// Hooks
import { useState } from "react";
// CSS
import styles from "./App.module.css";
// Interface
import { ITask } from "./interfaces/Task";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [TaskList, setTaskList] = useState<ITask[]>([]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={TaskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          {/* <TaskList taskList={taskList} /> */}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
