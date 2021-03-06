//ICONES REDES SOCIAIS E LINKS
var zapIcon = '<img src="WhatsApp-icon.png" class="zapIcon">';
var mailIcon = '<img src="Email512.png" class="iconSmall">';
var linkIcon = '<img src="link-icon.png" class="iconSmall">';
var linkIconCadastro = '<img src="link-icon.png" class="linkIconCadastro">';
var phoneIcon = '<img src="phone.png" class="iconSmall">';
var instaIcon = '<img src="insta.png" class="iconSmall">';
var faceIcon = '<img src="face.png" class="iconSmall">';
var linkTreeIcon = '<img src="linktree.png" class="iconSmall">';

// versão 08.05.20 13:30
// FUNÇÕES DAS PÁGINAS DOS CS
function fazerCadastro() {
       document.getElementById("conteudoRedesSociais").style.display = "none";
        document.getElementById("conteudoFalarComEquipe").style.display = "none";
      document.getElementById("conteudoOutrosAssuntos").style.display = "none";
        document.getElementById("conteudoFazerCadastro").style.display = "block";}

function falarComEquipe() {
        document.getElementById("conteudoRedesSociais").style.display = "none";
        document.getElementById("conteudoFazerCadastro").style.display = "none";
        document.getElementById("conteudoOutrosAssuntos").style.display = "none";
        document.getElementById("conteudoFalarComEquipe").style.display = "block";}

function outrosAssuntos() {
        document.getElementById("conteudoRedesSociais").style.display = "none";
        document.getElementById("conteudoFazerCadastro").style.display = "none";
        document.getElementById("conteudoFalarComEquipe").style.display = "none";
        document.getElementById("conteudoOutrosAssuntos").style.display = "block";}

function redesSociais() {
        document.getElementById("conteudoFazerCadastro").style.display = "none";
        document.getElementById("conteudoFalarComEquipe").style.display = "none";
        document.getElementById("conteudoOutrosAssuntos").style.display = "none";
        document.getElementById("conteudoRedesSociais").style.display = "block";}

function voltar() {document.location.reload(true);}


// FUNÇÃO abreCS()
function abreCS(nomeCS) {
        var i;
        document.getElementById("primeiraPagina").style.display = 'none';
        document.getElementById("conteudoFalarComEquipe").style.display = "none";
        document.getElementById("conteudoOutrosAssuntos").style.display = "none";
        document.getElementById("conteudoFazerCadastro").style.display = "none";
        document.getElementById("conteudoRedesSociais").style.display = "none";

        document.getElementById("nomeCS").innerHTML = nomeCS.nome;
        document.getElementById("endereco").innerHTML = nomeCS.endereco;
        document.getElementById("zapCadastro").innerHTML = zapIcon + nomeCS.zapCadastro;
        if(typeof nomeCS.linkCadastro === 'undefined'){}else{   
            document.getElementById("linkCadastro").innerHTML = linkIconCadastro + nomeCS.linkCadastro + "<br/><br/>";}
                
//EMAIL E ZAP DAS EQUIPES
     if(typeof nomeCS.nEquipe0 === 'undefined'){}else{
            var x = document.getElementsByClassName("nEquipe0");
            for (i = 0; i < x.length; i++) {x[i].innerHTML = "Equipe " + nomeCS.nEquipe0 + "<br/>";}
            document.getElementById("zapEquipe0").innerHTML = zapIcon + nomeCS.zapEquipe0 + "<br/>";
            document.getElementById("mailEquipe0").innerHTML = mailIcon + nomeCS.mailEquipe0}   
    
    if(typeof nomeCS.nEquipe1 === 'undefined'){}else{
            var x = document.getElementsByClassName("nEquipe1");
            for (i = 0; i < x.length; i++) {x[i].innerHTML = "Equipe " + nomeCS.nEquipe1 + "<br/>";}    
            document.getElementById("zapEquipe1").innerHTML = zapIcon + nomeCS.zapEquipe1 + "<br/>";
            document.getElementById("mailEquipe1").innerHTML = mailIcon + nomeCS.mailEquipe1}
        
        if(typeof nomeCS.nEquipe2 === 'undefined'){}else{
            var x = document.getElementsByClassName("nEquipe2");
            for (i = 0; i < x.length; i++) {x[i].innerHTML = "Equipe " + nomeCS.nEquipe2 + "<br/>";}
            document.getElementById("zapEquipe2").innerHTML = zapIcon + nomeCS.zapEquipe2 + "<br/>";
            document.getElementById("mailEquipe2").innerHTML = mailIcon + nomeCS.mailEquipe2}
    
        if(typeof nomeCS.nEquipe3 === 'undefined'){}else{
            var x = document.getElementsByClassName("nEquipe3");
            for (i = 0; i < x.length; i++) {x[i].innerHTML = "Equipe " + nomeCS.nEquipe3 + "<br/>";}
            document.getElementById("zapEquipe3").innerHTML = zapIcon + nomeCS.zapEquipe3 + "<br/>";
            document.getElementById("mailEquipe3").innerHTML = mailIcon + nomeCS.mailEquipe3}
    
        if(typeof nomeCS.nEquipe4 === 'undefined'){}else{
            var x = document.getElementsByClassName("nEquipe4");
            for (i = 0; i < x.length; i++) {x[i].innerHTML = "Equipe " + nomeCS.nEquipe4 + "<br/>";}
            document.getElementById("zapEquipe4").innerHTML = zapIcon + nomeCS.zapEquipe4 + "<br/>";
            document.getElementById("mailEquipe4").innerHTML = mailIcon + nomeCS.mailEquipe4}
    
        if(typeof nomeCS.nEquipe5 === 'undefined'){}else{
            var x = document.getElementsByClassName("nEquipe5");
            for (i = 0; i < x.length; i++) {x[i].innerHTML = "Equipe " + nomeCS.nEquipe5 + "<br/>";}
            document.getElementById("zapEquipe5").innerHTML = zapIcon + nomeCS.zapEquipe5 + "<br/>";
            document.getElementById("mailEquipe5").innerHTML = mailIcon + nomeCS.mailEquipe5}
    
        if(typeof nomeCS.nEquipe6 === 'undefined'){}else{
            var x = document.getElementsByClassName("nEquipe6");
            for (i = 0; i < x.length; i++) {x[i].innerHTML = "Equipe " + nomeCS.nEquipe6 + "<br/>";}
            document.getElementById("zapEquipe6").innerHTML = zapIcon + nomeCS.zapEquipe6 + "<br/>";
            document.getElementById("mailEquipe6").innerHTML = mailIcon + nomeCS.mailEquipe6}
    
        if(typeof nomeCS.nEquipe7 === 'undefined'){}else{
            var x = document.getElementsByClassName("nEquipe7");
            for (i = 0; i < x.length; i++) {x[i].innerHTML = "Equipe " + nomeCS.nEquipe7 + "<br/>";}
            document.getElementById("zapEquipe7").innerHTML = zapIcon + nomeCS.zapEquipe7 + "<br/>";
            document.getElementById("mailEquipe7").innerHTML = mailIcon + nomeCS.mailEquipe7}

    
//EMAIL E ZAP DA ODONTO
    if(typeof nomeCS.zapEquipeOdonto1 === 'undefined'){}else{
            document.getElementById("zapEquipeOdonto1").innerHTML = '<span class=servtitle>Saúde Bucal</span><br/>' + zapIcon + nomeCS.zapEquipeOdonto1}
    
    if(typeof nomeCS.zapEquipeOdonto2 === 'undefined'){}else{
            document.getElementById("zapEquipeOdonto2").innerHTML = '<span class=servtitle>Saúde Bucal</span><br/>' + zapIcon + nomeCS.zapEquipeOdonto2}
      
    if(typeof nomeCS.mailEquipeOdonto1 === 'undefined'){}else{            
            document.getElementById("mailEquipeOdonto1").innerHTML = '<span class=servtitle>Saúde Bucal</span><br/>' + mailIcon + nomeCS.mailEquipeOdonto1}
    
    if(typeof nomeCS.mailEquipeOdonto2 === 'undefined'){}else{            
            document.getElementById("mailEquipeOdonto2").innerHTML = '<span class=servtitle>Saúde Bucal</span><br/>' + mailIcon + nomeCS.mailEquipeOdonto2}
    
//SERVIÇOS
    if(typeof nomeCS.servico1 === 'undefined'){}else{
          document.getElementById("servico1").innerHTML = nomeCS.servico1 + "<br/>";
          document.getElementById("contatoServico1").innerHTML = nomeCS.contatoServico1}
      
    if(typeof nomeCS.servico2 === 'undefined'){}else{
            document.getElementById("servico2").innerHTML = nomeCS.servico2 + "<br/>";
            document.getElementById("contatoServico2").innerHTML = nomeCS.contatoServico2}
  
    if(typeof nomeCS.servico3 === 'undefined'){}else{
            document.getElementById("servico3").innerHTML = nomeCS.servico3 + "<br/>";
            document.getElementById("contatoServico3").innerHTML = nomeCS.contatoServico3}
    
    if(typeof nomeCS.servico4 === 'undefined'){}else{
            document.getElementById("servico4").innerHTML = nomeCS.servico4 + "<br/>";
            document.getElementById("contatoServico4").innerHTML = nomeCS.contatoServico4}
    
    if(typeof nomeCS.servico5 === 'undefined'){}else{
            document.getElementById("servico5").innerHTML = nomeCS.servico5 + "<br/>";
            document.getElementById("contatoServico5").innerHTML = nomeCS.contatoServico5}
    
    if(typeof nomeCS.servico6 === 'undefined'){}else{
            document.getElementById("servico6").innerHTML = nomeCS.servico6 + "<br/>";
            document.getElementById("contatoServico6").innerHTML = nomeCS.contatoServico6}
    
    if(typeof nomeCS.servico7 === 'undefined'){}else{
            document.getElementById("servico7").innerHTML = nomeCS.servico7 + "<br/>";
            document.getElementById("contatoServico7").innerHTML = nomeCS.contatoServico7}
    
    if(typeof nomeCS.servico8 === 'undefined'){}else{
            document.getElementById("servico8").innerHTML = nomeCS.servico8 + "<br/>";
            document.getElementById("contatoServico8").innerHTML = nomeCS.contatoServico8}
    
    if(typeof nomeCS.mailCoord === 'undefined'){}else{
            document.getElementById("coord").innerHTML = "Coordenação<br/>";
            document.getElementById("mailCoord").innerHTML = nomeCS.mailCoord}
    
//REDES SOCIAIS E LINKS
    if (nomeCS.redeSocial1 === "Redes sociais não disponíveis"){
        document.getElementById("redesSociais").style.display = "none"; } else {

     if(typeof nomeCS.redeSocial1 === 'undefined'){}else{
            document.getElementById("redeSocial1").innerHTML = nomeCS.redeSocial1 + "<br/>";}
    
     if(typeof nomeCS.redeSocial2 === 'undefined'){}else{
            document.getElementById("redeSocial2").innerHTML = nomeCS.redeSocial2 + "<br/>";}
    
     if(typeof nomeCS.redeSocial3 === 'undefined'){}else{
            document.getElementById("redeSocial3").innerHTML = nomeCS.redeSocial3 + "<br/>";}
    
     if(typeof nomeCS.redeSocial4 === 'undefined'){}else{
            document.getElementById("redeSocial4").innerHTML = nomeCS.redeSocial4 + "<br/>";}
    
     if(typeof nomeCS.redeSocial5 === 'undefined'){}else{
            document.getElementById("redeSocial5").innerHTML = nomeCS.redeSocial5 + "<br/>";}
}
    
//MOSTRA PÁGINA INTEIRA
document.getElementById("contatosCS").style.display = "block";}


