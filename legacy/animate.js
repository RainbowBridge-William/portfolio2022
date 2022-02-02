// Name: William Wang
// Date: April 5, 2021
// Section: CSE 154 AO
// This is the animate.js page for my portfolio of web development work. It includes animation for the pictures of my projects.




window.addEventListener("load", imghover);

function imghover() {
	let container = document.querySelector(".project-pic");

  let innerBox = document.querySelector(".picture");

  let constrain = 150;

	container.addEventListener("mousemove", function (event) {
		window.requestAnimationFrame(function () {
			transformElement(innerBox, event.clientX, event.clientY);
		});
	});

	container.addEventListener("mouseleave", function (event) {
			innerBox.style.transform =
			"perspective(100px) " +
			" rotateX(" +
			0 +
			"deg) " +
			" rotateY(" +
			0 +
			"deg) ";
	});

	function transforms(x, y, el) {
		let box = el.getBoundingClientRect();

		let calcX = -(y - box.y - box.height / 2) / constrain;

		let calcY = (x - box.x - box.width / 2) / constrain;

		return (
			"perspective(100px) " +
			" rotateX(" +
			calcX +
			"deg) " +
			" rotateY(" +
			calcY +
			"deg) "
		);
	}

	function transformElement(el, x, y) {
		el.style.transform = transforms(x, y, el);
	}
}
