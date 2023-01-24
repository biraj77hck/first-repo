const person = new Object();
person.firstName="Jack";
person.lastName="Doe";
person.age=14;

document.getElementById("demo").innerHTML = person.firstName+ person.lastName+ person.age;

function empolyee(id, name, salary){
    this.id=id;
    this.name=name;
    this.salart=salary;
}

e=new empolyee(90, "Jack, 30000");