import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

export default function BarbellTotal() {
   const [bar, setBar] = useState<number>(45);
   const [total, setTotal] = useState<number>(bar);

   const addWeight = (weight: number) => {
      setTotal((prevTotal: number) => Number(prevTotal) + Number(weight));
   };

   return (
      <Card className="w-full max-w-md mx-auto">
         <CardHeader>
            <CardTitle>Barbell Weight Calculator</CardTitle>
         </CardHeader>
         <CardContent className="space-y-4">
            <div className="space-y-2">
               <Label htmlFor="bar-weight">Bar Weight (lbs)</Label>
               <Input
                  id="bar-weight"
                  type="number"
                  value={bar}
                  onChange={(e) => {
                     setBar(Number(e.target.value));
                     setTotal(Number(e.target.value));
                  }}
                  placeholder="Enter bar weight"
               />
            </div>

            <div className="space-y-2">
               <Label>Add Weight</Label>
               <div className="flex flex-wrap gap-2">
                  <Button onClick={() => addWeight(50)} variant="outline">25 lbs</Button>
                  <Button onClick={() => addWeight(70)} variant="outline">35 lbs</Button>
                  <Button onClick={() => addWeight(90)} variant="outline">45 lbs</Button>
               </div>
            </div>

            <div className="pt-4">
               <p className="text-lg font-semibold">Total Weight: {total} lbs</p>
            </div>
         </CardContent>
         <CardFooter className="flex justify-between">
            <Button onClick={() => setTotal(bar)} variant="outline">Reset</Button>
            <Button>Submit</Button>
         </CardFooter>
      </Card>
   );
}