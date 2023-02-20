// 1
console.log('1)');
function add(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}
console.log('add(3, 4)');
console.log(add(3, 4));
console.log('mul(3, 4)');
console.log(mul(3, 4));
console.log('----------------------------------');
// 2
console.log('2)');
function identityf(a) {
  return () => {
    return a;
  }
}
let idf = identityf(3);
console.log('idf ()');
console.log(identityf(3));
console.log('----------------------------------');
// 3
console.log('3)');
function addf(a) {
  return (b) => {
    return a + b;
  }
}
console.log('addf (3)(4)');
console.log(addf(3)(4));
console.log('----------------------------------');
//4
console.log('4)');
function applyf(func) {
  return (a) => {
    return (b) => {
      return func(a, b);
    }
  }
}
let addff = applyf(add);
console.log('addff (3)(4)');
console.log(addff(3)(4));
console.log('applyf (mul)(5)(6)');
console.log(applyf(mul)(5)(6));
console.log('----------------------------------');
// 5
console.log('5)');
function curry(func, a) {
  return (b) => {
    return func(a, b);
  }
}
let add3 = curry(add, 3);
console.log('add3(4)');
console.log(add3(4));
console.log('curry(mul, 5)(6)');
console.log(curry(mul, 5)(6));
console.log('----------------------------------');
// 6
console.log('6)');
// 6.1
{
  function inc(a) {
    return ++a;
  }
  console.log('inc(5)');
  console.log(inc(5));
}

// 6.2
{
  function inc(a) {
    return add(1, a)
  }
  console.log('inc(10)');
  console.log(inc(10));
}
// 6.3
let incr = curry(add, 1);
console.log('inc(13)');
console.log(incr(13));
console.log('----------------------------------');
// 7
console.log('7)');
function twice(func) {
  return (a) => {
    return func(a, a);
  }
}
let double = twice(add);
console.log('double(11)');
console.log(double(11));
let square = twice(mul);
console.log('square(11)');
console.log(square(11));
console.log('----------------------------------');
// 8
console.log('8)');
function composeu(func1, func2) {
  return (a) => {
    return func2(func1(a));
  }
}
console.log('composeu (double, square)(3)');
console.log(composeu(double, square)(3));
console.log('----------------------------------');
// 9
console.log('9)');
function composeb(func1, func2) {
  return (a, b, c) => {
    return func2(func1(a, b), c);
  }
}
console.log('composeb (add, mul)(2, 3, 5)');
console.log(composeb(add, mul)(2, 3, 5));
console.log('----------------------------------');
// 10
console.log('10)');
function counterf(a) {
  return {
    inc: () => { return ++a },
    dec: () => { return --a }
  }
}
let counter = counterf(10);
console.log('counter.inc()');
console.log(counter.inc());
console.log('counter.dec()');
console.log(counter.dec());
console.log('----------------------------------');
// 11
console.log('11)');
function vector() {
  const vect = [];
  let size = 0;
  let app = this.append;
  return {
    append: (b) => { vect[size++] = b },
    store: (place, a) => {
      if (place > size || place < 0) {
        console.log('Index is invalid, element has been appended');
        vect[size++] = a;
      } else if (place === a) {
        vect[size++] = a;
      } else {
        vect[place] = a;
      }
    },
    get: (place) => { return vect[place] },
    getSize: () => { return size }
  }
}
let myVector = vector();
console.log('myVector.append(7)');
myVector.append(7);
console.log('myVector.store(3, 8)');
myVector.store(3, 8);
console.log('myVector.get(0) ');
console.log(myVector.get(0));
console.log('myVector.get(1)');
console.log(myVector.get(1));
console.log('Vector size:');
console.log(myVector.getSize());
console.log('----------------------------------');
// 12
console.log('12)');
function addg(a) {
  return (b) => {
    if (typeof b !== 'undefined') {
      a = a + b;
      return addg(a);
    } else {
      return a;
    }
  }
}
console.log('addg(3)(4)(5)()');
console.log(addg(3)(4)(5)());
console.log('addg(1)(2)(4)(8)()');
console.log(addg(1)(2)(4)(8)());
console.log('----------------------------------');
// 13
console.log('13)');
function applyg(func) {
  return (a) => {
    if (typeof a !== 'undefined') {
      return (b) => {
        if (typeof b !== 'undefined') {
          a = func(a, b)
          return applyg(func)(a);
        } else {
          return a;
        }
      }
    } else {
      return 0;
    }
  }
}
console.log('----Using binary function add-----');
console.log('applyg(add)()');
console.log(applyg(add)());
console.log('apply(add)(3)()');
console.log(applyg(add)(3)());
console.log('applyg(add)(3)(4)(5)()');
console.log(applyg(add)(3)(4)(5)());
console.log('applyg(add)(1)(2)(4)(8)()');
console.log(applyg(add)(1)(2)(4)(8)());
console.log('');
console.log('----Using binary function mul-----');
console.log('applyg(mul)()');
console.log(applyg(mul)());
console.log('apply(mul)(3)()');
console.log(applyg(mul)(3)());
console.log('applyg(mul)(3)(4)(5)()');
console.log(applyg(mul)(3)(4)(5)());
console.log('applyg(mul)(1)(2)(4)(8)()');
console.log(applyg(mul)(1)(2)(4)(8)());
console.log('----------------------------------');
// 14
console.log('14)');
function fibonaccif(a, b) {
  let first = a;
  let second = b;
  let temp;
  return () => {
    temp = first;
    first = second;
    second = temp + first;
    return temp;
  }
}
let fib = fibonaccif(0, 1);
console.log('fib()');
console.log(fib());
console.log('fib()');
console.log(fib());
console.log('fib()');
console.log(fib());
console.log('fib()');
console.log(fib());
console.log('fib()');
console.log(fib());
console.log('fib()');
console.log(fib());
console.log('----------------------------------');
// 15
console.log('15)');
console.log('Using given print function');
function print(element, index) {
  console.log("[" + index + "]=" + element);
  if (index === 2) {
    return false;
  }
}
function each(array, binarFunc) {
  let go = true;
  let temp;
  let i = 0;
  while (go === true && i < array.length) {
    temp = binarFunc(array[i], i++);
    (temp === false) ? go = false : go = true;
  }
}
let testArray = [0, 5, 2, 7, 12];
each(testArray, print);
console.log('----------------------------------');
// 16

