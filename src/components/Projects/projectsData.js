import myportfolio from '../../assets/images/portfolio.png';
import javacalculator from '../../assets/images/JavaCalculator.png';
import readerworld from '../../assets/images/BookReader.png';

const projectsData = [
    {
        id: 1,
        title: "My Portfolio",
        description: "My Portfolio created using ReactJS, TailWindCSS and DaisyUI",
        image: "/src/assets/images/portfolio.png",
        githubUrl: myportfolio,
    },
    {
        id: 2,
        title: "Java Calculator",
        description: "Created a simple calculator using Java Swing and Java Awt",
        image: "/src/assets/images/JavaCalculator.png",
        githubUrl: javacalculator,
    },
    {
        id: 3,
        title: "ReaderWorld",
        description: "My first project, tutorial by Traversy Media",
        image: "/src/assets/images/BookReader.png",
        githubUrl: readerworld,
    },
];

export default projectsData