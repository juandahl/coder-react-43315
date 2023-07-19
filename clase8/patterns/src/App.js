import './App.css';
import Button from './components/button';
import Input from "./components/input";
import WithTitleChildren from './components/withTitleChildren';

function App() {
  return (
    <div className="App">
      <WithTitleChildren>
        <Button />
      </WithTitleChildren>
      <WithTitleChildren>
        <Input />
      </WithTitleChildren>
    </div>
  );
}

export default App;
