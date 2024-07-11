let initialized = false;

export const controlDialog = () => {
	if (initialized) return;

	document.addEventListener("click", (e) => {
		if (!(e.target instanceof HTMLElement)) return;

		const button = e.target.closest("[data-dialog]") ?? e.target;

		if (!(button instanceof HTMLElement)) return;

		const target = document.getElementById(button.dataset.dialog || "");

		if (!(target instanceof HTMLDialogElement)) return;

		target.toggleAttribute("open");
	});

	initialized = true;
};
