import React from "react";
import './style.css';

function alerta (){
        alert('Tem certeza que deseja cancelar?')
}

function prosseguir (){
        alert('Compra efetuada com sucesso!')
}
function Compra (){
return (

<div className="container">
    <main class="text-info">
        <h1>Sua viagem ao seu alcance!</h1>
            <p class="lead"><b>Agora é hora de cadastrar os dados da sua compra.</b></p>
    </main>

    <form-group>
            <label for="nome">Nome Completo</label>
            <input type="text" class="form-control"/>
    
            <label for="nome">Data de nascimento</label>
            <input type="date" class="form-control"/>
    
            <label for="nome">CPF</label>
            <input type="text" maxlenght="11" class="form-control border-primary" placeholder="CPF"/>
    
            <label for="nome">Nome Completo 2</label>
            <input type="text" class="form-control"/>
    
            <label for="nome">Data de nascimento 2</label>
            <input type="date" class="form-control" placeholder=""/>
    
            <label for="nome">Nome Completo 3</label>
            <input type="text" class="form-control"/>
    
            <label for="nome">Data de nascimento 3</label>
            <input type="date" class="form-control" placeholder=""/>
    
            <label for="nome">Nome Completo 4</label>
            <input type="text" class="form-control"/>
    
            <label for="nome">Data de nascimento 4</label>
            <input type="date" class="form-control" placeholder=""/>
    </form-group>
        <br/>

        
    <div lassName="container">
            <label for="pagamento" class="text-primary"><b>Forma de pagamento</b></label>
            <select id="pagamento" name="pagamento">
                <option value="cc">Cartão de crédito</option>
                <option value="cd">Cartão de débito</option>
                <option value="px">Pix</option>
                <option value="tr">Transferência bancária on-line</option>
                <option value="mc">Boleto à vista</option>
                <option value="rj">Boleto parcelado</option>
            </select>
            <br/><br/>
        <button className="btn btn-primary" href="reserva.html" onclick={Enviar}/>

        <button className="btn btn-outline-warning float-right" onclick={Cancelar}/>

        </div>
    </div>

);
}

export default Compra;
