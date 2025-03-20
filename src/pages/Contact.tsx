
import React from 'react';
import { toast } from 'sonner';
import { MapPin, Phone, Mail } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your message has been sent! We will get back to you shortly.');
    // In a real implementation, you would send the form data to your backend
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container-wide">
        <SectionHeading
          subtitle="Contact Us"
          title="Get in Touch"
          description="Have questions or want to discuss how we can help with your fortification needs? Reach out to our team."
        />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="bg-white p-8 rounded-xl shadow-subtle border border-neutral-100">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-vitanium-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-vitanium-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-vitanium-500 focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-vitanium-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-neutral-50 p-8 rounded-xl h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Factory Address</h4>
                    <p className="text-neutral-600">
                      F-80, Ramghat Rd, Sector 1, Talanagri, Talashpur, Aligarh, Uttar Pradesh 202001, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Marketing Office</h4>
                    <p className="text-neutral-600">
                      Innov8 Coworking Space, 3rd Floor, Orchid Centre, Rapid Metro Station, next to Sector 54, Sector 53, Gurugram, Haryana 122022, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <p className="text-neutral-600">
                      <a href="tel:+919429694121" className="hover:text-vitanium-600 transition-colors">
                        +91 94296 94121
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-vitanium-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-neutral-600">
                      <a href="mailto:hello@vitaniumx.com" className="hover:text-vitanium-600 transition-colors">
                        hello@vitaniumx.com
                      </a>
                    </p>
                    <p className="text-neutral-600 mt-2">For sales inquiries:</p>
                    <p className="text-neutral-600">
                      <a href="mailto:farhan.anis@vitaniumx.com" className="hover:text-vitanium-600 transition-colors">
                        farhan.anis@vitaniumx.com
                      </a>
                    </p>
                    <p className="text-neutral-600">
                      <a href="mailto:vageesh.shukla@vitaniumx.com" className="hover:text-vitanium-600 transition-colors">
                        vageesh.shukla@vitaniumx.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-neutral-200">
                <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Saturday:</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