// CRIAR 49 UNIDADES
var abraao = {
    nome: "Abraão",
    endereco: '<a target="_blank" href="https://goo.gl/maps/zr9Vj4HmdssZ2qfj9">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832495844">(48) 3249-5844</a>',
    nEquipe0: "570 - Verde",
    nEquipe1: "571 - Laranja",
    nEquipe2: "572 - Azul",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988299952">(48) 98829-9952</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988310083">(48) 98831-0083</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988312325">(48) 98831-2325</a>',
    mailEquipe0: "<a href='mailto:csabraao570.pmf@gmail.com'>csabraao570.pmf@gmail.com</a>",
    mailEquipe1: "<a href='mailto:csabraao571.pmf@gmail.com'>csabraao571.pmf@gmail.com</a>",
    mailEquipe2: "<a href='mailto:csabraao572.pmf@gmail.com'>csabraao572.pmf@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832495844">(48) 3249-5844</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32495844">3249-5844</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csabraao'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:csabraao.pmf@gmail.com'>csabraao.pmf@gmail.com</a>",
}
 

var agronomica = {
    nome: "Agronômica",
    endereco: '<a target="_blank" href="https://goo.gl/maps/jbTf3iNmaMWeAtjR7">Como chegar</a>',
    linkCadastro: '<a href="https://docs.google.com/forms/d/e/1FAIpQLSfRqVOelYmqjhAcfbbz1LGZDtYcIi9Z7fLa-tF8dEgr--w6ng/viewform">Auto-cadastro</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832281310">(48) 3228-1310</a>',
    nEquipe0: "690 - Laranja",
    nEquipe1: "691 - Verde",
    nEquipe2: "692 - Rosa",
    nEquipe3: "693 - Azul",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988420040">(48) 98842-0040</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988353040">(48) 98835-3040</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988420897">(48) 98842-0897</a>',
    zapEquipe3: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988423768">(48) 98842-3768</a>',
    zapEquipeOdonto1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988357152">(48) 98835-7152</a>',
    mailEquipe0: "<a href='mailto:690csagronomica@gmail.com'>690csagronomica@gmail.com</a>",
    mailEquipe1: "<a href='mailto:691csagronomica@gmail.com'>691csagronomica@gmail.com</a>",
    mailEquipe2: "<a href='mailto:csagronomica692@gmail.com'>csagronomica692@gmail.com</a>",
    mailEquipe3: "<a href='mailto:csagronomica693@gmail.com'>csagronomica693@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832281310">(48) 3228-1310</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32281809">3228-1809</a>',
    redeSocial1: faceIcon + "<a href='https://www.facebook.com/centrodesaudeagronomica'>Facebook</a>",
    redeSocial2: linkTreeIcon + "<a href='https://linktr.ee/csagronomica'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:centrosaudeagronomica@gmail.com'>centrosaudeagronomica@gmail.com</a>",
}

var altoRibeirao = {
    nome: "Alto Ribeirão",
    endereco: '<a target="_blank" href="https://g.page/csaltoribeirao?share">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832333989">(48) 3233-3989</a>',
    nEquipe0: "210 - Verde",
    nEquipe1: "211 - Azul",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988414317">(48) 98841-4317</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988415373">(48) 98841-5373</a>',
    zapEquipeOdonto1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988351394">(48) 98835-1394</a>',
    mailEquipe0: "<a href='mailto:equipe1altoribeirao@gmail.com'>equipe1altoribeirao@gmail.com</a>",
    mailEquipe1: "<a href='mailto:e211altoribeirao@gmail.com'>e211altoribeirao@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832333989">(48) 3233-3989</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32333989">3233-3989</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csalto'>LinkTree</a>",
    redeSocial2: faceIcon + "<a href='https://www.facebook.com/centrodesaudealtoribeirao'>Facebook</a>",
    redeSocial3: instaIcon + "<a href='https://www.instagram.com/centrodesaudealtoribeirao'>Instagram</a>",    
    mailCoord: mailIcon + "<a href='mailto:csaltoribeirao@gmail.com'>csaltoribeirao@gmail.com</a>",
}

var armacao = {
    nome: "Armação",
    endereco: '<a target="_blank" href="https://g.page/csarmacao?share">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833895120">(48) 3389-5120</a>',
    nEquipe0: "240 - Azul",
    nEquipe1: "241 - Verde",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988416893">(48) 98841-6893</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548991196051">(48) 99119-6051</a>',
    mailEquipe0: "<a href='mailto:armacao240@gmail.com'>armacao240@gmail.com</a>",
    mailEquipe1: "<a href='mailto:armacao241@gmail.com'>armacao241@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833895120">(48) 3389-5120</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:33895014">3389-5014</a>',
    redeSocial1: instaIcon + "<a href='https://www.instagram.com/csarmacao'>Instagram</a>",
    mailCoord: mailIcon + "<a href='mailto:csarmacao@gmail.com'>csarmacao@gmail.com</a>",
}

var balneario = {
    nome: "Balneário",
    endereco: '<a target="_blank" href="https://g.page/centrodesaudebalneario?share">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832481620">(48) 3248-1620</a>',
    nEquipe0: "20 - Laranja",
    nEquipe1: "21 - Verde",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988382480">(48) 98838-2480</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988382937">(48) 98838-2937</a>',
    mailEquipe0: "<a href='mailto:csbalneario020.pmf@gmail.com'>csbalneario020.pmf@gmail.com</a>",
    mailEquipe1: "<a href='mailto:csbalneario021.pmf@gmail.com'>csbalneario021.pmf@gmail.com</a>",
    servico1: "Administrativo",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832481620">(48) 3248-1620</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32481620">3248-1620</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csbalneario'>LinkTree</a>",
    redeSocial2: instaIcon + "<a href='https://www.instagram.com/centrodesaudebalneario'>Instagram</a>",  
    mailCoord: mailIcon + "<a href='mailto:csbalneario.pmf@gmail.com'>csbalneario.pmf@gmail.com</a>",
}

var barra = {
    nome: "Barra da Lagoa",
    endereco: '<a target="_blank" href="https://goo.gl/maps/Zw4pg62JNKJf2yHHA">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832323302">(48) 3232-3302</a>',
    nEquipe0: "440 - Laranja",
    nEquipe1: "441 - Verde",
    nEquipe2: "442 - Azul",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988319419">(48) 98831-9419</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988319598">(48) 98831-9598</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988320811">(48) 98832-0811</a>',
    zapEquipeOdonto1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832267281">(48) 3226-7281</a>',
    mailEquipe0: "<a href='mailto:csbarra440@gmail.com'>csbarra440@gmail.com</a>",
    mailEquipe1: "<a href='mailto:csbarra441@gmail.com'>csbarra441@gmail.com</a>",
    mailEquipe2: "<a href='mailto:csbarra442@gmail.com'>csbarra442@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832323302">(48) 3232-3302</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32323302">3232-3302</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csbarradalagoa'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:coordenacaocsbarradalagoa@gmail.com'>coordenacaocsbarradalagoa@gmail.com</a>",
}

var cachoeira = {
    nome: "Cachoeira do Bom Jesus",
    endereco: '<a target="_blank" href="https://g.page/cscachoeira?share">Como chegar</a>',
    linkCadastro: '<a href="https://forms.gle/t59vVjxWagv8CGrDA">Auto-cadastro</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832846045">(48) 3284-6045</a>',
    nEquipe0: "400 - Verde",
    nEquipe1: "401- Azul",
    nEquipe2: "402 - Amarela",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988336207">(48) 98833-6207</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988337222">(48) 98833-7222</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988396390">(48) 98839-6390</a>',
    zapEquipeOdonto1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832846045">(48) 3284-6045</a>',
    mailEquipe0: "<a href='mailto:cscachoeira400@gmail.com'>cscachoeira400@gmail.com</a>",
    mailEquipe1: "<a href='mailto:cscachoeira401@gmail.com'>cscachoeira401@gmail.com</a>",
    mailEquipe2: "<a href='mailto:cscachoeira402@gmail.com'>cscachoeira402@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832846045">(48) 3284-6045</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32846045">3284-6045</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cscachoeira'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:cscachoeira@gmail.com'>cscachoeira@gmail.com</a>",
}

var caieira = {
    nome: "Caieira da Barra do Sul",
    endereco: '<a target="_blank" href="https://goo.gl/maps/6pnntiyoc94AWz2v5">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832376239">(48) 3237-6239</a>',
    nEquipe0: "200 - Lilás",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988316073">(48) 98831-6073</a>',
    mailEquipe0: "<a href='mailto:caieiraequipesaude@gmail.com'>caieiraequipesaude@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832376239">(48) 3237-6239</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32376239">3237-6239</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cscaieira'>LinkTree</a>",
    redeSocial2: instaIcon + "<a href='https://www.instagram.com/cscaieiradabarradosul'>Instagram</a>",  
    mailCoord: mailIcon + "<a href='mailto:cscaieirabsul@gmail.com'>cscaieirabsul@gmail.com</a>",
}

