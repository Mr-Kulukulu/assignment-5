import { use } from "react";
import type ITechnology from "../../types/type";
import TechnologyCard from "./TechnologyCard";

interface technologiesProps {
    technologiePromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiePromise }: technologiesProps) => {

    const technologies = use(technologiePromise);
    console.log(technologies);
    return (
        <div>
            <h2>Explore the Technologies</h2>
            <p>Pick one technology per category to build your ideal stack.</p>

        </div>
    );
}

export default Technologies;
