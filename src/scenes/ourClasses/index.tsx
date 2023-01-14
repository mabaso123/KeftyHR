import { SelectedPage, ClassType } from "@/shared/types";
import step1 from "@/assets/step1.png"; 
import step2 from "@/assets/step2.png";
import step3 from "@/assets/step3.png";
import step4 from "@/assets/step4.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
import ActionButton from "@/shared/ActionButton";


const classes: Array<ClassType> = [
  {
    name: "Upload Resume/CV",
    description:
      "",
    image: step1,
  },
  {
    name: "Almost ready for interviews",
    image: step2,
  },
  {
    name: "It's starting to get real",
    description:
      "You will receive a list of companies that match your CV and you pick which ones to interview for.",
    image: step3,
  },
  {
    name: "Congrats you have a job offer",
    description:
      "Now it is time to negotiate your salary and start working for your dream company",
    image: step4,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Candidates)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>How It Works</HText>
            <p className="py-5">
            You are a few steps away from getting hired.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
            
          </ul>
          
        </div>
        <br/><br/>
        <ActionButton setSelectedPage={setSelectedPage}>
              Get Started
            </ActionButton>
      </motion.div>
    </section>
  );
};

export default OurClasses;