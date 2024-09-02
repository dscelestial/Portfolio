import myportfolio from '../../assets/images/portfolio.png';
import javacalculator from '../../assets/images/JavaCalculator.png';
import readerworld from '../../assets/images/BookReader.png';

const projectsData = [
    {
        id: 1,
        title: "My Portfolio",
        description: "My Portfolio created using ReactJS, TailWindCSS and DaisyUI",
        image: myportfolio,
        githubUrl: "https://github.com/dscelestial/Portfolio",
    },
    {
        id: 2,
        title: "Java Calculator",
        description: "Created a simple calculator using Java Swing and Java Awt",
        image: javacalculator,
        githubUrl: "https://github.com/dscelestial/JavaCalculator",
    },
    {
        id: 3,
        title: "ReaderWorld",
        description: "My first project, tutorial by Traversy Media",
        image: readerworld,
        githubUrl: "https://github.com/dscelestial/laragigs",
    },
];

export default projectsData