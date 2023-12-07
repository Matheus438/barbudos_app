import React from "react";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Barbudos Barbearia</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/cliente/cadastro">Cadastro De Cliente</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/cadastro/Servico">Cadastro De Serviço</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/profissional/cadastro">Cadastro De Profissionais</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/listagem/Servico">Listagem Serviços</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/listagem/Profissional">Listagem Profissionaisl</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/listagem/agenda">Listagem Agenda</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/cliente/listagem">Listagem Clientes</a>
                    </li>
                </ul>
            </div>
        </nav>
        </header >
    );
}

export default Header;
