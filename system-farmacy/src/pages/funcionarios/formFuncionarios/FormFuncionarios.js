import React, { useState } from 'react'
import styles from './FormFuncionarios.module.css'
import {useForm} from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../../hook/useFetch';
const url = "http://localhost:3000/funcionarios";

const FormFuncionarios = () => {
  const{register, handleSubmit} = useForm();
  const { httpConfig, loading, error} = useFetch(url);
  
  const navigate = useNavigate();

  const onSubmit = (e) => {
      httpConfig(e, "POST");
  }

  return (
    <div className={styles['MainContainer']}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles['FormContainer']}>
            <div><label>Nome<input name="nome" {...register('nome')} type="text" required/></label></div>
            <div><label>CPF<input name="cpf" {...register('cpf')} type="text" required/></label></div>
            <div><label>Data nascimento<input name="dt_nascimento" {...register('dt_nascimento')} type="date" required /></label></div>
            <div><label>CEP<input name="cep" {...register('cep')} type="text" required /></label></div>
            <div><label>UF<input name="uf" {...register('uf')} type="text" required /></label></div>
            <div><label>Cidade<input name="cidade" {...register('cidade')} type="text" required /></label></div>
            <div><label>Bairro<input name="bairro" {...register('bairro')} type="text" required /></label></div>
            <div><label>Logradouro<input name="logradouro" {...register('logradouro')} type="text" required /></label></div>
            <div><label>Número<input name="numero" {...register('numero')} type="text" required /></label></div>
            <div><label>Complemento<input name="complemento" {...register('complemento')} type="text" required /></label></div>
            <div><label>Telefone 1<input name="telefone_um" {...register('telefone_um')} type="text" required /></label></div>
            <div><label>Telefone 2<input  name="telefone_dois" {...register('telefone_dois')} type="text"/></label></div>
            <div><label>Email<input name="email" {...register('email')} type="text" required /></label></div>
            <div><label>Data admissão<input  name="dt_admissao" {...register('dt_admissao')} type="date" required /></label></div>
            <div><label>Função<input name="funcao" {...register('funcao')} type="text" required /></label></div>
            <div><button>Salvar</button></div>
            <div></div>
            <div><button>Cancelar</button></div>
        </form>
    </div>
  )
}

export default FormFuncionarios