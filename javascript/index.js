let artesHome = {
    cityGuy: {
        imagem: "images/home/giant-home.jpg",
        link: "https://www.behance.net/gallery/147711239/City-Giant",
        alternative: "A giant guy sitting in the middle of the city."
    },
    bedroomTravel: {
        imagem: "images/home/bedroom-travel-home.jpg",
        link: "https://www.behance.net/gallery/147390719/Bedroom-Travel",
        alternative: "A guy playing guitar and smoking on his bedroom with planets inside of it."
    },
    cloudGuy: {
        imagem: "images/home/cloud-guy-home.jpg",
        link: "https://www.behance.net/gallery/147393495/Cloud-Guy",
        alternative: "A guy with crazy hair floating through the clouds."
    },
    adventurers: {
        imagem: "images/home/adventurers-home.jpg",
        link: "https://www.behance.net/gallery/180230747/Adventurers",
        alternative: "Adventurers on a wall deciding where to go next."
    },
    streetSkaters: {
        imagem: "images/home/skatersStreet-home.jpg",
        link: "https://www.behance.net/gallery/147392553/Skaters-Street",
        alternative: "Skaters skating down the street."
    },
    mountainLady: {
        imagem: "images/home/Mountain_lady.jpg",
        link:"https://www.behance.net/gallery/180231047/Mountain-Lady",
        alternative: "A mountain lady"
    },
    bonsai: {
        imagem: "images/home/bonsai-home.jpg",
        link: "https://www.behance.net/gallery/147707511/Bonsai",
        alternative: "A girl using cellphone while sitting in a bonsai."
    },
    tecidos: {
        imagem: "images/home/Tecidos.jpg",
        link: "https://www.behance.net/gallery/180230839/Tecidos",
        alternative: "Tecidos."
    },
};
let artesAnim = {
    abajur: {
        imagem: "https://www.youtube.com/embed/dGZGGY4a0gw",
        link: "",
        alternative: "Clipe animado para a música Abajur de LoreB"
    },
    noMarNoCeu: {
        imagem: "https://www.youtube.com/embed/awp47rMfAMA",
        link: "",
        alternative: "Clipe animado para a música No Mar No Céu de LoreB"
    },
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
        imagem:"images/estampas/crazyZazzy.jpg",
        link: "",
        alternative: "Crazy Zazzy"
    },
    missNight: {
        imagem:"images/estampas/missNight.jpg",
        link: "",
        alternative: "Miss Night"
    },
    topTemple: {
        imagem:"images/estampas/topTemple.jpg",
        link: "",
        alternative: "Top Temple"
    },
    waterfall: {
        imagem:"images/estampas/waterfall.jpg",
        link: "",
        alternative: "Waterfall"
    },
    chillin: {
        imagem:"images/estampas/chillin.jpg",
        link: "",
        alternative: "Chillin"
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
    Gabriel: {
        imagem: "",
        texto: "",
        email: "",
    }
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

const menuColl = document.getElementById("menu-coll");

const estampaHdn = document.getElementsByClassName("estampa-hdn");


estampaHdn[0].style.display = "none";

function renderView (section) {
    let images = "";

    if(section != artesAnim && section != artesGames && section != 'subMenu' && section != sobre){
        for (let key in section) {
            images += `
            <div class="img-row">
                <img src="${section[key].imagem}" alt="${section[key].alternative}" class="imageOverlay">
                <a href='${section[key].link}' target="_blank">
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
    } else if (section === 'subMenu') {
        images += `<div class="minimenucont">
            <ul class="menuBtnColl pt-3 pb-4">
                <li><button onclick="renderView(artesHome)">Ilustração</button></li>
                <li><button onclick="renderView(artesAnim)">Animação</button></li>
                <li>
                    <button onclick="renderView(artesEstampasCD)">Estampas</button>
                </li>
                <li><button onclick="renderView(artesGames)">Jogos</button></li>
                <li><button onclick="renderView(sobre)">Sobre</button></li>
            </ul>
            <div class="redesa">
                <a href="https://www.instagram.com/mugiartes/" target="_blank"><img src="images/logos/instagram-logo.svg" alt="" srcset=""></a>
                <a href="https://twitter.com/Mugi_zuadento" target="_blank"><img src="images/logos/twitter-logo.svg" alt="" srcset=""></a>
                <a href="https://www.youtube.com/channel/UC6Levw1ktO8nT9sjueW19QA" target="_blank"><img src="images/logos/youtube-logo.svg" alt="" srcset=""></a>
                <a href="https://www.behance.net/mugichoco" target="_blank"><img src="images/logos/behance-logo.svg" alt="" srcset=""></a>
            </div>
        </div>`
    } else if (section === sobre) {
        images += `<div class="sobre">
                        <h1>Sobre</h1>
                    </div>
                    <div class="sobre-cont">
                        <div class="sobre-img">
                            <img src="images/etc/eu.jpg" alt="foto">
                        </div>
                        <div class="sobre-text-cont">
                            <p>Olá, meu nome é Gabriel Batista.<br><br>
                                Sou um ilustrador e designer de Alagoas.<br><br>
                                Me formei em Design pela Universidade Federal De Alagoas em 2018. Trabalho como ilustrador freelancer desde então, já tendo produzido peças para diversos meios como: Animação, moda, jogos, livros entre outros.<br><br>
                                Entre em contato comigo pelas redes sociais ou pelo meu e-mail:
                            </p>
                            <p>poxerilustra@gmail.com</p>
                        </div>
                    </div>
                    <div class> </div>
                    `
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

menuColl.addEventListener("click", function() {
    renderView('subMenu');
    document.getElementById("footer").style.display = 'none';
})

eventCheck(ilustraBtn, artesHome);
eventCheck(animaBtn, artesAnim);
eventCheck(estampasCD, artesEstampasCD);
eventCheck(jogosBtn, artesGames);
eventCheck(sobreBtn, sobre);
