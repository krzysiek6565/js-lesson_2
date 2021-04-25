let name = 'Mustafa';
let i = 0;
let para = document.createElement('p');

let phonebook = [
  { name : 'Chris', number : '1549' },
  { name : 'Li Kang', number : '9634' },
  { name : 'Anne', number : '9065' },
  { name : 'Francesca', number : '3001' },
  { name : 'Mustafa', number : '6888' },
  { name : 'Tina', number : '4312' },
  { name : 'Bert', number : '7780' },
  { name : 'Jada', number : '2282' },
]

// Add your code here

do {
if(phonebook[i].name === name){
  let phone = phonebook[i].number;
  para.textContent = `His name is ${name} and his phonenumber is ${phone}.`;
}
i++;}
while(i <= phonebook.length-1);

// Don't edit the code below here!
let section = document.querySelector('section');
section.appendChild(para);
