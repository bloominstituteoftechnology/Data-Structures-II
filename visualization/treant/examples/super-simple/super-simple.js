
var config = {
	container: "#OrganiseChart-simple",
	connectors: { type: 'straight' }
};

var parent_node = {
	text: { name: "Parent node" }
};

var first_child = {
	HTMLclass: "black",
	parent: parent_node,
	text: { name: "First child" }
};

var second_child = {
	HTMLclass: "red",
	parent: parent_node,
	text: { name: "Second child" }
};

var third_child = {
	parent: parent_node,
	text: { name: "Third child" },
	drawLineThrough: true
};

var fourth_child = {
	parent: third_child,
	text: { name: "Fourth child" }
};

var fifth_child = {
	parent: third_child,
	text: { name: "null" }
};

var sixth_child = {
	parent: fifth_child,
	text: { name: "Sixth child" }
};

var rbt = 6;

var simple_chart_config = [
	config, parent_node,
		first_child, second_child,
		third_child, fourth_child,
		fifth_child, sixth_child
];
