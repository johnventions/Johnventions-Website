function isMobile() {
	if (window.matchMedia("(min-width: " + 767 + "px)").matches) {
		return false;
	} else {
		return true;
	}
}

export {isMobile};