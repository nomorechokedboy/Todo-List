import styles from "./styles.module.scss";

interface TextProps {
  onClick: () => void;
  question: string;
  clickText: string;
}

export const Text = ({ onClick, clickText, question }: TextProps) => {
  return (
    <div>
      {question} &nbsp;
      <span className={styles.link} onClick={onClick}>
        {clickText}
      </span>
    </div>
  );
};