console.log('16)');
function pubsub() {
  let subscribers = [];
  return {
    subscribe: (subFunc) => {
      subscribers.push(subFunc);
    },
    publish: (data) => {
      subscribers.forEach((subFunc) => {
        subFunc(data);
      })
    }
  }
}
let myPubsub = pubsub();
myPubsub.subscribe(function (data) {
  console.log('Subscriber one says: ' + data);
});
myPubsub.subscribe(function (message) {
  console.log('Subscriber two says: ' + message);
});
myPubsub.subscribe(function (message) {
  console.log('Subscriber three says: ' + message);
});

myPubsub.publish('hello!');

// 'Subscriber one says: hello!'
// 'Subscriber two says: hello!'
// 'Subscriber three says: hello!'

let eventManager = function (separator) {
  let events = [];
  this.on = (event, func) => {
    if (events.length !== 0) {
      thereWasSuchEvent = false;
      events.forEach((eventOb) => {
        if (eventOb.event === event) {
          eventOb.functions.subscribe(func.bind(separator));
          thereWasSuchEvent = true;
        }
      });
      if (!thereWasSuchEvent) {
        eventOb = {
          event,
          functions: pubsub()
        };
        eventOb.functions.subscribe(func.bind(separator));
        events.push(eventOb);
      }
    } else {
      eventOb = {
        event,
        functions: pubsub()
      };
      eventOb.functions.subscribe(func.bind(separator));
      events.push(eventOb);
    }
    return this;
  };
  this.fire = (event, data) => {
    eventExecuted = false;
    for (let eventOb of events) {
      if (eventOb.event === event) {
        eventOb.functions.publish(data);
        eventExecuted = true;
        return this;
      }
    }
    if (!eventExecuted) console.log('no handlers are executed');
    return this;
  };
  this.off = (event) => {
    for (i = 0; i < events.length; i++) {
      if (events[i].event === event) {
        events.splice(i, 1);
        return this;
      }
    }
    return this;
  }
};

let manager = new eventManager();

manager.on('event1', function (data) {
  console.log('event1_handler1 says: ' + data);
});
manager.on('event2', function (data) {
  console.log('event2_handler1 says: ' + data);
});
manager.on('event2', function (data) {
  console.log('event2_handler2 says: ' + data);
});
manager.on('event3', function (data) {
  console.log('event3_handler1 says: ' + data);
});
manager.on('event2', function (data) {
  console.log('event2_handler3 says: ' + data);
});

// execute all handlers only for event2
manager.fire('event2', 'hello!');

// 'event2_handler1 says: hello!'
// 'event2_handler2 says: hello!'
// 'event2_handler3 says: hello!'

// Make possible to remove an event handler by name.

manager.off('event2');
manager.fire('event2', 'hello!');
// no handlers are executed
// Make possible to call fluently.

let manager2 = new eventManager();


manager2.on('event1', function (data) { console.log('event1_handler1 says: ' + data); })
  .on('event2', function (data) { console.log('event2_handler1 says: ' + data); })
  .on('event2', function (data) { console.log('event2_handler2 says: ' + data); })
  .on('event3', function (data) { console.log('event3_handler1 says: ' + data); })
  .on('event2', function (data) { console.log('event2_handler3 says: ' + data); })
  .off('event1')
  .fire('event2', 'hello!');

// 'event2_handler1 says: hello!'
// 'event2_handler2 says: hello!'
// 'event2_handler3 says: hello!'

// Make it possible to provide context.

let obj = { separator: '*' };
let manager3 = new eventManager(obj);

manager3
  .on('event1', function (data) {
    let self = this;
    let message = ['event1_handler1', 'says', ':', data];

    console.log(message.join(self.separator));
    console.log(self === obj);
  })
  .fire('event1', 'hello!');

// 'event1_handler1*says*:*hello!'
// true

console.log('----------------------------------');

