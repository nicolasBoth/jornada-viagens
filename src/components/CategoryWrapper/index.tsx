import { LucideTicketsPlane, Plane, Car, GlobeLock } from 'lucide-react';
import CategoryCards from '../CategoryCards';

export default function CategoryWrapper() {
  return (
    <>
      <h2 className="ofertas-titulo busque">Busque por Categoria</h2>
      <div className="cards">
        <CategoryCards nome="Pacotes Nacionais" icon={<LucideTicketsPlane size={80} />} />
        <CategoryCards nome="Pacotes Internacionais" icon={<Plane size={80} />} />
        <CategoryCards nome="Transfer" icon={<Car size={80} />} />
        <CategoryCards nome="Seguro Viagem" icon={<GlobeLock size={80} />} />
      </div>
    </>
  );
}