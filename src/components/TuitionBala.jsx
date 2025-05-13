import React from "react";
const TuitionBala = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Tuition Balance</h2>
                <p className="text-gray-700 mb-4">Your current tuition balance is:</p>
                <div className="text-3xl font-semibold text-green-600">$1,500.00</div>
            </div>
        </div>
    );
};

export default TuitionBala;