import React, {useState, useEffect} from 'react';
import '../App.css'
// import backgroundImage from '../assets/background.jpg'
import api from '../services/api'

export function Opening({subject}){
  return(
    <div className="Opening">
      <h1>Primeira Pagina Oficial com meus conhecimentos em React</h1>
      <h2>vou usar conceitos de {subject}</h2>
    </div>
  );
}

export default function App(){
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('repositories').then(response => {
      setProjects(response.data)
    })
  }, [])

  async function handleAddProject(){
    // setProjects([...projects, `Novo projeto ${Date.now()}`])
    const response = await api.post('repositories', {
      title: `Novo repositorio ${Date.now()}`,
      owner: 'Wendel Rios'
    })

    const project = response.data;

    setProjects([...projects, project])
  }

  return (
    <>
      <Opening subject="State"/>

      {/* <img width={400} src={backgroundImage}/> */}

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}

