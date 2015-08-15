app.service('homeService', function() {
	this.currentFaves = [
	  {title: "The Nightingale",
	  	author: "Kristin Hannah",
	    image:'https://d.gr-assets.com/books/1422580224s/21853621.jpg',
	    rating: 5},
	  {title: "Big, Little Lies", 
	    author: "Liane Moriarty",
	    image:'https://d.gr-assets.com/books/1399582436s/19486412.jpg',
	    rating: 5},
	   {title: "Girl on the Train",
	     author: "Paula Hawkins",
	     image:'https://d.gr-assets.com/books/1421709869s/22557272.jpg',
		rating: 5}
	]

	this.deleteBook= function(title) {
		var found = false;
		for(var i = 0; i < this.currentFaves.length; i++)
			if(this.currentFaves[i].title=== title) {
				found = true;
				this.currentFaves.splice(i, 1)
			}
		if (!found) console.log('Book not found');
	}
	});
	