import './App.css';
import Chat from './componenets/chat1/Chat';
import Navbar from './componenets/main/Navbar';
import Header from './componenets/sidebar/Header';
import Expences from "./componenets/expenceschat/Expences"
import Department from './componenets/dept/Department';
import Chat2 from './componenets/chat2/Chat2';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Chat />
      <Expences />
      <Department />
      <Chat2 />
    </div>
  );
}

export default App;
