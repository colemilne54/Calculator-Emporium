'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
   Card,
   CardHeader,
   CardTitle,
   CardContent,
   CardFooter,
} from '@/components/ui/card';

import { differenceInDays, format } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import * as React from 'react';

export default function DaysUntil() {
   const [date, setDate] = useState<Date>();
   const [difference, setDifference] = useState<number | null>(null);

   function calculateDateDifference() {
      if (date) {
         const today = new Date();
         const diff = differenceInDays(date, today);
         setDifference(diff);
      }
   }

   useEffect(() => {
      calculateDateDifference()
   }, [date]);

   return (
      <Card className="w-full max-w-sm mx-auto">
         <CardHeader>
            <CardTitle>Days Until Calculator</CardTitle>
         </CardHeader>
         <CardContent className="space-y-4">
            <div className="space-y-2">
               <Popover>
                  <PopoverTrigger asChild>
                     <Button
                        variant={'outline'}
                        className={cn(
                           'w-[280px] justify-start text-left font-normal',
                           !date && 'text-muted-foreground',
                        )}
                     >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                     </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                     <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                     />
                  </PopoverContent>
               </Popover>
            </div>
         </CardContent>
         <CardFooter className="flex justify-between">
            <Button onClick={calculateDateDifference}>Calculate</Button>
         </CardFooter>
         {difference !== null && (
            <CardContent>
               <p className="text-center font-semibold">
                  {difference > 0
                     ? `Days until selected date: ${difference}`
                     : difference < 0
                       ? `Days since selected date: ${Math.abs(difference)}`
                       : 'Selected date is today!'}
               </p>
            </CardContent>
         )}
      </Card>
   );
}
