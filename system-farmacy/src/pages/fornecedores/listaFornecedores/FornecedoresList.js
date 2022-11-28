import React from 'react'
import { useFetch } from '../../../hook/useFetch';
import { useNavigate } from 'react-router-dom';
import styles from './FornecedoresList.module.css'
import iconeDetail from '../../../assets/iconeDetail.png' 
import iconWaste from '../../../assets/iconeWaste.png'

const parameters = [
    {id: 1, valor: 'nome'},
    {id: 2, valor: "cnpj"},
    {id: 3, valor: "crt"},
    {id: 10, valor: "telefone"},
    {id: 11, valor: "email"}
]

const FornecedoresList = () => {

    const navigate = useNavigate();
    const url = "http://localhost:3000/Fornecedores/";
    const {data: fornecedores, httpConfig, loading, error} = useFetch(url);

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
            {fornecedores && fornecedores.map((fornecedor)=>(
                <div key={fornecedor.id} className={styles['ComponentList']}>
                    <div className={styles['DataArea']}>{fornecedor.nome}</div> 
                    <div className={styles['DataArea']}>{fornecedor.cnpj}</div> 
                    <div className={styles['DataArea']}>{fornecedor.crt}</div> 
                    <div className={styles['DataArea']}>{fornecedor.telefone}</div>
                    <div className={styles['DataArea']}>{fornecedor.email}</div>    
                    <div className={styles['DataArea']}>
                        <button onClick={()=>(navigate('/fornecedores/'+fornecedor.id))}>
                            <img className={styles['IconDetail']} src={iconeDetail} alt=""/>
                        </button>
                        <button onClick={()=>handleRemove(fornecedor.id)}>
                            <img className={styles['IconDetail']} src={iconWaste} alt=""/>
                        </button>
                    </div> 
                </div>
            ))}
        </div>
    </div>
  )
}

export default FornecedoresList