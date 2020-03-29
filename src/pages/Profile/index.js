import React, {
    useEffect,
    useState
} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {
    FiPower,
    FiTrash2
} from "react-icons/all";
import logoImg
    from '../../assets/logo.svg'
import './style.css';
import api
    from "../../services/api";

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
//    todas as vezes que os elementos do array(segundo parametro) mudarem, ele executa a funcao(primeiro parametro)
//    se deixar o array vazio, ele executa uma unica vez
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });
            //remove do array de incidents o que tem o id deletado
            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch (e) {
            console.log(e);
            alert('Erro ao deletar caso, tente novamente.')
        }
    }
    
    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <div
            className={'profile-container'}>
            <header>
                <img src={logoImg} alt={'Be The Hero'}/>
                <span>Bem vinda, {ongName}!</span>

                <Link className={'button'} to={'/incidents/new'}>Cadastrar novo caso</Link>
                <button onClick={handleLogout} type={'button'}>
                    <FiPower size={18} color={'#E02041'}/>
                </button>
            </header>

            <h1 style={{display: incidents.length > 0 ? 'block' : 'none'}}>Casos cadastrados</h1>
            <div
                style={{display: incidents.length > 0 ? 'block' : 'none'}}>
                <ul>
                    {incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>CASO:</strong>
                            <p>{incident.title}</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>{incident.description}</p>

                            <strong>VALOR:</strong>
                            <p>{Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(incident.value)}</p>

                            <button
                                onClick={() => handleDeleteIncident(incident.id)}
                                type={'button'}>
                                <FiTrash2
                                    size={20}
                                    color={'#a8a8b3'}/>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}