import React, {useState} from 'react';
import '../App.css'
import backgroundImage from '../assets/background.jpg'

export function Opening(props){
  return(
    <div className="Opening">
      <h1>Primeira Pagina Oficial com meus conhecimentos em React</h1>
      <h2>vou usar conceitos de {props.subject}</h2>
    </div>
  );
}

export default function App(){
  const [projects, setProjects] = useState(['Desenvolvimento Web', 'Front-end web'])

  function handleAddProject(){
    setProjects([...projects, `Novo projeto ${Date.now()}`])

    console.log(projects)
  }

  return (
    <>
      <Opening subject="State"/>

      <img width={400} src={backgroundImage}/>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}

