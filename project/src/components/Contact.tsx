import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {

  const customColor = {
    backgroundColor: '#021526'
  };

  return (
    <section id="contact" className="py-20" style={customColor}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Contact Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Get in Touch</h3>
              <div className="flex items-center space-x-3">
                <Mail className="text-white" />
                <span className='text-white'>ilhamrachmadhani00@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-white" />
                <span className='text-white'>087708332683</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-white" />
                <span className='text-white' >Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;