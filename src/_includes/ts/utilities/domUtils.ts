export class domUtils {
	constructor() {
		console.log('loaded')
	}

	relativeLocation(obj: HTMLElement, ev: MouseEvent): { x: number, y: number } {
		return getEventLocation(obj, ev);

		/**
		 * Return the location of the element (x,y) being relative to the document.
		 * 
		 * @param {Element} obj Element to be located
		 */
		function getElementPosition(obj: any) {
			var curleft = 0, curtop = 0;
			if (obj.offsetParent) {
				do {
					curleft += obj.offsetLeft;
					curtop += obj.offsetTop;
				} while (obj = obj.offsetParent);
				return { x: curleft, y: curtop };
			}
			return undefined;
		}

		/** 
		 * return the location of the click (or another mouse event) relative to the given element (to increase accuracy).
		 * @param {DOM Object} element A dom element (button,canvas,input etc)
		 * @param {DOM Event} event An event generate by an event listener.
		 */
		function getEventLocation(element: HTMLElement, event: MouseEvent): { x: number, y: number } {
			// Relies on the getElementPosition function.
			var pos = getElementPosition(element)!;

			return {
				x: (event.pageX - pos.x),
				y: (event.pageY - pos.y)
			};
		}
	}

	/**
	 * Debounce functions for better performance
	 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
	 * @param  {Function} fn The function to debounce
	 */
	debounce(this: any, fn: any) {

		// Setup a timer
		let timeout: number;

		// Return a function to run debounced
		return () => {

			// Setup the arguments
			let context: any = this;
			let args: any = arguments;

			// If there's a timer, cancel it
			if (timeout) {
				window.cancelAnimationFrame(timeout);
			}

			// Setup the new requestAnimationFrame()
			timeout = window.requestAnimationFrame(function () {
				fn.apply(context, args);
			});

		}
	};
}



