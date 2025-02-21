import { Check } from "lucide-react"
import { Button } from "../components/ui/button"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out our services",
    features: ["5 images per month", "Basic quality", "Standard support", "Web access only"],
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "month",
    description: "Best for professionals and small teams",
    features: [
      "Unlimited images",
      "HD quality",
      "Priority support",
      "API access",
      "Batch processing",
      "Custom backgrounds",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Pro",
      "4K quality",
      "24/7 support",
      "Custom integration",
      "Dedicated account manager",
      "Custom API limits",
    ],
  },
]

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose the plan that's right for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-sm p-8 ${plan.highlighted ? "ring-2 ring-purple-600" : ""}`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-600">/{plan.period}</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <Button
                className={`w-full mb-6 ${
                  plan.highlighted ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-900 hover:bg-gray-800"
                }`}
              >
                Get Started
              </Button>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

