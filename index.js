function getJSONData() {
    fetch('./data.json')
        .then((response) => response.json())
        .then((json) => populateList(json));
}

function populateList(data) {
    const subgradeList = document.querySelector('.subgrade-list');
    data.forEach(element => {
        const listEle = document.createElement('li');
        listEle.classList.add('summary-list-container');
        listEle.style.background = element.backgroundColor;
        const icon = document.createElement('i');
        icon.classList.add('icon');
        icon.style.background = `url(${element.icon})`

        const categorySpan = document.createElement('span');
        categorySpan.style.color = element.textColor;

        categorySpan.classList.add('summary-list-container', 'bold');
        categorySpan.innerHTML = element.category;
        const scoreSpan = document.createElement('span');
        scoreSpan.classList.add('summary-list-score');
        scoreSpan.innerHTML ='<span class="bold">' + element.score + '</span> <span class="gray-text">/ 100</span>';

        listEle.appendChild(icon);
        listEle.appendChild(categorySpan);
        listEle.appendChild(scoreSpan);
        subgradeList.appendChild(listEle);
    });
}

getJSONData();