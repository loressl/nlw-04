import styles from '../styles/components/LoginBox.module.css'

export function LoginBox() {
    return (
        <div className={styles.loginBoxContainer}>
            <img src="/logo-full.svg" alt="Símbolo" />
            <strong>Bem-Vindo</strong>
            <div className={styles.loginBoxGithub}>
                <img src={'icons/github.svg'} alt="GitHub" />
                <p>Faça login com seu Github para começar</p>
            </div>
            <div className={styles.loginBoxInput}>
                <input placeholder="Digite seu username"/>
            </div>
        </div>
    )
}