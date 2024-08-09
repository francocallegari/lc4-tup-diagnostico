using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Directores",
                columns: table => new
                {
                    DirectorId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nombre = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Directores", x => x.DirectorId);
                });

            migrationBuilder.CreateTable(
                name: "Peliculas",
                columns: table => new
                {
                    IdPelicula = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    NombrePelicula = table.Column<string>(type: "TEXT", nullable: false),
                    OrigenPelicula = table.Column<string>(type: "TEXT", nullable: false),
                    DirectorPelicula = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Peliculas", x => x.IdPelicula);
                    table.ForeignKey(
                        name: "FK_Peliculas_Directores_DirectorPelicula",
                        column: x => x.DirectorPelicula,
                        principalTable: "Directores",
                        principalColumn: "DirectorId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Funciones",
                columns: table => new
                {
                    IdFuncion = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Fecha = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Hora = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Precio = table.Column<float>(type: "REAL", nullable: false),
                    PeliculaId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Funciones", x => x.IdFuncion);
                    table.ForeignKey(
                        name: "FK_Funciones_Peliculas_PeliculaId",
                        column: x => x.PeliculaId,
                        principalTable: "Peliculas",
                        principalColumn: "IdPelicula",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Directores",
                columns: new[] { "DirectorId", "Nombre" },
                values: new object[,]
                {
                    { 1, "Chris Columbus" },
                    { 2, "Peter Jackson" },
                    { 3, "Lana Wachowski" }
                });

            migrationBuilder.InsertData(
                table: "Peliculas",
                columns: new[] { "IdPelicula", "DirectorPelicula", "NombrePelicula", "OrigenPelicula" },
                values: new object[,]
                {
                    { 1, 1, "Harry Potter", "Internacional" },
                    { 2, 2, "El señor de los anillos", "Internacional" },
                    { 3, 3, "Matrix", "Internacional" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Funciones_PeliculaId",
                table: "Funciones",
                column: "PeliculaId");

            migrationBuilder.CreateIndex(
                name: "IX_Peliculas_DirectorPelicula",
                table: "Peliculas",
                column: "DirectorPelicula");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Funciones");

            migrationBuilder.DropTable(
                name: "Peliculas");

            migrationBuilder.DropTable(
                name: "Directores");
        }
    }
}
