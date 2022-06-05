import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import Oscar from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Statuses } from "./components/Statuses";

function App() {
  const perName = {
    firstName: "Phaako",
    lastName: "Abdul-Razak",
  };

  const nameList = [
    {
      firstName: "Neenah",
      lastName: "Abdul-Razak",
    },
    {
      firstName: "Phaako",
      lastName: "Abdul-Razak",
    },
    {
      firstName: "Wunam",
      lastName: "Abdul-Razak",
    },
    {
      firstName: "Timtooni",
      lastName: "Abdul-Razak",
    },
  ];
  return (
    <div className="App">
      <Greet name="Abdul - Razak" messageCount={25} isLoggrdIn={true} />
      <Person name={perName} />
      <PersonList names={nameList} />
      <Statuses status="success" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonado Dicpario</Heading>
      </Oscar>
    </div>
  );
}

export default App;
