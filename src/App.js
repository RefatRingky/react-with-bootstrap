import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CardGroup2 from './Component/CardGroup2/CardGroup2';


function App() {
  return (
    <div className="App">
      <h1>Using React Bootstrap</h1>
      <Button variant='danger'>My React Bootstrap Button</Button><br></br>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <CardGroup2></CardGroup2>
    </div>
  );
}

export default App;
