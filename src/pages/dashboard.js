import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
    const router = useRouter();
  
    useEffect(() => {
      const user = sessionStorage.getItem('user');
      if (!user) {
        router.push('/login');
      }
    }, [router]);
  
    const handleLogout = () => {
      sessionStorage.removeItem('user');
      router.push('/login');
    };
  
    return (
      <div style={styles.container}>
        <h1>Welcome to the Dashboard</h1>
        <p>You are successfully logged in!</p>
        <button onClick={handleLogout} style={styles.button}>Logout</button>
      </div>
    );
  }
  
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
      flexDirection: 'column',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#0070f3',
      color: '#fff',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      marginTop: '20px',
    },
  };
  
