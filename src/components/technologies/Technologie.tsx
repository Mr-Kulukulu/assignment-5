import type ITechnology from "../../types/type";
import TechnologieCard from "./TechnologieCard";


interface TechnologyProps {
    technologies: ITechnology[];
    selectedTechnologies: ITechnology[];
    setSelectedTechnologies: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const Technologie = ({ technologies, selectedTechnologies, setSelectedTechnologies }: TechnologyProps) => {
    return (
        <div className="grid grid-cols-3  gap-4 mt-4">
            {
                technologies.map((technology) => (
                    <TechnologieCard key={technology.id} technology={technology} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies} />
                    
                ))
            }
        </div>
    );
}

export default Technologie;