var campeche = {
    nome: "Campeche",
    endereco: '<a target="_blank" href="https://goo.gl/maps/FPhiwk1iuWb29xEW6">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832374524">(48) 3237-4524</a>',
    nEquipe0: "280 - Verde",
    nEquipe1: "281 - Azul",
    nEquipe2: "282 - Amarela",
    nEquipe3: "283 - Laranja",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988329154">(48) 98832-9154</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988329650">(48) 98832-9650</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988332842">(48) 98833-2842</a>',
    zapEquipe3: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988374751">(48) 98837-4751</a>',
    zapEquipeOdonto1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988367624">(48) 98836-7624</a>',
    mailEquipe0: "<a href='mailto:cscampeche280.pmf@gmail.com'>cscampeche280.pmf@gmail.com</a>",
    mailEquipe1: "<a href='mailto:cscampeche281.pmf@gmail.com'>cscampeche281.pmf@gmail.com</a>",
    mailEquipe2: "<a href='mailto:cscampeche282.pmf@gmail.com'>cscampeche282.pmf@gmail.com</a>",
    mailEquipe3: "<a href='mailto:cscampeche283.pmf@gmail.com'>cscampeche283.pmf@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832374524">(48) 3237-4524</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32374524">3237-4524</a>',
    servico3: "Vacinação e procedimentos de enfermagem",
    contatoServico3: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988168536">(48) 98816-8536</a>',
    redeSocial1: faceIcon + "<a href='https://www.facebook.com/CentroSaudeCampeche'>Facebook</a>",
    redeSocial2: instaIcon + "<a href='https://www.instagram.com/unidadecampeche/'>Instagram</a>",  
    mailCoord: mailIcon + "<a href='mailto:cscampeche@gmail.com'>cscampeche@gmail.com</a>",
}

var canasvieiras = {
    nome: "Canasvieiras",
    endereco: '<a target="_blank" href="https://goo.gl/maps/PuLkBULAvESzWbpK8">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832696902">(48) 3269-6902</a>',
    nEquipe0: "380 - Azul",
    nEquipe1: "381 - Amarela",
    nEquipe2: "382 - Verde",
    nEquipe3: "383 - Lilás",
    nEquipe4: "384 - Rosa",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988093001">(48) 98809-3001</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988098936">(48) 98809-8936</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988113010">(48) 98811-3010</a>',
    zapEquipe3: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988126012">(48) 98812-6012</a>',
    zapEquipe4: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988135275">(48) 98813-5275</a>',
    zapEquipeOdonto1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832667063">(48) 3266-7063</a>'+': equipes 381 e 382.',
    zapEquipeOdonto2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832666293">(48) 3266-6293</a>'+': equipes 380, 383 e 384.',
    mailEquipe0: "<a href='mailto:cscanasvieiras380@gmail.com'>cscanasvieiras380@gmail.com</a>",
    mailEquipe1: "<a href='mailto:cscanasvieiras381@gmail.com'>cscanasvieiras381@gmail.com</a>",
    mailEquipe2: "<a href='mailto:cscanasvieiras382@gmail.com'>cscanasvieiras382@gmail.com</a>",
    mailEquipe3: "<a href='mailto:cscanasvieiras383@gmail.com'>cscanasvieiras383@gmail.com</a>",
    mailEquipe4: "<a href='mailto:cscanasvieiras384@gmail.com'>cscanasvieiras384@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832696902">(48) 3269-6902</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32696902">3269-6902</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cscanasvieiras'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:cscanasvieiras@gmail.com'>cscanasvieiras@gmail.com</a>",
}

var canto = {
    nome: "Canto da Lagoa",
    endereco: '<a target="_blank" href="https://goo.gl/maps/mHLojq6tKbeYAFsx6">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832326121">(48) 3232-6121</a>',
    nEquipe0: "450 - Laranja",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548999374258">(48) 99937-4258</a>',
    mailEquipe0: "<a href='mailto:xxx@gmail.com'>cscantodalagoa450@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832326121">(48) 3232-6121</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32326121">3232-6121</a>',
    redeSocial1: "Redes sociais não disponíveis",
    mailCoord: mailIcon + "<a href='mailto:cscantodalagoa@gmail.com'>cscantodalagoa@gmail.com</a>",
}

var capoeiras = {
    nome: "Capoeiras",
    endereco: '<a target="_blank" href="https://goo.gl/maps/EAxA2LsKrNJChsuF8">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832481621">(48) 3248-1621</a>',
    nEquipe0: "60 - Laranja",
    nEquipe1: "61 - Verde",
    nEquipe2: "62 - Lilás",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988450445">(48) 98845-0445</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988451494">(48) 98845-1494</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988317954">(48) 98831-7954</a>',
    mailEquipe0: "<a href='mailto:cscapoeiras60.pmf@gmail.com'>cscapoeiras60.pmf@gmail.com</a>",
    mailEquipe1: "<a href='mailto:cscapoeiras61.pmf@gmail.com'>cscapoeiras61.pmf@gmail.com</a>",
    mailEquipe2: "<a href='mailto:capoeiras62.pmf@gmail.com'>capoeiras62.pmf@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832481621">(48) 3248-1621</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32481621">3248-1621</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cscapoeiras'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:cscapoeiras@gmail.com'>cscapoeiras@gmail.com</a>",
}

var carianos = {
    nome: "Carianos",
    endereco: '<a target="_blank" href="https://goo.gl/maps/vnLKoTrxvagRsKSL8">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833381125">(48) 3338-1125</a>',
    nEquipe0: "270 - Azul",
    nEquipe1: "271 - Verde",
    nEquipe2: "272 - Lilás",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988333933">(48) 98833-3933</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988335579">(48) 98833-5579</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988373138">(48) 98837-3138</a>',
    mailEquipe0: "<a href='mailto:area270carianos@gmail.com'>area270carianos@gmail.com</a>",
    mailEquipe1: "<a href='mailto:equipe271carianos@gmail.com'>equipe271carianos@gmail.com</a>",
    mailEquipe2: "<a href='mailto:equipe.area272@gmail.com'>equipe.area272@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833381125">(48) 3338-1125</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:33381125">3338-1125</a>',
    redeSocial1: faceIcon + "<a href='https://www.facebook.com/Centro-de-Sa%C3%BAde-Carianos-102010661443318'>Facebook</a>",
    redeSocial2: instaIcon + "<a href='https://www.instagram.com/cscarianos/'>Instagram</a>",  
    redeSocial3: linkTreeIcon + "<a href='https://linktr.ee/cs.carianos'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:carianos.pmf@gmail.com'>carianos.pmf@gmail.com</a>",
}


var centro = {
    nome: "Centro",
    endereco: '<a target="_blank" href="https://g.page/cscentropmf?share">Como chegar</a>',
    linkCadastro: '<a href="http://bit.ly/AutocadastroCSCentroFloripa">Auto-cadastro</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554839520127">(48) 3952-0127</a>',
    nEquipe0: "950 - Vermelha",
    nEquipe1: "951 - Laranja",
    nEquipe2: "952 - Amarela",
    nEquipe3: "953 - Verde",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988353205">(48) 98835-3205</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988353723">(48) 98835-3723</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988354915">(48) 98835-4915</a>',
    zapEquipe3: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988355112">(48) 98835-5112</a>',
    mailEquipe0: "<a href='mailto:centro.area950@gmail.com'>centro.area950@gmail.com</a>",
    mailEquipe1: "<a href='mailto:centro.area951@gmail.com'>centro.area951@gmail.com</a>",
    mailEquipe2: "<a href='mailto:centro.area952@gmail.com'>centro.area952@gmail.com</a>",
    mailEquipe3: "<a href='mailto:centro.area953@gmail.com'>centro.area953@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554839520127">(48) 3952-0127</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:39520127">3952-0127</a>',
    servico3: "Sala de Vacinas",
    contatoServico3: phoneIcon + '<a href="tel:39520128">3952-0128</a>',
    servico4: "Agendamento de consultas especializadas e exames",
    contatoServico4: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988377708">(48) 98837-7708</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cscentropmf'>LinkTree</a>",
    redeSocial2: instaIcon + "<a href='https://www.instagram.com/cscentro.pmf'>Instagram</a>",  
    mailCoord: mailIcon + "<a href='mailto:cscentropmf@gmail.com'>cscentropmf@gmail.com</a>",   
}

var coloninha = {
    nome: "Coloninha",
    endereco: '<a target="_blank" href="https://goo.gl/maps/wxpraC6JsuwHVsNdA">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832442891">(48) 3244-2891</a>',
    nEquipe0: "70 - Azul",
    nEquipe1: "71 - Verde",
    nEquipe2: "72 - Rosa",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988408940">(48) 98840-8940</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554888315047">(48) 8831-5047</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548998345698">(48) 99834-5698</a>',
    mailEquipe0: "<a href='mailto:cscoloninha070pmf@gmail.com'>cscoloninha070pmf@gmail.com</a>",
    mailEquipe1: "<a href='mailto:cscoloninha071pmf@gmail.com'>cscoloninha071pmf@gmail.com</a>",
    mailEquipe2: "<a href='mailto:cscoloninha072pmf@gmail.com'>cscoloninha072pmf@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832442891">(48) 3244-2891</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32442891">3244-2891</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cscoloninha'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:cscoloninha@gmail.com'>cscoloninha@gmail.com</a>",
}

var coqueiros = {
    nome: "Coqueiros",
    endereco: '<a target="_blank" href="https://g.page/cscoqueiros?share">Como chegar</a>',
    linkCadastro: '<a href="https://docs.google.com/forms/d/e/1FAIpQLSdcYyCw45dynUGK1mpRuqYFsMSI9b4gohjiWgDJCQzQlYdCWw/viewform">Auto-cadastro</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832480451">(48) 3248-0451</a>',
    nEquipe0: "600 - Laranja",
    nEquipe1: "601 - Verde",
    nEquipe2: "602 - Rosa",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988183443">(48) 98818-3443</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988187752">(48) 98818-7752</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988191902">(48) 98819-1902</a>',
    mailEquipe0: "<a href='mailto:equipe600coqueiros@gmail.com'>equipe600coqueiros@gmail.com</a>",
    mailEquipe1: "<a href='mailto:equipe601coqueiros@gmail.com'>equipe601coqueiros@gmail.com</a>",
    mailEquipe2: "<a href='mailto:equipe602coqueiros@gmail.com'>equipe602coqueiros@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832480451">(48) 3248-0451</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32480451">3248-0451</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cscoqueiros'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:cscoqueiros@gmail.com'>cscoqueiros@gmail.com</a>",
}

