import React from 'react';

interface Speaker {
  name: string;
  title: string;
  company: string;
  image: string;
}

interface SpeakersSectionProps {
  speakers: Speaker[];
  title?: string;
}

const SpeakersSection: React.FC<SpeakersSectionProps> = ({ speakers, title }) => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {title}
          </h2>
        )}
        
        <div className="grid md:grid-cols-5 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="text-center">
              <img 
                src={speaker.image} 
                alt={speaker.name}
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg mb-1">{speaker.name}</h3>
              <p className="text-gray-600 text-sm mb-1">{speaker.title}</p>
              <p className="text-gray-500 text-xs">{speaker.company}</p>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default SpeakersSection;
