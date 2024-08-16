using Application.Models;
using Application.Models.Request;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IFuncionService
    {
        List<FuncionDto> GetAll();
        FuncionDto GetById(int id);
        FuncionDto Create(FuncionRequest funcionRequest);
        void Update(FuncionUpdateRequest funcionRequest, int id);
        void Delete(int id);
    }
}
