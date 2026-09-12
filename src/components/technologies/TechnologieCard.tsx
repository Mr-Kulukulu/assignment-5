
import type ITechnology from '../../types/type';


const TechnologieCard = ({ technology }: { technology: ITechnology }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100">
            <div>
                <div className="flex items-center justify-between gap-2">
                    <img
                        className="h-9 w-9 object-contain"
                        src={technology.icon}
                        alt={technology.name}
                    />

                    <p className="text-sm font-medium text-gray-600 rounded-2xl bg-gray-100 px-3 py-1">
                        {technology.badge}
                    </p>
                </div>

                <h3 className="font-bold text-lg mt-3 text-gray-900">
                    {technology.name}
                </h3>

                <p className="text-gray-600 mt-1 leading-6">
                    {technology.description}
                </p>
            </div>

            <div className="mt-4 flex justify-between items-center">
                <p className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
                    {technology.category}
                </p>

                <p className="text-sm text-gray-500">
                    {technology.difficulty}
                </p>

                <p className="font-semibold text-gray-800">
                    ⭐ {technology.rating}
                </p>
            </div>

            <div className="flex justify-center">
                <button className="mt-4 w-full bg-black hover:bg-gray-800 hover:scale-[1.02] text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                    Add to Stack
                </button>
            </div>
            
        </div>
    );
}

export default TechnologieCard;
