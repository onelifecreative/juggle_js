/*
 * Javascript Enhancing the DOM & Debugging Tips - VanillaJS Method http://vanilla-js.com/
 * 
 *  
 * created by Lukasz Schab - onelife.co
 * contact twitter @onelifecreative or @onelifeco
 *
 * Test browser Chrome 46.0.2490.80 & Safari 9.0.2 (11601.3.6)
 *
 */



/*
 * Find Element of the DOM
 * 
 * @ getElementsByTagName
 * @ getElementById
 * @ querySelector
 * @ querySelectorAll
 *
 */


	/* getElementsByTagName('@tagName'); return collection all <li> item */	
	
		document.getElementsByTagName('li');

	/* getElementById('@id'); return element with id */		
	
		document.getElementById('listItem');

	/* Tips! U can use combine is this double method || now return collection of ['<section><,section>','<section><,section>'...]*/	

		document.getElementById('main_app').getElementsByTagName('section');


	/* querySelector('@selector'); return first element of DOM with this selector */

		document.querySelector('.list-item li');

	/* querySelectorAll('@selector'); return all selectorof list item */	

		document.querySelectorAll('.list-item li');






/*
 * Create new element <input type="text" name="" placeholder="Insert text...">
 * 
 * @param {createDocumentFragment} lightweight' - Document - object 
 * @webLink w3 http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-B63ED1A3
 *
 */



	var fragmentScope = document.createDocumentFragment();

	/* Create input node */

	var inputElement = document.createElement('input');

	/* Properties Element.name get and set only for anchor, applet, form, frame, iframe, image, input, map, meta, object, option, param, select i textarea */
			
			inputElement.id = 'inputName';
			inputElement.type = 'text';
			inputElement.name = 'Name';
			inputElement.placeholder = 'Insert text...';

	/* 
	 *	Methods get & set & remove
	 * 	
	 *	element.setAttribute(name,value) || set new attribute
	 *  element.getAttribute(nameAttribute) || return the value of the attribute
	 */
	 		
	 		inputElement.setAttribute('data-action','exit');

			// el.name === 'Name'
			
			var el = inputElement.getAttribute('name');

	// !Tips watch the structre of the inputElement.
	//  Use dir(elementName) method of the console
			
			dir(inputElement);
		
	/* append node to document.fragment */
			fragmentScope.appendChild(inputElement);


	/*
	 *  Alternate Method innerHTML template
	 *	For production you can use template engine {{ Mustache }} && Handlebars or another
	 */

	var obj = {
		id : 'inputName',
		type : 'text',
		name : 'Name',
		placeholder : 'Insert text...'
	};

	var view = function view(obj) {

		var template = '<input id="{{id}}" type="{{type}}" name="{{name}}" placeholder="{{placeholder}}">';

			template = template.replace('{{id}}',obj.id);
			template = template.replace('{{type}}',obj.type);
			template = template.replace('{{name}}',obj.name);
			template = template.replace('{{placeholder}}',obj.placeholder);

			return template;
	};

	var body = document.getElementsByTagName('body');
			body[0].innerHTML = view(obj);




/*
 * Create & Clone & Insert Text - Node Elemenet
 */

 	// Create
 	document.createElement('h2');
 	
 	// now
 	document.createTextNode('My first text node!');
 	
 	// then...
 	hElement.appendChild(node);

 	// @cloneNode  Clone node of all children
 	var node = '<h2><h2>';
 	var newNode = node.cloneNode(true);

 	// insert text
 	element.innerHTML = string;

 	// return text content of node
 	element.innerText


/*
 * Parent || Node || Siblings
 */

 	// Selected Node
 	element.nodeName

 	// Parent Node
 	element.parentElement

 	// return array collection of children
 	element.children

 	// first child of the selected element
 	element.firstElementChild

 	// last child
 	element.lastElementChild

	// node immediately following || !@readonly param
	elemen.nextSibling	

	// next element
 	element.nextElementSibling

 	// return the number of child elements of the given element
 	element.childElementCount



/*
 * Insert & Remove ElementNode || link to MDN https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
 */

 	// Before
 	element.parentNode.insertBefore(newElement, element);

 	// After
 	element.parentNode.insertBefore(newElement, element.nextSibling);

 	// Insert Text
 	element.insertAdjacentHTML(position, 'text' || 'template' || "<p>This is first paragraph</p>");

 	// @position param

 	// 'beforebegin'     Before the element itself.
	// 	
	// 'afterbegin'      Just inside the element, before its first child.
	// 
	// 'beforeend'       Just inside the element, after its last child.
	// 
	// 'afterend'        After the element itself.

	// Remove Element
	element.parentNode.removeChild(el);

/*
 * Class List || @param className === string
 */

 	// Add Class
 	element.classList.add(className);

 	// Remove Class
 	element.classList.remove(ClassName);

 	// Has Class
 	element.classList.contains(className);

 	// toogle Class
 	element.classList.toggle(className);








