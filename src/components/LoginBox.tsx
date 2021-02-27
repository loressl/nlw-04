import { useState } from 'react'
import styles from '../styles/components/LoginBox.module.css'

export function LoginBox() {
    const [username, setUsername] = useState('')

    return (
        <div className={styles.loginBoxContainer}>
            <img src="/logo-full.svg" alt="Símbolo" />
            <strong>Bem-Vindo</strong>
            <div className={styles.loginBoxGithub}>
                <img src={'icons/github.svg'} alt="GitHub" />
                <p>Faça login com seu Github para começar</p>
            </div>
            <div className={styles.loginBoxInput}>
                <input
                    placeholder="Digite seu username"
                    value={username}
                    onChange={(event)=>setUsername(event.target.value)}
                />
                <button
                    type="button"
                    className={username !== '' ? styles.loginBoxButtonActive: styles.loginBoxButtonInative}
                >
                    <img src="/icons/arrow.svg" alt="Enter" />
                </button>
            </div>
        </div>
    )
}