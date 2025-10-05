import Link from 'next/link';
import Image from 'next/image';
import Menu  from '@/components/Menu';
import Navbar from '@/components/Navbar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* LeftNavBar */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] h-screen p-4 overflow-y-auto custom-scrollbar">
        <Link href="/" className='flex items-center justify-center lg:justify-start gap-2'>
          <Image src="/logo.png" alt='logo' width={32} height={32} />
          <span className='hidden lg:block'>USICT One</span>
        </Link>

        <Menu />
      </div>

      {/* RightBoard */}
      <div className="flex-1 h-screen bg-[#F7F8FA] flex flex-col ">
        <div className="flex-shrink-0">
          <Navbar />
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}