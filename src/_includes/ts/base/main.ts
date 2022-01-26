import { loadModules } from '../utilities/helpers'
import { theme } from '../utilities/theme'

import { utils } from './utils'


/** Global Version for the website code */
let ver = '0.1.3';
declare global {
	type colour = { r: number, g: number, b: number, a?: number }
	type position = { x: number, y: number, z?: number }
	type pixel = { pos: position, col: colour }

	var utils:utils
	var theme:theme
}

/**
 * INITIALIZATION
 * @constructor
*/
; (function () {
	global.utils = new utils();
	global.theme = new theme();

	loadScripts();

	console.log(`JS Version is: ${ver}`);
})();

/**
 * Initiates scripts for all the elements with active scripts on the page.
 * @constructor
 */
function loadScripts() {
	document.addEventListener(
		'DOMContentLoaded',
		() => {
			let interactiveScripts: Array<{selector:string,scriptPath:string}> = []
			document.querySelectorAll('.interactiveSection > .section-container > .script-container').forEach(async (section) => {
				const sectionType = section.getAttribute('data-script')

				interactiveScripts.push({
					selector: `.interactiveSection > .section-container > .script-container[data-script="${sectionType}"]`,
					scriptPath: `components/blocks/interactiveSections/${sectionType}/${sectionType}`
				})
			});

			loadModules([
				{
					selector: '#header',
					scriptPath: 'components/headers/header'
				},
				...interactiveScripts,
				{
					selector: '.projectsArchive > [data-filterable="true"]', // don't bother loading script if not filterable
					scriptPath: 'components/blocks/projectsArchive/projectsArchive'
				},	
				{
					selector: '.contactForm #formContainer',
					scriptPath: 'components/blocks/contact/contact'
				},
				{
					selector: '.video-utility',
					scriptPath: 'utilities/video'
				},
				{
					selector: '.scroll-indicator',
					scriptPath: 'utilities/smoothScroll'
				},
				{
					selector: '#returnTo',
					scriptPath: 'utilities/returnTo'
				},
			])
		}
	)
}
