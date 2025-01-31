import { Button } from "@/components/ui/button";

export const Hero = () => {
  const handleDownload = () => {
    window.location.href = "https://kk6.online/cl/i/po7pl5";
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-accent bg-opacity-95 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589241062272-c0a000072dfa')] bg-cover bg-center opacity-20" />
      <div className="container mx-auto px-4 relative z-10 animate-fade-up">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Download Fortnite Now & Join the Battle!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Experience the ultimate battle royale adventure – free to play!
          </p>
          <Button
            onClick={handleDownload}
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-12 py-8 text-xl rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Download Now
          </Button>
        </div>
      </div>
    </div>
  );
};