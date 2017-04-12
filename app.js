(function() {
	var app = angular.module('dogApp', []);

	app.controller('DogAppController', function() {
		this.dogs = {
			"dogs": [
				{
					"name": "Kyle",
					"breed": "Puppy",
					"img": "//pbs.twimg.com/media/C8576jrW0AEYWFy.jpg",
					"description": "This is Kyle. He made a joke about your shoes, then stuck his tongue out at you. Uncalled for. Step the h*ck up Kyle. 11/10 would forgive",
					"weRating": 11,
					"owner": {
						"name": "#iamMEHAR",
						"twitter": "sardar_kutto_ka"
					},
					"userRatings": [
						{
							"comment": "OMG HE IS SO CUTE",
							"email": "dogluver@dogs.com",
							"rating": 12
						},
						{
							"comment": "Can I have that dog?",
							"email": "dogstealer@dogs.com",
							"rating": 20
						}
					]
				},
				{
					"name": "Gidget",
					"breed": "Corgi?",
					"img": "//pbs.twimg.com/media/C4_ad1GVcAAgvx6.jpg",
					"description": "This is Gidget. She's a spy pupper. Stealthy as h*ck. Must've slipped pup and got caught. 12/10 would forgive then pet",
					"weRating": 12,
					"owner": {
						"name": "Anissa Mota",
						"twitter": "anissa_mota"
					},
					"userRatings": [
						{
							"comment": "LOL she's hiding!!!!!",
							"email": "dogluver@dogs.com",
							"rating": 14
						}
					]
				},
				{
					"name": "Kevin",
					"breed": "Black Dog",
					"img": "//pbs.twimg.com/media/C8hwNxbXYAAwyVG.jpg",
					"description": "This is Kevin. Kevin doesn't give a single h*ck. Will sit in the fountain if he wants to. 13/10 churlish af",
					"weRating": 13,
					"owner": {
						"name": "Emilia",
						"twitter": "emilia_longo"
					},
					"userRatings": [
						{
							"comment": "Cute dog",
							"email": "dogluver@dogs.com",
							"rating": 12
						}
					]
				},
				{
					"name": "Tycho",
					"breed": "Cyborg",
					"img": "//pbs.twimg.com/media/C7PGQJAWwAAibui.jpg",
					"description": "This is Tycho. She just had new wheels installed. About to do a zoom. 0-60 in 2.4 seconds. 13/10 inspirational as h*ck",
					"weRating": 13,
					"owner": {
						"name": "Mira Gonzalez",
						"twitter": "miragonz"
					},
					"userRatings": [
						{
							"comment": "Wow!",
							"email": "dogluver@dogs.com",
							"rating": 16
						}
					]
				}
			]
		};
	});

	app.controller('TabController', function() {
		this.tab = 1;

		this.setTab = function(index) {
			this.tab = index;
		};

		this.getTab = function(index) {
			return this.tab === index;
		};
	});

	app.controller('ReviewFormController', function() {
		this.review = {};

		this.addReview = function(dog) {
			dog.userRatings.push(this.review);
		};
	});

})();