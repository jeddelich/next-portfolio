import styles from "./Button.module.css";

function Button({ text, onClick }: { text: string, onClick?: () => void }) {
  return (
    <div className={styles.button} onClick={onClick}>{text}</div>
  )
}

export default Button