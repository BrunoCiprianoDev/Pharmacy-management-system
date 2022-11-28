import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './FornecedorDetalhes.module.css'
import axios from 'axios'

const FornecedorDetalhes = () => {

    const {id} = useParams();
    const url = "http://localhost:3000/fornecedores/"+id;
    const [editar, setEditar] = useState('');
  
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

    useEffect(()=> {
      axios.get(`${url}`)
      .then((response) => {
        setNome(response.data.nome);
        setCnpj(response.data.cnpj);
        setCep(response.data.cep);
        setUf(response.data.uf);
        setCidade(response.data.cidade);
        setLogradouro(response.data.logradouro);
        setNumero(response.data.numero);
        setComplemento(response.data.complemento);
        setTelefone(response.data.telefone);
        setEmail(response.data.email);
      });
    },[]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.patch(`${url}`, {
        nome:nome,
        cnpj:cnpj,
        cep:cep,
        uf:uf,
        cidade:cidade,
        logradouro:logradouro,
        numero:numero,
        complemento:complemento,
        telefone:telefone,
        email:email 
      }).then((response) => {})
      setEditar('');
    }

    return (
    <div className={styles['MainContainer']}>
        <div>
          <label>Nome</label>
            {editar !== 'NOME' && <p onClick={()=>setEditar('NOME')}>{nome}</p>}   
            {editar === 'NOME' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={nome} value={nome} onChange={(e)=>setNome(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>CNPJ</label>
            {editar !== 'CNPJ' && <p onClick={()=>setEditar('CNPJ')}>{cnpj}</p>}   
            {editar === 'CNPJ' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={cnpj} value={cnpj} onChange={(e)=>setCnpj(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>CEP</label>
            {editar !== 'CEP' && <p onClick={()=>setEditar('CEP')}>{cep}</p>}   
            {editar === 'CEP' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={cep} value={cep} onChange={(e)=>setCep(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>UF</label>
            {editar !== 'UF' && <p onClick={()=>setEditar('UF')}>{uf}</p>}   
            {editar === 'UF' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={uf} value={uf} onChange={(e)=>setUf(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Cidade</label>
            {editar !== 'CIDADE' && <p onClick={()=>setEditar('CIDADE')}>{uf}</p>}   
            {editar === 'CIDADE' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={cidade} value={cidade} onChange={(e)=>setCidade(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Logradouro</label>
            {editar !== 'LOGRADOURO' && <p onClick={()=>setEditar('LOGRADOURO')}>{logradouro}</p>}   
            {editar === 'LOGRADOURO' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={logradouro} value={logradouro} onChange={(e)=>setLogradouro(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Numero</label>
            {editar !== 'NUMERO' && <p onClick={()=>setEditar('NUMERO')}>{numero}</p>}   
            {editar === 'NUMERO' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={numero} value={numero} onChange={(e)=>setNumero(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>COMPLEMENTO</label>
            {editar !== 'COMPLEMENTO' && <p onClick={()=>setEditar('COMPLEMENTO')}>{complemento}</p>}   
            {editar === 'COMPLEMENTO' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={complemento} value={complemento} onChange={(e)=>setComplemento(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>Telefone</label>
            {editar !== 'TELEFONE' && <p onClick={()=>setEditar('TELEFONE')}>{telefone}</p>}   
            {editar === 'TELEFONE' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={telefone} value={telefone} onChange={(e)=>setTelefone(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
        <div>
          <label>E-mail</label>
            {editar !== 'EMAIL' && <p onClick={()=>setEditar('EMAIL')}>{email}</p>}   
            {editar === 'EMAIL' && 
              <form onSubmit={handleSubmit}>
                <input type='text' placeholder={email} value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <input type='submit' value='save'/>
              </form>}
        </div>
    </div>
  )
}

export default FornecedorDetalhes