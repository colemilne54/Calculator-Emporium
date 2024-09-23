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

export default function BMI() {
   const [weight, setWeight] = useState<number>();
   const [height, setHeight] = useState<number>();

   function calculateBMI() {
      if (weight && height) {
         return ((703 * weight) / height ** 2).toFixed(2);
      }
   }

   return (
      <Card className="w-full max-w-sm mx-auto">
         <CardHeader>
            <CardTitle>BMI Calculator</CardTitle>
         </CardHeader>
         <CardContent>
            <form className="space-y-4">
               <div className="space-y-2">
                  <Label htmlFor="weight">Weight (lbs)</Label>
                  <Input
                     id="weight"
                     type="number"
                     value={weight}
                     onChange={(e) => setWeight(Number(e.target.value))}
                     placeholder="Enter weight"
                  />
               </div>
               <div className="space-y-2">
                  <Label htmlFor="height">Height (in)</Label>
                  <Input
                     id="height"
                     type="number"
                     value={height}
                     onChange={(e) => setHeight(Number(e.target.value))}
                     placeholder="Enter height"
                  />
               </div>
            </form>
         </CardContent>
         <CardFooter className="flex justify-between">
            <Button
               onClick={() => {
                  setWeight(0);
                  setHeight(0);
               }}
               variant="outline"
            >
               Reset
            </Button>
            <Button>Calculate BMI</Button>
         </CardFooter>
         {weight !== 0 && height !== 0 && (
            <CardContent>
               <p className="text-center font-semibold">
                  BMI: {calculateBMI()}
               </p>
            </CardContent>
         )}
      </Card>
   );
}
