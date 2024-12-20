export function clickOutside(node: Node, callback: (node: Event) => void) {
	return outside(node, 'click', callback);
}

export function tapOutside(node: Node, callback: (node: Event) => void) {
	return outside(node, 'mousedown', callback);
}

function outside(node: Node, listener: string, callback: (node: Event) => void) {
	const eventHandler = (event: Event) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			callback(event);
		}
	};

	document.addEventListener(listener, eventHandler);

	return {
		destroy() {
			document.removeEventListener(listener, eventHandler);
		}
	};
}
