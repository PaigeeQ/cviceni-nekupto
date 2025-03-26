const product1 = {
  image: 'images/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'images/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'images/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

const product1Element = document.querySelector("#product1"); 
product1Element.classList.add("border-primary");

const product2ButtonElement = document.querySelector("#product2 button"); 
product2ButtonElement.classList.remove("btn-primary");

const product3TitleElement = document.querySelector("#product3 .card-title");
product3TitleElement.classList.toggle("text-center");

/*Vytvořte si repozitář ze šablony cviceni-nekupto. Repozitář obsahuje stránku, která 
nabízí několik neotřelých produktů.

Otevřete si naklonovanou složku ve VS Code a prohlédněte si zdrojové HTML. Stránka 
je nastylována pomocí CSS knihovny Bootstrapu. Co přesně dělají použité CSS třídy 
není pro toto cvičení podstatné, nemusíte jim věnovat velkou pozornost.
V souboru index.js si na posledním řádku do proměnné uložte kartu s prvním produktem. 
Pomocí metody classList.add přidejte na tento element třídu border-primary, abychom 
první produkt na stránce zvýraznili.
Do jiné proměnné si uložte tlačítko na druhé kartě. Pomocí metody classList.remove 
odeberte třídu btn-primary a podívejte se, jak se tlačítko vizuálně změnilo.
Do další proměnné si uložte element s třídou card-title posledního produktu. Pomocí 
voláni metody classList.toggle přidejte na tento element třídu text-center. Text by se 
měl tímto zarovnat na střed. Vyzkoušejte si, že když tuto metodu zavoláte znova, třída 
se z prvku odstraní. Takto můžete přepínat mezi přidáním a odebráním třídy pomocí opakovaného 
volání této metody.
*/