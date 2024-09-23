// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { JSX, ReactElement, SVGProps } from 'react';
import { FaCalculator, FaWeightScale } from 'react-icons/fa6';
import { FaDog, FaRandom, FaRuler, FaWind } from 'react-icons/fa';

type NavLink = {
   name: string;
   href: string;
   icon: ReactElement;
};

const navLinks: NavLink[] = [
   {
      name: 'Dog Years',
      href: '/dog-years',
      icon: <FaDog className="ml-1 h-5 w-5" />,
   },
   {
      name: 'Random Number Generator',
      href: '/random-number-generator',
      icon: <FaRandom className="ml-1 h-5 w-5" />,
   },
   {
      name: 'Feet To Inches',
      href: '/feet-to-inches',
      icon: <FaRuler className="ml-1 h-5 w-5" />,
   },
   {
      name: 'Barbell Weight',
      href: '/barbell-weight',
      icon: <BarbellWeightlifter className="ml-1 h-5 w-5" />,
   },
   {
      name: 'BMI',
      href: '/bmi',
      icon: <FaWeightScale className="ml-1 h-5 w-5" />,
   },
   {
      name: 'Wind Chill',
      href: '/wind-chill',
      icon: <FaWind className="ml-1 h-5 w-5" />,
   },
];

export default function HeaderNavBar() {
   return (
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
         <Sheet>
            <SheetTrigger asChild>
               <Button variant="outline" size="icon" className="lg:hidden">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
               </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
                  <FaCalculator className="h-6 w-6" />
                  <span className="sr-only">Calculator Emporium</span>
               </Link>
               <div className="grid gap-2 py-6">
                  {navLinks.map((navLink: NavLink, index: number) => (
                     <Link
                        href={navLink.href}
                        className="flex w-full items-center py-2 text-lg font-semibold"
                        prefetch={false}
                        key={index}
                     >
                        {navLink.name} {navLink.icon}
                     </Link>
                  ))}
               </div>
            </SheetContent>
         </Sheet>
         <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
            <FaCalculator className="h-6 w-6" />
            <span className="ml-2">Calculator Emporium</span>
         </Link>
         <nav className="ml-auto hidden lg:flex gap-6">
            {navLinks.map((navLink: NavLink, index: number) => (
               <Link
                  href={navLink.href}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  prefetch={false}
                  key={index}
               >
                  {navLink.name} {navLink.icon}
               </Link>
            ))}
         </nav>
      </header>
   );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
   return (
      <svg
         {...props}
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <line x1="4" x2="20" y1="12" y2="12" />
         <line x1="4" x2="20" y1="6" y2="6" />
         <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
   );
}

function MountainIcon(
   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
   return (
      <svg
         {...props}
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
   );
}

function BarbellWeightlifter(
   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
   return (
      <svg
         {...props}
         stroke="currentColor"
         fill="currentColor"
         strokeWidth="0"
         viewBox="0 0 512 512"
         height="24"
         width="24"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path d="M77.492 18.457l-17.726 3.127L69.09 74.47a1630.67 1630.67 0 0 0-15.8 2.54l-6.503-36.89-17.726 3.124 6.49 36.795a1877.847 1877.847 0 0 0-17.196 3.112l3.292 17.696c5.728-1.066 11.397-2.09 17.028-3.084l7.056 40.02 17.727-3.124-7.04-39.93c5.304-.88 10.57-1.725 15.798-2.54l9.777 55.45 17.727-3.126-9.697-54.99c8.483-1.218 16.866-2.338 25.18-3.38 15.54 46.39 34.697 99.995 66.936 134.448C190.86 250.992 192 268 214.56 310 192 348 176 412 167.21 471l-48 6v15H192c16-48 64-144 64-144s48 96 64 144h72.79v-15l-48-6C336 412 320 348 294 310c26-42 24.175-59.585 35.83-89.377 32.25-34.452 51.42-88.075 66.967-134.478 8.314 1.04 16.697 2.16 25.18 3.38l-9.696 54.99 17.728 3.124 9.777-55.45c5.23.815 10.494 1.66 15.8 2.54l-7.042 39.93 17.727 3.125 7.056-40.02c5.63.993 11.3 2.017 17.028 3.083l3.292-17.696c-5.78-1.075-11.507-2.11-17.195-3.113l6.49-36.796-17.727-3.125-6.504 36.89c-5.303-.88-10.57-1.727-15.8-2.54l9.324-52.886-17.726-3.127-9.406 53.35C365.982 63.31 310.982 59.04 256 59.04c-54.98 0-109.983 4.27-169.102 12.767l-9.406-53.35zM256 76.98c35.53 0 71.07 1.83 107.822 5.463-14.082 34.858-38.454 73.504-63.203 101.967C290.293 199.27 274.35 209 256 209c-18.35 0-34.294-9.73-44.62-24.59-24.748-28.463-49.12-67.11-63.202-101.967 36.75-3.633 72.29-5.463 107.822-5.463zM256 97c-20.835 0-39 20.24-39 47s18.165 47 39 47 39-20.24 39-47-18.165-47-39-47z" />
      </svg>
   );
}
