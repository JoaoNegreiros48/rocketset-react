import {Header} from './components/Header'
import {Post, PostType} from './components/Post'
import {Sidebar} from './components/Sidebar' 
import './global.css'
import styles from './App.module.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/50158723?v=4',
      name: 'João Negreiros',
      role: 'Web Developer'
    },
    content: [
      {type:'paragraph', content: 'Fala galeraa 👋'},
      {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-12-16 08:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Lks-lukas.png',
      name: 'Lukinhas',
      role: 'Usa C# pra ganhar dinheiro'
    },
    content: [
      {type:'paragraph', content: 'Fala galeraa 👋'},
      {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-12-08 20:00:00')
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  post={post}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}


