  
using System;

namespace calculeTravel
{
    class program
    {
        static void Main(string[] args)
        {
          string[] input;
          int distance = 0, hours = 0, travel = 0;
          double gasolineKm = 0;

          input = (Console.ReadLine().Split(' '));
          hours = Convert.ToInt32(input[0]);
          distance = Convert.ToInt32(input[1]);            
          travel = (hours * distance);
          gasolineKm = ((double)travel / 12) ;
          Console.WriteLine($"{gasolineKm:0.000}");
        }
    }
}