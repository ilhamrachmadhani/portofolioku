import image from './assets/pemrograman kotlin.png';
import image1 from './assets/aplikasi pemula android.png';
import image2 from './assets/fundamental android.png';
import { Link } from "react-router-dom";

//import { useNavigate } from "react-router-dom";


const Sertificate = () => {

    const Sertificate = [
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
        }
      ];

      const customColor = {
        backgroundColor: '#021526'
      };

      
    return (
        <section id="sertificate" className="py-20" style={customColor}>
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">Sertificate</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Sertificate.map((sertificate, index) => (
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
              <div className="py-10 flex justify-center">
        <Link 
          to="/sertificate-full" className="text-white hover:underline">Selengkapnya {'>>'}
        </Link>
      </div>
            </section>
        );
}
export default Sertificate;