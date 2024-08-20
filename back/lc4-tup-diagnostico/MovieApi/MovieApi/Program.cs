using Application.Interfaces;
using Application.Services;
using Domain.Entities;
using Domain.Interfaces;
using Infrastructure.Data;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder =>
        {
            builder.WithOrigins("http://localhost:5173")
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

#region Database
string connectionString = builder.Configuration["ConnectionStrings:DBConnectionString"];

// Configurar la conexion sqlite
var connection = new SqliteConnection(connectionString);
connection.Open();

// Set journal mode to DELETE using PRAGMA statement
using (var command = connection.CreateCommand())
{
    command.CommandText = "PRAGMA journal_mode = DELETE;";
    command.ExecuteNonQuery();
}

builder.Services.AddDbContext<ApplicationContext>(options =>
    options.UseSqlite(connection));

#endregion

// Repositories
builder.Services.AddScoped<IRepositoryBase<Director>, EfRepository<Director>>();
builder.Services.AddScoped<IPeliculaRepository, PeliculaRepository>();
builder.Services.AddScoped<IFuncionRepository, FuncionRepository>();

// Services
builder.Services.AddScoped<IFuncionService, FuncionService>();
builder.Services.AddScoped<IPeliculaService, PeliculaService>(); // Agregar el servicio de Pelicula

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowSpecificOrigin");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
