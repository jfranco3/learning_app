import logo from "./logo.svg";
import "./App.css";
import MyFirstClassComponent from "./components/MyFirstClassComponent/index";
import Layout from "./containers/Layout";
import MyConditionalComponent from "./components/MyConditionalComponent/index";

function App() {
  const message = true;
  return (
    <div className="App">
      <h2>Your Component Works</h2>;
      <MyFirstClassComponent />
      <Layout />
      <MyConditionalComponent/>
    </div>
  );
}

export default App;
