var reset = function(){
    clearInterval(intervalo)
    document.getElementsByClassName("texto")[0].innerHTML = "Ricardo está com vontade de dar uma volta na floresta. Você acha uma boa idéia?"
    document.getElementsByClassName("Ricardo")[0].src = "https://media.tenor.com/gdqQlkh_C5QAAAAM/ricardo-milos-come-here.gif"
    document.getElementsByClassName("opcaoUm")[0].removeEventListener("click", reset);
    document.getElementsByClassName("opcaoUm")[0].addEventListener("click", irFloresta);
    document.getElementsByClassName("opcaoDois")[0].addEventListener("click", ficarCasa);
    document.body.style.backgroundImage = "none";
    document.body.style.backgourndColor = "black";
    document.getElementsByClassName("Ricardo")[0].style.width = `40%`
    document.getElementsByClassName("audio")[0].volume = 0.5
    document.getElementsByClassName("audio")[0].src = "./sounds/gta-san-andreas-ah-shit-here-we-go-again.mp3"
    document.getElementsByClassName("audio")[0].play()
}




var ficarCasa = function(){
    funcaoNova(
        "Ricardo ficou em casa e resolveu fazer pizzas. <br> de qualquer forma, aproveitou seu dia. <br> Quer tentar novamente?",
        "https://media.tenor.com/OObr9-HHjkgAAAAC/ricardo-milos-pizza.gif",
        irFloresta,
        reset,
        ficarCasa,
        null,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXfUtWLcr4KCQBIP2z232CjxD7rhmDoHAr__nu1vP&s",
        "Sim",
        "Não",
        "./sounds/dj-maggot_basshunter-dota-mp3.mp3",
        "35%",
        1
    )
}




var kiraPerde = function(){
    document.getElementsByClassName("audio")[0].volume = 0.2
    funcaoNova(
        "Ricardo conseguiu derrotar o grande serial killer da cidade <br>Todos ficam felizes em morioh! <br> Fim Morioh <br> Tentar novamente? ",
        "https://media.tenor.com/0jpu-XpzIR8AAAAM/ricardo-milos.gif",
        kiraPerde,
        reset,
        null,
        null,
        "https://static.jojowiki.com/images/thumb/a/a8/latest/20210208100943/Morioh_grand_hotel_anime.png/400px-Morioh_grand_hotel_anime.png",
        "Sim",
        "Não",
        "./sounds/Josuke Theme.mp3",
        "50%",
        1
    )
    intervalo = setInterval(()=>{
        let probabilidade = parseInt(Math.random()*4)
        switch (probabilidade){
            case 0:
                document.getElementsByClassName("Ricardo")[0].src = "https://media.tenor.com/K0qWzvdy1GgAAAAC/josuke-pose.gif"
                break;
            case 1:
                document.getElementsByClassName("Ricardo")[0].src = "https://i.pinimg.com/originals/82/90/b2/8290b2adb338e77d3f89dde1abbeb531.gif"
                break;
            case 2:
                document.getElementsByClassName("Ricardo")[0].src = "https://i.pinimg.com/originals/a5/e8/2d/a5e82d700ff336637489b44f32d36095.gif"
                break;
            default:
                document.getElementsByClassName("Ricardo")[0].src = "https://media.tenor.com/0jpu-XpzIR8AAAAM/ricardo-milos.gif"
        }
    }, 1000)
}

var biteDust = function(){
    let probabilidade = parseInt(Math.random()*50)
    if(probabilidade >= 30){
    funcaoNova(
        "Antes que Ricardo conseguisse dar o golpe final, Kira usou seu golpe <br> BITES THE DUST",
        "https://media.tenor.com/66dVenBDuXoAAAAd/bites-za-dusto-killer-queen.gif",
        biteDust,
        reset,
        null,
        null,
        "none",
        "Continuar",
        "Nada",
        "./sounds/Bites za dusto.mp3",
        "50%",
        1
    )
    }else{
        funcaoNova(
            "Ricardo consegue dar o golpe final a tempo. <br> Kira falece.",
            "https://thumbs.gfycat.com/GreedyRemarkableHusky-size_restricted.gif",
            biteDust,
            kiraPerde,
            null,
            null,
            "https://static.jojowiki.com/images/thumb/a/a8/latest/20210208100943/Morioh_grand_hotel_anime.png/400px-Morioh_grand_hotel_anime.png",
            "Contiuar",
            "Nada",
            "./sounds/mixkit-male-crowd-cheering-and-whistling-457.wav",
            "50%",
            1
        )
    }
}

