const d = new Date();
const year = d.getYear();
let age = year - 82;

const texts = [
  {
    swedish: {
      aboutHeading: "OM MIG",
      aboutText: `Efter att ha jobbat 15 år med hamnverksamhet och många år som processägare och kravställare inom IT bestämde jag mig för att jag inte vill beställa funktionalitet, jag vill bygga den. Jag har hunnit bli ${age} år och studerar till Front-End Developer. Vill du veta mer? Navigera med pilarna till viktiga årtal i mitt liv.`,
      about1982:
        'Jag föddes i Juni 1982 och är uppvuxen i Vadstena, Östergötland. Mitt intresse att skapa saker började tidigt och har följt mig hela livet. I början visade jag det mest inom musiken. Jag kommer fortfarande ihåg mitt första musikprogram "FastTracker" till min Amiga 500 där jag skrev många låtar. Musiken är än idag ett stort intresse.',
      about2001:
        "2001 tog jag studenten från Platenskolan i Motala. Jag läste samhällsvetenskap med inrikting ekonomi. Det passade inte mig, jag hade hellre velat läsa något mer kreativt. På den tiden hade nog det estetiska programmet lockat mest om inte mina föräldrar blandat sig i.",
      about2005:
        "2005 började jag jobba i Göteborgs Hamn, och där tillbringade jag ca 15 år åt att jobba på Customer Service. De senare åren var jag dock utlånad till IT för det mesta och ansvarade för att byta och förvalta vissa delar i det stora terminalsystemet. Jag var även med och införde automatiska portar för lastbilar.",
      about2007:
        'Jag tog tjänsteledigt 1 år för att studera på folkhögskola i Motala. Jag kände att jag inte gett musiken en chans och planen var att bli musikpedagog. Jag upptäckte dock att musiken inte var något jag ville jobba med, utan istället ha som en hobby. Så efter ett år flyttade jag tillbaka till Göteborg och började spela i hårdrocksbandet "Minora".',
      about2019:
        "Någon gång under mina senare år i hamnen började jag intressera mig för programmering. Jag fastnade direkt för problemlösningen, det kreativa i kod och att skapa applikationer. Jag drivs av att skapa något som någon skall använda. Jag gillar kontakten med en kund. Jag bestämde mig för att sluta i hamnen och börja studera till webbutvecklare.",
    },
  },
  {
    english: {
      aboutHeading: "ABOUT ME",
      aboutText: `After 15 years in the shipping industry and many years as process owner and specifier within IT, I decided that I don´t want to order the functionality, I want to build it. I am now ${age} years old and currently studying to become a Front-End Developer. Do you want to know more? Navigate using the arrows to view important milestones in my life.`,
      about1982:
        'I was born in 1982 and raised in Vadstena, Östergötland (Sweden). Mitt intresse att skapa saker började tidigt och har följt mig hela livet. I början visade jag det mest inom musiken. Jag kommer fortfarande ihåg mitt första musikprogram "FastTracker" till min Amiga 500 där jag skrev många låtar. Musiken är än idag ett stort intresse.',
      about2001:
        "2001 tog jag studenten från Platenskolan i Motala. Jag läste samhällsvetenskap med inrikting ekonomi. Det passade inte mig, jag hade hellre velat läsa något mer kreativt. På den tiden hade nog det estetiska programmet lockat mest om inte mina föräldrar blandat sig i.",
      about2005:
        "2005 började jag jobba i Göteborgs Hamn, och där tillbringade jag ca 15 år åt att jobba på Customer Service. De senare åren var jag dock utlånad till IT för det mesta och ansvarade för att byta och förvalta vissa delar i det stora terminalsystemet. Jag var även med och införde automatiska portar för lastbilar.",
      about2007:
        'Jag tog tjänsteledigt 1 år för att studera på folkhögskola i Motala. Jag kände att jag inte gett musiken en chans och planen var att bli musikpedagog. Jag upptäckte dock att musiken inte var något jag ville jobba med, utan istället ha som en hobby. Så efter ett år flyttade jag tillbaka till Göteborg och började spela i hårdrocksbandet "Minora".',
      about2019:
        "Någon gång under mina senare år i hamnen började jag intressera mig för programmering. Jag fastnade direkt för problemlösningen, det kreativa i kod och att skapa applikationer. Jag drivs av att skapa något som någon skall använda. Jag gillar kontakten med en kund. Jag bestämde mig för att sluta i hamnen och börja studera till webbutvecklare.",
    },
  },
];

export default texts;
