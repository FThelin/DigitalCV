const d = new Date();
const year = d.getYear();
let age = year - 82;

const texts = [
  {
    swedish: {
      aboutHeading: "OM MIG",
      aboutText: `Efter att ha jobbat 15 år med hamnverksamhet och många år som processägare och kravställare inom IT bestämde jag mig för att jag inte vill beställa funktionalitet, jag vill bygga den. Jag har hunnit bli ${age} år och studerar till Front-End Developer. Vill du veta mer? Navigera med pilarna till viktiga årtal i mitt liv.`,
      about1982: "1982"
    }
  },
  {
    english: {
      aboutHeading: "ABOUT ME",
      aboutText: `After 15 years in the shipping industry and many years as process owner and specifier within IT, I decided that I don´t want to order the functionality, I want to build it. I am now ${age} years old and currently studying to become a Front-End Developer. Do you want to know more? Navigate using the arrows to view important milestones in my life.`,
      about1982: "1982EN"
    }
  }
];

export default texts;
