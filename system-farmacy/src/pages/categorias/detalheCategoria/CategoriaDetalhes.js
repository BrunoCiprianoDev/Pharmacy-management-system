import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './CategoriaDetalhes.module.css'
import axios from 'axios'

const CategoriaDetalhes = () => {

    const {id} = useParams();
    const url = "http://localhost:3000/categorias/"+id;
    const [editar, setEditar] = useState('');
  
    const [tipo, setTipo] = useState('');
    const [classe, setClasse] = useState('');
    const [classificacao, setClassificacao] = useState('');
    const [desconto, setDesconto] = useState('');

    useEffect(()=> {
      axios.get(`${url}`)
      .then((response) => {
        setTipo(response.data.tipo);
        setClasse(response.data.classe);
        setClassificacao(response.data.classificacao);
        setDesconto(response.data.desconto);
      });
    },[]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.patch(`${url}`, {
        tipo:tipo,
        classe:classe,
        classificacao:classificacao, 
        desconto:desconto
      }).then((response) => {})
      setEditar('');
    }

    return (
    <div className={styles['MainContainer']}>
        <div>
          <label>Tipo</label>
            {editar !== 'TIPO' && <p onClick={()=>setEditar('TIPO')}>{tipo}</p>}   
            {editar === 'TIPO' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={tipo} value={tipo} onChange={(e)=>setTipo(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Classe</label>
            {editar !== 'CLASSE' && <p onClick={()=>setEditar('CLASSE')}>{classe}</p>}   
            {editar === 'CLASSE' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={classe} value={classe} onChange={(e)=>setTipo(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Classificação</label>
            {editar !== 'CLASSIFICACAO' && <p onClick={()=>setEditar('CLASSIFICACAO')}>{classificacao}</p>}   
            {editar === 'CLASSIFICACAO' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={classificacao} value={classificacao} onChange={(e)=>setClassificacao(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Desconto(%)</label>
            {editar !== 'DESCONTO' && <p onClick={()=>setEditar('DESCONTO')}>{desconto}</p>}   
            {editar === 'DESCONTO' && 
              <form onSubmit={handleSubmit}>
                <input type='number' placeholder={desconto} value={desconto} onChange={(e)=>setDesconto(e.target.value)} step="any" required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
    </div>
  )
}

export default CategoriaDetalhes