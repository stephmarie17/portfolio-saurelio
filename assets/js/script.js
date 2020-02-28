//   Footer Date
function setYear() {
    let currentYear = new Date().getFullYear();
    const year = document.getElementById('year');
    const yearText = document.createTextNode(currentYear);
    year.appendChild(yearText);
};

setYear();


