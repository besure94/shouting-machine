window.onload = function () {
	let form = document.querySelector("form");
	form.onsubmit = function(event) {
		const input = document.getElementById("input").value;

		document.querySelector("span#input1").innerText = input;

		document.querySelector("div#story").removeAttribute("class");

		event.preventDefault();
	};
};