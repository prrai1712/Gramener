
function json2html(data) {
    let html = `<table data-user="pppra1712@gmail.com">
                    <thead>
                        <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
                    </thead>
                    <tbody>`;
    
    data.forEach(item => {
        html += <tr><td>${item.Name}</td><td>${item.Age}</td><td>${item.Gender || ''}</td></tr>;
    });
    
    html += </tbody></table>;
    
    return html;
}

const data = [
    { Name: "Alice", Age: 25 },
    { Name: "Bob", Age: 30 },
    { Name: "Charlie", Age: 35, Gender: "M" }
];

document.getElementById('table-container').innerHTML = json2html(data);