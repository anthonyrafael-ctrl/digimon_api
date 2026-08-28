console.log('Hey listen');

galos = [
    {'nome': 'Galo de Botas',
        'id': '!#999'
    }

]

let currentIdx = 0;

function displayGalo(Galo) {

    let galo = galo;

    let galoId = document.getElementById('galo-id')
    galoId.textContent = galos ['id'];
    galoId.style = 'Color: #FF0000'

    let galoNome = document.getElementById('galo-nome')
    galoNome.textContent = galos['nome'];

    let netxButton = document.getElementById('netx-btn')
    netxButon.addEventListener('click', () => 
        {
            currentIdx = Math.min(galos.length - 1, currentIdx + 1);
            displayGalo(galos[currentIdx])
        });

    let prevButton = document.getElementById('prev-btn')
    netxButon.addEventListener('click', () => 
        {
            currentIdx -= 1;
            displayGalo(galos[currentIdx])
        });


}

displayGalo(galos[0])