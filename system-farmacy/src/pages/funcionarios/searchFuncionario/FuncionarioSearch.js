import React from 'react'
import { useFetch } from '../../../hook/useFetch';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './FuncionarioSearch.module.css'
import iconeDetail from '../../../assets/iconeDetail.png' 
import iconWaste from '../../../assets/iconeWaste.png'

const parameters = [
    {id: 1, valor: "Nome"},
    {id: 2, valor: "CPF"},
    {id: 3, valor: "Telefone"},
    {id: 4, valor: "Email"},
    {id: 5, valor: "Função"}
]

const FuncionarioSearch = () => {

    const navigate = useNavigate();
    let [searchParams] = useSearchParams();
    const url = "http://localhost:3000/funcionarios?"+searchParams;
    const {data: funcionarios, httpConfig, loading, error} = useFetch(url);

    console.log(url);

    const handleRemove = (id) =>{
        httpConfig(id, "DELETE");
    }

  return (
    <div className={styles['MainContainer']}>
        {loading && <p>Carregando....</p>}
        {error && <p>Falha ao carregar dados....</p>}
        <div className={styles['HeaderList']}>
            {parameters.map((parameter)=>(<div key={parameter.id} className={styles['DataArea']}>{parameter.valor}</div>))}
            <div className={styles['DataArea']}></div>
        </div>
        <div>
            {funcionarios && funcionarios.map((funcionario)=>(
                <div key={funcionario.id} className={styles['ComponentList']}>
                    <div className={styles['DataArea']}>{funcionario.nome}</div> 
                    <div className={styles['DataArea']}>{funcionario.cpf}</div> 
                    <div className={styles['DataArea']}>{funcionario.telefone_um}<br/>{funcionario.telefone_dois}</div> 
                    <div className={styles['DataArea']}>{funcionario.email}</div>
                    <div className={styles['DataArea']}>{funcionario.funcao}</div>
                    <div className={styles['DataArea']}>
                        <button onClick={()=>(navigate('/funcionarios/'+funcionario.id))}>
                            <img className={styles['IconDetail']} src={iconeDetail} alt=""/>
                        </button>
                        <button onClick={()=>handleRemove(funcionario.id)}>
                            <img className={styles['IconDetail']} src={iconWaste} alt=""/>
                        </button>
                    </div> 
                </div>
            ))}
        </div>
    </div>
  )
}

export default FuncionarioSearch