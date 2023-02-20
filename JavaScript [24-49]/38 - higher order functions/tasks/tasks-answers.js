console.group('1. Sukurkite funkciją, kuri priima spalvą ir grąžina funkciją, kuri spausdins tekstą išorinei funkcijai perduota spalva');
{
  const createColorfulPrintingFunction = (color) => {
    return (text) => {
      console.log(`%c${text}`, `color: ${color}`);
    };
  }

  const printRed = createColorfulPrintingFunction('red');
  const printBlue = createColorfulPrintingFunction('blue');

  printRed('tekstas');
  printBlue('tekstas');
}
console.groupEnd();

console.group('2. Sukurkite funkciją, kuri priima simbolių masyvą ir grąžina funkciją, kuri tikrins ar tekste yra išorinės funkcijos kvietimo metu perduotų simbolių');
{
  const createSymbolChecked = (symbols) => {
    return (text) => {
      return symbols.some((symbol) => text.includes(symbol));
    }
  }

  const containsSentenceEnders = createSymbolChecked(['.', '!', '?']);
  //                                       ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']  
  const containsNumbers = createSymbolChecked([...new Array(10)].map((_, i) => String(i)));

  console.table({
    "containsSentenceEnders('Vienas sakinys.')": containsSentenceEnders('Vienas sakinys.'),
    "containsSentenceEnders('Vienas sakinys. Antras sakinys?')": containsSentenceEnders('Vienas sakinys. Antras sakinys?'),
    "containsSentenceEnders('Žodis')": containsSentenceEnders('Žodis'),
    "containsNumbers('Vilnius123')": containsNumbers('Vilnius123'),
    "containsNumbers('Kaunas1')": containsNumbers('Kaunas1'),
    "containsNumbers('Jomantas')": containsNumbers('Jomantas'),
  })
}
console.groupEnd();

console.group('3. Sukurkite funkciją kuri grąžina funkciją atspausdinančią tekstą apgaubus šauktukais');

{
  const createPrintWithBangs = () => {
    return (value) => {
      console.log(`!${value}!`);
    }
  }

  const printWithBangs = createPrintWithBangs();
  printWithBangs('tekstas');
  printWithBangs('labas');
}
console.groupEnd();

console.group('4. Sukurkite funkciją kuri grąžina funkciją atspausdinančią tekstą apgaubus išorinės funkcijos parametru');
{
  const createPrintBetween = (decoration) => {
    return (value) => {
      console.log(`${decoration}${value}${decoration}`);
    }
  }

  const printWithBangs = createPrintBetween('!');
  const printWithDashes = createPrintBetween('---');
  printWithBangs('tekstas');
  printWithDashes('tekstas');
}
console.groupEnd();

console.group('5. Sukurkite funkciją, kuri priima funkciją priimančią 2 parametrus ir grąžiną perduotą funkciją iškviečiamą su dviem invokacijom');
{
  const add = (a, b) => a + b;
  const multiply = (a, b) => a * b;

  const convertBinaryFunctionToUnaryInvocationQueue = (binaryFunction) => {
    return (a) => {
      return (b) => {
        return binaryFunction(a, b);
      }
    }
  }

  const addUnaryQueue = convertBinaryFunctionToUnaryInvocationQueue(add);
  const multiplyUnaryQueue = convertBinaryFunctionToUnaryInvocationQueue(multiply);
  console.table({
    "addUnaryQueue(7)(6)": addUnaryQueue(7)(6),
    "multiplyUnaryQueue(7)(6)": multiplyUnaryQueue(7)(6),
  });
}
console.groupEnd();

console.group('6. Sukurkite funkciją<A> kuri priima funkciją<B> ir parametrą<D>, ir grąžina funkciją<C>. \nFunkcija<B> tai vieną parametrą priimanti funkciją, kuri grąžina parametro transformaciją. \n Funkcija<C> turi grąžinti Funkcijos<B> rezultatą apgaubiant jį parametru<D>');
{
  const createFunctionProductDecorator = (cb, decoration) => {
    return (val) => {
      return `${decoration}${cb(val)}${decoration}`;
    }
  }

  const double = (a) => typeof a === 'number' ? a * 2 : a + a;

  const doubleWithBangs = createFunctionProductDecorator(double, '!');
  const doubleWithTripleStars = createFunctionProductDecorator(double, '***');
  console.table({
    "doubleWithBangs('text')": doubleWithBangs('text'),
    "doubleWithTripleStars('text')": doubleWithTripleStars('text'),
  })
}
console.groupEnd();
