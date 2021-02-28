import { useContext, useEffect } from 'react'
import Notiflix from 'notiflix'
import { useRouter } from 'next/router'

import { LoginContext } from '../contexts/LoginContext'
import styles from '../styles/components/LoginBox.module.css'

export function LoginBox() {
    const {
        username,
        setUsername,
        searchUser,
        validUsername
    } = useContext(LoginContext)

    const router = useRouter()

    useEffect(() => {
        if (validUsername === 'error') {
            Notiflix.Report.Failure(
                'Erro',
                'Username inválido. Confira seus dados.',
                'Ok');
        } else if(username !== '' && validUsername !== 'error') {
            router.replace({
                pathname: '/challenge',
            })
        }
    }, [validUsername])

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
                    value={String(username)}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <button
                    type="button"
                    onClick={searchUser}
                    className={username !== '' ? styles.loginBoxButtonActive : styles.loginBoxButtonInative}
                >
                    <img src="/icons/arrow.svg" alt="Enter" />
                </button>
            </div>
        </div>
    )
}