let artesHome = {
    jibaro: {
        imagem: "images/home/jibaro-home.jpg",
        link: "",
        alternative: "A fanart of jibaro mermaid."
    },
    bedroomTravel: {
        imagem: "images/home/bedroom-travel-home.jpg",
        link: "",
        alternative: "A guy playing guitar and smoking on his bedroom with planets inside of it."
    },
    cloudGuy: {
        imagem: "images/home/cloud-guy-home.jpg",
        link: "",
        alternative: "A guy with crazy hair floating through the clouds."
    },
    adventurers: {
        imagem: "images/home/adventurers-home.jpg",
        link: "",
        alternative: "Adventurers on a wall deciding where to go next."
    },
    streetSkaters: {
        imagem: "images/home/skatersStreet-home.jpg",
        link: "",
        alternative: "Skaters skating down the street."
    },
    wandaVision: {
        imagem: "images/home/wandavision-home.jpg",
        link:"",
        alternative: "A wandavision fanart showing Wanda and Vision."
    },
    bonsai: {
        imagem: "images/home/bonsai-home.jpg",
        link: "",
        alternative: "A girl using cellphone while sitting in a bonsai."
    },
    cityGuy: {
        imagem: "images/home/giant-home.jpg",
        link: "",
        alternative: "A giant guy sitting in the middle of the city."
    }
};
let artesAnim = {
    chocolateDreams: {
        imagem: "https://www.youtube.com/embed/LJ2laER62OY",
        link: "",
        alternative: "Animação para série de estampas Chocolate Dreams."
    },
    toilLand: {
        imagem: "https://www.youtube.com/embed/GQvu1mCv9RM",
        link: "",
        alternative: "Clipe animado para a música Toil Land."
    },
    california: {
        imagem: "https://www.youtube.com/embed/NBjkgwQVvTY",
        link: "",
        alternative: "",
    },
    quintaldecasa: {
        imagem: "https://www.youtube.com/embed/toidF84lei4",
        link: "",
        alternative: "",
    },
    ruasdazn: {
        imagem: "https://www.youtube.com/embed/jiM6LV0XAAk",
        link: "",
        alternative: "",
    }
}
let artesEstampasCD = {
    crazyZazzy: {
        imagem:"",
        link: "",
        alternative: "Crazy Zazzy"
    },
    crazyZazzy: {
        imagem:"",
        link: "",
        alternative: "Crazy Zazzy"
    },
    crazyZazzy: {
        imagem:"",
        link: "",
        alternative: "Crazy Zazzy"
    },
    crazyZazzy: {
        imagem:"",
        link: "",
        alternative: "Crazy Zazzy"
    },
    crazyZazzy: {
        imagem:"",
        link: "",
        alternative: "Crazy Zazzy"
    },


}
let artesEstampasBV = {
    cangaceiro: {
        imagem: "",
        link: "",
        alternative: "",
    },
    cangaceiro: {
        imagem: "",
        link: "",
        alternative: "",
    },
    cangaceiro: {
        imagem: "",
        link: "",
        alternative: "",
    },
    cangaceiro: {
        imagem: "",
        link: "",
        alternative: "",
    },
    cangaceiro: {
        imagem: "",
        link: "",
        alternative: "",
    },
}
let artesGames = {
    starCatcher: {
        source: "https://itch.io/embed-upload/1657829?color=1F003D",
        link: "https://mugiartes.itch.io/star-catcher",
        alternative: "Star Catcher",
        imagem: "images/games/star-banner.png",
        controles: `Movimento= W A S D
        Mira= Mouse`
    },
    mortoVivo: {
        source: "https://itch.io/embed-upload/2898576?color=6c2a35",
        link: "https://mugiartes.itch.io/morto-vivo",
        alternative: "Morto Vivo",
        imagem: "images/games/mvivo-banner.png",
        controles: `Toque com o mouse ou touch, arraste para cima ou para baixo e solte o botão na hora certa.`
    },
    foxyTales: {
        source: "https://itch.io/embed-upload/2858839?color=63c64d",
        link: "https://mugiartes.itch.io/foxy-tales",
        alternative: "Star Catcher",
        imagem: "images/games/foxy-banner.png",
        controles: `Movimento= setas Pulo= espaço`
    },
}
let sobre = {

}


