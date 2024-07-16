import TacoCard from "./TacoCard";
import BurritoCard from "./BurritoCard";

import CrunchyTacoSupreme from "./assets/CrunchyTacoSupreme.jpeg";
import DoritosTacoSupreme from "./assets/DoritosTacoSupreme.jpeg";
import SoftTacoSupreme from "./assets/SoftTacoSupreme.jpeg";
import BurritoSupreme from "./assets/BurritoSupreme.jpeg";
import Quesarito from "./assets/Quesarito.jpeg";

function App() {
  const tacos = [
    {
      id: 1,
      name: "Crunchy Taco Supreme",
      image: CrunchyTacoSupreme,
    },
    {
      id: 2,
      name: "Doritos Taco Supreme",
      image: DoritosTacoSupreme,
    },
    {
      id: 3,
      name: "Soft Taco Supreme",
      image: SoftTacoSupreme,
    },
  ];

  const burritos = [
    {
      id: 1,
      name: "Burrito Supreme",
      image: BurritoSupreme,
    },
    {
      id: 2,
      name: "Quesarito",
      image: Quesarito,
    },
  ];

  return (
    <div className="flex gap-x-4 flex-row items-center justify-center h-screen bg-taco-gray text-center">
      {tacos.map(({ id, name, image }) => {
        return <TacoCard key={id} name={name} image={image} />;
      })}
      {burritos.map(({ id, name, image }) => {
        return <BurritoCard key={id} name={name} image={image} />;
      })}
    </div>
  );
}

export default App;