var kiraApanha = function(){
    funcaoNova(
        "Droga, ele vai ativar sua habilidade especial!",
        "https://thumbs.gfycat.com/ResponsibleWarlikeDingo-max-1mb.gif",
        kiraApanha,
        biteDust,
        null,
        null,
        "https://static.jojowiki.com/images/thumb/a/a8/latest/20210208100943/Morioh_grand_hotel_anime.png/400px-Morioh_grand_hotel_anime.png",
        "Continuar",
        "Nada",
        null,
        "50%",
        0
    )
}


var ricardoRevidaKira = function(){
    funcaoNova(
        "TOMA",
        "https://media.tenor.com/q5Hs0JSf7uAAAAAC/ricardo-persona.gif",
        ricardoRevidaKira,
        kiraApanha,
        null,
        null,
        "https://static.jojowiki.com/images/thumb/a/a8/latest/20210208100943/Morioh_grand_hotel_anime.png/400px-Morioh_grand_hotel_anime.png",
        "Continuar",
        "Nada",
        null,
        "50%",
        0
    )
}

var lutaKira = function(){
    funcaoNova(
        "ORA",
        "https://media.tenor.com/9V3lwMIm9coAAAAC/jojos-bizarre-yoshikage-kira.gif",
        lutaKira,
        ricardoRevidaKira,
        null,
        null,
        "https://static.jojowiki.com/images/thumb/a/a8/latest/20210208100943/Morioh_grand_hotel_anime.png/400px-Morioh_grand_hotel_anime.png",
        "Continuar",
        "Nada",
        null,
        "50%",
        0
    )
}

var kira = function(){
    funcaoNova(
        "Ricardo encontrou um sério oponente chamado yoshikage Kira.",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqVo7udgrdHjMy_hmPNHImvtu993aDzXgIw&usqp=CAU",
        kira,
        lutaKira,
        null,
        null,
        "https://i.pinimg.com/736x/4e/4c/ba/4e4cba39f7076a00f491c0a100b9d608.jpg",
        "Continuar",
        "nada",
        "./sounds/JoJos-Bizarre-Adventure.mp3",
        "50%",
        1
    
    )

}



var viagem = function(){
    funcaoNova(
        "Parece que ele está viajando no tempo!",
        "https://media.tenor.com/gXiVagrUbikAAAAC/ricardo-milos-gif.gif",
        viagem,
        kira,
        null,
        null,
        "https://media.istockphoto.com/id/1401395336/photo/flying-inside-digital-tunnel-futuristic-background-with-neon-rays.webp?b=1&s=170667a&w=0&k=20&c=Bu9IkqOkC98VEaFwijKEKSI74ekMDKEOwGLeA4KLfAU=",
        "Continuar",
        "Nada",
        "./sounds/red-alert-chronosphere-test.mp3",
        "60%",
        1
    )
}

var checarMaquinas = function(){
    funcaoNova(
        "Ele então começou a mexer.",
        "https://thumbs.gfycat.com/GenerousNimbleIbis-size_restricted.gif",
        checarMaquinas,
        viagem,
        null,
        null,
        "https://generations.krea.ai/images/b8a1d525-5eed-41fc-93fa-7e2a42e02994.webp",
        "Continuar",
        "Nada",
        "./sounds/X-Files-Theme-Song.mp3",
        "60%",
        0
    )
}

var aliens = function(){
    funcaoNova(
        "Ricardo encontrou uma base alienígena escondida no fundo da caverna. <br> Ele deve mexer nas máquinas alienígenas?",
        "https://media.tenor.com/FLkJQqgtTQcAAAAC/ricardo-milos-dancing.gif",
        aliens,
        checarMaquinas,
        null,
        null,
        "https://generations.krea.ai/images/b8a1d525-5eed-41fc-93fa-7e2a42e02994.webp",
        "Sim",
        "Não",
        "./sounds/X-Files-Theme-Song.mp3",
        "40%",
        1
    )
}


checarMorte = function(){
    funcaoNova(
        "É, ele morreu. <br> Quer continuar explorando?",
        "https://ovicio.com.br/wp-content/uploads/2019/11/20191109-eiuqfv6vuaabtis-555x555.jpg",
        checarMorte,
        aliens,
        null,
        null,
        "https://cdn.mos.cms.futurecdn.net/sVjjkAACubAhRy4vWJhRWC.jpg",
        "Sim",
        "Não",
        "./sounds/mixkit-male-crowd-cheering-and-whistling-457.wav",
        "35%",
        1
    )
}

