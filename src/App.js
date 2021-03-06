import logo from './logo.svg';
import './App.css';

function App() {
  const data =[
  {
    "title": "Bose Noise Cancelling Headphones 700",
    "image": "https://media.ldlc.com/r1600/ld/products/00/05/43/35/LD0005433572_2.jpg",
    "url": "https://www.bose.fr/fr_fr/products/headphones/noise_cancelling_headphones/noise-cancelling-headphones-700.html#v=noise_cancelling_headphones_700_luxe_silver",
    "price" : 329,
  },
  {
    "title": "PS5",
    "image": "https://www.geek4life.fr/index_htm_files/PS5-GEEK4LIFE.png",
    "url": "https://jeux-video.fnac.com/n69062/PS5/Consoles-PS5",
    "price" : 499
  },
  {
    "title": "Nike Adapt Auto Max",
    "image": "https://y4w6u9b2.rocketcdn.me/wp-content/images/2020/04/nike-adapt-auto-max-infrared-ci5018-002-pic04-1100x772.jpg",
    "price" : 400
  },
  {
    "title": "DJI Mini 2",
    "image": "https://dyw7ncnq1en5l.cloudfront.net/optim/product/60/60771/7e21e5a1-mavic-mini-2__450_400.jpeg",
    "url": "https://store.dji.com/fr/product/mini-2?vid=99411",
    "price" : 459
  }, 
  {
    "title": "Cyberpunk 2077",
    "image": "https://static.fnac-static.com/multimedia/Images/FR/NR/88/82/aa/11174536/1505-1/tsp20200701134113/Cyberpunk-2077-Edition-Day-One-PS4.jpg",
    "url": "https://jeux-video.fnac.com/a13565989/Cyberpunk-2077-Edition-Day-One-PS4-Compatible-PS5-Jeu-PlayStation-4?esl-k=sem-google%7cng%7cc294697013467%7cm%7ckpla349573444745%7cp%7ct%7cdc%7ca58882735413%7cg1558059529&gclid=Cj0KCQiA-rj9BRCAARIsANB_4ACiJctzg7KfYsnJ37WG44ksLTI1EBjVOU82PFRIsPbq8VptsHhHy_IaAhYrEALw_wcB&gclsrc=aw.ds",
    "price" : 55
  }, 
  {
    "title": "Star Wars™ The Mandalorian™ - Le vaisseau du chasseur de primes",
    "image": "https://www.lego.com/cdn/cs/set/assets/blt7a4292faec34e557/75292.png",
    "url": "https://www.lego.com/fr-fr/product/default-the-mandalorian-bounty-hunter-transport-au-the-razor-crest-nz-the-razor-crest-75292",
    "price" : 140
  },
  {
    "title": "Ecran PC Samsung C27F396 CURVE",
    "image" : "https://images-na.ssl-images-amazon.com/images/I/810XT4GfG%2BL._AC_SX425_.jpg",
    "url" : "https://www.boulanger.com/ref/1103545",
    "price" : 180
  },
  {
    "title": "HomePod",
    "image" : "https://dyw7ncnq1en5l.cloudfront.net/optim/produits/71/39501/apple-homepod_0329c173d574cea5__450_400.jpg",
    "url" : "https://www.apple.com/fr/homepod/?afid=p238%7Csn3P4CVTJ-dc_mtid_20925nas62174_pcrid_475389731647_pgrid_111650814896_&cid=wwa-fr-kwgo-aes--slid---productid-",
    "price" : 329
  },
  {
    "title": "HomePod mini",
    "image" : "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2020/10/apple-homepod-mini-frandroid-2020.png?resize=580,580",
    "url" : "https://www.apple.com/fr/homepod/?afid=p238%7Csn3P4CVTJ-dc_mtid_20925nas62174_pcrid_475389731647_pgrid_111650814896_&cid=wwa-fr-kwgo-aes--slid---productid-",
    "price" : 99
  },
  {
    "title": "Google chromcastTV",
    "image" : "https://lh4.googleusercontent.com/9cVozVoy5p6mL5jbc_Mu0CtmGUgKC4iysHHcmWa-p0U33HgH7OW5-dmN5Lep6y2uJMisdc2TfOGVju-AIdiVFmzw67qBV3bCzorQ6KOA_NypszzYdpL_fSQEKF-P8c5Aa6z8XNTc",
    "url" : "https://store.google.com/product/chromecast_google_tv",
    "price" : 69
  },
  {
    "title": "Dior Spice Blend",
    "image" : "https://i.pinimg.com/originals/b8/b8/ae/b8b8aed75606791b55eea1aff5f24297.png",
    "url" : "https://www.dior.com/fr_fr/products/beauty-Y0996128_C099600261?gclid=CjwKCAiAtej9BRAvEiwA0UAWXkSlwEfjsUIKzTU1IBQWXhSR4XjQOhgFLR7dkxQCZuZylfSEnUKcQxoCr9MQAvD_BwE",
    "price" : 198
  },
  {
    "title": "Nike Utility Speed (beige-blanc)",
    "image" : "https://media.jdsports.com/i/jdsports/CK2668_104_M2?$Main_gray$&bg=rgb(237,237,237)",
    "url" : "https://www.nike.com/fr/t/sac-a-dos-de-training-utility-speed-K0j2r9/CK2668-104?cp=30566810280_search_%7c%7c10690195814%7c108495199354%7c%7cc%7cFR%7ccssproducts%7c453050556858_GEOZ&ds_rl=1252249&gclid=CjwKCAiAtej9BRAvEiwA0UAWXui076_y_S5joxH3hiRHs7-5Up6-dMGL7UJcvqMScSiHSKe31TbGShoC6AwQAvD_BwE&gclsrc=aw.ds",
    "price" : 50
  },
  {
    "title": "Nike Tech Fleece Haut (Noir)",
    "image" : "https://lh3.googleusercontent.com/proxy/GTo11OjdS1CjHM1KO-wf2u3J7elsNCFhPrwGUOQzC4gCXm3lAXVFRFDHmLp1B_-9Vsf_pYMX7tPsuTtJM5D2SpDlwJTOWZ2m95DVvT9-Z3Ym4luHRrNzTooOQ8_co3tV3cWteW56Ovs",
    "url" : "https://www.nike.com/fr/t/sweat-a-capuche-a-zip-sportswear-tech-fleece-pour-jMmfqR/CU4489-010",
    "price" : 109
  },
  {
    "title": "Nike Tech Fleece bas (Noir)",
    "image" : "https://photos6.spartoo.com/photos/150/15047041/15047041_500_A.jpg",
    "url" : "https://www.nike.com/fr/t/pantalon-de-jogging-sportswear-tech-fleece-pour-Gs39Jq/CU4499-010",
    "price" : 100
  },
  ]

  var lowest = Number.POSITIVE_INFINITY;
  var highest = Number.NEGATIVE_INFINITY;
  var tmp;
  for (var i=data.length-1; i>=0; i--) {
    tmp = data[i].price;
    if (tmp < lowest) lowest = tmp;
    if (tmp > highest) highest = tmp;
}
console.log(highest, lowest);
  return (
    <div className="App">
      <div className="head">Oublie pas de regarder si il y a des codes promos sur Unidays</div>
      {data.map(x =>
              <div className="Zeub">
                <div className="title">{x.title}</div>
                <img style={{height: "200px",}} src ={x.image} onClick={()=> window.open(x.url, "_blank")}></img>
                <div className="title">{x.price} EUR</div>
              </div>
        )}

    </div>
  );
}

export default App;
