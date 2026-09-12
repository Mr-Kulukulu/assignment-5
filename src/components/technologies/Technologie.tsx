import type ITechnology from "../../types/type";
import TechnologieCard from "./TechnologieCard";




const Technologie = ({ technologies }: { technologies: ITechnology[] }) => {
    return (
        <div className="grid grid-cols-3  gap-4 mt-4">
            {
                technologies.map((tec) => (
                    <TechnologieCard key={tec.id} technology={tec} />
                ))
            }
        </div>
    );
}

export default Technologie;
