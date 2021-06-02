let arr = ['one', 'two', 'three', 'four'];
let list = new List(arr)
document.body.append(list.render());

let list2 = new List2(arr, 'blue')
document.body.append(list2.render());

let cssClass = ['text-center', 'bold', 'text-red'];
let list3 = new List3(arr, cssClass)
document.body.append(list3.render());