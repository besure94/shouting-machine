window.onload = function () {
	let form = document.querySelector("form");
	form.onsubmit = function(event) {
		const textInput = document.getElementById("textInput").value;

		document.querySelector("span#input1").innerText = textInput.toUpperCase();

		document.querySelector("div#shout").removeAttribute("class");

		event.preventDefault();
	};
};