//Atribuição de elementos a variáveis
const portfolioHome = document.getElementById("portfolio-home");
const ilustraBtn = document.getElementById("ilustra-btn");
const animaBtn = document.getElementById("anima-btn");
const estampasBtn = document.getElementById("estampas-btn");
const estampasCD = document.getElementById("chocDream-btn");
const estampasBV = document.getElementById("barbaVerde-btn");
const jogosBtn = document.getElementById("jogos-btn");
const sobreBtn = document.getElementById("sobre-btn");


const estampaHdn = document.getElementsByClassName("estampa-hdn");


estampaHdn[0].style.display = "none";
estampaHdn[1].style.display = "none";

function renderView (section) {
    let images = "";

    if(section != artesAnim && section != artesGames){
        for (let key in section) {
            images += `
            <div class="img-row">
                <img src="${section[key].imagem}" alt="${section[key].alternative}" class="imageOverlay">
                <a href='#'>
                    <div class="overlayTextImage">
                        <div class="textOver">${key}</div>
                    </div>
                </a>
            </div>
            `
        }
    } else if (section === artesAnim) {
        for (let key in section) {
            images += `
            <div class="video-row">
                <div class="video-txt">
                    <div class="vd-txt">${key}</div>
                </div>
                <iframe width="560" height="315" src="${section[key].imagem}"></iframe>
            </div>
            `
        }
    } else if (section === artesGames) {
        for (let key in section) {
            images += `
            <div class="img-row" id="${key}">
                <img src="${section[key].imagem}" alt="${section[key].alternative}" class="imageOverlay">
                <a href="javascript:gameSelect('${key}')">
                    <div class="overlayTextImage">
                        <div class="textOver">Clique para jogar: ${key}</div>
                    </div>
                </a>
            </div>
            `
        }
    }


    portfolioHome.innerHTML = images;
}

function eventCheck(btn, section) {
    btn.addEventListener("click", function() {
        renderView(section);
        console.log(estampaHdn[0].style.display);
    })
}

function UnhideHide(btn) {
    for (i=0; i < btn.length; i++) {
        if(btn[i].style.display === "none") {
            btn[i].style.display = "block";
        } else {
            btn[i].style.display = "none";
        }
    }
}

function criarPopup(source, link){
    newpopupWindow = window.open ('', 'pagina', "width=768 height=452");
    newpopupWindow.document.write (`<iframe frameborder="0" src="${source}" allowfullscreen="" width="768" height="452"><a href="${link}">Play Foxy Tales on itch.io</a></iframe>`);
}
function gameSelect(id) {
    let game = document.getElementById(id);

    game.addEventListener("click", function () {
        portfolioHome.innerHTML = `<div class="game-row">
        <iframe frameborder="0" src="${artesGames[id].source}" allowfullscreen="" width="768" height="452"><a href="${artesGames[id].link}">Play Foxy Tales on itch.io</a></iframe>
        </div>
        <div class="pt-3"><p>${artesGames[id].controles}<p/></div>
        <div class="voltar-btn"><a href="javascript:renderView(artesGames)">Voltar</div>`;
    })
}

estampasBtn.addEventListener("click", function() {
    UnhideHide(estampaHdn);
}),

renderView(artesHome);

eventCheck(ilustraBtn, artesHome);
eventCheck(animaBtn, artesAnim);
eventCheck(estampasCD, artesEstampasCD);
eventCheck(estampasBV, artesEstampasBV);
eventCheck(jogosBtn, artesGames);
eventCheck(sobreBtn, artesHome);
