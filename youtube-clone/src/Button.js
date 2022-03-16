import styles from './App.module.css'


function Button({text, onClick}) {
    return <button className = {styles.btn} onClick = {onClick}>{text}</button>;
}


export default Button;