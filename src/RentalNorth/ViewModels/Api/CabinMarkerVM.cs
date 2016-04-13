using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentalNorth.ViewModels.Api
{
    public class CabinMarkerVM
    {
        // "title": 'Sanjay Gandhi National Park',
        //"lat": '19.2147067',
        //"lng": '72.91062020000004',
        //"description": 'Sanjay Gandhi National Park is a large protected area in the northern part of Mumbai city.'
        public string Title { get; set; }
        public double Lat { get; set; }
        public double lng { get; set; }
        public string InfoWindow { get; set; }
    }
}
