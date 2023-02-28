const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets)
}

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let portrait = document.createElement('img');

        //Adding data to the elements that we created above.

        let prophetName = prophet.name;
        let prphetLname = prophet.lastname;

        let birthday = prophet.birthdate;
        let birthplace = prophet.birthplace;

        h2.textContent = prophetName + ' ' + prphetLname;
        p1.textContent = 'Date of Birth: ' + birthday;
        p2.textContent = 'Place of Birth: ' + birthplace;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt','Portrait of' + ' ' + prophetName + ' ' + prphetLname);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');;

        //Make the h2 and portrait children of card(section)

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}


getProphetData();