import './App.css';
import { Connector } from 'mqtt-react-hooks';
import Status from './Status';
import { Buffer } from 'buffer';
const host = "server3.sytiqhub.com"
const mqttPort = '1883';

Buffer.from("anything", "base64");


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Connector brokerUrl={`mqtt://${host}:${mqttPort}`}>
        <Status />
      </Connector>
    </div>
  );
}

export default App;