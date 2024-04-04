import "./App.css";
import Field from "./Components/Field";

function App() {
  const infos = [
    "Dan Tan",
    "d95tan@gmail.com",
    "+65 92276967",
    "92276967",
    "Singaporean",
    "https://github.com/d95tan",
    "https://www.linkedin.com/in/dan-tan95/",
    "https://www.ar-dan.com/software",
  ];
  const experiences = [
    ["General Assembly", "Software Engineering Graduate", "bodybodybody"],
    ["RichardHO Architects", "Assistant Architect", "bodybodybody"],
  ];
  return (
    <>
      <div></div>
      <h1>Dan's Resume Clipboard</h1>
      <div className="card">
        <h3>Info</h3>
        {infos.map(info => (
          <Field text={info} key={info} />
        ))}
      </div>

      {experiences.map((experience, i)=> {
        return <div className="card" key={i}>
          <h3>{experience[0]}</h3>
          {experience.map(info => <Field text={info} key={info} />)}
        </div>
      })}
    </>
  );
}

export default App;
