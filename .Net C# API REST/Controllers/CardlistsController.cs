using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Api_REST.Models;

namespace REST.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardlistsController : ControllerBase
    {
        private readonly CardlistDBContext _context;

        public CardlistsController(CardlistDBContext context)
        {
            _context = context;
        }

        // GET: api/Cardlists
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cardlist>>> GetCardlists()
        {
            return await _context.Cardlists.ToListAsync();
        }

        // GET: api/Cardlists/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cardlist>> GetCardlist(int id)
        {
            var cardlist = await _context.Cardlists.FindAsync(id);

            if (cardlist == null)
            {
                return NotFound();
            }

            return cardlist;
        }

        // PUT: api/Cardlists/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCardlist(int id, Cardlist cardlist)
        {
            if (id != cardlist.id_tarjeta)
            {
                return BadRequest();
            }

            _context.Entry(cardlist).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CardlistExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cardlists
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Cardlist>> PostCardlist(Cardlist cardlist)
        {
            _context.Cardlists.Add(cardlist);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCardlist", new { id = cardlist.id_tarjeta }, cardlist);
        }

        // DELETE: api/Cardlists/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCardlist(int id)
        {
            var cardlist = await _context.Cardlists.FindAsync(id);
            if (cardlist == null)
            {
                return NotFound();
            }

            _context.Cardlists.Remove(cardlist);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CardlistExists(int id)
        {
            return _context.Cardlists.Any(e => e.id_tarjeta == id);
        }
    }
}
