import React from 'react'
import { useFetch } from '../../../hook/useFetch';
import { useNavigate } from 'react-router-dom';
import styles from './CategoriasList.module.css'
import iconeDetail from '../../../assets/iconeDetail.png' 
import iconWaste from '../../../assets/iconeWaste.png'

const parameters = [
    {id: 1, valor: "Tipo"},
    {id: 2, valor: "Classe"},
    {id: 3, valor: "Classificação"},
    {id: 4, valor: "Desconto"}
]

const CategoriasList = () => {

    const navigate = useNavigate();
    const url = "http://localhost:3000/Categorias/";
    const {data: categorias, httpConfig, loading, error} = useFetch(url);

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
            {categorias && categorias.map((categoria)=>(
                <div key={categoria.id} className={styles['ComponentList']}>
                    <div className={styles['DataArea']}>{categoria.tipo}</div> 
                    <div className={styles['DataArea']}>{categoria.classe}</div> 
                    <div className={styles['DataArea']}>{categoria.classificacao}</div>
                    <div className={styles['DataArea']}>{categoria.desconto}</div>  
                    <div className={styles['DataArea']}>
                        <button onClick={()=>(navigate('/categorias/'+categoria.id))}>
                            <img className={styles['IconDetail']} src={iconeDetail} alt=""/>
                        </button>
                        <button onClick={()=>handleRemove(categoria.id)}>
                            <img className={styles['IconDetail']} src={iconWaste} alt=""/>
                        </button>
                    </div> 
                </div>
            ))}
        </div>
    </div>
  )
}

export default CategoriasList