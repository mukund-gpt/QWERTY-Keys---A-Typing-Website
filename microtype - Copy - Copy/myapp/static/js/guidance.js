//Assigning Button Functions
const leftDiv = document.querySelector(".left");
const liLeftArray = [];
const ulLeftElements = leftDiv.querySelectorAll("ul");
ulLeftElements.forEach((ul) => {
	const liElements = ul.querySelectorAll("li");
	liElements.forEach((li) => {
		liLeftArray.push(li);
	});
});

const rightDiv = document.querySelector(".right");
const liRightArray = [];
const ulRightElements = rightDiv.querySelectorAll("ul");
ulRightElements.forEach((ul) => {
	const liElements = ul.querySelectorAll("li");
	liElements.forEach((li) => {
		liRightArray.push(li);
	});
});

function left_li_clicked0() {
	// Remove scaled class from all buttons
	liLeftArray.forEach((li) => {
		let btn_cli = li.querySelector("button");
		btn_cli.style.backgroundColor = "#fff";
		btn_cli.classList.remove("scaled");
	});

	let ele_clicked = liLeftArray[0];
	let btn_clicked = ele_clicked.querySelector("button");
	btn_clicked.classList.add("scaled");
	btn_clicked.style.backgroundColor = "#3295db";

	if (
		document.querySelector(".one-one").style
			.display == "none"
	) {
		document.querySelector(
			".one-one"
		).style.display = "flex";
	}
	document
		.querySelector(".one-one")
		.querySelector("span").innerText =
		"J, F, and Space";
	if (
		document.querySelector(".one-two").style
			.display == "none"
	) {
		document.querySelector(
			".one-two"
		).style.display = "flex";
	}
	document
		.querySelector(".one-two")
		.querySelector("span").innerText =
		"U, R, and K Keys";
	if (
		document.querySelector(".one-three").style
			.display == "none"
	) {
		document.querySelector(
			".one-three"
		).style.display = "flex";
	}
	document
		.querySelector(".one-three")
		.querySelector("span").innerText =
		"D, E, and I Keys";
	if (
		document.querySelector(".one-four").style
			.display == "none"
	) {
		document.querySelector(
			".one-four"
		).style.display = "flex";
	}
	document
		.querySelector(".one-four")
		.querySelector("span").innerText =
		"C, G, and N Keys";
	if (
		document.querySelector(".one-five").style
			.display == "none"
	) {
		document.querySelector(
			".one-five"
		).style.display = "flex";
	}
	document
		.querySelector(".one-five")
		.querySelector("span").innerText =
		"Beginner Review 1";
	if (
		document.querySelector(".two-one").style
			.display == "none"
	) {
		document.querySelector(
			".two-one"
		).style.display = "flex";
	}
	document
		.querySelector(".two-one")
		.querySelector("span").innerText =
		"T, S, and L Keys";
	if (
		document.querySelector(".two-two").style
			.display == "none"
	) {
		document.querySelector(
			".two-two"
		).style.display = "flex";
	}
	document
		.querySelector(".two-two")
		.querySelector("span").innerText =
		"Q, B, and A Keys";
	if (
		document.querySelector(".two-three").style
			.display == "none"
	) {
		document.querySelector(
			".two-three"
		).style.display = "flex";
	}
	document
		.querySelector(".two-three")
		.querySelector("span").innerText =
		"V, H, and M Keys";
	if (
		document.querySelector(".two-four").style
			.display == "none"
	) {
		document.querySelector(
			".two-four"
		).style.display = "flex";
	}
	document
		.querySelector(".two-four")
		.querySelector("span").innerText =
		"Period and Comma";
	if (
		document.querySelector(".two-five").style
			.display == "none"
	) {
		document.querySelector(
			".two-five"
		).style.display = "flex";
	}
	document
		.querySelector(".two-five")
		.querySelector("span").innerText =
		"Beginner review 2";
	if (
		document.querySelector(".three-one").style
			.display == "none"
	) {
		document.querySelector(
			".three-one"
		).style.display = "flex";
	}
	document
		.querySelector(".three-one")
		.querySelector("span").innerText =
		"W and X Keys";
	if (
		document.querySelector(".three-two").style
			.display == "none"
	) {
		document.querySelector(
			".three-two"
		).style.display = "flex";
	}
	document
		.querySelector(".three-two")
		.querySelector("span").innerText =
		"Q, Y, and P Keys";
	if (
		document.querySelector(".three-three").style
			.display == "none"
	) {
		document.querySelector(
			".three-three"
		).style.display = "flex";
	}
	document
		.querySelector(".three-three")
		.querySelector("span").innerText =
		"Z and Enter Keys";
	if (
		document.querySelector(".four-one").style
			.display == "none"
	) {
		document.querySelector(
			".four-one"
		).style.display = "flex";
	}
	document
		.querySelector(".four-one")
		.querySelector("span").innerText =
		"Beginner Wrap Up";
	if (
		document.querySelector(".four-two").style
			.display == "none"
	) {
		document.querySelector(
			".four-two"
		).style.display = "flex";
	}
	document
		.querySelector(".four-two")
		.querySelector("span").innerText =
		"Beginner Assignment";

	if (
		document
			.querySelector(
				".lesson-type-one"
			)
			.querySelector("span").style
			.display == "none"
	) {
		document
			.querySelector(
				".lesson-type-one"
			)
			.querySelector(
				"span"
			).style.display = "block";
	}
	document
		.querySelector(".lesson-type-one")
		.querySelector("span").innerText =
		"Getting Started";
	if (
		document
			.querySelector(
				".lesson-type-two"
			)
			.querySelector("span").style
			.display == "none"
	) {
		document
			.querySelector(
				".lesson-type-two"
			)
			.querySelector(
				"span"
			).style.display = "block";
	}
	document
		.querySelector(".lesson-type-two")
		.querySelector("span").innerText =
		"Reaching Out";
	if (
		document
			.querySelector(
				".lesson-type-three"
			)
			.querySelector("span").style
			.display == "none"
	) {
		document
			.querySelector(
				".lesson-type-three"
			)
			.querySelector(
				"span"
			).style.display = "block";
	}
	document
		.querySelector(".lesson-type-three")
		.querySelector("span").innerText =
		"The Home Stretch";
	if (
		document
			.querySelector(
				".lesson-type-four"
			)
			.querySelector("span").style
			.display == "none"
	) {
		document
			.querySelector(
				".lesson-type-four"
			)
			.querySelector(
				"span"
			).style.display = "block";
	}
	document
		.querySelector(".lesson-type-four")
		.querySelector("span").innerText =
		"Wrapping Up";
}

