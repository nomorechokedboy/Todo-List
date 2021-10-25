import React from "react";
import IconicButton from "../IconicButton";
import styles from "./categories.module.css";

export default function Categories() {
  return (
    <section>
      <IconicButton
        buttonName="Today"
        buttonStyle={{ fontSize: 20 }}
        iconName="calendar-alt"
        handleClick={() => console.log("Today clicked")}
      />
      <IconicButton
        buttonName="Yesterday"
        buttonStyle={{ fontSize: 20 }}
        iconName="calendar"
        handleClick={() => console.log("Yesterday clicked")}
      />
      <IconicButton
        buttonName="Last week"
        buttonStyle={{ fontSize: 20 }}
        iconName="calendar-day"
        handleClick={() => console.log("Last week licked")}
      />
      <IconicButton
        buttonName="Last month"
        buttonStyle={{ fontSize: 20 }}
        iconName="calendar-week"
        handleClick={() => console.log("Last month clicked")}
      />
      <IconicButton
        buttonName="Done"
        buttonStyle={{ fontSize: 20 }}
        iconName="calendar-check"
        handleClick={() => console.log("Done clicked")}
      />
    </section>
  );
}