var corrego = {
    nome: "Córrego Grande",
    endereco: '<a target="_blank" href="https://goo.gl/maps/fWwaT6CCrD7YuNLv6">Como chegar</a>',
    linkCadastro: '<a href="http://bit.ly/AutocadastroCSCorregogrande">Auto-cadastro</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832269406">(48) 3226-9406</a>',
    nEquipe0: "170 - Amarela",
    nEquipe1: "171 - Verde",
    nEquipe2: "172 - Laranja",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988171498">(48) 98817-1498</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988270685">(48) 98827-0685</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988022329">(48) 98802-2329</a>',
    mailEquipe0: "<a href='mailto:cscorregogrande170@gmail.com'>cscorregogrande170@gmail.com</a>",
    mailEquipe1: "<a href='mailto:cscorregogrande171@gmail.com'>cscorregogrande171@gmail.com</a>",
    mailEquipe2: "<a href='mailto:cscorregogrande172@gmail.com'>cscorregogrande172@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832269406">(48) 3226-9406</a>' +
                     '<br/>' + phoneIcon + '<a href="tel:32269406">3226-9406</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32341328">3234-1328</a>',
    redeSocial1: instaIcon + "<a href='https://www.instagram.com/cscorregogrande'>Instagram</a>",  
    //redeSocial2: faceIcon + "<a href='http://www.facebook.com/cscorregogrande'>Facebook</a>",
    redeSocial3: linkTreeIcon + "<a href='https://linktr.ee/corregograndecs'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:cscorregogrande@gmail.com'>cscorregogrande@gmail.com</a>",
}

var costa = {
    nome: "Costa da Lagoa",
    endereco: '<a target="_blank" href="https://goo.gl/maps/FrGbkaLEQBPpHRFE9">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833353119">(48) 3335-3119</a>',
    nEquipe0: "460 - Azul",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988317497">(48) 98831-7497</a>',
    mailEquipe0: "<a href='mailto:cscostadalagoa@gmail.com'>cscostadalagoa@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833353119">(48) 3335-3119</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:33353119">3335-3119</a>',
    redeSocial1: "Redes sociais não disponíveis",
    mailCoord: mailIcon + "<a href='mailto:cscostadalagoa@gmail.com'>cscostadalagoa@gmail.com</a>",
}

var costeira = {
    nome: "Costeira do Pirajubaé",
    endereco: '<a target="_blank" href="https://goo.gl/maps/bdmng2V4m11iGgGu8">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832263333">(48) 3226-3333</a>',
    nEquipe0: "300 - Azul",
    nEquipe1: "301 - Lilás",
    nEquipe2: "302 - Verde",
    nEquipe3: "303 - Amarela",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988364943">(48) 98836-4943</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=55489988365533">(48) 98836-5533</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988045730">(48) 98804-5730</a>',
    zapEquipe3: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988372801">(48) 98837-2801</a>',
    mailEquipe0: "<a href='mailto:cscosteira300.pmf@gmail.com'>cscosteira300.pmf@gmail.com</a>",
    mailEquipe1: "<a href='mailto:cscosteira301.pmf@gmail.com'>cscosteira301.pmf@gmail.com</a>",
    mailEquipe2: "<a href='mailto:cscosteira302@gmail.com'>cscosteira302@gmail.com</a>",
    mailEquipe3: "<a href='mailto:cscosteira303@gmail.com'>cscosteira303@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832263333">(48) 3226-3333</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32263333">3226-3333</a>',
    redeSocial1: "Redes sociais não disponíveis",
    mailCoord: mailIcon + "<a href='mailto:cscosteira@gmail.com'>cscosteira@gmail.com</a>",
}

var estreito = {
    nome: "Estreito",
    endereco: '<a target="_blank" href="https://goo.gl/maps/1NYkwg85UA9hrMiS9">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832499701">(48) 3249-9701</a>',
    nEquipe0: "80 - Verde",
    nEquipe1: "81 - Azul",
    nEquipe2: "82 - Laranja",
    nEquipe3: "83 - Lilás",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548996026903">(48) 99602-6903</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548991358706">(48) 99135-8706</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988451809">(48) 98845-1809</a>',
    zapEquipe3: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548991149266">(48) 99114-9266</a>',
    mailEquipe0: "<a href='mailto:csestreito080.pmf@gmail.com'>csestreito080.pmf@gmail.com</a>",
    mailEquipe1: "<a href='mailto:csestreito081.pmf@gmail.com'>csestreito081.pmf@gmail.com</a>",
    mailEquipe2: "<a href='mailto:csestreito082.pmf@gmail.com'>csestreito082.pmf@gmail.com</a>",
    mailEquipe3: "<a href='mailto:csestreito083.pmf@gmail.com'>csestreito083.pmf@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832499701">(48) 3249-9701</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32441200">3244-1200</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csestreito'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:csestreito@gmail.com'>csestreito@gmail.com</a>",    
}

var fazenda = {
    nome: "Fazenda do Rio Tavares",
    endereco: '<a target="_blank" href="https://g.page/csfazenda?share">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832334347">(48) 3233-4347</a>',
    nEquipe0: "780 - Verde",
    nEquipe1: "781 - Amarela",
    nEquipe2: "782 - Azul",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988365883">(48) 98836-5883</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988366545">(48) 98836-6545</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548996581802">(48) 99658-1802</a>',
    zapEquipeOdonto1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988399383">(48) 98839-9383</a>',
    mailEquipe0: "<a href='mailto:contato780@gmail.com'>contato780@gmail.com</a>",
    mailEquipe1: "<a href='mailto:contato0781@gmail.com'>contato0781@gmail.com</a>",
    mailEquipe2: "<a href='mailto:contato0782@gmail.com'>contato0782@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832334347">(48) 3233-4347</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32334347">3233-4347</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csfazenda'>LinkTree</a>",
    redeSocial2: faceIcon + "<a href='https://www.facebook.com/csfazenda'>Facebook</a>",
    redeSocial3: instaIcon + "<a href='https://www.instagram.com/csfazenda/'>Instagram</a>",  
    mailCoord: mailIcon + "<a href='mailto:csfazenda@gmail.com'>csfazenda@gmail.com</a>",
}

var ingleses = {
    nome: "Ingleses",
    endereco: '<a target="_blank" href="https://g.page/csingleses?share">Como chegar</a>',
    linkCadastro: '<a href="https://forms.gle/EPENHf8XMr8mZCQU7">Auto-cadastro</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833695937">(48) 3369-5937</a>',
    nEquipe0: "431 - Laranja",
    nEquipe1: "432 - Rosa",
    nEquipe2: "433 - Azul",
    nEquipe3: "434 - Amarela",
    nEquipe4: "435 - Cinza",
    nEquipe5: "436 - Lilás",
    nEquipe6: "437 - Verde",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988453694">(48) 98845-3694</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988454173">(48) 98845-4173</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988456841">(48) 98845-6841</a>',
    zapEquipe3: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988650372">(48) 98865-0372</a>',
    zapEquipe4: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988437394">(48) 98843-7394</a>',
    zapEquipe5: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988448057">(48) 98844-8057</a>',
    zapEquipe6: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988448156">(48) 98844-8156</a>',
    mailEquipe0: "<a href='mailto:csingleses431enf@gmail.com'>csingleses431enf@gmail.com</a>",
    mailEquipe1: "<a href='mailto:csingleses432@gmail.com'>csingleses432@gmail.com</a>",
    mailEquipe2: "<a href='mailto:csingleses433@gmail.com'>csingleses433@gmail.com</a>",
    mailEquipe3: "<a href='mailto:csingleses434@gmail.com'>csingleses434@gmail.com</a>",
    mailEquipe4: "<a href='mailto:csingleses435@gmail.com'>csingleses435@gmail.com</a>",
    mailEquipe5: "<a href='mailto:csingleses436@gmail.com'>csingleses436@gmail.com</a>",
    mailEquipe6: "<a href='mailto:csingleses437@gmail.com'>csingleses437@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833695937">(48) 3369-5937</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:33693229">3369-3229</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csingleses'>LinkTree</a>",
    redeSocial2: instaIcon + "<a href='https://www.instagram.com/csingleses'>Instagram</a>",  
    mailCoord: mailIcon + "<a href='mailto:csinglesescord@gmail.com'>csinglesescord@gmail.com</a>",
}

var itacorubi = {
    nome: "Itacorubi",
    endereco: '<a target="_blank" href="https://g.page/csitacorubi?share">Como chegar</a>',
    linkCadastro: '<a href="http://bit.ly/AutocadastroCSItacorubi">Auto-cadastro</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833345555">(48) 3334-5555</a>',
    nEquipe0: "190 - Laranja",
    nEquipe1: "191 - Verde",
    nEquipe2: "192 - Lilás",
    nEquipe3: "193 - Azul",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548991032440">(48) 99103-2440</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988355829">(48) 98835-5829</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988355971">(48) 98835-5971</a>',
    zapEquipe3: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988356881">(48) 98835-6881</a>',
    zapEquipeOdonto1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833340096">(48) 3334-0096</a>',
    mailEquipe0: "<a href='mailto:equipe190csitacorubi@gmail.com'>equipe190csitacorubi@gmail.com</a>",
    mailEquipe1: "<a href='mailto:equipe191csitacorubi@gmail.com'>equipe191csitacorubi@gmail.com</a>",
    mailEquipe2: "<a href='mailto:equipe192csitacorubi@gmail.com'>equipe192csitacorubi@gmail.com</a>",
    mailEquipe3: "<a href='mailto:equipe193csitacorubi@gmail.com'>equipe193csitacorubi@gmail.com</a>",
    mailEquipeOdonto1: "<a href='mailto:odontocsitacorubi@gmail.com'>odontocsitacorubi@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833345555">(48) 3334-5555</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:33340096">3334-0096</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csitacorubi'>LinkTree</a>",
    redeSocial2: faceIcon + "<a href='http://pt-br.facebook.com/csitacorubi'>Facebook</a>",
    redeSocial3: instaIcon + "<a href='https://www.instagram.com/csitacorubi'>Instagram</a>",  
    mailCoord: mailIcon + "<a href='mailto:csitacorubi@gmail.com'>csitacorubi@gmail.com</a>",
}

