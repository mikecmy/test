using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Site.Controllers
{
    public partial class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

    }
}
