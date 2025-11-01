'use client'
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

interface CardType {
  url: string;
  title: string;
  id: number;
}

const Example = () => {
  return (
    <div className="bg-neutral-900">
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Facility
        </span>
      </div> */}
      <div className="flex justify-between px-5 max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:pt-10">
        <h1 className="text-5xl tracking-widest text-white flex items-center px-5 max-sm:text-3xl max-sm:px-0 z-1">
          Facility
        </h1>
        <p className="text-xl text-white w-125 max-sm:w-[90%] max-sm:text-sm max-sm:mt-4 my-10 z-1">
         MODERN FACILITIES DESIGNED FOR QUALITY, SPEED, AND SUSTAINABLE PRODUCTION.OUR STATE-OF-THE-ART FACILITY DELIVERS RELIABLE AND ECO-FRIENDLY SOLUTIONS.
        </p>
      </div>
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900  -my-20 max-sm:my-10">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-linear-to-br from-white/20 to-white/0 p-8 text-xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/images/f1.jpg",
    title: "Heat Treatment Plant",
    id: 1,
  },
  {
    url: "/images/f2.jpg",
    title: "CNC Machining Center",
    id: 2,
  },
  {
    url: "/images/f3.png",
    title: "Annealing Furnace",
    id: 3,
  },
  {
    url: "/images/f4.avif",
    title: "Non-Destructive Testing Area",
    id: 4,
  },
  {
    url: "/images/f5.jpg",
    title: "Finished Goods Warehouse",
    id: 5,
  },
  {
    url: "/images/f6.jpg",
    title: "RFID Tracking System",
    id: 6,
  },
  {
    url: "/images/f7.png",
    title: "Green Manufacturing Zone",
    id: 7,
  },
];