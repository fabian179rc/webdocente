import React from 'react';
export const Footer: React.FC = () => {
  return <footer className="bg-black border-t border-brand-card-border py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        

        <p className="text-gray-300 font-medium mb-2">
          El sistema de recursos pedagógicos N°1 para docentes de Nivel Inicial
          en Argentina.
        </p>
        <p className="text-gray-400 mb-8">
          Porque enseñar en el jardín no debería costarte todos los domingos del
          año.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-12 text-gray-300">
          <a href="mailto:tera.ventasonline@gmail.com" className="flex items-center gap-2 hover:text-brand-green transition-colors">
            📧 tera.ventasonline@gmail.com
          </a>
          <span className="hidden md:inline text-gray-600">|</span>
          <a href="https://www.tera-ventasonline.shop" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-green transition-colors">
            🌐 www.tera-ventasonline.shop
          </a>
        </div>

        <div className="text-xs text-gray-600 mb-8">
          © Tera Ventas Online™ 2026 — Todos los derechos reservados.
          Prohibida la reproducción y redistribución sin autorización expresa.
        </div>

        <div className="text-brand-green/80 italic font-medium space-y-1">
          <p>🌱 "El próximo lunes podés llegar preparada."</p>
          <p>"El próximo domingo puede ser diferente."</p>
        </div>
      </div>
    </footer>;
};