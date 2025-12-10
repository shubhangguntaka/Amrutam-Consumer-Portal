import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  useEffect(() => {
    console.log("App component mounted");
  }, []);

  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
