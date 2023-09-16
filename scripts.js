var center = document.querySelector("#center");

var arr = [
	"static/download1.jpeg",
	"static/download2.jpeg",
	"static/download3.jpeg",
	"static/download4.jpeg",
];

function generateRandomInteger() {
	return Math.floor(0 + Math.random() * (3 - 0 + 1));
}

const throttleFunction = (func, delay) => {
	let prev = 0;
	return (...args) => {
		let now = new Date().getTime();

		if (now - prev > delay) {
			prev = now;

			return func(...args);
		}
	};
};

center.addEventListener(
	"mousemove",
	throttleFunction((e) => {
		// console.log(e, center.clientWidth);
		var div = document.createElement("div");
		div.classList.add("imgdiv");
		var img = document.createElement("img");
		let n = generateRandomInteger();
		img.setAttribute("src", arr[n]);
		div.appendChild(img);
		div.style.left = e.x - 100 + "px";
		div.style.top = e.y - 200 + "px";
		div.style.transform =
			"rotate(" + Math.floor(Math.random(5) * 40 - 20) + "deg)";

		document.body.appendChild(div);

		gsap.to(img, {
			y: 0,
			ease: Power1,
			duration: 0.2,
		});

		setTimeout(() => {
			gsap.to(img, {
				y: 200,
				ease: Power1,
				duration: 0.2,
			});

			setTimeout(() => {
				div.remove();
			}, 500);
		}, 500);
	}, 100)
);
