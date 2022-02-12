import React from "react";
import './style.css';


function Destinos() {
    return(
        
<div class="container">
<main class="text-info"><h1>Aqui você terá a oportunidade de escolher o seu destino!</h1></main>
<p class="lead">Programar uma viagem pode ser um momento único, único para planejar, visualizar e sentir
a experiência que está próximo de ser realizada.
 Esse é o seu momento, escolha o seu próximo destino:</p>                

    <div class="container">
        <div class="box_destino bonito">
        <img src="../imagens/Bonito.png"/>
        <br/><br/> 
        <a href="Cadastro.html">Bonito</a>
    </div>
        <br/><br/> 
        
    <div class="box_destino fortaleza">
        <img src="..\imagens\Fortaleza.png"/>
        <br/><br/>  
        <a href="Cadastro.html">Fortaleza</a>
    </div>
        <br/><br/> 
        
    <div class="box_destino gramado">
        <img src="..\imagens\Gramado.png"/>
        <br/><br/>  
        <a href="cadastro.html">Gramado</a>
    </div>
        <br/><br/> 
       
    <div class="box_destino maceio">
        <img src="imagens/Maceio.png"/>
        <br/><br/>  
        <a href="cadastro.html">Maceió</a>
    </div>
        <br/><br/> 
    
    <div class="box_destino rj">
        <img src="imagens/RJ.png"/>
        <br/><br/>  
        <a href="cadastro.html">Rio de Janeiro</a>
    </div>
        <br/><br/> 
         
    <div class="box_destino salvador">
        <img src="imagens/Salvador.png"/>
        <br/><br/> 
        <a href="cadastro.html">Salvador</a>
        </div>
    </div>
        <br/><br/> 
         
    <div class="box_destino sp">
       {/*<div class="valign">*/}
        <img src="imagens/SP.png"/>
        <br/><br/>  
        <a href="cadastro.html">São Paulo</a>
    </div>

        <br/><br/>  

</div>
      
    );
}
export default Destinos;