import React from 'react';

const clients = [
  { name: 'YWBN Mutual Bank', logo: 'https://www.ownthebank.co.za/themes/pkurg-spacebootstrap5/assets/img/logo/small_logo.png' },
  { name: 'TEEC College', logo: 'https://teec.co.za/wp-content/uploads/2023/05/TEEC-Web-logo-1-White.png' },
  { name: 'Risk Solutions International', logo: 'https://risksolutions.co.za/wp-content/uploads/2019/06/RSI_Web-Logo_545x110.jpg' },
  { name: 'Astute Solutions', logo: 'http://astutesolutions.co.za/gallery_gen/16f6110c64f6b418d61c5041d3ee9257_322x185.85234899329_-0x-0_324.1610738255x194.4966442953.jpg' },
  { name: 'Anglican Diocese of Johannesburg', logo: '' },
  { name: 'AEP Energy Africa Limited', logo: 'https://aep.co.za/wp-content/uploads/sites/32/2017/06/aep_logo.png' },
];

const ClientLogos = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              {client.logo ? (
                <img src={client.logo} alt={client.name} className="max-h-16 max-w-full" />
              ) : (
                <span className="text-lg font-semibold text-white">{client.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
