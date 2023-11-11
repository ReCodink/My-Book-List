import { VStack } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookDetails from "./pages/BooksDetail";
import EditBookPage from "./pages/Editbook";
import Homepage from "./pages/Homepage";
import NewBookPage from "./pages/NewBooks";
import Register from "./pages/Register";
import PrivateAccess from "./components/PrivateAccess";

function App() {
  return (
    <VStack minH="100vh" minW="100vw">
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/register"} element={<Register />} />
          <Route 
            path={"/newbook"} 
            element={
              <PrivateAccess>
                <NewBookPage />
              </PrivateAccess>
            } />
          <Route path={"/books/:id"} element={<BookDetails />} />
          <Route 
            path={"/editbook/:id"} 
            element={
              <PrivateAccess>
                <EditBookPage />
              </PrivateAccess>
            } />
        </Routes>
      </Router>
    </VStack>
  );
}

export default App;
