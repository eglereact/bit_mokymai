import { Data } from "./Context/DataContext";
import "./app.scss";
import CreateButton from "./Components/CreateButton";
import Modals from "./Components/Modals";
import List from "./Components/List";
import Messages from "./Components/Messages";

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
          <div className="col">
            <List />
          </div>
        </div>
      </div>
      <Modals />
      <Messages />
    </Data>
  );
}
