using Application.Interfaces;
using Application.Models.Request;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MovieApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FuncionController : ControllerBase
    {
        private readonly IFuncionService _funcionService;
        public FuncionController(IFuncionService funcionService)
        {
            _funcionService = funcionService;
        }
        [HttpGet("Funciones")]
        public IActionResult GetAll()
        {
            return Ok(_funcionService.GetAll());
        }
        [HttpGet("Funcion/{id}")]
        public IActionResult Get([FromRoute] int id) 
        {
            try
            {
                return Ok(_funcionService.GetById(id));
            } catch 
            {
                return NotFound();
            }
        }
        [HttpPost]
        public IActionResult AddFuncion([FromBody] FuncionRequest request)
        {
            try
            {
                return Ok(_funcionService.Create(request));
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("{id}")]
        public IActionResult Update([FromRoute] int id, [FromBody] FuncionUpdateRequest request)
        {
            try
            {
                _funcionService.Update(request, id);
                return Ok();
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete("{id}")]
        public IActionResult Delete([FromRoute] int id) 
        {
            try
            {
                _funcionService.Delete(id);
                return Ok();
            } catch
            {
                return NotFound();
            }
        }
    }
}
