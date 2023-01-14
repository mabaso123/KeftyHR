import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
  StarIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import strategy from "@/assets/strategy.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <StarIcon className="h-6 w-6" />,
    title: "100% Focus On Quality",
    description:
      "We provide you with 5 star-rated employees that will over deliver and will integrate effectively with your current staff.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Tailor-Made For You",
    description:
      "We recognize that every client and candidate is unique. Therefore, we build systems specific to your needs.",
  },
  {
    icon: <PaperAirplaneIcon className="h-6 w-6" />,
    title: "Quick & Responsive",
    description:
      "The service is designed to be streamlined meaning whatever you need you will receive with no long wait times.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>You focus on the business. <br/>We'll handle the recruitment and hiring.</HText>
          <p className="my-5 text-lg">
            Successful companies are only as successful as their talent. We make recruitment seamless, faster and easier to ensure you save both 
            your time and money as well as getting the best candidates on the market.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={strategy}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    FIND YOUR DREAM{" "}
                    <span className="text-primary-500">JOB</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Finding your dream job has never been easier, get a pool of companies 
                ready to hire you. Get the support you need from help with your CV to getting an interview 
                then getting that offer.
              </p>
              <p className="mb-5">
               
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Get Started
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;