var jardimAtlantico = {
    nome: "Jardim Atlântico",
    endereco: '<a target="_blank" href="https://g.page/csjardimatlantico?share">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833489595">(48) 3348-9595</a>',
    nEquipe0: "10 - Laranja",
    nEquipe1: "11 - Verde",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988194547">(48) 98819-4547</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988204407">(48) 98820-4407</a>',
    mailEquipe0: "<a href='mailto:csjardimatlantico10@gmail.com'>csjardimatlantico10@gmail.com</a>",
    mailEquipe1: "<a href='mailto:csjardimatlantico11@gmail.com'>csjardimatlantico11@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833489595">(48) 3348-9595</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32402168">3240-2168</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/jardimatlantico'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:csjardimatlantico@gmail.com'>csjardimatlantico@gmail.com</a>",    
}

var joaoPaulo = {
    nome: "João Paulo",
    endereco: '<a target="_blank" href="https://g.page/csjoaopaulopmf?share">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832380606">(48) 3238-0606</a>',
    nEquipe0: "320 - Laranja",
    nEquipe1: "321 - Verde",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548996534119">(48) 99653-4119</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988357446">(48) 98835-7446</a>',
    mailEquipe0: "<a href='mailto:equipe320csjoaopaulo@gmail.com'>equipe320csjoaopaulo@gmail.com</a>",
    mailEquipe1: "<a href='mailto:equipe321csjoaopaulo@gmail.com'>equipe321csjoaopaulo@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832380606">(48) 3238-0606</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32380606">3238-0606</a>' +
                     '<br/>' + phoneIcon + '<a href="tel:32331114">3233-1114</a>',
    redeSocial1: "Redes sociais não disponíveis",
    mailCoord: mailIcon + "<a href='mailto:csjoaopaulo.pmf@gmail.com'>csjoaopaulo.pmf@gmail.com</a>",
}

var jurere = {
    nome: "Jurerê",
    endereco: '<a target="_blank" href="https://goo.gl/maps/MZKxDbAeskvxGQGe9">Como chegar</a>',
    linkCadastro: '<a href="https://forms.gle/jEi7jpbhtgQMSc7R7">Auto-cadastro</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832821670">(48) 3282-1670</a>',
    nEquipe0: "390 - Azul",
    nEquipe1: "391 - Lilás",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988342217">(48) 98834-2217</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988342867">(48) 98834-2867</a>',
    mailEquipe0: "<a href='mailto:csjurere.equipe390@gmail.com'>csjurere.equipe390@gmail.com</a>",
    mailEquipe1: "<a href='mailto:csjurere.equipe391@gmail.com'>csjurere.equipe391@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832821670">(48) 3282-1670</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32821670">3282-1670</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csjurere'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:csjurere@gmail.com'>csjurere@gmail.com</a>",
}

var lagoa = {
    nome: "Lagoa da Conceição",
    endereco: '<a target="_blank" href="https://g.page/centrodesaudelagoadaconceicao?share">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832320639">(48) 3232-0639</a>',
    nEquipe0: "470 - Amarelo",
    nEquipe1: "471 - Verde",
    nEquipe2: "472 - Lilás",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988366830">(48) 98836-6830</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988056895">(48) 98805-6895</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988072836">(48) 98807-2836</a>',
    zapEquipeOdonto1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988350370">(48) 98835-0370</a>',
    mailEquipe0: "<a href='mailto:lagoa470@gmail.com'>lagoa470@gmail.com</a>",
    mailEquipe1: "<a href='mailto:lagoa471@gmail.com'>lagoa471@gmail.com</a>",
    mailEquipe2: "<a href='mailto:lagoa472@gmail.com'>lagoa472@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832320639">(48) 3232-0639</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32320639">3232-0639</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cslagoa'>LinkTree</a>",
    redeSocial2: faceIcon + "<a href='https://www.facebook.com/cslagoadaconceicao'>Facebook</a>",
    redeSocial3: instaIcon + "<a href='https://www.instagram.com/cslagoadaconceicao/'>Instagram</a>",  
    mailCoord: mailIcon + "<a href='mailto:cslagoadaconceicao@gmail.com'>cslagoadaconceicao@gmail.com</a>", 
}

var monteCristo = {
    nome: "Monte Cristo",
    endereco: '<a target="_blank" href="https://goo.gl/maps/dTTRMPDFff8Jqf9EA">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833487467">(48) 3348-7467</a>',
    nEquipe0: "40 - Laranja",
    nEquipe1: "41 - Verde",
    nEquipe2: "42 - Rosa",
    nEquipe3: "43 - Amarela",
    nEquipe4: "44 - Azul",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988442558">(48) 98844-2558</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988443076">(48) 98844-3076</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988444055">(48) 98844-4055</a>',
    zapEquipe3: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988445490">(48) 98844-5490</a>',
    zapEquipe4: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988217620">(48) 98821-7620</a>',
    mailEquipe0: "<a href='mailto:csmontecristo040.pmf@gmail.com'>csmontecristo040.pmf@gmail.com</a>",
    mailEquipe1: "<a href='mailto:csmontecristo041.pmf@gmail.com'>csmontecristo041.pmf@gmail.com</a>",
    mailEquipe2: "<a href='mailto:csmontecristo042.pmf@gmail.com'>csmontecristo042.pmf@gmail.com</a>",
    mailEquipe3: "<a href='mailto:csmontecristo043.pmf@gmail.com'>csmontecristo043.pmf@gmail.com</a>",
    mailEquipe4: "<a href='mailto:csmontecristo044.pmf@gmail.com'>csmontecristo044.pmf@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833487467">(48) 3348-7467</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32408809">3240-8809</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csmontecristo'>LinkTree</a>",
    redeSocial2: faceIcon + "<a href='https://pt-br.facebook.com/centrodesaudemontecristo2013/'>Facebook</a>",
    mailCoord: mailIcon + "<a href='mailto:csmontecristo.pmf@gmail.com'>csmontecristo.pmf@gmail.com</a>",
}


var monteSerrat = {
    nome: "Monte Serrat",
    endereco: '<a target="_blank" href="https://goo.gl/maps/az8wSv7PqEo2DbfeA">Como chegar</a>',
    linkCadastro: '<a href="http://bit.ly/AutocadastroCSMonteserrat">Auto-cadastro</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832237816">(48) 3223-7816</a>',
    nEquipe0: "120 - Verde",
    nEquipe1: "121 - Azul",
    nEquipe2: "122 - Rosa",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988359046">(48) 98835-9046</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988359406">(48) 98835-9406</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988360142">(48) 98836-0142</a>',
    mailEquipe0: "<a href='mailto:csmonteserrat120@gmail.com'>csmonteserrat120@gmail.com</a>",
    mailEquipe1: "<a href='mailto:csmonteserrat121@gmail.com'>csmonteserrat121@gmail.com</a>",
    mailEquipe2: "<a href='mailto:csmonteserrat122@gmail.com'>csmonteserrat122@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832237816">(48) 3223-7816</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32237816">3223-7816</a>',
    redeSocial1: faceIcon + "<a href='https://www.facebook.com/centrodesaudemonteserrat/'>Facebook</a>",
    redeSocial2: instaIcon + "<a href='https://www.instagram.com/centrodesaudemonte'>Instagram</a>",
    redeSocial3: linkTreeIcon + "<a href='https://linktr.ee/csmonteserrat'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:csmonteserrat01@gmail.com'>csmonteserrat01@gmail.com</a>",
}

var morroDasPedras = {
    nome: "Morro das Pedras",
    endereco: '<a target="_blank" href="https://g.page/csmorrodaspedras?share">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833387627">(48) 3338-7627</a>',
    nEquipe0: "250 - Salmão",
    nEquipe1: "251 - Verde",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988023236">(48) 98802-3236</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988405010">(48) 98840-5010</a>',
    zapEquipeOdonto1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988381588">(48) 98838-1588</a>',
    mailEquipe0: "<a href='mailto:csmorrodaspedras.250@gmail.com'>csmorrodaspedras.250@gmail.com</a>",
    mailEquipe1: "<a href='mailto:csmorrodaspedras251.pmf@gmail.com'>csmorrodaspedras251.pmf@gmail.com</a>",
    mailEquipeOdonto1: "<a href='mailto:odontocsmp@gmail.com'>odontocsmp@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833387627">(48) 3338-7627</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32379013">3237-9013</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csmorrodaspedras'>LinkTree</a>",
    redeSocial2: faceIcon + "<a href='https://www.facebook.com/pages/Centro%20de%20Sa%C3%BAde%20Morro%20das%20Pedras/212687989121131/'>Facebook</a>",
    redeSocial3: instaIcon + "<a href='https://www.instagram.com/csmorrodaspedras/'>Instagram</a>",  
    mailCoord: mailIcon + "<a href='mailto:csmorrodaspedras@gmail.com'>csmorrodaspedras@gmail.com</a>",
}

var novoContinente = {
    nome: "Novo Continente",
    endereco: '<a target="_blank" href="https://goo.gl/maps/1dxRMeT36Z8q8FRB8">Como chegar</a>',
    linkCadastro: '<a href="https://docs.google.com/forms/d/e/1FAIpQLSfK2-Ss2oEm3wQ0eJ5XR3K86T-ZwE3U8EGheVHesFfMk_ePRQ/viewform">Auto-cadastro</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832497111">(48) 3249-7111</a>',
    nEquipe0: "100 - Lilás",
    nEquipe1: "101 - Azul",
    nEquipe2: "102 - Verde",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988352209">(48) 98835-2209</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988147569">(48) 98814-7569</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988452576">(48) 98845-2576</a>',
    mailEquipe0: "<a href='mailto:contato.area100@gmail.com'>contato.area100@gmail.com</a>",
    mailEquipe1: "<a href='mailto:csnovocontinente101@gmail.com'>csnovocontinente101@gmail.com</a>",
    mailEquipe2: "<a href='mailto:contato.area102@gmail.com'>contato.area102@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832497111">(48) 3249-7111</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32492448">3249-2448</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csnovocontinente'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:csnovocontinente.pmf@gmail.com'>csnovocontinente.pmf@gmail.com</a>",
}

var pantanal = {
    nome: "Pantanal",
    endereco: '<a target="_blank" href="https://g.page/cspantanal?share">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832382232">(48) 3238-2232</a>',
    nEquipe0: "160 - Amarela",
    nEquipe1: "161 - Lilás",
    nEquipe2: "162 - Verde",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548999506118">(48) 99950-6118</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988360856">(48) 98836-0856</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988361477">(48) 98836-1477</a>',
    mailEquipe0: "<a href='mailto:cspantanal160@gmail.com'>cspantanal160@gmail.com</a>",
    mailEquipe1: "<a href='mailto:cspantanalequipe161@gmail.com'>cspantanalequipe161@gmail.com</a>",
    mailEquipe2: "<a href='mailto:cspantanalequipe162@gmail.com'>cspantanalequipe162@gmail.com</a>",
    mailEquipeOdonto1: "<a href='mailto:odontopantanal@gmail.com'>odontopantanal@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832382232">(48) 3238-2232</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32347880">3234-7880</a>',
    redeSocial1: instaIcon + "<a href='https://www.instagram.com/cspantanal'>Instagram</a>",
    redeSocial2: linkTreeIcon + "<a href='https://linktr.ee/cspantanal'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:cspantanal.coord@gmail.com'>cspantanal.coord@gmail.com</a>",
    
}

