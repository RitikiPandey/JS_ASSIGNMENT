class Person {
  constructor(first_name, last_name, address) {
    this.firstName = first_name;
    this.lastName = last_name;
    this.officialAddress = address;
  }
}

const P1 = new Person("Ritiki", "Pandey", "Gorakhpur, Uttarpradesh");
const P2 = new Person("Nirupama", "Jha", "Gaya,Bihar");
const P3 = new Person("Vanshika", "Mishra", "Basti,Uttarpradesh");


console.log(P1);
console.log(P2);
console.log(P3);