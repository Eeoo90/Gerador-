const instaplayerSkins = [
    "Skin 1", "Skin 2", "Skin 3", "Skin 4", "Skin 5"
];

const freestyleSkins = [
    "Skin A", "Skin B", "Skin C", "Skin D", "Skin E"
];

document.getElementById('instaplayer-btn').addEventListener('click', function() {
    const randomSkin = instaplayerSkins[Math.floor(Math.random() * instaplayerSkins.length)];
    document.getElementById('combination').innerHTML = `<h2>Combinação Instaplayer:</h2><p>${randomSkin}</p>`;
});

document.getElementById('freestyle-btn').addEventListener('click', function() {
    const randomSkin = freestyleSkins[Math.floor(Math.random() * freestyleSkins.length)];
    document.getElementById('combination').innerHTML = `<h2>Combinação Freestyle:</h2><p>${randomSkin}</p>`;
});
