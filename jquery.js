$(document).ready(() => {

	// Initial design
	$("#head-one").addClass("bg-grey");
	$("#head-one").addClass("shadow");
	$("#head-one h2").addClass("text-line");

	$("#head-two").addClass("bg-grey");
	$("#head-three").addClass("bg-grey");

	// Start of event Listeners.
	$("#head-one h2 a").click(() => {
		$("#content-one").slideToggle(180);
		$("#content-two").slideUp(180);
		$("#content-three").slideUp(180);

		
		$("#head-one").toggleClass("shadow");
		$("#head-two").removeClass("shadow");
		$("#head-three").removeClass("shadow");


		$("#head-one h2").toggleClass("text-line");
		$("#head-two h2").removeClass("text-line");
		$("#head-three h2").removeClass("text-line");
	});

	$("#head-two h2 a").click(() => {
		$("#content-two").slideToggle(180);
		$("#content-one").slideUp(180);
		$("#content-three").slideUp(180);

		$("#head-two").toggleClass("shadow");
		$("#head-one").removeClass("shadow");
		$("#head-three").removeClass("shadow");

		$("#head-two h2").toggleClass("text-line");
		$("#head-one h2").removeClass("text-line");
		$("#head-three h2").removeClass("text-line");
	});

	$("#head-three h2 a").click(() => {
		$("#content-three").slideToggle(180);
		$("#content-two").slideUp(180);
		$("#content-one").slideUp(180);

		$("#head-three").toggleClass("shadow");
		$("#head-two").removeClass("shadow");
		$("#head-one").removeClass("shadow");

		$("#head-three h2").toggleClass("text-line");
		$("#head-two h2").removeClass("text-line");
		$("#head-one h2").removeClass("text-line");
	});
});