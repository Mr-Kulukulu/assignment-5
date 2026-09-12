import { use, useState } from "react";
import type ITechnology from "../../types/type";

import Technologie from "./Technologie";
import SelectedTechnology from "../selectedTechnology/SelectedTechnology";

interface TechnologiesProps {
    technologiePromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiePromise }: TechnologiesProps) => {
    const technologies = use(technologiePromise);

    const [selectedTechnologies, setSelectedTechnologies] = useState<
        ITechnology[]
    >([]);

    return (
        <div className="mt-12 container mx-auto">
            {/* Heading */}
            <h2 className="font-extrabold text-3xl">
                Explore the{" "}
                <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                    Technologies
                </span>
            </h2>

            <p className="text-gray-600">
                Pick one technology per category to build your ideal stack.
            </p>

            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">


                <div className="lg:col-span-3 ">
                    <Technologie
                        technologies={technologies}
                        selectedTechnologies={selectedTechnologies}
                        setSelectedTechnologies={setSelectedTechnologies}
                    />
                </div>

                {/* Right Side */}
                <div className="lg:col-span-1 mt-3.5">
                    <SelectedTechnology
                        technologies={technologies}
                        selectedTechnologies={selectedTechnologies}
                        setSelectedTechnologies={setSelectedTechnologies}
                    />
                </div>

            </div>
        </div>
    );
};

export default Technologies;