import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the App</h1>
      <Link href="/login">
        <p style={{ fontSize: '20px', color: '#0070f3' }}>Go to Login</p>
      </Link>
    </div>
  );
}
