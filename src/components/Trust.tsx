import { CheckCircle, Award, Shield } from "lucide-react";

const trustBadges = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Safe & Secure",
    description: "Verified and trusted by millions",
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Massive Community",
    description: "Join millions of players worldwide",
  },
  {
    icon: <Award className="w-12 h-12" />,
    title: "100% Free",
    description: "No hidden costs or fees",
  },
];

export const Trust = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Millions</h2>
          <p className="text-gray-600">Join the world's biggest battle royale game</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="text-center p-6 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary mb-4 flex justify-center">{badge.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{badge.title}</h3>
              <p className="text-gray-600">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};