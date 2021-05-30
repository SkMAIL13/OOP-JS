let width = 200;
let height = 100;
let background = 'space-gray';
let value = 'Unit-3';
let borderRadius = 100;

let button = new Button(width, height, background, value);
document.body.append(button.render());

let moderButton = new ModernButton(width, height, background, value, borderRadius);
document.body.append(button.render());