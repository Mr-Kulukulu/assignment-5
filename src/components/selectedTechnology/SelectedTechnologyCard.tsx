import { MdDelete } from "react-icons/md";
import type ITechnology from "../../types/type";
import { toast } from "react-toastify";

interface ISelectedTechnologyCard {
   
    selectedTechnology: ITechnology
    setSelectedTechnologies: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const SelectedTechnologyCard = ({  selectedTechnology, setSelectedTechnologies }: ISelectedTechnologyCard) => {
    const handleDltBtn = (selectedTechnology: ITechnology) => {
        setSelectedTechnologies(prev => prev.filter(t => t.id !== selectedTechnology.id));
        toast.success(`${selectedTechnology.name} removed from stack`)
    }    
    return (
        <div>
            <div className="flex items-center justify-between border border-gray-200 rounded-lg p-4 mb-2">
                <div className="flex items-center ">
                    <img className="h-[34px]" src={selectedTechnology.icon} alt="" />
                    <div>
                        <p>{selectedTechnology.category}</p>
                        <h2>{selectedTechnology.name}</h2>
                    </div>
                </div>
                <button onClick={() => handleDltBtn(selectedTechnology)} className="cursor-pointer"><MdDelete />
                
                </button>
            </div>
        </div>



    );
}

export default SelectedTechnologyCard;
