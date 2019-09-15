var dataSource = [];
var no=0;

function showTable(){
    resetForm();
	document.getElementById("add-new-div").style.display = 'none';
	document.getElementById("tour-places-div").style.display = 'block';
}

function BackToaddPlace() {
    resetForm();
	document.getElementById("add-new-div").style.display = 'block';
    document.getElementById("tour-places-div").style.display = 'none';
}

function resetForm() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('rating').selectedIndex = 0;
    document.getElementById('comment').value = "";
}

function addPlace() {
    debugger
    var newPlace = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        rating: document.getElementById('rating').value,
        comment: document.getElementById('comment').value
    };


    var reader = new FileReader();

        dataSource.push(newPlace);
        clearGrid()
        loadGrid(dataSource);

}

function loadGrid(data) {
    data.forEach(function (row) {
        var table = document.getElementById("table-places");
        var newRow = table.insertRow(table.rows.length);

        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);


        cel1.innerHTML = row.name;
        cel2.innerHTML = row.email;
        cel3.innerHTML = row.rating;
        cel4.innerHTML = row.comment;
    });
    showTable();
}

function clearGrid() {
    var table = document.getElementById("table-places");
    for (var i = table.rows.length - 1; i > 0; --i)
        table.deleteRow(i);
}
