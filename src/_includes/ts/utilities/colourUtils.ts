
/**
 * 
 *
 * @export
 * @class colourUtils
 */
export class colourUtils {
	constructor() {
		console.log('colour utils loaded')
	}
	hexConverter(hex: string): colour {
		let r: number, g: number, b: number;

		hex = hex.replace(/\s/g, '')

		if (hex.charAt(0) == '#') {
			hex = hex.substr(1);
		}
		if (hex.length == 3) {
			hex = hex.substr(0, 1) + hex.substr(0, 1) + hex.substr(1, 2) + hex.substr(1, 2) + hex.substr(2, 3) + hex.substr(2, 3);
		}
		r = parseInt((hex.charAt(0) + hex.charAt(1)), 16);
		g = parseInt((hex.charAt(2) + hex.charAt(3)), 16);
		b = parseInt((hex.charAt(4) + hex.charAt(5)), 16);
		return { r, g, b };
	}

	colourNoise(baseCol: colour, sD: number): colour {
		return { r:0, g:0, b:0 }
	}
}