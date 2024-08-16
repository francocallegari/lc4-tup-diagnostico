using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class thirdmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Peliculas_Directores_DirectorPelicula",
                table: "Peliculas");

            migrationBuilder.RenameColumn(
                name: "DirectorPelicula",
                table: "Peliculas",
                newName: "DirectorPeliculaId");

            migrationBuilder.RenameIndex(
                name: "IX_Peliculas_DirectorPelicula",
                table: "Peliculas",
                newName: "IX_Peliculas_DirectorPeliculaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Peliculas_Directores_DirectorPeliculaId",
                table: "Peliculas",
                column: "DirectorPeliculaId",
                principalTable: "Directores",
                principalColumn: "DirectorId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Peliculas_Directores_DirectorPeliculaId",
                table: "Peliculas");

            migrationBuilder.RenameColumn(
                name: "DirectorPeliculaId",
                table: "Peliculas",
                newName: "DirectorPelicula");

            migrationBuilder.RenameIndex(
                name: "IX_Peliculas_DirectorPeliculaId",
                table: "Peliculas",
                newName: "IX_Peliculas_DirectorPelicula");

            migrationBuilder.AddForeignKey(
                name: "FK_Peliculas_Directores_DirectorPelicula",
                table: "Peliculas",
                column: "DirectorPelicula",
                principalTable: "Directores",
                principalColumn: "DirectorId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
