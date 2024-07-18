import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import Chats from './pages/Chats';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<ChatPage/>} />
          <Route path="/chats" element={<ChatPage/>} />
          <Route path="/chats/:id" element={<Chats/>} />
        </Routes>
    </Router>
  )
}

export default App
