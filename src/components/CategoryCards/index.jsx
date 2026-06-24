import { LucideTicketsPlane, Plane, Car, GlobeLock } from 'lucide-react';

const categoria = [
  {
    nome: 'Pacotes Nacionais',
    icon: <LucideTicketsPlane size={80} />,
  },
  {
    nome: 'Pacotes Internacionais',
    icon: <Plane size={80} />,
  },
  {
    nome: 'Transfer',
    icon: <Car size={80} />,
  },
  {
    nome: 'Seguro Viagem',
    icon: <GlobeLock size={80} />,
  },
];

export default function CategoryCards() {
  return (
    <>
      <h2 className="ofertas-titulo busque">Busque por Categoria</h2>
      <div className="cards">
        {categoria.map(({ nome, icon }) => (
          <div key={nome} className="pacote">
            {icon}
            <h3>{nome}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
