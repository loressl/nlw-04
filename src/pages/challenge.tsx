import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { CountDown } from '../components/CountDown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CountDownProvider } from '../contexts/CountDownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

import styles from '../styles/pages/Challenge.module.css'

interface ChallengeProps {
    level: number,
    currentExperience: number,
    challengesCompleted: number
}

export default function Challenge(props: ChallengeProps) {
    return (
        <ChallengesProvider
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
        >
            <div className={styles.container}>
                <Head>
                    <title>Início | move.it</title>
                </Head>
                <ExperienceBar />
                <CountDownProvider>
                    <section>
                        <div >
                            <Profile />
                            <CompletedChallenges />
                            <CountDown />
                        </div>
                        <div>
                            <ChallengeBox />
                        </div>
                    </section>
                </CountDownProvider>
            </div>
        </ChallengesProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { level, currentExperience, challengesCompleted } = ctx.req.cookies

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted)
        }
    }
}