function left_li_clicked1() {
	liLeftArray.forEach((li) => {
		let btn_cli = li.querySelector("button");
		btn_cli.style.backgroundColor = "#fff";
		btn_cli.classList.remove("scaled");
	});

	let ele_clicked = liLeftArray[1];
	let btn_clicked = ele_clicked.querySelector("button");
	btn_clicked.classList.add("scaled");
	btn_clicked.style.backgroundColor = "#3295db";

	if (
		document.querySelector(".one-one").style
			.display == "none"
	) {
		document.querySelector(
			".one-one"
		).style.display = "flex";
	}
	document
		.querySelector(".one-one")
		.querySelector("span").innerText =
		"Common English Words";
	if (
		document.querySelector(".one-two").style
			.display == "none"
	) {
		document.querySelector(
			".one-two"
		).style.display = "flex";
	}
	document
		.querySelector(".one-two")
		.querySelector("span").innerText =
		"Easy Home Row Words";
	if (
		document.querySelector(".one-three").style
			.display == "none"
	) {
		document.querySelector(
			".one-three"
		).style.display = "flex";
	}
	document
		.querySelector(".one-three")
		.querySelector("span").innerText =
		"Easy Top Row Words";
	if (
		document.querySelector(".one-four").style
			.display == "none"
	) {
		document.querySelector(
			".one-four"
		).style.display = "flex";
	}
	document
		.querySelector(".one-four")
		.querySelector("span").innerText =
		"Easy Bottom Row Words";
	document.querySelector(".one-five").style.display = "none";

	if (
		document.querySelector(".two-one").style
			.display == "none"
	) {
		document.querySelector(
			".two-one"
		).style.display = "flex";
	}
	document
		.querySelector(".two-one")
		.querySelector("span").innerText =
		"Shift Key and Capitalization";
	if (
		document.querySelector(".two-two").style
			.display == "none"
	) {
		document.querySelector(
			".two-two"
		).style.display = "flex";
	}
	document
		.querySelector(".two-two")
		.querySelector("span").innerText =
		"Basic Punctuation";
	if (
		document.querySelector(".two-three").style
			.display == "none"
	) {
		document.querySelector(
			".two-three"
		).style.display = "flex";
	}
	document
		.querySelector(".two-three")
		.querySelector("span").innerText =
		"Intermediate Punctuation";
	if (
		document.querySelector(".two-four").style
			.display == "none"
	) {
		document.querySelector(
			".two-four"
		).style.display = "flex";
	}
	document
		.querySelector(".two-four")
		.querySelector("span").innerText =
		"Quick Sentences";
	if (
		document.querySelector(".two-five").style
			.display == "none"
	) {
		document.querySelector(
			".two-five"
		).style.display = "flex";
	}
	document
		.querySelector(".two-five")
		.querySelector("span").innerText =
		"Speed Drills";
	if (
		document.querySelector(".three-one").style
			.display == "none"
	) {
		document.querySelector(
			".three-one"
		).style.display = "flex";
	}
	document
		.querySelector(".three-one")
		.querySelector("span").innerText =
		"Intermediate Wrap - up";
	if (
		document.querySelector(".three-two").style
			.display == "none"
	) {
		document.querySelector(
			".three-two"
		).style.display = "flex";
	}
	document
		.querySelector(".three-two")
		.querySelector("span").innerText =
		"Intermediate Assessment";
	document.querySelector(".three-three").style.display = "none";

	document.querySelector(".four-one").style.display = "none";
	document.querySelector(".four-two").style.display = "none";

	if (
		document
			.querySelector(
				".lesson-type-one"
			)
			.querySelector("span").style
			.display == "none"
	) {
		document
			.querySelector(
				".lesson-type-one"
			)
			.querySelector(
				"span"
			).style.display = "block";
	}
	document
		.querySelector(".lesson-type-one")
		.querySelector("span").innerText =
		"Intermediate Lessons";
	if (
		document
			.querySelector(
				".lesson-type-two"
			)
			.querySelector("span").style
			.display == "none"
	) {
		document
			.querySelector(
				".lesson-type-two"
			)
			.querySelector(
				"span"
			).style.display = "block";
	}
	document
		.querySelector(".lesson-type-two")
		.querySelector("span").innerText =
		"On to Sentences";
	if (
		document
			.querySelector(
				".lesson-type-three"
			)
			.querySelector("span").style
			.display == "none"
	) {
		document
			.querySelector(
				".lesson-type-three"
			)
			.querySelector(
				"span"
			).style.display = "block";
	}
	document
		.querySelector(".lesson-type-three")
		.querySelector("span").innerText =
		"Wrapping Up";
	document
		.querySelector(".lesson-type-four")
		.querySelector("span").style.display = "none";
}
function left_li_clicked2() {
	liLeftArray.forEach((li) => {
		let btn_cli = li.querySelector("button");
		btn_cli.style.backgroundColor = "#fff";
		btn_cli.classList.remove("scaled");
	});

	let ele_clicked = liLeftArray[2];
	let btn_clicked = ele_clicked.querySelector("button");
	btn_clicked.classList.add("scaled");
	btn_clicked.style.backgroundColor = "#3295db";

	if (
		document.querySelector(".one-one").style
			.display == "none"
	) {
		document.querySelector(
			".one-one"
		).style.display = "flex";
	}
	document
		.querySelector(".one-one")
		.querySelector("span").innerText =
		"Skill Builder";
	if (
		document.querySelector(".one-two").style
			.display == "none"
	) {
		document.querySelector(
			".one-two"
		).style.display = "flex";
	}
	document
		.querySelector(".one-two")
		.querySelector("span").innerText =
		"Numbers Letters Numbers";
	if (
		document.querySelector(".one-three").style
			.display == "none"
	) {
		document.querySelector(
			".one-three"
		).style.display = "flex";
	}
	document
		.querySelector(".one-three")
		.querySelector("span").innerText =
		"Accuracy Focus";
	if (
		document.querySelector(".one-four").style
			.display == "none"
	) {
		document.querySelector(
			".one-four"
		).style.display = "flex";
	}
	document
		.querySelector(".one-four")
		.querySelector("span").innerText =
		"Advanced Symbols";
	if (
		document.querySelector(".one-five").style
			.display == "none"
	) {
		document.querySelector(
			".one-five"
		).style.display = "flex";
	}
	document
		.querySelector(".one-five")
		.querySelector("span").innerText =
		"Numeric Keypad";
	if (
		document.querySelector(".two-one").style
			.display == "none"
	) {
		document.querySelector(
			".two-one"
		).style.display = "flex";
	}
	document
		.querySelector(".two-one")
		.querySelector("span").innerText =
		"Advanced Wrap - up";
	if (
		document.querySelector(".two-two").style
			.display == "none"
	) {
		document.querySelector(
			".two-two"
		).style.display = "flex";
	}
	document
		.querySelector(".two-two")
		.querySelector("span").innerText =
		"Advanced Assessment";
	document.querySelector(".two-three").style.display = "none";
	document.querySelector(".two-four").style.display = "none";
	document.querySelector(".two-five").style.display = "none";
	document.querySelector(".three-one").style.display = "none";
	document.querySelector(".three-two").style.display = "none";
	document.querySelector(".three-three").style.display = "none";
	document.querySelector(".four-one").style.display = "none";
	document.querySelector(".four-two").style.display = "none";

	if (
		document
			.querySelector(
				".lesson-type-one"
			)
			.querySelector("span").style
			.display == "none"
	) {
		document
			.querySelector(
				".lesson-type-one"
			)
			.querySelector(
				"span"
			).style.display = "block";
	}
	document
		.querySelector(".lesson-type-one")
		.querySelector("span").innerText =
		"Advanced Lessons";
	if (
		document
			.querySelector(
				".lesson-type-two"
			)
			.querySelector("span").style
			.display == "none"
	) {
		document
			.querySelector(
				".lesson-type-two"
			)
			.querySelector(
				"span"
			).style.display = "block";
	}
	document
		.querySelector(".lesson-type-two")
		.querySelector("span").innerText =
		"Wrapping Up";
	document
		.querySelector(".lesson-type-three")
		.querySelector("span").style.display = "none";
	document
		.querySelector(".lesson-type-four")
		.querySelector("span").style.display = "none";
}
// function left_li_clicked3() {
// 	liLeftArray.forEach((li) => {
// 		let btn_cli = li.querySelector("button");
// 		btn_cli.style.backgroundColor = "#fff";
// 		btn_cli.classList.remove("scaled");
// 	});

