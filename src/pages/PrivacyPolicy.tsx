import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#38071e] text-white">
      {/* Header Section */}
      <div className="bg-[#2a0517] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-float relative">
            <div className="absolute inset-0 bg-glow rounded-3xl -z-10 opacity-30"></div>
            <div className="relative z-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-4">
                <span className="bg-gradient-to-r from-[#ec9611] via-[#FFA500] to-[#ec9611] bg-clip-text text-transparent">Privacy Policy</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                Learn how we protect and manage your data at ConstructClients
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-[#2a0517]/80 backdrop-blur-sm rounded-xl shadow-2xl border border-[#ec9611]/20 p-8 md:p-12">
          <p className="text-gray-300 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#ec9611]">1. Introduction</h2>
            <p className="text-gray-200 leading-relaxed">
              Welcome to ConstructClients! This Privacy Policy outlines our practices regarding the collection, use, and protection 
              of your information when you visit our website or engage with our social media marketing services. Please read this 
              policy carefully to understand how we handle your data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#ec9611]">2. Information We Collect</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              We collect and process personal information to provide our services effectively. The types of information we may collect include:
            </p>
            <ul className="list-disc ml-6 text-gray-200 space-y-2">
              <li><strong className="text-[#ec9611]">Client Information:</strong> To facilitate our services, we may collect names, contact details, business information, and payment details.</li>
              <li><strong className="text-[#ec9611]">Employee Information:</strong> For our team members, we collect necessary employment-related information for administrative purposes.</li>
              <li><strong className="text-[#ec9611]">Website Visitors:</strong> When you visit our website, we may collect non-personal information such as IP addresses, browser types, and device information.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#ec9611]">3. How We Use Your Information</h2>
            <p className="text-gray-200 leading-relaxed mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc ml-6 text-gray-200 space-y-2">
              <li><strong className="text-[#ec9611]">Service Delivery:</strong> To provide social media marketing services to our clients.</li>
              <li><strong className="text-[#ec9611]">Communication:</strong> To communicate with clients, employees, and website visitors regarding our services, updates, and promotions.</li>
              <li><strong className="text-[#ec9611]">Analytics:</strong> To analyze website usage and improve our services.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#ec9611]">4. Information Sharing</h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this Privacy Policy or as required by law.
            </p>
            <ul className="list-disc ml-6 text-gray-200 space-y-2">
              <li><strong className="text-[#ec9611]">Third-Party Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing clients.</li>
              <li><strong className="text-[#ec9611]">Legal Compliance:</strong> We may disclose your information if required to comply with laws, regulations, or legal processes.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#ec9611]">5. Security Measures</h2>
            <p className="text-gray-200 leading-relaxed">
              We take reasonable measures to protect your information from unauthorized access or disclosure. This includes 
              physical, electronic, and managerial procedures to safeguard and secure the information we collect.
            </p>
            <p className="text-gray-200 leading-relaxed mt-4">
              <strong className="text-[#ec9611]">Storage Location and Method:</strong> All client/customer data is securely stored on encrypted servers 
              located within England. We employ industry-standard security measures to ensure the confidentiality and integrity 
              of the data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#ec9611]">6. Your Rights and Choices</h2>
            <p className="text-gray-200 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc ml-6 text-gray-200 space-y-2">
              <li><strong className="text-[#ec9611]">Access Your Information:</strong> Request access to the personal information we hold about you.</li>
              <li><strong className="text-[#ec9611]">Correct Your Information:</strong> Ask us to correct any inaccurate or incomplete information.</li>
              <li><strong className="text-[#ec9611]">Delete Your Information:</strong> Request the deletion of your personal information under certain circumstances.</li>
              <li><strong className="text-[#ec9611]">Complaints:</strong> If you have any complaints, please email us at info@ConstructClients.ai, and we will handle the issue to the best of our ability.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#ec9611]">7. Data Retention</h2>
            <p className="text-gray-200 leading-relaxed">
              We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
              unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#ec9611]">8. Changes to the Privacy Policy</h2>
            <p className="text-gray-200 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices. We will notify you of any 
              significant changes through our website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#ec9611]">9. Contact Information</h2>
            <p className="text-gray-200 leading-relaxed">
              For questions or concerns regarding this Privacy Policy, please contact us at{' '}
              <a href="mailto:info@ConstructClients.ai" className="text-[#ec9611] hover:text-[#d88610] transition-colors">
                info@ConstructClients.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 