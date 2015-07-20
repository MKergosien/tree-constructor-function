/*1. Create a constructor function called Tree. It should take 4 arguments 
that correspond to attributes on the objects it creates. Two attributes 
should be 'name' and 'leaf shape'. Pick the other two.*/ 

var Tree = function(name, leaf_shape, flower, fruit){
	this.name = name;
	this.leaf_shape = leaf_shape;
	this.fruit = fruit;
	this.flower = flower;
}



/*2. Create 4 tree objects using your Tree function.*/

var apple = new Tree("Apple", "Oval, spear-shaped", "true", "true");
var magnolia = new Tree("Magnolia", "Oval", "true", "false");
var dogwood = new Tree("Dogwood", "Angled, oval", "true", "false");
var cedar = new Tree("Cedar","needle-like", "false", "false" );


/*3. Put those objects into an array called tree_array.*/ 
var tree_array = [apple, magnolia, dogwood, cedar];


/*4. for each tree in tree_array, add a block element to the tree-holder 
div that displays the tree's attributes*/


output= ""
for (var i = 0; i < tree_array.length; i++) { 
	output+= "<p>" + JSON.stringify(tree_array[i]) + "</p>";
}
document.getElementById("tree-holder").innerHTML = output;