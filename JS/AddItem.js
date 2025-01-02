function AddItem(elementId, userInputValue, overall) {
	let items = [];
	let itemCount = 0;
	let indexPosition = 0;

	items.push({ elementId, userInputValue, overall }).toFixed(2);

	for (let i = 0; i < items.length; i++) {
		itemCount = items.length;
		indexPosition = itemCount;
		console.log("Item added: " + itemCount);
		console.log("Index position of: " + indexPosition);
		console.log(items);

		// if the item inside the array is not emtpy, it will show the result section
		if (itemCount > 0) {
			document.getElementById("viewResult").style.display = "flex";
			viewResult.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "center",
			});
		}
	}
}

export { AddItem };
