import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="loader_34">
        <div className="ytp-spinner">
          <div className="ytp-spinner-container">
            <div className="ytp-spinner-rotator">
              <div className="ytp-spinner-left">
                <div className="ytp-spinner-circle border-4 border-blue-500 border-t-transparent rounded-full w-8 h-8 animate-spin"></div>
              </div>
              <div className="ytp-spinner-right">
                <div className="ytp-spinner-circle border-4 border-blue-500 border-t-transparent rounded-full w-8 h-8 animate-spin"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;