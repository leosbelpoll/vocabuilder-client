import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import VocabularyForm from "./components/vocabulary/VocabularyForm";
import VocabularyList from "./components/vocabulary/VocabularyList";
import Header from "./components/Header";
import VocabularyDetails from "./components/vocabulary/VocabularyDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Welcome!</h1>,
    },
    {
      path: "/vocabulary",
      element: <VocabularyList />,
    },
    {
      path: "/vocabulary/new",
      element: <VocabularyForm />,
    },
    {
      path: "/vocabulary/:id",
      element: <VocabularyDetails />,
    },
  ]);

  return (
    <div>
      <Header />
      <ToastContainer theme="colored" />
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
