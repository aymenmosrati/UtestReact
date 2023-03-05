import { useEffect, useState } from "react";
import { SkillsProps } from "./skills.types";

export const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIN] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIN(true);
    }, 1001);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIN(true)}>Login</button>
      )}
    </>
  );
};
