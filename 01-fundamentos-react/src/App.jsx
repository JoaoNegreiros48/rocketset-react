import {Post} from './Post'

export function App() {
  return (
    <div>
      <Post 
        author="João Negreiros" 
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo unde voluptates doloremque optio, praesentium deserunt obcaecati iste vitae! Delectus numquam sequi corporis quis! Quam, dolorum. Dolore provident omnis unde officia!" 
      />
      
      <Post 
        author="Ronaldinho gaucho" 
        content="Tão deixando a gente sonhar" 
      />
    </div>
  )
}


