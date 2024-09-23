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

export default function FeetToInches() {
   const [feet, setFeet] = useState('');
   const [inches, setInches] = useState('');

   function calculateInches() {
      return Number(feet) * 12 + Number(inches);
   }

   const handleReset = () => {
      setFeet('');
      setInches('');
   };

   return (
      <Card className="w-full max-w-sm mx-auto">
         <CardHeader>
            <CardTitle>Feet to Inches Calculator</CardTitle>
         </CardHeader>
         <CardContent>
            <form className="space-y-4">
               <div className="space-y-2">
                  <Label htmlFor="feet">Feet</Label>
                  <Input
                     id="feet"
                     type="number"
                     value={feet}
                     onChange={(e) => setFeet(e.target.value)}
                     placeholder="Enter feet"
                     min="0"
                  />
               </div>
               <div className="space-y-2">
                  <Label htmlFor="inches">Inches</Label>
                  <Input
                     id="inches"
                     type="number"
                     value={inches}
                     onChange={(e) => setInches(e.target.value)}
                     placeholder="Enter inches"
                     min="0"
                     max="11"
                  />
               </div>
            </form>
         </CardContent>
         <CardFooter className="flex justify-between">
            <Button onClick={handleReset} variant="outline">
               Reset
            </Button>
            <Button>Calculate</Button>
         </CardFooter>
         {(feet !== '' || inches !== '') && (
            <CardContent>
               <p className="text-center font-semibold">
                  {feet !== '' && `${feet}'`}
                  {inches !== '' && `${inches}"`}
                  {` = ${calculateInches()} inches`}
               </p>
            </CardContent>
         )}
      </Card>
   );
}
