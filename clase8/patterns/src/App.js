import './App.css';
import ButtonWithTitle from './components/buttonWithTitle';
import ButtonWithTitleHOC from './components/buttonWithTitleHOC';
import Input from './components/input';

function App() {
  return (
    <div className="App">
      <ButtonWithTitle />
      <ButtonWithTitleHOC />
      <Input />
    </div>
  );
}

export default App;
