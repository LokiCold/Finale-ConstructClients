import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <Link 
              to="/privacy-policy"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
          {/* Other footer content */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 