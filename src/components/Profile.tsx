import { useCallback, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { LoginContext } from '../contexts/LoginContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level, resetChallenge } = useContext(ChallengesContext)
    const { username, name, exit } = useContext(LoginContext)

    const logout = useCallback(() => {
        resetChallenge()
        exit()
    }, [])

    return (
        <div className={styles.profileContainer}>
            <img src={`https://github.com/${username}.png`} alt="Foto" />
            <div>
                <strong>{name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
            <button
                type='button'
                onClick={logout}
            >
                <img src="icons/exit.png" alt="exit" />
            </button>
        </div>
    )
}