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
			.text(`  providing solutions using MERN stack`)
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
			const $h1 = $("<h1>").text("Project 1 template").appendTo(".work-info");
			const $p = $("<p>")
				.appendTo(".work-info")
				.text(
					"Lorem ashdfdksdjh klhsdjkf sjdhfsk b,KLJDAHFS Ultrices lorem non feugiat egestas amet. Website Design"
				);
			const $a = $("<a>")
				.attr("href", "#")
				.text("View source")
				.appendTo(".work-info");
		};
		const $project2 = () => {
			const $work2 = $("<div>").addClass("project2").appendTo(".project-wrap");

			const $workInfo2 = $("<div>")
				.addClass("work-info2")
				.appendTo(".project2");
			const $h1v2 = $("<h1>")
				.text("Project 2 template")
				.appendTo(".work-info2");
			const $pv2 = $("<p>")
				.appendTo(".work-info2")
				.text(
					"Lorem ashdfdksdjh klhsdjkf sjdhfsk b,KLJDAHFS Ultrices lorem non feugiat egestas amet. Website Design"
				);
			const $av2 = $("<a>")
				.attr("href", "#")
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
			const $h1 = $("<h1>").text("Project 3 template").appendTo(".work-info3");
			const $p = $("<p>")
				.appendTo(".work-info3")
				.text(
					"Lorem ashdfdksdjh klhsdjkf sjdhfsk b,KLJDAHFS Ultrices lorem non feugiat egestas amet. Website Design"
				);
			const $a = $("<a>")
				.attr("href", "#")
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
	$(".logo").mouseover(function () {
		$(".hide-ul").slideDown();
	});
	$(".name").mouseleave(function () {
		$(".hide-ul").css("display", "none");
	});

	// $home();
	$("#home").on("click", $home);
	$("#project").on("click", $project);
	$("#contact").on("click", $contact);
});
