import { useEffect } from 'react';
import { useRouter } from 'next/router';

const LogoutPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Place your logout logic here
    // For example, if you're using localStorage to store a token:
    // localStorage.removeItem('userToken');
    
    // Additionally, you can clear other user-specific data as needed

    // Redirect to the main login page after logout
    router.replace('/login'); // Use 'replace' to prevent going back to the logout page with the back button

    // If "/login" is not your login route, change it to whatever your actual login route is
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Logging out...</p>
      {/* You can also add a loader here if you like */}
    </div>
  );
};

export default LogoutPage;

