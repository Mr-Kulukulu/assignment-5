import { use, useState,} from "react";
import type ITechnology from "../../types/type";


import Technologie from "./Technologie";
import SelectedTechnology from "../selectedTechnology/SelectedTechnology";


interface technologiesProps {
    technologiePromise: Promise<ITechnology[]>;

}

const Technologies = ({ technologiePromise }: technologiesProps) => {

    const technologies = use(technologiePromise);
    const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([]);

    return (
        <div className="mt-12 container mx-auto">
            <h2 className="font-extrabold text-3xl">Explore the <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent ">Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>
            <div>

                <Technologie technologies={technologies} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />
               <SelectedTechnology selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} ></SelectedTechnology>
            </div>
        </div>
    );
}

export default Technologies;
