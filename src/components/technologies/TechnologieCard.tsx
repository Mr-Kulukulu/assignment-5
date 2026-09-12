import React from 'react';
import type ITechnology from '../../types/type';

const TechnologieCard = ({ technology }: { technology: ITechnology }) => {
    return (
        <div className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            {/* Top section */}
            <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-orange-50 transition">
                    <img
                        className="h-9 w-9 object-contain"
                        src={technology.icon}
                        alt={technology.name}
                    />
                </div>

                <span className="text-xs font-semibold text-purple-600 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                    {technology.badge}
                </span>
            </div>

            {/* Content */}
            <div className="mt-5">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition">
                    {technology.name}
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-6 line-clamp-2">
                    {technology.description}
                </p>
            </div>

            {/* Info */}
            <div className="mt-5 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">
                        {technology.category}
                    </span>

                    <span className="text-gray-500">
                        {technology.difficulty}
                    </span>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-500">Rating</span>

                    <span className="font-semibold text-gray-800">
                        ⭐ {technology.rating}
                    </span>
                </div>
            </div>

            {/* Button */}
            <button
                className="w-full mt-5 bg-gray-900 hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-600 text-white font-semibold py-2.5 rounded-xl transition-all duration-300"
            >
                Add to Stack
            </button>
        </div>
    );
}

export default TechnologieCard;
