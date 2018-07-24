/*var m = [];
var allBtn = document.getElementsByClassName ('li_click');
console.log(allBtn);
for (var i=0; i <= allBtn.length; i++ ){
	allBtn[i].addEventListener('click', isClick);
	m.push(i);
}*/
var allBtn = document.getElementsByClassName('li_click');
	for(var i=0;len = allBtn.length, i<len; i++){
		allBtn[i].addEventListener ('click',isClick);
	}
function isClick (id) {
	console.log(this.id);
	var a = this.id;
	console.log('a = ' + a);
	/*if (a == 'product2'){
		var logo = document.getElementById('logoDiv');
		console.log(logo);
		logo.innerHTML = '';
		logo.innerHTML = '<img>';
		var logoImg = logo.childNodes[0];
		console.log(logoImg);
		logoImg.setAttribute('src', "logo/PayPal-mobile-app-logo-design.png");
		var button2 = document.getElementById(this.id);
		button2.classList.add('active');
		var button1 = document.getElementById('product1');
		button1.classList.remove('active');
		var button3 = document.getElementById('product3');
		button3.classList.remove('active');
		
		var text = document.getElementById('aboutDiv');
		text.innerHTML = '';
		var aboutText = document.createElement('p');
		text.appendChild(aboutText);
		aboutText.setAttribute('class', "col-md-8");
		aboutText.innerText = 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.';
		
		var slider = $('#aniimated-thumbnials')
		slider.empty()
		var sliderImgs = [];
		
		sliderImgs[0] = $('<img>', {'src':"slider/2/2.jpg"})
		sliderImgs[1] = $('<img>', {'src':"slider/2/1.jpg", 'class':'wide_img'})
		sliderImgs[2] = $('<img>', {'src':"slider/2/3.jpg", 'class':'wide_img'})
		sliderImgs[3] = $('<img>', {'src':"slider/2/4.jpg"})
		sliderImgs[4] = $('<img>', {'src':"slider/2/5.jpg"})
		sliderImgs[5] = $('<img>', {'src':"slider/2/6.jpg"})
		sliderImgs[6] = $('<img>', {'src':"slider/2/7.jpg"})
		console.log(sliderImgs);
		for (var i = 0; i<sliderImgs.length; i++) {
			var source = sliderImgs[i].attr('src')
			console.log(source)
			var newLi = $('<li></li>',{'data-src':`${source}`, 'data-thumb':`${source}`})
			newLi.appendTo(slider)
			sliderImgs[i].appendTo(newLi)
		}
		
		
	}*/
	if (a == 'product2'){
		var logo = document.getElementById('logoDiv');
		console.log(logo);
		logo.innerHTML = '';
		logo.innerHTML = '<img>';
		var logoImg = logo.childNodes[0];
		console.log(logoImg);
		logoImg.setAttribute('src', "logo/PayPal-mobile-app-logo-design.png");
		var button1 = document.getElementById(this.id);
		button1.classList.add('active');
		var button2 = document.getElementById('product1');
		button2.classList.remove('active');
		var button3 = document.getElementById('product3');
		button3.classList.remove('active');
		
		var text = document.getElementById('aboutDiv');
		text.innerHTML = '';
		var aboutText = document.createElement('p');
		text.appendChild(aboutText);
		aboutText.setAttribute('class', "col-md-8");
		aboutText.innerText = 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.';
		
		var slider = $('#aniimated-thumbnials')
		slider.empty()
		var sliderImgs = [];
		
		sliderImgs[0] = $('<img>', {'src':"slider/2/2.jpg"})
		sliderImgs[1] = $('<img>', {'src':"slider/2/1.jpg"})
		sliderImgs[2] = $('<img>', {'src':"slider/2/3.jpg"})
		sliderImgs[3] = $('<img>', {'src':"slider/2/4.jpg"})
		sliderImgs[4] = $('<img>', {'src':"slider/2/5.jpg"})
		sliderImgs[5] = $('<img>', {'src':"slider/2/6.jpg"})
		sliderImgs[6] = $('<img>', {'src':"slider/2/7.jpg"})
		console.log(sliderImgs);
		for (var i = 0; i<sliderImgs.length; i++) {
			var source = sliderImgs[i].attr('src')
			console.log(source)
			var newLi = $('<li></li>',{'data-src':`${source}`, 'data-thumb':`${source}`})
			newLi.appendTo(slider)
			sliderImgs[i].appendTo(newLi)
		}
		
	}
	if (a == 'product1'){
		var logo = document.getElementById('logoDiv');
		console.log(logo);
		logo.innerHTML = '';
		logo.innerHTML = '<img>';
		var logoImg = logo.childNodes[0];
		console.log(logoImg);
		logoImg.setAttribute('src', "logo/Chase-Mobile-app-logo-icon.png");
		var button1 = document.getElementById(this.id);
		button1.classList.add('active');
		var button2 = document.getElementById('product2');
		button2.classList.remove('active');
		var button3 = document.getElementById('product3');
		button3.classList.remove('active');
		
		var text = document.getElementById('aboutDiv');
		text.innerHTML = '';
		var aboutText = document.createElement('p');
		text.appendChild(aboutText);
		aboutText.setAttribute('class', "col-md-8");
		aboutText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh';
		
		var slider = $('#aniimated-thumbnials')
		slider.empty()
		var sliderImgs = [];
		
		sliderImgs[0] = $('<img>', {'src':"slider/1/2.jpg"})
		sliderImgs[1] = $('<img>', {'src':"slider/1/1.jpg", 'class':'wide_img'})
		sliderImgs[2] = $('<img>', {'src':"slider/1/3.jpg", 'class':'wide_img'})
		sliderImgs[3] = $('<img>', {'src':"slider/1/4.jpg"})
		sliderImgs[4] = $('<img>', {'src':"slider/1/5.jpg"})
		sliderImgs[5] = $('<img>', {'src':"slider/1/6.jpg"})
		sliderImgs[6] = $('<img>', {'src':"slider/1/7.jpg"})
		console.log(sliderImgs);
		for (var i = 0; i<sliderImgs.length; i++) {
			var source = sliderImgs[i].attr('src')
			console.log(source)
			var newLi = $('<li></li>',{'data-src':`${source}`, 'data-thumb':`${source}`})
			newLi.appendTo(slider)
			sliderImgs[i].appendTo(newLi)
		}
		
	}
	if (a == 'product3'){
		var logo = document.getElementById('logoDiv');
		console.log(logo);
		logo.innerHTML = '';
		logo.innerHTML = '<img>';
		var logoImg = logo.childNodes[0];
		console.log(logoImg);
		logoImg.setAttribute('src', "logo/SHAREit-mobile-app-logo-designer-uk.png");
		var button3 = document.getElementById(this.id);
		button3.classList.add('active');
		var button1 = document.getElementById('product1');
		button1.classList.remove('active');
		var button2 = document.getElementById('product2');
		button2.classList.remove('active');
		
		var text = document.getElementById('aboutDiv');
		text.innerHTML = '';
		var aboutText = document.createElement('p');
		text.appendChild(aboutText);
		aboutText.setAttribute('class', "col-md-8");
		aboutText.innerText = 'Стандартные свойства и атрибуты синхронизируются: установка атрибута автоматически ставит свойство DOM. Некоторые свойства синхронизируются в обе стороны.'+
		'Бывает так, что свойство не совсем соответствует атрибуту. Например, «логические» свойства вроде checked, selected всегда имеют значение';
		
		var slider = document.getElementById('sliderDiv');
		var sliderImgs = [];
		sliderImgs = slider.childNodes;
		console.log(sliderImgs);
		sliderImgs[1].setAttribute('src',"slider/3/chat 2.png");
		sliderImgs[2].setAttribute('src',"slider/3/chat.png");
		sliderImgs[0].setAttribute('src',"slider/3/language.png");
	}
}

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/#Contact', urlencodedParser, function (req,res) {
	if (!req.body) return res.sendStatus(400)
	console.log(req.body)
	res.render('about')
})

