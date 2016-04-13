using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using RentalNorth.Models;
using RentalNorth.ViewModels.Api;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace RentalNorth.Controllers
{
    public class ApiController : Controller
    {
        ApplicationDbContext context;

        public ApiController(ApplicationDbContext context)
        {
            this.context = context;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            var model = context.Cabins.Select(c => new CabinMarkerVM
            {
                Title = c.Title,
                Lat = c.Lat,
                lng = c.Long,
                InfoWindow = c.InfoWindow
                
            });
            return Json(model);
        }
    }
}
