import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index.tsx";
import { History } from "./pages/History/index.tsx";
import { UseEffect } from "./pages/UseEffect/index.tsx";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ContextAPI } from "./pages/ContextAPI/index.tsx";

export function Router() {
  return (
    <Routes>
      <Route path="/project-02" element={<DefaultLayout />}>
        <Route path="/project-02" element={<Home />} />
        <Route path="/project-02/history" element={<History />} />
        <Route path="/project-02/useEffect" element={<UseEffect />} />
        <Route path="/project-02/contextapi" element={<ContextAPI />} />
      </Route>
    </Routes>
  );
}
