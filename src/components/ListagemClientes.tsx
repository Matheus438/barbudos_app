import axios from "axios";
import React, {
    Component, useState, ChangeEvent, FormEvent, useEffect
} from "react";
import styles from '../App.module.css';
import { CadastroClienteInterface } from "../interface/CadastroClientes";

const ListagemClientes = () => {
    const [clientes, setClientes] = useState<CadastroClienteInterface[]>([]);
    const [pesquisa, setPesquisa] = useState<string>("")
    const [error, setError] = useState("");


    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "pesquisa") {
            setPesquisa(e.target.name);
        }
    }

    const buscar = (e: FormEvent) => {
        e.preventDefault();

        async function fetchData() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/nome',
                    { nome: pesquisa },
                    {
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        }
                    }).then(function (response) {
                        setClientes(response.data.data);
                    }).catch(function (error) {
                        console.log(error);
                    });
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/retornarTudo');
                console.log(response.data.data);
                setClientes(response.data.data);
            } catch (error) {
                setError("Ocrreu um erro");
                console.log(error)
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <main className={styles.main}>
                <div className='container'>

                    <div className='col-md mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Pesquisar</h5>
                                <form onSubmit={buscar} className='row'>
                                    <div className='col-10'>
                                        <input type="text" name="pesquisa"
                                            className='form-control'
                                            onChange={handleState} />
                                    </div>
                                    <div className='col-1'>
                                        <button type='submit' className='btn btn-success'>Pesquisar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>


                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Listagem de Usuários
                            </h5>
                            <table className='table table-hover '>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>celular</th>
                                        <th>email</th>
                                        <th>cpf</th>
                                        <th>nascimento</th>
                                        <th>cidade</th>
                                        <th>estado</th>
                                        <th>pais</th>
                                        <th>rua</th>
                                        <th>numero</th>
                                        <th>bairro</th>
                                        <th>cep</th>
                                        <th>complemento</th>
                                        <th>senha</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clientes.map(clientes => (
                                        <tr key={clientes.id}>
                                            <td>{clientes.id}</td>
                                            <td>{clientes.nome}</td>
                                            <td>{clientes.celular}</td>
                                            <td>{clientes.email}r</td>
                                            <td>{clientes.cpf}r</td>
                                            <td>{clientes.nascimento}r</td>
                                            <td>{clientes.cidade}r</td>
                                            <td>{clientes.estado}r</td>
                                            <td>{clientes.pais}r</td>
                                            <td>{clientes.rua}r</td>
                                            <td>{clientes.numero}r</td>
                                            <td>{clientes.bairro}r</td>
                                            <td>{clientes.cep}r</td>
                                            <td>{clientes.complemento}r</td>
                                            <td>{clientes.password}r</td>

                                            <td>
                                                <a href="#" className='btn btn-primary btn-sm'>Editar</a>
                                                <a href="#" className='btn btn-danger btn-sm'>Excluir</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default ListagemClientes;