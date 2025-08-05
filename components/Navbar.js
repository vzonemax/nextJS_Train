import A from "./UI/A"
import styles from "../styles/Navbar.module.scss"

export default function Navbar({ }) {
    return (
        <div className={styles.navbar}>
            <A href={'/'} text='Главная' />
            <A href={'/users'} text='Пользователи' />
        </div>
    )
}