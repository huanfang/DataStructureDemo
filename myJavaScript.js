<SCRIPT LANGUAGE="JavaScript">
function add() {
		var table = document.getElementById("queueTable");
		var row = table.insertRow(0);
		var cell = row.insertCell(0);
		cell.innerHTML = document.getElementById("addedElement").value;
	}

function removeElement() {
	var table =document.getElementById("queueTable");
	table.deleteRow(0);
}
</SCRIPT>