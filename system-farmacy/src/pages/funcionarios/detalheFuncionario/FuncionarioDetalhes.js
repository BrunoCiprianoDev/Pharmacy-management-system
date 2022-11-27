import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../../hook/useFetch'
import styles from './FuncionarioDetalhes.module.css'


const FuncionarioDetalhes = () => {

    const {id} = useParams();
    const url = "http://localhost:3000/funcionarios/"+id;
    const {data: funcionario, loading, error} = useFetch(url);

    return (
    <div className={styles['MainContainer']}>
        <div className={styles['ContainerElement']}><label>Nome</label><p>{funcionario && funcionario.nome}</p></div>
        <div className={styles['ContainerElement']}><label>CPF</label><p>{funcionario && funcionario.cpf}</p></div>
        <div className={styles['ContainerElement']}><label>Data nascimento</label><p>{funcionario && funcionario.dt_nascimento}</p></div>
        <div className={styles['ContainerElement']}><label>CEP</label><p>{funcionario && funcionario.cep}</p></div>
        <div className={styles['ContainerElement']}><label>UF</label><p>{funcionario && funcionario.uf}</p></div>
        <div className={styles['ContainerElement']}><label>Cidade</label><p>{funcionario && funcionario.cidade}</p></div>
        <div className={styles['ContainerElement']}><label>Bairro</label><p>{funcionario && funcionario.bairro}</p></div>
        <div className={styles['ContainerElement']}><label>Logradouro</label><p>{funcionario && funcionario.logradouro}</p></div>
        <div className={styles['ContainerElement']}><label>Número</label><p>{funcionario && funcionario.numero}</p></div>
        <div className={styles['ContainerElement']}><label>Complemento</label><p>{funcionario && funcionario.complemento}</p></div>
        <div className={styles['ContainerElement']}><label>Telefone 1</label><p>{funcionario && funcionario.telefone_um}</p></div>
        <div className={styles['ContainerElement']}><label>Telefone 2</label><p>{funcionario && funcionario.telefone_dois}</p></div>
        <div className={styles['ContainerElement']}><label>Email</label><p>{funcionario && funcionario.email}</p></div>
        <div className={styles['ContainerElement']}><label>Data de admissão</label><p>{funcionario && funcionario.dt_admissao}</p></div>
        <div className={styles['ContainerElement']}><label>Função</label><p>{funcionario && funcionario.funcao}</p></div>
    </div>
  )
}

export default FuncionarioDetalhes