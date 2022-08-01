$(() => {
	$(window).on("scroll", function () {
		if ($(window).scrollTop()) {
			$("nav").addClass("black");
		} else {
			$("nav").removeClass("black");
		}
	});

	const $clearDiv = () => {
		$(".main-content").addClass("hide");

		const $main = $("<div>").addClass("main-content").appendTo(".container");
	};

	const $home = () => {
		$clearDiv();
		const $homeText = $("<div>")
			.addClass("main-container-text")
			.appendTo(".main-content");
		const $h1 = $("<h1>")
			.text(`I am a software engineer  `)
			.appendTo(".main-container-text");
		const $h1v2 = $("<h1>")
			.addClass("text")
			.text(
				`in the process of learning and creating software or a web-application that will not only give a great UI/UX experience, but also a functionality that will be useful for implementing new technologies`
			)
			.appendTo(".main-container-text");

		const $picture = $("<div>").addClass("picture").appendTo(".main-content");

		const $img = $("<img>").attr("src", "img/bg.png").appendTo(".picture");
	};

	const $project = () => {
		$clearDiv();
		const $projectWrap = $("<div>")
			.addClass("project-wrap")
			.appendTo(".main-content");
		const $project1 = () => {
			const $work = $("<div>").addClass("project").appendTo(".project-wrap");
			const $workCard = $("<div>").addClass("work-card").appendTo(".project");
			const $image = $("<img>")
				.attr("src", "card-1.png")
				.appendTo(".work-card");
			const $workInfo = $("<div>").addClass("work-info").appendTo(".project");
			const $h1 = $("<h1>")
				.text("Iphone calculator".toUpperCase())
				.appendTo(".work-info");
			const $p = $("<p>")
				.appendTo(".work-info")
				.text(
					"This has been one of my first projects using javascript and css styling for the calculator. The idea here was not only to make a calculator, but to create a copy of an iphones calculator."
				);
			const $a = $("<a>")
				.attr("href", "https://codepen.io/samerunet/pen/VwXLMRQ")
				.text("View source")
				.appendTo(".work-info");
		};
		const $project2 = () => {
			const $work2 = $("<div>").addClass("project2").appendTo(".project-wrap");

			const $workInfo2 = $("<div>")
				.addClass("work-info2")
				.appendTo(".project2");
			const $h1v2 = $("<h1>")
				.text("Rock, Paper, Scissors")
				.appendTo(".work-info2");
			const $pv2 = $("<p>")
				.appendTo(".work-info2")
				.text(
					"This project was created using simple javascript DOM manipulation as well as loops and functions."
				);
			const $av2 = $("<a>")
				.attr("href", "https://codepen.io/samerunet/pen/qBxzbdX?editors=1111")
				.text("View source")
				.appendTo(".work-info2");
			const $workCard2 = $("<div>")
				.addClass("work-card2")
				.appendTo(".project2");
			const $image2 = $("<img>")
				.attr("src", "card-2.png")
				.appendTo(".work-card2");
		};
		const $project3 = () => {
			const $work3 = $("<div>").addClass("project3").appendTo(".project-wrap");
			const $workCard = $("<div>").addClass("work-card3").appendTo(".project3");
			const $image = $("<img>")
				.attr("src", "card-3.png")
				.appendTo(".work-card3");
			const $workInfo = $("<div>").addClass("work-info3").appendTo(".project3");
			const $h1 = $("<h1>").text("Tic, Tac, Toe").appendTo(".work-info3");
			const $p = $("<p>")
				.appendTo(".work-info3")
				.text(
					"Basics of javascript, tic-tac-toe gives a creator a wide variety of knowledge. You can start by creating great UI/UX, but you can also give it a great functionality, at the end of the day a project like this will give you the opportunity to learn and create functions and logic integration for your project."
				);
			const $a = $("<a>")
				.attr("href", "https://codepen.io/samerunet/pen/poaXjQM")
				.text("View source")
				.appendTo(".work-info3");
		};
		$project1();
		$project2();
		$project3();
	};

	const $contact = () => {
		$clearDiv();
		const $form = $("<div>").addClass("form").appendTo(".main-content");
		const $h2 = $("<h2>")
			.addClass("secondText")
			.text("i will contact you shortly")
			.appendTo(".form");
		const $formInput = $("<div>").addClass("formInput").appendTo(".form");
		const $input = $("<input>").appendTo(".formInput").attr({
			type: "text",
			placeholder: "Your name",
			name: "name",
			required: "true",
		});
		const $formInput1 = $("<div>").addClass("formInput1").appendTo(".form");
		const $input1 = $("<input>").appendTo(".formInput1").attr({
			type: "number",
			placeholder: "Your phone number",
			name: "phone",
			required: "true",
		});
		const $formInput2 = $("<div>").addClass("formInput2").appendTo(".form");
		const $input2 = $("<input>").appendTo(".formInput2").attr({
			type: "email",
			placeholder: "Your email",
			name: "email",
			required: "true",
		});
		const $formInput3 = $("<div>").addClass("formInput3").appendTo(".form");
		const $input3 = $("<input>").appendTo(".formInput3").attr({
			type: "text",
			placeholder: "Your text",
			name: "question",
			required: "true",
		});
		//
		const $submit = $("<input>")
			.appendTo(".form")
			.attr({ type: "submit", class: "send", value: "SEND" });
	};
	const $about = () => {
		$clearDiv();
		const $about = $("<div>")
			.appendTo(".main-content")
			.addClass("about-container");
		const $div = $("<div>").appendTo(".about-container").addClass("about-info");
		const $h2 = $("<h2>")
			.appendTo(".about-info")
			.text("A bit about me".toUpperCase());
		const $span = $("<span>")
			.appendTo(".about-info")
			.text(
				"I am a software engineer that i am enthusiastic about codding and implementing new technologies. I have a previous experience with automotive engineering. I have also worked as a Financed and Insurance manager and got promoted to General Managers position, which helped me to make a quick and rational decision to every problem"
			);
		const $av2 = $("<a>")
			.addClass("resume")
			.attr("href", "#")
			.text("Resume")
			.appendTo(".about-info");
		const $divabout = $("<div>")
			.addClass("about-gallery")
			.appendTo(".about-container");
		const $divImg1 = $("<div>")
			.addClass("about-img")
			.appendTo(".about-gallery");
		const $img1 = $("<img>").attr("src", "about-1.png").appendTo($divImg1);
		const $divImg2 = $("<div>")
			.addClass("about-img")
			.appendTo(".about-gallery");
		const $img2 = $("<img>").attr("src", "about-2.png").appendTo($divImg2);
		const $divImg3 = $("<div>")
			.addClass("about-img")
			.appendTo(".about-gallery");
		const $img3 = $("<img>").attr("src", "about-3.png").appendTo($divImg3);
	};
	$(".logo").mouseover(function () {
		$(".hide-ul").slideDown();
	});
	$(".logo").mouseleave(function () {
		$(".hide-ul").hide(100);
	});

	$home();
	$("#home").on("click", $home);
	$("#project").on("click", $project);
	$("#contact").on("click", $contact);
	$("#about").on("click", $about);
});
