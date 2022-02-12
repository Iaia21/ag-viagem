import React from "react";
import './style.css';
import Header from "../../componentes/Header.js/index.js";
import Footer from "../../componentes/Footer.js/index.js";

function Enviar(){
    alert ('Comentário enviado com sucesso!')
}

function Contato () {
    return(

<div className="container">
    <main class="text-info"><b>Fale Conosco</b></main>
        <p class="lead">Aproveite e deixa uma mensagem, sugestão ou elogio.</p>
        <p><h2>Entre em contato conosco!</h2></p>  
    <div>
        <hr/>
    <table className="table">
            <tr>
    <td className="table1">
        <img src="../imagens/email.png email"/>           
        <p>faleconosco@viajar.com.br</p>
    </td>
            </tr>
    <td className="table2">
        <img src="..\..\imagens\sac.png"/>           
        <p>0800-543-2100</p>
    </td>
            <tr>
    <td className="table3">
        <img src="..\..\imagens\whatsapp.png" width="60px"/>           
        <p>(11) 98321-4576</p>
    </td>
            </tr>
    </table>
    <tr>
    <form align="center" class="form">              
    <h3><label>Escreva o seu nome</label></h3>
    <p><input type="text" placeholder="Escreva aqui o seu nome"/></p>
    </form>
    </tr>
    
<center>    
    <p><label><h3 className="form">Deixe o seu comentário</h3></label></p>
    <textarea className="area"></textarea>
        <br/><br/>
    <input type="button" btn btn-primary value="Enviar" onclick={Enviar}/>
</center>
    </div>
    <br/><br/><br/><br/>
    </div>
 
);

}
export default Contato; 
export default Header;
export default Footer;