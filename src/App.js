import logo from './logo.svg';
import './App.css';

function App() {
  const data =[
  {
    "image": "https://media.ldlc.com/r1600/ld/products/00/05/43/35/LD0005433572_2.jpg",
    "url": "https://www.bose.fr/fr_fr/products/headphones/noise_cancelling_headphones/noise-cancelling-headphones-700.html#v=noise_cancelling_headphones_700_luxe_silver",
    "price" : "329EUR"
  },
  {
    "image": "https://www.geek4life.fr/index_htm_files/PS5-GEEK4LIFE.png",
    "url": "https://jeux-video.fnac.com/n69062/PS5/Consoles-PS5",
    "price" : "499EUR"
  },
  {
    "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7aa564a0-3051-4488-932d-be290b71a07b/chaussure-adapt-auto-max-pour-tZfzF2.jpg",
    "url": "https://www.nike.com/fr/t/chaussure-adapt-auto-max-pour-tZfzF2/CZ0232-002?cp=30566810280_search_%7c%7c10690195814%7c108495198474%7c%7cc%7cFR%7ccssproducts%7c453050557176_GEOZ&ds_rl=1252249&gclid=Cj0KCQiA-rj9BRCAARIsANB_4AAqa45GtiYXlG0ZaA9q-yr6NaXMpN5RFt7qq-6WgjgecjWFCa-YhbEaAmGcEALw_wcB&gclsrc=aw.ds",
    "price" : "400EUR"
  },
  {
    "image": "https://dyw7ncnq1en5l.cloudfront.net/optim/product/60/60771/7e21e5a1-mavic-mini-2__450_400.jpeg",
    "url": "https://store.dji.com/fr/product/mini-2?vid=99411",
    "price" : "459EUR"
  }, 
  {
    "image": "https://static.fnac-static.com/multimedia/Images/FR/NR/88/82/aa/11174536/1505-1/tsp20200701134113/Cyberpunk-2077-Edition-Day-One-PS4.jpg",
    "url": "https://jeux-video.fnac.com/a13565989/Cyberpunk-2077-Edition-Day-One-PS4-Compatible-PS5-Jeu-PlayStation-4?esl-k=sem-google%7cng%7cc294697013467%7cm%7ckpla349573444745%7cp%7ct%7cdc%7ca58882735413%7cg1558059529&gclid=Cj0KCQiA-rj9BRCAARIsANB_4ACiJctzg7KfYsnJ37WG44ksLTI1EBjVOU82PFRIsPbq8VptsHhHy_IaAhYrEALw_wcB&gclsrc=aw.ds",
    "price" : "55EUR"
  }, 
  {
    "image": "https://www.lego.com/cdn/cs/set/assets/blt7a4292faec34e557/75292.png",
    "url": "https://www.lego.com/fr-fr/product/default-the-mandalorian-bounty-hunter-transport-au-the-razor-crest-nz-the-razor-crest-75292",
    "price" : "140EUR"
  }, 
  ]
  return (
    <div className="App">
      {data.map(x =>
              <div className="Zeub">
                <img style={{height: "200px",}} src ={x.image} onClick={()=> window.open(x.url, "_blank")}></img>
                <div>{x.price}</div>
              </div>
        )}

    </div>
  );
}

export default App;