// 	let ele_clicked = liLeftArray[3];
// 	let btn_clicked = ele_clicked.querySelector("button");
// 	btn_clicked.classList.add("scaled");
// 	btn_clicked.style.backgroundColor = "#3295db";

// 	if (
// 		document.querySelector(".one-one").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".one-one"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".one-one")
// 		.querySelector("span").innerText =
// 		"6th Grade Vocabulary";
// 	if (
// 		document.querySelector(".one-two").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".one-two"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".one-two")
// 		.querySelector("span").innerText =
// 		"MLA Citations";
// 	if (
// 		document.querySelector(".one-three").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".one-three"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".one-three")
// 		.querySelector("span").innerText =
// 		"Common Medical Terms";
// 	document.querySelector(".one-four").style.display = "none";
// 	document.querySelector(".one-five").style.display = "none";
// 	if (
// 		document.querySelector(".two-one").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".two-one"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".two-one")
// 		.querySelector("span").innerText =
// 		"The Keys Are Falling";
// 	if (
// 		document.querySelector(".two-two").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".two-two"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".two-two")
// 		.querySelector("span").innerText =
// 		"Nitro Type Lessons";
// 	if (
// 		document.querySelector(".two-three").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".two-three"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".two-three")
// 		.querySelector("span").innerText =
// 		"Jokes And Laughs";
// 	if (
// 		document.querySelector(".two-four").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".two-four"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".two-four")
// 		.querySelector("span").innerText =
// 		"Interesting Facts";
// 	if (
// 		document.querySelector(".two-five").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".two-five"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".two-five")
// 		.querySelector("span").innerText =
// 		"Strange Laws";
// 	if (
// 		document.querySelector(".three-one").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".three-one"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".three-one")
// 		.querySelector("span").innerText =
// 		"Paragraph Practice";
// 	if (
// 		document.querySelector(".three-two").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".three-two"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".three-two")
// 		.querySelector("span").innerText =
// 		"Alpha Data Entry";
// 	if (
// 		document.querySelector(".three-three").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".three-three"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".three-three")
// 		.querySelector("span").innerText =
// 		"Alphanumeric Data Entry";
// 	if (
// 		document.querySelector(".four-one").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".four-one"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".four-one")
// 		.querySelector("span").innerText =
// 		"Dvorak Part - 1";
// 	if (
// 		document.querySelector(".four-two").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".four-two"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".four-two")
// 		.querySelector("span").innerText =
// 		"Dvorak Part - 2";
// 	if (
// 		document
// 			.querySelector(
// 				".lesson-type-one"
// 			)
// 			.querySelector("span").style
// 			.display == "none"
// 	) {
// 		document
// 			.querySelector(
// 				".lesson-type-one"
// 			)
// 			.querySelector(
// 				"span"
// 			).style.display = "block";
// 	}
// 	document
// 		.querySelector(".lesson-type-one")
// 		.querySelector("span").innerText =
// 		"Cross Curricular";
// 	if (
// 		document
// 			.querySelector(
// 				".lesson-type-two"
// 			)
// 			.querySelector("span").style
// 			.display == "none"
// 	) {
// 		document
// 			.querySelector(
// 				".lesson-type-two"
// 			)
// 			.querySelector(
// 				"span"
// 			).style.display = "block";
// 	}
// 	document
// 		.querySelector(".lesson-type-two")
// 		.querySelector("span").innerText =
// 		"Fun To Type";
// 	if (
// 		document
// 			.querySelector(
// 				".lesson-type-three"
// 			)
// 			.querySelector("span").style
// 			.display == "none"
// 	) {
// 		document
// 			.querySelector(
// 				".lesson-type-three"
// 			)
// 			.querySelector(
// 				"span"
// 			).style.display = "block";
// 	}
// 	document
// 		.querySelector(".lesson-type-three")
// 		.querySelector("span").innerText =
// 		"Skill Builder";
// 	if (
// 		document
// 			.querySelector(
// 				".lesson-type-four"
// 			)
// 			.querySelector("span").style
// 			.display == "none"
// 	) {
// 		document
// 			.querySelector(
// 				".lesson-type-four"
// 			)
// 			.querySelector(
// 				"span"
// 			).style.display = "block";
// 	}
// 	document
// 		.querySelector(".lesson-type-four")
// 		.querySelector("span").innerText =
// 		"Dvorak Keyboard Format";
// }
// function left_li_clicked4() {
// 	liLeftArray.forEach((li) => {
// 		let btn_cli = li.querySelector("button");
// 		btn_cli.style.backgroundColor = "#fff";
// 		btn_cli.classList.remove("scaled");
// 	});

