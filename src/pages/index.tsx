import Head from 'next/head'

import styles from '../styles/pages/Login.module.css'
import { LoginBox } from '../components/LoginBox'
import { LoginProvider } from '../contexts/LoginContext'

export default function Login(props) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <section>
        <div>
          <img src={'/symbol.svg'} alt="Símbolo" />
        </div>
          <div>
            <LoginBox />
          </div>
      </section>
    </div>
  )
}