var pantano = {
    nome: "Pântano do Sul",
    endereco: '<a target="_blank" href="https://g.page/cspantano?share">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832377032">(48) 3237-7032</a>',
    nEquipe0: "230 - Azul",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548991837587">(48) 99183-7587</a>',
    mailEquipe0: "<a href='mailto:faleconoscocspantanodosul@gmail.com'>faleconoscocspantanodosul@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832377032">(48) 3237-7032</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32377032">3237-7032</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cspantanodosul'>LinkTree</a>",
    redeSocial2: faceIcon + "<a href='https://www.facebook.com/sulpantano'>Facebook</a>",
    redeSocial3: instaIcon + "<a href='https://www.instagram.com/cspantanododosul/'>Instagram</a>",  
    mailCoord: mailIcon + "<a href='mailto:cspantanodosul@gmail.com'>cspantanodosul@gmail.com</a>",
}

var ponta = {
    nome: "Ponta das Canas",
    endereco: '<a target="_blank" href="https://goo.gl/maps/XGgPxSUeAgfrHjKK9">Como chegar</a>',
    linkCadastro: '<a href="https://forms.gle/8sx2bJ3NUQuQ3tMn8">Auto-cadastro</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832841337">(48) 3284-1337</a>',
    nEquipe0: "370 - Verde",
    nEquipe1: "371 - Amarela",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988145053">(48) 98814-5053</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988223052">(48) 98822-3052</a>',
    mailEquipe0: "<a href='mailto:cspontadascanas370@gmail.com'>cspontadascanas370@gmail.com</a>",
    mailEquipe1: "<a href='mailto:cspontadascanas371@gmail.com'>cspontadascanas371@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832841337">(48) 3284-1337</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32841337">3284-1337</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cspontadascanas'>LinkTree</a>",
    redeSocial2: instaIcon + "<a href='https://www.instagram.com/cspontadascanas/?hl=pt-br'>Instagram</a>",  
    mailCoord: mailIcon + "<a href='mailto:cspontadascanas@gmail.com'>cspontadascanas@gmail.com</a>",
}

var prainha = {
    nome: "Prainha",
    endereco: '<a target="_blank" href="https://goo.gl/maps/xj6C4TdjhKpSgScu8">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832257647">(48) 3225-7647</a>',
    nEquipe0: "130 - Azul",
    nEquipe1: "131 - Amarela",
    nEquipe2: "132 - Vermelha",
    nEquipe3: "133 - Consultório na Rua",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988410367">(48) 98841-0367</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988412203">(48) 98841-2203</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988413741">(48) 98841-3741</a>',
    zapEquipe3: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988430123">(48) 98843-0123</a>',
    mailEquipe0: "<a href='mailto:csprainha130@gmail.com'>csprainha130@gmail.com</a>",
    mailEquipe1: "<a href='mailto:csprainhaequipe131@gmail.com'>csprainhaequipe131@gmail.com</a>",
    mailEquipe2: "<a href='mailto:csprainha132@gmail.com'>csprainha132@gmail.com</a>",
    mailEquipe3: "<a href='mailto:consultorionaruafloripa@gmail.com'>consultorionaruafloripa@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832257647">(48) 3225-7647</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32257647">3225-7647</a>',
    redeSocial1: faceIcon + "<a href='https://www.facebook.com/funcionarios.prainha.1'>Facebook</a>",
    mailCoord: mailIcon + "<a href='mailto:prainhacentrodesaude@gmail.com'>prainhacentrodesaude@gmail.com</a>",
}

var ratones = {
    nome: "Ratones",
    endereco: '<a target="_blank" href="https://goo.gl/maps/gUKVRKjJEJyypLRi9">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832668090">(48) 3266-8090</a>',
    nEquipe0: "350 - Azul",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988425448">(48) 98842-5448</a>',
    mailEquipe0: "<a href='mailto:csratones350@gmail.com'>csratones350@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832668090">(48) 3266-8090</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32668090">3266-8090</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csratones'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:centrodesauderatones@gmail.com'>centrodesauderatones@gmail.com</a>",
}

var ribeirao = {
    nome: "Ribeirão da Ilha",
    endereco: '<a target="_blank" href="https://g.page/CSRIBEIRAODAILHA?share">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833375579">(48) 3337-5579</a>',
    nEquipe0: "220 - Azul",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988074346">(48) 98807-4346</a>',
    mailEquipe0: "<a href='mailto:csribeiraodailha@gmail.com'>csribeiraodailha@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833375579">(48) 3337-5579</a>',
    servico2: "Agendamento de vacinas",
    contatoServico2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833375579">(48) 3337-5579</a>',
    servico3: "Recepção",
    contatoServico3: phoneIcon + '<a href="tel:33375997">3337-5997</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csribeiraodailha'>LinkTree</a>",
    redeSocial2: instaIcon + "<a href='https://www.instagram.com/csribeiraodailha/'>Instagram</a>",  
    mailCoord: mailIcon + "<a href='mailto:csribeiraodailha@gmail.com'>csribeiraodailha@gmail.com</a>",
}

var rioTavares = {
    nome: "Rio Tavares",
    endereco: '<a target="_blank" href="https://g.page/csriotavares?share">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832326118">(48) 3232-6118</a>',
    nEquipe0: "290 - Laranja",
    nEquipe1: "291 - Verde",
    nEquipe2: "292 - Azul",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988380876">(48) 98838-0876</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988380957">(48) 98838-0957</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988381414">(48) 98838-1414</a>',
    mailEquipe0: "<a href='mailto:equipe290.pmf@gmail.com'>equipe290.pmf@gmail.com</a>",
    mailEquipe1: "<a href='mailto:equipe291.pmf@gmail.com'>equipe291.pmf@gmail.com</a>",
    mailEquipe2: "<a href='mailto:equipe292.pmf@gmail.com'>equipe292.pmf@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832326118">(48) 3232-6118</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32326118">3232-6118</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/riotavares'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:coordenacao.riotavares@gmail.com'>coordenacao.riotavares@gmail.com</a>",
}

var rioVermelho = {
    nome: "Rio Vemelho",
    endereco: '<a target="_blank" href="https://g.page/csriovermelho?share">Como chegar</a>',
    linkCadastro: '<a href="https://forms.gle/9iwJawT3eELmtfmr6">Auto-cadastro</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832697100">(48) 3269-7100</a>',
    nEquipe0: "420 - Laranja",
    nEquipe1: "421 - Verde",
    nEquipe2: "422 - Amarela",
    nEquipe3: "423 - Azul",
    nEquipe4: "424 - Rosa",
    nEquipe5: "425 - Lilás",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988321385">(48) 98832-1385</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988321604">(48) 98832-1604</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988323649">(48) 98832-3649</a>',
    zapEquipe3: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988324977">(48) 98832-4977</a>',
    zapEquipe4: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988326489">(48) 98832-6489</a>',
    zapEquipe5: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988327399">(48) 98832-7399</a>',
    mailEquipe0: "<a href='mailto:csriovermelho420laranja@gmail.com'>csriovermelho420laranja@gmail.com</a>",
    mailEquipe1: "<a href='mailto:areaverde421@gmail.com'>areaverde421@gmail.com</a>",
    mailEquipe2: "<a href='mailto:csriovermelho422@gmail.com'>csriovermelho422@gmail.com</a>",
    mailEquipe3: "<a href='mailto:enf423@gmail.com'>enf423@gmail.com</a>",
    mailEquipe4: "<a href='mailto:csriovermelho424@gmail.com'>csriovermelho424@gmail.com</a>",
    mailEquipe5: "<a href='mailto:csriovermelho425@gmail.com'>csriovermelho425@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832697100">(48) 3269-7100</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32697100">3269-7100</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csriovermelho'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:saude.csriovermelho@gmail.com'>saude.csriovermelho@gmail.com</a>",
}

var sacoDosLimoes = {
    nome: "Saco dos Limões",
    endereco: '<a target="_blank" href="https://goo.gl/maps/95BZMeoTHtMMeyjt5">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832234563">(48) 3223-4563</a>',
    nEquipe0: "310 - Laranja",
    nEquipe1: "311 - Verde",
    nEquipe2: "312 - Rosa",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988361647">(48) 98836-1647</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548999362035">(48) 99936-2035</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988362578">(48) 98836-2578</a>',
    zapEquipeOdonto1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988362407">(48) 98836-2407</a>',
    mailEquipe0: "<a href='mailto:cssacodoslimoes310.pmf@gmail.com'>cssacodoslimoes310.pmf@gmail.com</a>",
    mailEquipe1: "<a href='mailto:cssacodoslimoes311.pmf@gmail.com'>cssacodoslimoes311.pmf@gmail.com</a>",
    mailEquipe2: "<a href='mailto:cssacodoslimoes312.pmf@gmail.com'>cssacodoslimoes312.pmf@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832234563">(48) 3223-4563</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:33336797">3333-6797</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cssacodoslimoes'>LinkTree</a>",
    redeSocial2: instaIcon + "<a href='https://www.instagram.com/cssacodoslimoes'>Instagram</a>",
    redeSocial3: faceIcon + "<a href='https://www.facebook.com/pages/category/Medical---Health/Centro-de-Sa%C3%BAde-Saco-dos-Lim%C3%B5es-102410691500709/'>Facebook</a>",
    mailCoord: mailIcon + "<a href='mailto:cssacodoslimoes@gmail.com'>cssacodoslimoes@gmail.com</a>",    
}

