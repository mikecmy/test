using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Site.Controllers
{
    public partial class HomeController : Controller
    {

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

    }
}
