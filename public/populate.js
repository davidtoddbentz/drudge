$(document).ready(function(){
	json = db;
	console.log(db);
	var daily = json.daily;
	var items = json.pages;


	var topImg = document.getElementById("top-img");
	var topTitle = document.getElementById("top-title");

	topImg.src = daily.img;
	topTitle.href = daily.url;
	topTitle.innerHTML = daily.description;


	for(var i = 0; i < items.length; i++) {
		var item = items[i];

		var ul = document.createElement('ul');

		if(item.img != null)
		{
			var img = document.createElement('img');
			img.src = item.img;
			img.width = 200;
			ul.appendChild(img);
			ul.appendChild(document.createElement('br'));
			ul.appendChild(document.createElement('br'));
		}

		for(var j = 0; j < item.descriptions.length; j++)
		{
			var desc = item.descriptions[j];
			desc = desc.charAt(0).toUpperCase() + desc.slice(1);

			var li = document.createElement('li');
		    var a = document.createElement("a");

		    ul.appendChild(li);
		    li.appendChild(a);

		    a.innerHTML = desc.includes('...') ? desc : desc + '...';
		    a.href = item.url;

		}

		var col = document.getElementById(item.type + "-column");
	    col.appendChild(ul);
	    var hr = document.createElement('hr');
	    ul.appendChild(hr);
	}
});