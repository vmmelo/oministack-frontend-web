import React, {useState} from 'react';
import './styles.css'
import logoImg from '../../assets/logo.svg'
import {Link, useHistory} from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi'
import api from "../../services/api";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory;

    async function handleRegister(e) {
        //evita a pagina de recarregar no submit com o prevent default
        e.preventDefault()
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        try {
//        por padrao o axios ja envia no formato json
            const response = await api.post('ongs', data);
            alert(`Seu id de acesso é: ${response.data.id}`)
            history.push('/');
        } catch (e) {
            console.log(e);
            alert('Erro no cadastro, tente novamente.')
        }
    }
    
    return(
      <div className={'register-container'}>
          <div className={'content'}>
              <section>
                  <img src={logoImg} alt={'Be The Hero'} />

                  <h1>Cadastro</h1>

                  <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                  <Link className={'back-link'} to={'/'}>
                      <FiArrowLeft size={16} color={'#E02041'}/>
                      Voltar
                  </Link>
              </section>

              <form onSubmit={handleRegister}>
                  {/*cria os inputs com o valor default definido no inicio do arquivo com useState
                  e escuta as mudancas para alterar o estado*/}
                  <input value={name} onChange={e => setName(e.target.value)} placeholder={'Nome da ONG'}/>
                  <input value={email} onChange={e => setEmail(e.target.value)} type={'email'} placeholder={'E-mail'}/>
                  <input value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder={'Whatsapp'}/>
                  <div className={'input-group'}>
                    <input value={city} onChange={e => setCity(e.target.value)} placeholder={'Cidade'}/>
                    <input value={uf} onChange={e => setUf(e.target.value)} placeholder={'UF'} style={{width: 80}}/>
                  </div>

                  <button className={'button'} type={'submit'}>Cadastrar</button>
              </form>
          </div>
      </div>
    );
};