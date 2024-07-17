import TacoCard from "./TacoCard";
import BurritoCard from "./BurritoCard";
import FoodItems from "./FoodItems";

import CrunchyTacoSupreme from "./assets/CrunchyTacoSupreme.jpeg";
import DoritosTacoSupreme from "./assets/DoritosTacoSupreme.jpeg";
import SoftTacoSupreme from "./assets/SoftTacoSupreme.jpeg";
import BurritoSupreme from "./assets/BurritoSupreme.jpeg";
import Quesarito from "./assets/Quesarito.jpeg";

function App() {
  const items = [
    {
      id: 1,
      name: "Crunchy Taco Supreme",
      image: CrunchyTacoSupreme,
      component: TacoCard,
    },
    {
      id: 2,
      name: "Doritos Taco Supreme",
      image: DoritosTacoSupreme,
      component: TacoCard,
    },
    {
      id: 3,
      name: "Soft Taco Supreme",
      image: SoftTacoSupreme,
      component: TacoCard,
    },
    {
      id: 4,
      name: "Burrito Supreme",
      image: BurritoSupreme,
      component: BurritoCard,
    },
    {
      id: 5,
      name: "Quesarito",
      image: Quesarito,
      component: BurritoCard,
    },
  ];

  return (
    <div className="flex gap-x-4 flex-row items-center justify-center h-screen bg-taco-gray text-center">
      <FoodItems items={items} />
    </div>
  );
}

export default App;
