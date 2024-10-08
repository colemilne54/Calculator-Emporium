'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
   Card,
   CardHeader,
   CardTitle,
   CardContent,
   CardFooter,
} from '@/components/ui/card';

export default function RandomNumberGenerator() {
   const [lower, setLower] = useState<number>(1);
   const [upper, setUpper] = useState<number>(100);
   const [random, setRandom] = useState<number | null>(null);

   function randInt(min: number, max: number): number {
      return (
         Math.floor(Math.random() * (Number(max) - Number(min) + 1)) +
         Number(min)
      );
   }

   function handleClick() {
      setRandom(randInt(lower, upper));
   }

   return (
      <Card className="w-full max-w-sm mx-auto">
         <CardHeader>
            <CardTitle>Random Number Generator</CardTitle>
         </CardHeader>
         <CardContent>
            <form className="space-y-4">
               <div className="space-y-2">
                  <Label htmlFor="lower">Lower Limit</Label>
                  <Input
                     id="lower"
                     type="number"
                     value={lower}
                     onChange={(e) => setLower(Number(e.target.value))}
                     placeholder="Enter lower limit"
                  />
               </div>
               <div className="space-y-2">
                  <Label htmlFor="upper">Upper Limit</Label>
                  <Input
                     id="upper"
                     type="number"
                     value={upper}
                     onChange={(e) => setUpper(Number(e.target.value))}
                     placeholder="Enter upper limit"
                  />
               </div>
            </form>
         </CardContent>
         <CardFooter className="flex justify-between">
            <Button
               onClick={() => {
                  setLower(0);
                  setUpper(100);
                  setRandom(null);
               }}
               variant="outline"
            >
               Reset
            </Button>
            <Button onClick={handleClick}>Generate</Button>
         </CardFooter>
         {upper >= lower && random !== null && (
            <CardContent>
               <p className="text-center font-semibold">
                  Random Number: {random && random}
               </p>
            </CardContent>
         )}
      </Card>
   );
}