var sacoGrande = {
    nome: "Saco Grande",
    endereco: '<a target="_blank" href="https://g.page/CSSacoGrande?share">Como chegar</a>',
    linkCadastro: '<a href="http://bit.ly/AutocadastroCSSacoGrande">Auto-cadastro</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832380110">(48) 3238-0110</a>',
    nEquipe0: "330 - Rosa",
    nEquipe1: "331 - Laranja",
    nEquipe2: "332 - Amarela",
    nEquipe3: "333 - Azul",
    nEquipe4: "334 - Vermelha",
    nEquipe5: "335 - Verde",
    nEquipe6: "336 - Roxa",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548984568375">(48) 98456-8375</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548998085490">(48) 99808-5490</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988363950">(48) 98836-3950</a>',
    zapEquipe3: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988376959">(48) 98837-6959</a>',
    zapEquipe4: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548984832544">(48) 98483-2544</a>',
    zapEquipe5: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988377966">(48) 98837-7966</a>',
    zapEquipe6: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988368622">(48) 98836-8622</a>',
    zapEquipeOdonto1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988380823">(48) 98838-0823</a>',
    mailEquipe0: "<a href='mailto:equipe330sacogrande@gmail.com'>equipe330sacogrande@gmail.com</a>",
    mailEquipe1: "<a href='mailto:equipe331sacogrande@gmail.com'>equipe331sacogrande@gmail.com</a>",
    mailEquipe2: "<a href='mailto:cssacogrande332@gmail.com'>cssacogrande332@gmail.com</a>",
    mailEquipe3: "<a href='mailto:cssacogrande333@gmail.com'>cssacogrande333@gmail.com</a>",
    mailEquipe4: "<a href='mailto:cssacogrande334@gmail.com'>cssacogrande334@gmail.com</a>",
    mailEquipe5: "<a href='mailto:contato335@gmail.com'>contato335@gmail.com</a>",
    mailEquipe6: "<a href='mailto:equipe336sacogrande@gmail.com'>equipe336sacogrande@gmail.com</a>",
    mailEquipeOdonto1: "<a href='mailto:odontosacogrande@gmail.com'>odontosacogrande@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832380110">(48) 3238-0110</a>' + 
                     '<br/>' + phoneIcon + '<a href="tel:32380608">3238-0608</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32380110">3238-0110</a>',
    servico3: "Farmácia (WhatsApp)",
    contatoServico3: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988380178">(48) 98838-0178</a>',
    servico4: "Farmácia (Email)",
    contatoServico4: mailIcon + '<span class="servMail"><a href="mailto:farmaciacssacogrande@gmail.com">farmaciacssacogrande@gmail.com</span></a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cssacogrande'>LinkTree</a>",
    redeSocial2: faceIcon + "<a href='https://pt-br.facebook.com/cssacogrande'>Facebook</a>",
    redeSocial3: instaIcon + "<a href='https://www.instagram.com/cssacogrande'>Instagram</a>",  
    mailCoord: mailIcon + "<a href='mailto:coordsacogrande@gmail.com'>coordsacogrande@gmail.com</a>",
}

var santinho = {
    nome: "Santinho",
    endereco: '<a target="_blank" href="https://g.page/cssantinho?share">Como chegar</a>',
    linkCadastro: '<a href="https://forms.gle/P5QsYjLPaBY7xkAJ6">Auto-cadastro</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833690174">(48) 3369-0174</a>',
    nEquipe0: "980 - Vermelha",
    nEquipe1: "981 - Azul",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988259576">(48) 98825-9576</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988264334">(48) 98826-4334</a>',
    mailEquipe0: "<a href='mailto:cssantinho980enf@gmail.com'>cssantinho980enf@gmail.com</a>",
    mailEquipe1: "<a href='mailto:cssantinho981mfc@gmail.com'>cssantinho981mfc@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833690174">(48) 3369-0174</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:33690174">3369-0174</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cssantinho'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:ulssantinho@gmail.com'>ulssantinho@gmail.com</a>",
}

var santoAntonio = {
    nome: "Santo Antônio de Lisboa",
    endereco: '<a target="_blank" href="https://goo.gl/maps/uB3URSw3Du2C7jTK9">Como chegar</a>',
    linkCadastro: '<a href="https://forms.gle/P5QsYjLPaBY7xkAJ6">Auto-cadastro</a>',
    zapCadastro: '<a href="https://forms.gle/PMqnfsC31gFSXu956">(48) 3235-1176</a>',
    nEquipe0: "360 - Azul",
    nEquipe1: "361 - Verde",
    nEquipe2: "362 - Amarela",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988236976">(48) 98823-6976</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988245405">(48) 98824-5405</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988251431">(48) 98825-1431</a>',
    mailEquipe0: "<a href='mailto:cssantoantonio360@gmail.com'>cssantoantonio360@gmail.com</a>",
    mailEquipe1: "<a href='mailto:cssantoantonio361@gmail.com'>cssantoantonio361@gmail.com</a>",
    mailEquipe2: "<a href='mailto:cssantoantonio362@gmail.com'>cssantoantonio362@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832351176">(48) 3235-1176</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32351176">3235-1176</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cssantoantonio'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:cssantoantoniocoord@gmail.com'>cssantoantoniocoord@gmail.com</a>",   
}

var sape = {
    nome: "Sapé",
    endereco: '<a target="_blank" href="https://g.page/cssape?share">Como chegar</a>',
    linkCadastro: '<a href="https://docs.google.com/forms/d/e/1FAIpQLSd9ze_txcAAl6-rNCgN_snfTx0K-WYMHHOdxTmfwnjPJXH6uQ/viewform">Auto-cadastro</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832409382">(48) 3240-9382</a>',
    nEquipe0: "30 - Rosa",
    nEquipe1: "31 - Azul",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988153763">(48) 98815-3763</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988159221">(48) 98815-9221</a>',
    mailEquipe0: "<a href='mailto:cssape30pmf@gmail.com'>cssape30pmf@gmail.com</a>",
    mailEquipe1: "<a href='mailto:cssape31pmf@gmail.com'>cssape31pmf@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832409382">(48) 3240-9382</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32406602">3240-6602</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cssape'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:cssape@gmail.com'>cssape@gmail.com</a>",
}

var tapera = {
    nome: "Tapera",
    endereco: '<a target="_blank" href="https://goo.gl/maps/EpQuhVt12HsVKrGg9">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833370289">(48) 3337-0289</a>',
    nEquipe0: "260 - Azul",
    nEquipe1: "261 - Verde",
    nEquipe2: "262 - Amarela",
    nEquipe3: "263 - Rosa",
    nEquipe4: "264 - Lilás",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988157652">(48) 98815-7652</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988405846">(48) 98840-5846</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988381803">(48) 98838-1803</a>',
    zapEquipe3: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988382028">(48) 98838-2028</a>',
    zapEquipe4: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988406698">(48) 98840-6698</a>',
    mailEquipe0: "<a href='mailto:contato260@gmail.com'>contato260@gmail.com</a>",
    mailEquipe1: "<a href='mailto:contato261@gmail.com'>contato261@gmail.com</a>",
    mailEquipe2: "<a href='mailto:equipe262cstapera@gmail.com'>equipe262cstapera@gmail.com</a>",
    mailEquipe3: "<a href='mailto:contato263@gmail.com'>contato263@gmail.com</a>",
    mailEquipe4: "<a href='mailto:equipe264@gmail.com'>equipe264@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554833370289">(48) 3337-0289</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:33370289">3337-0289</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cstapera'>LinkTree</a>",
    redeSocial2: faceIcon + "<a href='https://www.facebook.com/cstapera'>Facebook</a>",
    redeSocial3: instaIcon + "<a href='https://www.instagram.com/centrodesaudetapera/'>Instagram</a>",  
    mailCoord: mailIcon + "<a href='mailto:coordenacaocstapera@gmail.com'>coordenacaocstapera@gmail.com</a>",
}



var trindade = {
    nome: "Trindade",
    endereco: '<a target="_blank" href="https://goo.gl/maps/EpQuhVt12HsVKrGg9">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832349577">(48) 3234-9577</a>',
    nEquipe0: "850 - Azul",
    nEquipe1: "851 - Verde",
    nEquipe2: "852 - Roxa",
    nEquipe3: "853 - Rosa",
    nEquipe4: "854 - Laranja",
    nEquipe5: "855 - Amarela",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988281725">(48) 98828-1725</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988285795">(48) 98828-5795</a>',
    zapEquipe2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988378349">(48) 98837-8349</a>',
    zapEquipe3: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988291965">(48) 98829-1965</a>',
    zapEquipe4: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988294933">(48) 98829-4933</a>',
    zapEquipe5: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988328073">(48) 98832-8073</a>',
    zapEquipeOdonto1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988362914">(48) 98836-2914</a>'+': áreas 851,853 e 855.',
//    zapEquipeOdonto2: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832666293">(48) 3266-6293</a>'+': equipes 380, 383 e 384.',
    mailEquipe0: "<a href='mailto:cstrindade850.pmf@gmail.com'>cstrindade850.pmf@gmail.com</a>",
    mailEquipe1: "<a href='mailto:cstrindade851@gmail.com'>cstrindade851@gmail.com</a>",
    mailEquipe2: "<a href='mailto:cstrindade852@gmail.com'>cstrindade852@gmail.com</a>",
    mailEquipe3: "<a href='mailto:cstrindade853@gmail.com'>cstrindade853@gmail.com</a>",
    mailEquipe4: "<a href='mailto:cstrindade854.pmf@gmail.com'>cstrindade854.pmf@gmail.com</a>",
    mailEquipe5: "<a href='mailto:cstrindade855@gmail.com'>cstrindade855@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832349577">(48) 3234-9577</a>',
    servico2: "Agendamento de vacinas",
    contatoServico2: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832340177">(48) 3234-0177</a>' +
                     '<br/>' + phoneIcon + '<a href="tel:32340177">3234-0177</a>',
    servico3: "Recepção",
    contatoServico3: phoneIcon + '<a href="tel:32349577">3234-9577</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/cstrindade'>LinkTree</a>",
    redeSocial2: instaIcon + "<a href='https://www.instagram.com/cstrindadefloripa'>Instagram</a>",  
    mailCoord: mailIcon + "<a href='mailto:cstrindade.pmf@gmail.com'>cstrindade.pmf@gmail.com</a>",
}

var vargemGrande = {
    nome: "Vargem Grande",
    endereco: '<a target="_blank" href="https://g.page/CSVARGEMGRANDE?share">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832695034">(48) 3269-5034</a>',
    nEquipe0: "410 - Laranja",
    nEquipe1: "411 - Verde",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988295051">(48) 98829-5051</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988297251">(48) 98829-7251</a>',
    zapEquipeOdonto1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832666293">(48) 3266-6293</a>',
    mailEquipe0: "<a href='mailto:csvargemgrande410@gmail.com'>csvargemgrande410@gmail.com</a>",
    mailEquipe1: "<a href='mailto:csvargemgrande411@gmail.com'>csvargemgrande411@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832695034">(48) 3269-5034</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32695034">3269-5034</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csvargemgrande'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:csvargemgrande@gmail.com'>csvargemgrande@gmail.com</a>",
}

