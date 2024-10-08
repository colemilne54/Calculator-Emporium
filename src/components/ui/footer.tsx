export default function Footer() {
   return (
      <footer className="py-6 md:px-8 md:py-0">
         <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-center">
               Built by{' '}
               <a
                  href="https://www.colemilne.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4"
               >
                  Cole Milne
               </a>{' '}
               in Conjunction with{' '}
               <a
                  href="https://www.themilneempire.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4"
               >
                  The Milne Empire
               </a>
               . The source code is available on{' '}
               <a
                  href="https://github.com/colemilne54/Calculator-Emporium"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4"
               >
                  GitHub
               </a>
               .
            </p>
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-right">

            </p>
         </div>
      </footer>
   );
}
