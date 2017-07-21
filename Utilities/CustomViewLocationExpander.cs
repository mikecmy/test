using Microsoft.AspNetCore.Mvc.Razor;
using System;
using System.Collections.Generic;
using System.Text;

namespace Utilities
{
    public sealed class CustomViewLocationExpander : IViewLocationExpander
    {
        public IEnumerable<string> ExpandViewLocations(ViewLocationExpanderContext context, IEnumerable<string> viewLocations)
        {
            throw new NotImplementedException();
            //foreach (var location in viewLocations)
            //{
            //    //if (location.Contains("Shared")|| context.ViewName.Contains("_Layout"))
            //    //{
            //    //    yield return string.Format(location, context.ControllerName);
            //    //}
            //    //else
            //    //{
            //    //    yield return string.Format(location, context.ViewName, $@"{context.ControllerName}/{context.ViewName}");
            //    //}
                

            //}
        }

        public void PopulateValues(ViewLocationExpanderContext context)
        {
            //throw new NotImplementedException();
        }
    }
}
