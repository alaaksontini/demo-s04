import { useContext } from "react";
import { ThemeContext } from "../../App";
import Accordion from "../../shared/components/Accordion";

function About() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1 className="text-3xl">About</h1>

      <h2 className="text-2xl">FAQ</h2>

      <Accordion>
        <Accordion.Item>
          <Accordion.Trigger value="q1">C'est quoi Bootcode</Accordion.Trigger>
          <Accordion.Content value="q1">
            Bootcode est une ecole qui permet d'apprendre le javascript
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Trigger value="q2">
            Cobien dure une formation
          </Accordion.Trigger>
          <Accordion.Content value="q2">
            Tout depend de ce que vous voulez apprendre
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>

      <button
        className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}
export default About;