var vargemPequena = {
    nome: "Vargem Pequena",
    endereco: '<a target="_blank" href="https://g.page/csvargempequena?share">Como chegar</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988088205">(48) 98808-8205</a>',
    nEquipe0: "340 - Verde",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988088205">(48) 98808-8205</a>',
    zapEquipeOdonto1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832667063">(48) 3266-7063</a>',
    mailEquipe0: "<a href='mailto:csvargempequena340@gmail.com'>csvargempequena340@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988088205">(48) 98808-8205</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32695898">3269-5898</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/csvargempequena'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:csvargempequena@gmail.com'>csvargempequena@gmail.com</a>",
}

var vilaAparecida = {
    nome: "Vila Aparecida",
    endereco: '<a target="_blank" href="https://g.page/csvilaaparecida?share">Como chegar</a>',
    linkCadastro: '<a href="https://docs.google.com/forms/d/1ZfHLctf429ceh5Koiy21h0MeCaIMgM77vzcqpTRaI7k/viewform?edit_requested=true">Auto-cadastro</a>',
    zapCadastro: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832481611">(48) 3248-1611</a><br/><br/>' + zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832446724">(48) 3244-6724</a>',
    nEquipe0: "90 - Rosa",
    nEquipe1: "91 - Laranja",
    zapEquipe0: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988166963">(48) 98816-6963</a>',
    zapEquipe1: '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=5548988168197">(48) 98816-8197</a>',
    mailEquipe0: "<a href='mailto:csvilaaparecida090.pmf@gmail.com'>csvilaaparecida090.pmf@gmail.com</a>",
    mailEquipe1: "<a href='mailto:csvilaaparecida091.pmf@gmail.com'>csvilaaparecida091.pmf@gmail.com</a>",
    servico1: "Dúvidas gerais",
    contatoServico1: zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832481611">(48) 3248-1611</a><br/>' + zapIcon + '<a href="http://api.whatsapp.com/send?1=pt_BR&phone=554832446724">(48) 3244-6724</a>',
    servico2: "Recepção",
    contatoServico2: phoneIcon + '<a href="tel:32495844">3249-5844</a>',
    redeSocial1: linkTreeIcon + "<a href='https://linktr.ee/CSVilaAparecida'>LinkTree</a>",
    mailCoord: mailIcon + "<a href='mailto:coordenacaocsvila@gmail.com'>coordenacaocsvila@gmail.com</a>", 
}


// FUNÇÃO LISTA
var y;
var q;
var listaDeCS = [abraao, agronomica, altoRibeirao, armacao, balneario, barra, cachoeira, caieira, campeche, canasvieiras, canto, capoeiras, carianos, centro, coloninha, coqueiros, corrego, costa, costeira, estreito, fazenda, ingleses, itacorubi, jardimAtlantico, joaoPaulo, jurere, lagoa, monteCristo, monteSerrat, morroDasPedras, novoContinente, pantanal, pantano, ponta, prainha, ratones, ribeirao, rioTavares, rioVermelho, sacoDosLimoes, sacoGrande, santinho, santoAntonio, sape, tapera, trindade, vargemGrande, vargemPequena, vilaAparecida];

var l = document.getElementById("listaDeCS");

for (y=0; y<listaDeCS.length; y++){
    l.innerHTML += '<span class="titulo">' + listaDeCS[y].nome + '</span><hr>';
    l.innerHTML += '<table><tr><td>Cadastro: </td><td><img class="icon" src="WhatsApp-icon.png">' + listaDeCS[y].zapCadastro + '</td></tr></table>';

    if(typeof listaDeCS[y].nEquipe0 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>Equipe ' + listaDeCS[y].nEquipe0 + '</td><td><img class="icon" src="WhatsApp-icon.png">' + 
            listaDeCS[y].zapEquipe0 + '</td><td class="td2"><img class="icon" src="Email512.png">' + listaDeCS[y].mailEquipe0 + '</td></tr></table>';}
    
    if(typeof listaDeCS[y].nEquipe1 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>Equipe ' + listaDeCS[y].nEquipe1 + '</td><td><img class="icon" src="WhatsApp-icon.png">' + 
            listaDeCS[y].zapEquipe1 + '</td><td class="td2"><img class="icon" src="Email512.png">' + listaDeCS[y].mailEquipe1 + '</td></tr></table>';}
    
    if(typeof listaDeCS[y].nEquipe2 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>Equipe ' + listaDeCS[y].nEquipe2 + '</td><td><img class="icon" src="WhatsApp-icon.png">' + 
        listaDeCS[y].zapEquipe2 + '</td><td class="td2"><img class="icon" src="Email512.png">' + listaDeCS[y].mailEquipe2 + '</td></tr></table>';}
    
    if(typeof listaDeCS[y].nEquipe3 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>Equipe ' + listaDeCS[y].nEquipe3 + '</td><td><img class="icon" src="WhatsApp-icon.png">' + 
            listaDeCS[y].zapEquipe3 + '</td><td class="td2"><img class="icon" src="Email512.png">' + listaDeCS[y].mailEquipe3 + '</td></tr></table>';}
   
    if(typeof listaDeCS[y].nEquipe4 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>Equipe ' + listaDeCS[y].nEquipe4 + '</td><td><img class="icon" src="WhatsApp-icon.png">' + 
            listaDeCS[y].zapEquipe4 + '</td><td class="td2"><img class="icon" src="Email512.png">' + listaDeCS[y].mailEquipe4 + '</td></tr></table>';}
    
    if(typeof listaDeCS[y].nEquipe5 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>Equipe ' + listaDeCS[y].nEquipe5 + '</td><td><img class="icon" src="WhatsApp-icon.png">' + 
            listaDeCS[y].zapEquipe5 + '</td><td class="td2"><img class="icon" src="Email512.png">' + listaDeCS[y].mailEquipe5 + '</td></tr></table>';}
    
    if(typeof listaDeCS[y].nEquipe6 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>Equipe ' + listaDeCS[y].nEquipe6 + '</td><td><img class="icon" src="WhatsApp-icon.png">' + 
            listaDeCS[y].zapEquipe6 + '</td><td class="td2"><img class="icon" src="Email512.png">' + listaDeCS[y].mailEquipe6 + '</td></tr></table>';}
        
    if(typeof listaDeCS[y].nEquipe7 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>Equipe ' + listaDeCS[y].nEquipe7 + '</td><td><img class="icon" src="WhatsApp-icon.png">' + 
            listaDeCS[y].zapEquipe7 + '</td><td class="td2"><img class="icon" src="Email512.png">' + listaDeCS[y].mailEquipe7 + '</td></tr></table>';}
      
    if(typeof listaDeCS[y].zapEquipeOdonto1 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>Saúde Bucal:</td><td class="td2"><img class="icon" src="WhatsApp-icon.png">' + 
            listaDeCS[y].zapEquipeOdonto1 + '</td></tr></table>';}
    
    if(typeof listaDeCS[y].zapEquipeOdonto2 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>Saúde Bucal:</td><td class="td2"><img class="icon" src="WhatsApp-icon.png">' + 
            listaDeCS[y].zapEquipeOdonto2 + '</td></tr></table>';}

    if(typeof listaDeCS[y].mailEquipeOdonto1 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>Saúde Bucal:</td><td class="td2"><img class="icon" src="Email512.png">' + 
            listaDeCS[y].mailEquipeOdonto1 + '</td></tr></table>';}
    
    if(typeof listaDeCS[y].mailEquipeOdonto2=== 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>Saúde Bucal:</td><td class="td2"><img class="icon" src="Email512.png">' + 
            listaDeCS[y].mailEquipeOdonto2 + '</td></tr></table>';}
        
    if(typeof listaDeCS[y].servico1 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>' + listaDeCS[y].servico1 + '</td><td class="td2">' + listaDeCS[y].contatoServico1; + '</td></tr></table>';}
    
    if(typeof listaDeCS[y].servico2 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>' + listaDeCS[y].servico2 + '</td><td class="td2">' + listaDeCS[y].contatoServico2; + '</td></tr></table>';}
    
    if(typeof listaDeCS[y].servico3 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>' + listaDeCS[y].servico3 + '</td><td class="td2">' + listaDeCS[y].contatoServico3; + '</td></tr></table>';}
    
    if(typeof listaDeCS[y].servico4 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>' + listaDeCS[y].servico4 + '</td><td class="td2">' + listaDeCS[y].contatoServico4; + '</td></tr></table>';}
    
    if(typeof listaDeCS[y].servico5 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>' + listaDeCS[y].servico5 + '</td><td class="td2">' + listaDeCS[y].contatoServico5; + '</td></tr></table>';}
    
     if(typeof listaDeCS[y].servico6 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>' + listaDeCS[y].servico6 + '</td><td class="td2">' + listaDeCS[y].contatoServico6; + '</td></tr></table>';}
    
     if(typeof listaDeCS[y].servico7 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>' + listaDeCS[y].servico7 + '</td><td class="td2">' + listaDeCS[y].contatoServico7; + '</td></tr></table>';}
    
     if(typeof listaDeCS[y].servico8 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>' + listaDeCS[y].servico8 + '</td><td class="td2">' + listaDeCS[y].contatoServico8; + '</td></tr></table>';}
    
    if(typeof listaDeCS[y].mailCoord === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>Coordenação</td><td class="td2">' + listaDeCS[y].mailCoord; + '</td></tr></table>';}
        
    if(typeof listaDeCS[y].redeSocial1 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>' + listaDeCS[y].redeSocial1 + '</td></tr></table>';}
    
    if(typeof listaDeCS[y].redeSocial2 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>' + listaDeCS[y].redeSocial2 + '</td></tr></table>';}
   
    if(typeof listaDeCS[y].redeSocial3 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>' + listaDeCS[y].redeSocial3 + '</td></tr></table>';}
   
    if(typeof listaDeCS[y].redeSocial4 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>' + listaDeCS[y].redeSocial4 + '</td></tr></table>';}
   
    if(typeof listaDeCS[y].redeSocial5 === 'undefined'){}else{ 
        l.innerHTML += '<table><tr><td>' + listaDeCS[y].redeSocial5 + '</td></tr></table>';}
       
    l.innerHTML += '<br/><br/>';
 }