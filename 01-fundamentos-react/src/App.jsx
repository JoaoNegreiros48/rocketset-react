import {Header} from './components/Header'
import {Post} from './Post'
import {Sidebar} from './components/Sidebar'
import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="João Negreiros"
            content="Lorem ipsun "
          />
        </main>
      </div>
    </div>
  )
}


