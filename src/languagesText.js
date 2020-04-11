const d = new Date();
const year = d.getYear();
let age = year - 82;

const texts = [
  {
    swedish: {
      aboutHeading: "OM MIG",
      aboutText: `Efter att ha jobbat 15 år med hamnverksamhet och många år som processägare och kravställare inom IT bestämde jag mig för att jag inte vill beställa funktionalitet, jag vill bygga den. Jag har hunnit bli ${age} år och studerar till Front-End Developer. Vill du veta mer? Tryck på knappen nedan för att läsa om viktiga milstolpar i mitt liv.`,
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
      aboutText: `After 15 years in the shipping industry and many years as process owner and specifier within IT, I decided that I don´t want to order the functionality, I want to build it. I am now ${age} years old and currently studying to become a Front-End Developer. Do you want to know more? Click the history button below to read about important milestones in my life.`,
      about1982:
        'I was born in 1982 and raised in Vadstena, Östergötland (Sweden). My passion to create started early and has followed me since. In the beginning i found my creative outlet in music. I still remember my first music software "FastTracker" where I wrote alot of tunes. Today, music is still one of my biggest passions.',
      about2001:
        "I graduated from High School in 2001. I went to the economy program. It was not my thing, I´d rather study something more creative. At that time, the music program probaly suited me best. And if my parents had not meddled, that would probably be the case.",
      about2005:
        "2005 I started to work in the Port of Gothenburg, I spent around 15 years there working at the Customer Service department. The later half of my time there though, I was loaned to the IT department. There I was a process owner and responsible for changing and manage some parts of the big terminal operating system. I was also a part of implementing automated gates for trucks.",
      about2007:
        '2007 I took 1 year off work to study music in Motala, Sweden. I felt i didn´t give music a chance and the goal was to become a music educator. I discovered, however, that I did not want to work with music, but instead keep it as a hobby. So I moved back to Göteborg and started to play in the rock band "Minora".',
      about2019:
        "During my last years in the port of Gothenburg I started to gain an interest for programming. I loved the problem shooting, the creative part in code and to create applications. I love creating things another person then will use. I´m used to, and like to grow a relationship with a customer. I decided to quit my job and begin to study to become a web developer.",
    },
  },
];

export default texts;
