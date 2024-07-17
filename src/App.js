import TacoCard from "./TacoCard";
import BurritoCard from "./BurritoCard";
import FoodItems from "./FoodItems";

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
      <FoodItems items={tacos} component={TacoCard} />
      <FoodItems items={burritos} component={BurritoCard} />
    </div>
  );
}

export default App;