// 	let ele_clicked = liLeftArray[4];
// 	let btn_clicked = ele_clicked.querySelector("button");
// 	btn_clicked.classList.add("scaled");
// 	btn_clicked.style.backgroundColor = "#3295db";

// 	if (
// 		document.querySelector(".one-one").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".one-one"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".one-one")
// 		.querySelector("span").innerText =
// 		"When Robots Rule The World";
// 	if (
// 		document.querySelector(".one-two").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".one-two"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".one-two")
// 		.querySelector("span").innerText = "Spellbound";
// 	if (
// 		document.querySelector(".one-three").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".one-three"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".one-three")
// 		.querySelector("span").innerText =
// 		"Clandestine";
// 	if (
// 		document.querySelector(".one-four").style
// 			.display == "none"
// 	) {
// 		document.querySelector(
// 			".one-four"
// 		).style.display = "flex";
// 	}
// 	document
// 		.querySelector(".one-four")
// 		.querySelector("span").innerText = "The Game";
// 	document.querySelector(".one-five").style.display = "none";
// 	document.querySelector(".two-two").style.display = "none";
// 	document.querySelector(".two-three").style.display = "none";
// 	document.querySelector(".two-four").style.display = "none";
// 	document.querySelector(".two-one").style.display = "none";
// 	document.querySelector(".two-five").style.display = "none";
// 	document.querySelector(".three-two").style.display = "none";
// 	document.querySelector(".three-three").style.display = "none";
// 	document.querySelector(".three-one").style.display = "none";
// 	document.querySelector(".four-one").style.display = "none";
// 	document.querySelector(".four-two").style.display = "none";

