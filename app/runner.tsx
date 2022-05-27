import { createRoot } from "react-dom/client";
import GameRunner from "./src/components/GameRunner";
import "./styles/runner.less";
createRoot(document.getElementById("runner-root")!).render(<GameRunner/>);
