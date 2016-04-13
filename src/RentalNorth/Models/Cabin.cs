using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentalNorth.Models
{
    public class Cabin
    {
        public int Id { get; set; }
        public int OwnerId { get; set; }
        public string Title { get; set; }
        public double Long { get; set; }
        public double Lat { get; set; }
        public string InfoWindow { get; set; }
        public int Beds { get; set; }
        public int Rooms { get; set; }
        public string Description { get; set; }

    }
}
