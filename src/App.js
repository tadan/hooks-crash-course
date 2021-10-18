import { useState, useEffect } from "react";
import "./styles.css";

const DATA = [
  { id: 3, sentence: "Tack för hjälpen! ✨" },
  {
    id: 4,
    sentence:
      "Skillnaden mellan Sverige och Italien i brott och straff är hög. Först är korruptionen som tyvärr är mycket populär och den påverkar alla delar av samhället, från politiker, företag till privatpersoner. Undvikande av skatt är också sämst jämfört med Sverige, få människor arbetar i svart under större delen av sitt liv. "
  },
  {
    id: 5,
    sentence:
      "Lyckligtvis tack för digitaliseringen och även tack vare covid, elektronisk betalning har varit populär den senaste tiden, så dessa trender förändras och regeringen kan spåra sina medborgare bättre"
  },
  {
    id: 6,
    sentence: "Och sist maffian, som innebär smuggling, förfalskning och mord. "
  },
  {
    id: 7,
    sentence:
      "Det började från södra Italien och nu utvecklades det över hela världen. "
  }
];

function GetData(props) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://swapi.dev/api/people/" + props.id)
      .then((response) => response.json())
      .then((result) => setData(result));
  }, [props.id]);
  return (
    <div>
      <p style={{ fontStyle: "italic", color: "#9245" }}>
        Detta är ett slumpmässigt namn från ett Star Wars API:{" "}
        {data && data.name}
      </p>
    </div>
  );
}
function NormalCSS() {
  return <h1 className="very-big-text">En historia på svenska</h1>;
}
function InLineStyle() {
  const fontStyle = { fontSize: 16, fontStyle: "italic" };
  return <p style={fontStyle}>om straff och brott 🔥</p>;
}
function MyList(props) {
  const [count, setCount] = useState(3);

  const Conta = () => {
    setCount(count - 1);
  };
  return (
    <div>
      {count !== 0 && (
        <>
          Kan du hjälpa mig att visa min text genom att klicka här minst {count}{" "}
          gånger?
          <button onClick={Conta}>klicka här</button>
        </>
      )}
      {count === 0 &&
        props.items.map((words) => {
          return <p key={words.id}>{words.sentence}</p>;
        })}
    </div>
  );
}
function Greetings(props) {
  return (
    <>
      Kära {props.nameColleague1} and {props.nameColleague2}
    </>
  );
}
export default function App() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return (
    <div className="App">
      <NormalCSS />
      <InLineStyle />
      <Greetings nameColleague1={"Cecilia"} nameColleague2={"Andre"} />
      <MyList items={DATA} />
      <GetData id={getRandomInt(10)} />
    </div>
  );
}
