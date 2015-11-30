var Bee = function() {
	//this= object.create(Bee.prototype)
	Grub.call(this);
	this.age= 5;
	this.color= 'yellow'; 
	this.job= 'keep on growing';  
};

//Bee.prototype delegates to Grub.prototype (we can access methods in Grub.prototype)
Bee.prototype= Object.create(Grub.prototype);

Bee.prototype.constructor= Bee; 



