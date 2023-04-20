// 클래스
// -> 객체 생성 탬플릿 -> 객체를 만들기 위해 사용

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  mew() {
    console.log("야옹");
  }

  eat() {
    console.log("밥먹자");
  }
}

let navi = new Cat("나비", 1);
navi.mew();
navi.eat();

// 클래스 없던 시절
let tv1 = {
  name: "aaa tv",
  price: 2000,
  size: "56inch",
};

let tv2 = {
  name: "bbb tv",
  price: 3000,
  size: "27inch",
};

let tv3 = {
  name: "ccc tv",
  size: "55inch",
};

console.log(tv1.price, tv2.price, tv3.price);

// 클래스 등장 = 일종의 작업지시서
class TV {
  name = "";
  price = 0;
  size = "";

  constructor(name, price, size) {
    // this : 여기 클래스 안에 있는 속성
    // this.name : 이 클래스 안에 있는 name
    this.name = name;
    this.price = price;
    this.size = size;
  }

  getPrice() {
    return this.price + "만원";
  }

  setPrice(price) {
    this.price = price;
  }
}

const newTv1 = new TV("aaa tv", 2000, "56inch");
console.log(newTv1.getPrice());

newTv1.setPrice(3000);
console.log(newTv1.getPrice());

// 하위 클래스
class TV extends Product {
  name = "";
  price = 0;

  constructor(name, prcie) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price + "만원";
  }
}

//상속 : 부모클래스(product)로부터 변수, 메소드를 가져와서(Laptop이) 사용하는 개념
class Laptop extends Product {
  weight = "";

  constructor(name, price, weight) {
    // 상속받는 부모 클래스 값을 불러옴
    super(name, price);
    this.weight = this.weight;
  }
}

let laptop = new Laptop("");
console.log(laptop.price);
console.log(laptop.getPrice());

// 부모클래스는 자식클래스의 값을 사용하지 못한다
let parent = new Product("tv", 1000);
console.log(parent.weight);
