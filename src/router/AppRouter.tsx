import React from "react";
import ListagemClientes from "../components/ListagemClientes";

import CadastroCliente from "../components/CadastroCliente";
import { 
    BrowserRouter,
     Route,
     Routes
} from "react-router-dom";

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="cadastro" element={<CadastroCliente/>}/>
            <Route path="listagem" element={<ListagemClientes/>}/>
        </Routes>
        </BrowserRouter>
    );
}
export default AppRouter