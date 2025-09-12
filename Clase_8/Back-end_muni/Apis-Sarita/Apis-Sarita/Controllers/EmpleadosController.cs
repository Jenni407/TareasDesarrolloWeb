using Apis_Sarita.Data;
using Apis_Sarita.Modelo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace Apis_Sarita.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmpleadosController : ControllerBase
    {
        private readonly EmpresaContext _context;

        public EmpleadosController(EmpresaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Empleado>>> GetEmpleados()
        {
            return await _context.Empleados.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Empleado>> CrearEmpleado(Empleado empleado)
        {
            _context.Empleados.Add(empleado);
            await _context.SaveChangesAsync();
            return Ok(empleado);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> ActualizarEmpleado(int id, Empleado empleadoActualizado)
        {
            if (id != empleadoActualizado.Id)
            {
                return BadRequest(new { mensaje = "El ID del empleado no coincide con el ID de la URL." });
            }

            var empleado = await _context.Empleados.FindAsync(id);

            if (empleado == null)
            {
                return NotFound(new { mensaje = $"Empleado con ID {id} no encontrado." });
            }

            // Actualizar campos
            empleado.Nombre = empleadoActualizado.Nombre;
            empleado.Puesto = empleadoActualizado.Puesto;
            empleado.Edad = empleadoActualizado.Edad;
            empleado.Salario = empleadoActualizado.Salario;

            await _context.SaveChangesAsync();

            return Ok(new { mensaje = "Empleado actualizado correctamente.", empleado });
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> EliminarEmpleado(int id)
        {
        var empleado = await _context.Empleados.FindAsync(id);

        if (empleado == null)
        {
        return NotFound(new { mensaje = $"Empleado con ID {id} no encontrado." });
        }

        _context.Empleados.Remove(empleado);
        await _context.SaveChangesAsync();

        return Ok(new { mensaje = "Empleado eliminado correctamente." });
        }
    }
}