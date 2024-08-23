using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class addedFilms : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Directores",
                columns: new[] { "DirectorId", "Nombre" },
                values: new object[,]
                {
                    { 4, "Damián Szifron" },
                    { 5, "Israel Adrián Caetano" },
                    { 6, "Alejandro Doria" }
                });

            migrationBuilder.UpdateData(
                table: "Peliculas",
                keyColumn: "IdPelicula",
                keyValue: 1,
                column: "NombrePelicula",
                value: "Harry Potter y el prisionero de Azkaban");

            migrationBuilder.InsertData(
                table: "Peliculas",
                columns: new[] { "IdPelicula", "DirectorPeliculaId", "NombrePelicula", "OrigenPelicula" },
                values: new object[,]
                {
                    { 4, 4, "Relatos Salvajes", "Nacional" },
                    { 5, 5, "Pizza, birra, faso", "Nacional" },
                    { 6, 6, "Esperando la carroza", "Nacional" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Peliculas",
                keyColumn: "IdPelicula",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Peliculas",
                keyColumn: "IdPelicula",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Peliculas",
                keyColumn: "IdPelicula",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Directores",
                keyColumn: "DirectorId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Directores",
                keyColumn: "DirectorId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Directores",
                keyColumn: "DirectorId",
                keyValue: 6);

            migrationBuilder.UpdateData(
                table: "Peliculas",
                keyColumn: "IdPelicula",
                keyValue: 1,
                column: "NombrePelicula",
                value: "Harry Potter");
        }
    }
}
