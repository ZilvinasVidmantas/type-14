function kaVeikt({ nelyja, yraPinigu, yraDraugu } = {}) {
  console.log({ nelyja, yraPinigu, yraDraugu });

  if (nelyja && yraPinigu) {
    console.log('varom į festą kabint panų, bet realiai privemt į palapinę');
    return;
  }

  if (nelyja) {
    console.log('Žaisim chaly-chalo\n');
    return;
  }

  if (yraDraugu) {
    console.log('Manorom susipykt, gavau dovanų monopolį\n');
    return;
  }

  if (yraPinigu) {
    console.log('Varom i Akra kabint mergų, bet realiai sedėt ant suoliuko, ir tiesiog apkalbinėt\n');
    return;
  }

  console.log('Nieks taip nešildo, kaip kompiuterio ekranas\n');
}

kaVeikt();
kaVeikt({ nelyja: true });
kaVeikt({ yraPinigu: true });
kaVeikt({ yraDraugu: true });
kaVeikt({ nelyja: true, yraPinigu: true });