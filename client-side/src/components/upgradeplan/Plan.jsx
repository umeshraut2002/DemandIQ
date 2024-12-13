import React, { useState } from 'react';

const Plan = () => {
  // Plan details (mock data)
  const plans = [
    {
      id: 1,
      name: 'Free',
      price: '0',
      billingCycle: 'Monthly',
      features: ['Basic Support', '1GB Storage', 'Limited Features'],
    },
    {
      id: 2,
      name: 'Basic',
      price: '5.99',
      billingCycle: 'Monthly',
      features: ['Standard Support', '10GB Storage', 'More Features'],
    },
    {
      id: 3,
      name: 'Standard',
      price: '15.99',
      billingCycle: 'Monthly',
      features: ['Priority Support', '50GB Storage', 'Advanced Features'],
    },
    {
      id: 4,
      name: 'Premium',
      price: '29.99',
      billingCycle: 'Monthly',
      features: ['24/7 Support', '100GB Storage', 'Full Features'],
    },
    {
      id: 5,
      name: 'Pro',
      price: '49.99',
      billingCycle: 'Monthly',
      features: ['Dedicated Support', '500GB Storage', 'Premium Features'],
    },
  ];

  // State to track the selected plan
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  // Handle plan selection
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 cursor-pointer`}
              onClick={() => handlePlanSelect(plan)}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{plan.name}</h3>
              <p className="text-lg font-medium text-gray-700 mb-4">
                <span className="text-2xl font-bold">${plan.price}</span> / {plan.billingCycle}
              </p>
              <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-lg text-white ${
                  selectedPlan.id === plan.id ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                {selectedPlan.id === plan.id ? 'Selected' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plan;
