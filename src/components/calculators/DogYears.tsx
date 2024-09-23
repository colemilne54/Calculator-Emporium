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

export default function DogYearsCalculator() {
   const [years, setYears] = useState<string>('');
   const [months, setMonths] = useState<string>('');

   function calculateDogYears() {
      const validYears = years !== '' ? Number(years) : 0;
      const validMonths = months !== '' ? Number(months) : 0;

      if (validMonths || validYears) {
         const yrs = validYears + validMonths / 12;
         return (16 * Math.log(yrs) + 31).toFixed(2);
      }
      return '0.00';
   }

   return (
      <Card className="w-full max-w-sm mx-auto">
         <CardHeader>
            <CardTitle>Dog Years Calculator</CardTitle>
         </CardHeader>
         <CardContent>
            <form className="space-y-4">
               <div className="space-y-2">
                  <Label htmlFor="years">Years</Label>
                  <Input
                     id="years"
                     type="number"
                     value={years}
                     onChange={(e) => setYears(e.target.value)}
                     placeholder="Enter years"
                  />
               </div>
               <div className="space-y-2">
                  <Label htmlFor="months">Months</Label>
                  <Input
                     id="months"
                     type="number"
                     value={months}
                     onChange={(e) => setMonths(e.target.value)}
                     placeholder="Enter months"
                  />
               </div>
            </form>
         </CardContent>
         <CardFooter className="flex justify-between">
            <Button
               onClick={() => {
                  setYears('');
                  setMonths('');
               }}
               variant="outline"
            >
               Reset
            </Button>
            <Button>Calculate</Button>
         </CardFooter>
         {(years !== '' || months !== '') && (
            <CardContent>
               <p className="text-center font-semibold">
                  Dog Years: {calculateDogYears()}
               </p>
            </CardContent>
         )}
      </Card>
   );
}
