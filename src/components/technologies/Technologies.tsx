import { use } from "react";
import type ITechnology from "../../types/type";
import TechnologieCard from "./TechnologieCard";


interface technologiesProps {
    technologiePromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiePromise }: technologiesProps) => {

    const technologies = use(technologiePromise);
    console.log(technologies);
    return (
        <div className="mt-12 container mx-auto">
            <h2 className="font-extrabold text-3xl">Explore the <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent ">Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>
            <div className="grid grid-cols-3  gap-4 mt-4">

            {
                technologies.map((technology) => (
                   <TechnologieCard key={technology.id} technology={technology} />
                ))
            }
            </div>
        </div>
    );
}

export default Technologies;
