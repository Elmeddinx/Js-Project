// Secdiyim Fontlarin Adlari
const fonts = ['Roboto', 'Open Sans', 'Lato', 'Montserrat', 'Oswald', 'Noto Sans', 'Ubuntu', 'Lora', 'Saira Extra Condensed', 'Noto Serif'];

//<Head> Icindeki Google Font Linki
const fontlink = document.querySelector('.fontlink');

// H1 Etiketi
const h1 = document.querySelector('h1');

// SetInterval Funksiyasi
setInterval( () => {

    // 0-9 Arasi Random Reqem Verir
    const rFont = Math.floor(Math.random()*10);

    //<Head> Icindeki Google Font Linkine Fontun Adini verir
    fontlink.setAttribute("href", `https://fonts.googleapis.com/css2?family=${fonts[rFont]}`);

    // H1 Etiketinin Style na Fontun Adin verir
    h1.style.fontFamily = `${fonts[rFont]}`;
},3000)




