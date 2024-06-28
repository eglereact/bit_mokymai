import { Data } from "./Context/DataContext";
import "./app.scss";
import Create from "./Components/Create";
import CreateButton from "./Components/CreateButton";

export default function App() {
  return (
    <Data>
      <div className="container">
        <div className="row">
          <div className="col">
            <CreateButton />
          </div>
        </div>
        <div className="row">
          <div className="col">LIST</div>
        </div>
      </div>
      <Create />
    </Data>
  );
}
