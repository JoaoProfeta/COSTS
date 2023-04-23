import { HomePage } from "./styles";
import saving from "../../assets/savings.svg";
import { LinkButton } from "../../Components/linkButtom";
import headerlogo from "../../assets/headerlogo.svg"
import { Section, SectionTypeTwo } from "../../Components/section";
import magnament from "../../assets/magnamentproject.svg"
import company from "../../assets/company.svg"
import analytic from "../../assets/analytcproject.svg"
export const Home = () => {
  return (
    <HomePage>
      <div>
        <h1>
          Welcome to your <span>Manager projects</span>
        </h1>

      </div>
      <Section
        textPromotional="Our project management website is the complete solution for your team to manage projects effectively, collaboratively and with real-time visibility. Maximize your productivity and achieve your goals with our platform. Try it now!"
        imgProtional={headerlogo}
        alt="Project Management Header"
        buttonExists
      />
        


      <SectionTypeTwo 
        imgProtional={magnament}  
        textPromotional="Add your projects to the system, enter the services and costs related to them, and easily compare them. Keep track of your projects and make informed decisions with our project management platform. Try it now!"
        alt="image about site information"
      />
        
 
      <Section   
        textPromotional="Managing projects efficiently can be challenging for companies of all sizes, especially when costs need to be controlled and deadlines need to be met. That's why we're offering an online platform for companies to add and manage their projects easily and efficiently."
        imgProtional={company}
        alt="image promotional"
      />
           
      <SectionTypeTwo 
        textPromotional="Our project management website allows companies to add their projects and monitor their total cost. In addition, companies can add individual services and costs as each phase of the project is completed, ensuring precise control of spending in real time.This means that the project management team can make more informed decisions and implement changes when necessary, to ensure that the project is completed on budget and on time."
        imgProtional={analytic}
        alt="image promotional"
      />

    </HomePage>
  );
};
