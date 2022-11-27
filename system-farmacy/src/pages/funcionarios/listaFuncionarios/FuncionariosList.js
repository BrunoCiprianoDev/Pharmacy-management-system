import React from 'react'
import { useFetch } from '../../../hook/useFetch';
import { useNavigate } from 'react-router-dom';
import styles from './FuncionariosList.module.css'

const parameters = [
    {id: 1, valor: "Nome"},
    {id: 2, valor: "CPF"},
    {id: 3, valor: "Telefone"},
    {id: 4, valor: "Email"},
    {id: 5, valor: "Função"}
]

const Funcionarios = () => {

    const navigate = useNavigate();
    const url = "http://localhost:3000/funcionarios/";
    const {data: funcionarios, loading, error} = useFetch(url);

    console.log(funcionarios);

  return (
    <div className={styles['MainContainer']}>
        <div className={styles['HeaderList']}>
            {parameters.map((parameter)=>(<div key={parameter.id} className={styles['DataArea']}>{parameter.valor}</div>))}
            <div className={styles['DataArea']}></div>
        </div>
        <div>
            {funcionarios && funcionarios.map((funcionario)=>(
                <div key={funcionario.id} className={styles['ComponentList']} onClick={()=>(navigate('/funcionarios/'+funcionario.id))}>
                    <div className={styles['DataArea']}>{funcionario.nome}</div> 
                    <div className={styles['DataArea']}>{funcionario.cpf}</div> 
                    <div className={styles['DataArea']}>{funcionario.telefone_um}<br/>{funcionario.telefone_dois}</div> 
                    <div className={styles['DataArea']}>{funcionario.email}</div>
                    <div className={styles['DataArea']}>{funcionario.funcao}</div>
                    <div className={styles['DataArea']}><button onClick={()=>alert("Delete "+funcionario.id)}>delete</button></div> 
                </div>
            ))}
        </div>
    </div>
  )
}

export default Funcionarios