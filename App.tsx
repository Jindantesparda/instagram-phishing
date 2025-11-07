
import React from 'react';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center w-full px-4 sm:px-0 py-8">
        <div className="flex items-center justify-center space-x-8 max-w-4xl w-full">
          {/* Phone Image - hidden on smaller screens */}
          <div className="hidden md:block flex-shrink-0">
            <img 
              src="https://statics.igg.com/assets/images/events/20230222/instagram_en.png" 
              alt="Instagram app on a phone" 
              className="h-[600px]"
            />
          </div>

          {/* Login and Signup Section */}
          <div className="flex flex-col space-y-4 w-full max-w-sm">
            <div className="bg-white border border-gray-300 rounded-sm">
              <LoginForm />
            </div>

            <div className="bg-white border border-gray-300 rounded-sm text-center py-6">
              <p className="text-sm text-gray-800">
                Don't have an account?{' '}
                <a href="#" className="font-semibold text-blue-500 hover:text-blue-600">
                  Sign up
                </a>
              </p>
            </div>

            {/* Get the App Section */}
            <div className="text-center">
              <p className="text-sm my-4">Get the app.</p>
              <div className="flex justify-center space-x-2">
                <a href="#">
                  <img src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png" alt="Download on the App Store" className="h-10" />
                </a>
                <a href="#">
                  <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="Get it on Google Play" className="h-10" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
