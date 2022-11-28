import React, { useState } from 'react'
import styles from './FormCategorias.module.css'
import {useForm} from "react-hook-form";
import { useFetch } from '../../../hook/useFetch';

const url = "http://localhost:3000/categorias";

const FormCategorias = () => {
  const{register, handleSubmit} = useForm();
  const {httpConfig, loading, error} = useFetch(url);

  const [tipo, setTipo] = useState('');
  const [classe, setClasse] = useState('');
  const [classificacao, setClassificacao] = useState('');
  const [desconto, setDesconto] = useState('');


  const onSubmit = (e) => {
      httpConfig(e, "POST");
      setTipo('');
      setClasse('');
      setClassificacao('');
      setDesconto('');
  }


  return (
    <div className={styles['MainContainer']}>
        {loading && <p>Carregando....</p>}
        {error && <p>Falha ao carregar dados....</p>}
        <form onSubmit={handleSubmit(onSubmit)} className={styles['FormContainer']}>
            <div>
              <label>Tipo
                <input name="tipo" {...register('tipo')} onChange={(e)=> setTipo(e.target.value)} value={tipo} type="text" required/>
              </label>
            </div>
            <div>
              <label>Classe
                <input name="classe" {...register('classe')} onChange={(e)=> setClasse(e.target.value)} value={classe} type="text" required/>
              </label>
            </div>
            <div>
              <label>Classificação
                <input name="classificacao" {...register('classificacao')} onChange={(e)=> setClassificacao(e.target.value)} value={classificacao} type="text" required/>
              </label>
            </div>
            <div>
              <label>Desconto
                <input name="desconto" {...register('desconto')} onChange={(e)=> setDesconto(e.target.value)} value={desconto} type="text" required/>
              </label>
            </div>     
            <div></div>
            <div>
              <button>Salvar</button>
            </div>
        </form>
    </div>
  )
}

export default FormCategorias