// 	if (
// 		document
// 			.querySelector(
// 				".lesson-type-one"
// 			)
// 			.querySelector("span").style
// 			.display == "none"
// 	) {
// 		document
// 			.querySelector(
// 				".lesson-type-one"
// 			)
// 			.querySelector(
// 				"span"
// 			).style.display = "block";
// 	}
// 	document
// 		.querySelector(".lesson-type-one")
// 		.querySelector("span").innerText =
// 		"A New Advanture Every Time !";

// 	document
// 		.querySelector(".lesson-type-two")
// 		.querySelector("span").style.display = "none";

// 	document
// 		.querySelector(".lesson-type-three")
// 		.querySelector("span").style.display = "none";
// 	document
// 		.querySelector(".lesson-type-four")
// 		.querySelector("span").style.display = "none";
// }
function left_li_clicked5() {
	liLeftArray.forEach((li) => {
		let btn_cli = li.querySelector("button");
		btn_cli.style.backgroundColor = "#fff";
		btn_cli.classList.remove("scaled");
	});

	let ele_clicked = liLeftArray[3];
	let btn_clicked = ele_clicked.querySelector("button");
	btn_clicked.classList.add("scaled");
	btn_clicked.style.backgroundColor = "#3295db";

	document.querySelector(".one-one").style.display = "none";
	document.querySelector(".one-two").style.display = "none";
	document.querySelector(".one-three").style.display = "none";
	document.querySelector(".one-four").style.display = "none";
	document.querySelector(".one-five").style.display = "none";
	document.querySelector(".two-one").style.display = "none";
	document.querySelector(".two-two").style.display = "none";
	document.querySelector(".two-three").style.display = "none";
	document.querySelector(".two-four").style.display = "none";
	document.querySelector(".two-five").style.display = "none";
	document.querySelector(".three-one").style.display = "none";
	document.querySelector(".three-two").style.display = "none";
	document.querySelector(".three-three").style.display = "none";
	document.querySelector(".four-one").style.display = "none";
	document.querySelector(".four-two").style.display = "none";

	document
		.querySelector(".lesson-type-one")
		.querySelector("span").style.display = "none";

	document
		.querySelector(".lesson-type-two")
		.querySelector("span").style.display = "none";

	document
		.querySelector(".lesson-type-three")
		.querySelector("span").style.display = "none";
	document
		.querySelector(".lesson-type-four")
		.querySelector("span").style.display = "none";
}
//Assigning Button Functions