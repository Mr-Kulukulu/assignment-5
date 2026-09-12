import { type Dispatch } from "react";
import type ITechnology from "../../types/type";
import SelectedTechnologyCard from "./SelectedTechnologyCard";
import { toast } from "react-toastify";

interface ISelectedTechnology {
    technologies: ITechnology[];
    selectedTechnologies: ITechnology[];
    setSelectedTechnologies: Dispatch<React.SetStateAction<ITechnology[]>>;
}
const SelectedTechnology = ({ selectedTechnologies, setSelectedTechnologies }: ISelectedTechnology) => {
    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
        toast.success("All technologies removed from stack")
    };
    return (

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 max-w-md">
            <div className="border-b border-gray-200 mb-4 pb-2">
                <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>

                <p className="text-xs text-gray-500 mt-1">
                    {selectedTechnologies.length === 0
                        ? "No technologies selected yet."
                        : `${selectedTechnologies.length} technologies selected`}
                </p>
            </div>

            {selectedTechnologies.length === 0 && (
                <div className="flex justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4 text-sm text-gray-500">
                    Your stack is empty.
                </div>
            )}


            {selectedTechnologies.map((selectedTechnology) => {
                return (
                    <SelectedTechnologyCard
                        key={selectedTechnology.id}
                        selectedTechnology={selectedTechnology}
                        setSelectedTechnologies={setSelectedTechnologies}

                    />
                );
            })}
            {selectedTechnologies.length > 0 && (
                <div className="flex justify-center mt-5">
                    <button
                        onClick={handleRemoveAll}
                        className="text-sm font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg transition-all duration-200"
                    >
                        Remove All
                    </button>
                </div>
            )}
        </div>
    );
}

export default SelectedTechnology;
