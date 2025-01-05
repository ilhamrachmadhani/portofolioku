import image from './assets/pemrograman kotlin.png';
import image1 from './assets/aplikasi pemula android.png';
import image2 from './assets/fundamental android.png';
import image3 from './assets/dasar ai.png';
import image4 from './assets/machine learning android.png';
import image5 from './assets/intermediate android.png';
import image6 from './assets/pengembang software.png';
const SertificateFull = () => {

    const SertificateFull = [
        {
          title: "Pemrograman dengan Kotlin",
          image: image,
          github: "https://github.com",
          live: "https://example.com"
        },
        {
          title: "Aplikasi Android untuk Pemula",
          image: image1,
          github: "https://github.com",
          live: "https://example.com"
        },
        {
          title: "Fundamental Aplikas Android",
          image: image2,
          github: "https://github.com",
          live: "https://example.com"
        },
        {
            title: "Dasar Dasar AI",
            image: image3,
            github: "https://github.com",
            live: "https://example.com"
        },
        {
            title: "Penerapan Machine Learning untuk Android",
            image: image4,
            github: "https://github.com",
            live: "https://example.com"
        },
        {
            title: "Aplikasi Android Intermediate",
            image: image5,
            github: "https://github.com",
            live: "https://example.com"
        },
        {
            title: "Pengembang Software",
            image: image6,
            github: "https://github.com",
            live: "https://example.com"
        },
      ];

      const customColor = {
        backgroundColor: '#021526'
      };

      
    return (
        <section id="sertificateFull" className="py-20" style={customColor}>
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">Sertificate</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                  {SertificateFull.map((sertificate, index) => (
                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img 
                        src={sertificate.image} 
                        alt={sertificate.title}
                        className="w-full h-30 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-1">{sertificate.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

        );
}
export default SertificateFull;