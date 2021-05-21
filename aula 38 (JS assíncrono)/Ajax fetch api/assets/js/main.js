document.addEventListener('click', e => {
    const el = e.target;

    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el)
    };
});

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if (response.status !== 200 ) throw new Error('ERROR 404 NOT FOUND hehe');

        const html = await response.text();
        carregaResultado(html);

    } catch (e) {
        console.error(e);
    };

    /*
    fetch(href)
        .then(response => {
            if (response.status !== 200 ) throw new Error('ERROR 404 NOT FOUND hehe');
            return response.text();
        })
        .then(html => carregaResultado(html))
        .catch(e => console.error(e)); 
    */   
};

function carregaResultado(response) {
    const resultado = document.querySelector('.response');
    resultado.innerHTML = response;
};

