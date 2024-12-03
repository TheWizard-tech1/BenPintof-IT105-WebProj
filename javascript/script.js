/* This is the java for fetching the xml file and putting it into a form for the html */
document.addEventListener("DOMContentLoaded", function() {
    fetch('data/ServiceDatabase.xml')
        .then(response => response.text())
        .then(xmlText => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, "application/xml");

            const services = xmlDoc.getElementsByTagName("Services");
            const tableBody = document.getElementById("servicesTable").getElementsByTagName("tbody")[0];

            Array.from(services).forEach(service => {
                const row = document.createElement("tr");

                ["SRVID", "Service", "Description", "Duration", "Cost", "Departs", "Description2"].forEach(tag => {
                    const cell = document.createElement("td");
                    cell.textContent = service.getElementsByTagName(tag)[0].textContent;
                    row.appendChild(cell);
                });

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error loading XML:", error));
});

/* This is the function that we used in class (slighly manipulated) for when they click on the button */
function printMe(mystr) {
                hw = mystr;
                alert('Uh Oh. Looks like we are all sold out of '+ hw +'. Better luck next time ');
            }


/* Customer Page */

let currentCardIndex = 0;

function showCard(index) {
    cards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
            card.classList.add('active');
        }
    });
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    showCard(currentCardIndex);
}

function previousCard() {
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    showCard(currentCardIndex);
}

function FeeBack(mystr) {
                fee = mystr;
                alert('Thank you very much for your input. As a Small company, we highly appreciate the customers thoughts and questions.' + fee);
            }


fetch('CustPageInfo.json')
    .then(response => response.json())
    .then(data => {
        const cardContainer = document.getElementById('card-container');
        data.forEach((adventure, index) => {
            const card = document.createElement('div');
            card.className = `card ${index === 0 ? 'active' : ''}`;
            card.innerHTML = `
                <img src="${adventure.adventurephoto}" class="card-img-top" alt="${adventure.adventureName} width="500" height="300"">
                <div class="card-body">
                    <h5 class="card-title">Adventure: ${adventure.adventurename}</h5>
                    <blockquote class="blockquote">
                        <p>"${adventure.excurstionstmt}"</p>
                    </blockquote>
                    <p class="card-text"><strong>Date of Adventure:</strong> ${adventure.adventuredate}</p>
                    <hr>
                    <h6>Customer: ${adventure.customername}</h6>
                    <blockquote class="blockquote">
                        <p>"${adventure.customerquote}"</p>
                    </blockquote>
                    <p>${adventure.descriptionfile}</p>
                </div>
            `;
            cardContainer.appendChild(card);
            });
        cards = document.querySelectorAll('.card');
        })
        .catch(error => console.error('Error fetching adventures:', error));









    
