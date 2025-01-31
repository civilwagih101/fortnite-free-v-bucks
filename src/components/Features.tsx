import { Shield, Users, Zap, Building } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fast-Paced Action",
    description: "Jump into intense battles with players worldwide",
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Build & Fight",
    description: "Master the unique building mechanics to gain the upper hand",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Play with Friends",
    description: "Team up in squads or compete solo - the choice is yours",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Regular Updates",
    description: "New content and events added regularly",
  },
];

export const Features = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Play Fortnite?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};