﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Domain.Entities;
using Domain.Enums;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Infrastructure.Data
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Director> Directores { get; set; }
        public DbSet<Pelicula> Peliculas { get; set; }
        public DbSet<Funcion> Funciones { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pelicula>()
                .HasOne(p => p.Director)
                .WithMany()
                .HasForeignKey(p => p.DirectorPeliculaId);

            modelBuilder.Entity<Funcion>()
                .HasOne(f => f.Pelicula)
                .WithMany()
                .HasForeignKey(f => f.PeliculaId);

            modelBuilder.Entity<Pelicula>()
                .Property(p => p.OrigenPelicula)
                .HasConversion(new EnumToStringConverter<OrigenPelicula>());

            modelBuilder.Entity<Pelicula>().HasData(
                new Pelicula
                {
                    IdPelicula = 1,
                    NombrePelicula = "Harry Potter",
                    OrigenPelicula = OrigenPelicula.Internacional,
                    DirectorPeliculaId = 1
                    
                   
                }
            );
            modelBuilder.Entity<Pelicula>().HasData(
                new Pelicula
                {
                    IdPelicula = 2,
                    NombrePelicula = "El señor de los anillos",
                    OrigenPelicula = OrigenPelicula.Internacional,
                    DirectorPeliculaId = 2


                }
            );
            modelBuilder.Entity<Pelicula>().HasData(
                new Pelicula
                {
                    IdPelicula = 3,
                    NombrePelicula = "Matrix",
                    OrigenPelicula = OrigenPelicula.Internacional,
                    DirectorPeliculaId = 3


                }
            );

            //directores
            modelBuilder.Entity<Director>().HasData(
                new Director
                {
                    DirectorId = 1,
                    Nombre = "Chris Columbus"


                }
            );
            modelBuilder.Entity<Director>().HasData(
                new Director
                {
                    DirectorId = 2,
                    Nombre = "Peter Jackson"


                }
            );
            modelBuilder.Entity<Director>().HasData(
                new Director
                {
                    DirectorId = 3,
                    Nombre = "Lana Wachowski"


                }
            );
            base.OnModelCreating(modelBuilder);
        }

    }
}
