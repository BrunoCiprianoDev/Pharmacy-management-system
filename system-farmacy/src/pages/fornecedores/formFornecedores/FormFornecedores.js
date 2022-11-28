import React, { useState } from 'react'
import styles from './FormFornecedores.module.css'
import {useForm} from "react-hook-form";
import { useFetch } from '../../../hook/useFetch';

const url = "http://localhost:3000/fornecedores";

const FormFornecedores = () => {
  const{register, handleSubmit} = useForm();
  const {httpConfig, loading, error} = useFetch(url);

  
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [crt, setCrt] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState(''); 


  const onSubmit = (e) => {
      httpConfig(e, "POST");
        setNome('');
        setCnpj('');
        setCrt('');
        setCep('');
        setUf('');
        setCidade('');
        setLogradouro('');
        setNumero('');
        setComplemento('');
        setTelefone('');
        setEmail('');
  }


  return (
    <div className={styles['MainContainer']}>
        {loading && <p>Carregando....</p>}
        {error && <p>Falha ao carregar dados....</p>}
        <form onSubmit={handleSubmit(onSubmit)} className={styles['FormContainer']}>
            <div>
              <label>nome
                <input name="tipo" {...register('nome')} onChange={(e)=> setNome(e.target.value)} value={nome} type="text" required/>
              </label>
            </div>
            <div>
              <label>CNPJ
                <input name="cnpj" {...register('cnpj')} onChange={(e)=> setCnpj(e.target.value)} value={cnpj} type="text" required/>
              </label>
            </div>
            <div>
              <label>CRT
                <input name="crt" {...register('crt')} onChange={(e)=> setCrt(e.target.value)} value={crt} type="text" required/>
              </label>
            </div>
            <div>
              <label>CEP
                <input name="cep" {...register('cep')} onChange={(e)=> setCep(e.target.value)} value={cep} type="text" required/>
              </label>
            </div>
            <div>
              <label>UF
                <input name="uf" {...register('uf')} onChange={(e)=> setUf(e.target.value)} value={uf} type="text" required/>
              </label>
            </div>
            <div>
              <label>Cidade
                <input name="cidade" {...register('cidade')} onChange={(e)=> setCidade(e.target.value)} value={cidade} type="text" required/>
              </label>
            </div>
            <div>
              <label>Logradouro
                <input name="logradouro" {...register('logradouro')} onChange={(e)=> setLogradouro(e.target.value)} value={logradouro} type="text" required/>
              </label>
            </div>
            <div>
              <label>Número
                <input name="numero" {...register('numero')} onChange={(e)=> setNumero(e.target.value)} value={numero} type="text" required/>
              </label>
            </div>
            <div>
              <label>Telefone
                <input name="telefone" {...register('telefone')} onChange={(e)=> setTelefone(e.target.value)} value={telefone} type="text" required/>
              </label>
            </div>
            <div>
              <label>E-mail
                <input name="email" {...register('email')} onChange={(e)=> setEmail(e.target.value)} value={email} type="text" required/>
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

export default FormFornecedores

/*nome
cnpj
crt
cep
uf
cidade
logradouro
numero
complemento
telefone
email */