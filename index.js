document.addEventListener("DOMContentLoaded", function(event) {

	let container_products = document.getElementById('container_products');
	let shopping = document.getElementById('shopping');
	let total_shopping = document.getElementById('total_shopping');
	let total_price = 0;
	clean_files();

	let products = [
		{
			"id": 1,
			"title": "Play Station 4",
			"price": 1300000,
			"store": "Exito",
			"img": "images/play.png"
		},
		{
			"id": 2,
			"title": "Piano",
			"price": 1000000,
			"store": "Falabella",
			"img": "images/piano.png"
		},
		{
			"id": 3,
			"title": "Chair",
			"price": 800000,
			"store": "Exito",
			"img": "images/chair.jpeg"
		}
	];

	for (i in products) {
		container = create_container();
		container.append(create_image(products[i].img));
		container.append(create_title(products[i].title));
		container.append(create_price(products[i].price));
		container.append(create_store(products[i].store));
		container.append(create_button(i));
		container_products.append(container);
	}

	function create_container() {
		let container = document.createElement('div');
		container.className = "card";
		return container;
	}

	function create_image(image_path) {
		let image = document.createElement('img');
		image.src = image_path;
		image.style.width = '100%';
		image.style.height = '400px';
		image.alt = 'Denim Jeans';
		return image;
	}

	function create_title(text) {
		let title = document.createElement('h1');
		let title_text = document.createTextNode(text); 
		title.append(title_text);
		return title;
	}

	function create_price(text) {
		let price = document.createElement('p');
		let price_text = document.createTextNode('$' + text); 
		price.className = 'price';
		price.append(price_text);
		return price;
	}

	function create_store(text) {
		let store = document.createElement('p');
		let store_text = document.createTextNode(text);
		store.append(store_text);
		return store;
	}

	function create_button(id) {
		let paragraph = document.createElement('p');
		let button = document.createElement('button');
		let button_text = document.createTextNode('Agregar al carrito');
		button.id = id;
		button.onclick = on_click;
		button.append(button_text);
		paragraph.append(button);
		return paragraph;
	}

	function on_click() {
		shopping.value += products[this.id].title + '\n';
		total_price += products[this.id].price;
		total_shopping.innerHTML = total_price;
	}

	function clean_files() {
		shopping.value = "";
		total_shopping.innerHTML = total_price;
	}

});