var irSom = function(){
    let probabilidade = parseInt(Math.random()*50)

    if(probabilidade > 45){

    }
    else{
        document.getElementsByClassName("texto")[0].innerHTML = "Ricardo foi atacado! <br> por sorte, utilizou sua técnica secreta e revidou o ataque do seu agressor. <br> Será uma boa idéia cheacar se ele realmente morreu?"
        document.getElementsByClassName("Ricardo")[0].src = "https://media.tenor.com/C-OHvVBw5jAAAAAC/ricardo-fight-ricardo-milos.gif"
        document.getElementsByClassName("opcaoUm")[0].removeEventListener("click", irSom);
        document.getElementsByClassName("opcaoUm")[0].addEventListener("click", checarMorte);
        document.getElementsByClassName("audio")[0].src = "./sounds/tomp3.cc - Sword Art Online We Have To Defeat It Gleam Eye Theme  EPIC VERSION.mp3"
        document.getElementsByClassName("audio")[0].volume = 0.2
        document.getElementsByClassName("audio")[0].play()

    }
}


var funcaoNova = function(texto, imagem, passadaUm, futuraUm, passadaDois, futuraDois, background, botaoUm, botaoDois, audio, tamanho,  resposta){
        document.getElementsByClassName("texto")[0].innerHTML = `${texto}`
        document.getElementsByClassName("Ricardo")[0].src = `${imagem}`
        document.getElementsByClassName("opcaoUm")[0].removeEventListener("click", passadaUm);
        document.getElementsByClassName("opcaoUm")[0].addEventListener("click", futuraUm);
        document.getElementsByClassName("opcaoDois")[0].removeEventListener("click", passadaDois);
        document.getElementsByClassName("opcaoDois")[0].addEventListener("click", futuraDois);
        document.body.style.backgroundImage = `url(${background})`
        document.getElementsByClassName("opcaoUm")[0].innerHTML = `${botaoUm}`
        document.getElementsByClassName("opcaoDois")[0].innerHTML = `${botaoDois}`
        document.getElementsByClassName("Ricardo")[0].style.width = `${tamanho}`
        if(resposta == 1){
        try{
            document.getElementsByClassName("audio")[0].src = `${audio}`
            document.getElementsByClassName("audio")[0].play()
        }catch{

        }
    }
        }

var irFloresta = function() {
    let probabilidade = parseInt(Math.random()*50)

    if(probabilidade > 45){
        document.getElementsByClassName("texto")[0].innerHTML = "Foi um ótimo passeio! Ricardo voltou pra casa e ficou bem feliz! Final bom!   <br>Tentar novamente?"
        document.getElementsByClassName("Ricardo")[0].src = "https://steamuserimages-a.akamaihd.net/ugc/945093483574551138/E32BDFE873DE7E7E62AEF0723FC8FB1CC15D3058/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        document.getElementsByClassName("opcaoUm")[0].removeEventListener("click", irFloresta);
        document.getElementsByClassName("opcaoUm")[0].addEventListener("click", reset);
        document.body.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXfUtWLcr4KCQBIP2z232CjxD7rhmDoHAr__nu1vP&s)";
    }
    else{
        document.getElementsByClassName("texto")[0].innerHTML = "Droga! Ricardo estava distraido e caiu em uma caverna! <br> Ele ouviu um barulho vindo de longe. Ele deve ir até ele?"
        document.getElementsByClassName("Ricardo")[0].src = "https://i.redd.it/cquh3jjl1ge31.gif"
        document.body.style.backgroundImage = "url(https://cdn.mos.cms.futurecdn.net/sVjjkAACubAhRy4vWJhRWC.jpg)";
        document.getElementsByClassName("opcaoUm")[0].removeEventListener("click", irFloresta);
        document.getElementsByClassName("opcaoDois")[0].removeEventListener("click", ficarCasa);
        document.getElementsByClassName("opcaoUm")[0].addEventListener("click", irSom);
        document.getElementsByClassName("audio")[0].src = `https://ringtonedownloadmp3.net/wp-content/uploads/2022/02/Minecraft-Theme-Song.mp3`
        try{
            document.getElementsByClassName("audio")[0].play()
        }catch{

        }
        
    }
}



var opcaoUm = document.getElementsByClassName("opcaoUm")
var opcaoDois = document.getElementsByClassName("opcaoDois")
opcaoUm[0].addEventListener("click", irFloresta);
opcaoDois[0].addEventListener("click", ficarCasa);
document.getElementsByClassName("audio")[0].volume = 0.5



var intervalo = null