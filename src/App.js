import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";
import "./styles/global.scss";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Navbar />
        <Content />
        <Sidebar />
      </main>
    </>
  );
}

export default App;
