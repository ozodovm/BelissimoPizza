import { useState } from "react"
import HomeCategories from "../components/HomeCategories"
import HomeProducts from "../components/HomeProducts"
import PizzaCard from "../components/Pizza"
import Pizza1 from "../assets/images/Чизбургер-пицца.png"
import Pizza2 from "../assets/images/Сырная.png"
import Pizza3 from "../assets/images/Сырный цыпленок.png"
import Pizza4 from "../assets/images/Креветки по-азиатски.png"


const Home = () => {
  const [categoriesId, setCategoriesId] = useState<number | string>("")

  return (
    <div>
      <HomeCategories setCategoriesId={setCategoriesId}/>
      <h1 className="text-[32px] font-bold leading-[38px] my-[32px]">Все пиццы</h1>
      <div className="flex gap-5 flex-wrap">
      <PizzaCard title="Чизбургер-пицца"
        image={Pizza1}
        price={395} >
        </PizzaCard>
      <PizzaCard title="Сырная"
        image={Pizza2}
        price={450} >
        </PizzaCard>
      <PizzaCard title="Креветки по-азиатски"
        image={Pizza4}
        price={290} >
        </PizzaCard>
      <PizzaCard title="Сырный цыпленок"
        image={Pizza3}
        price={385} >
        </PizzaCard>
      <PizzaCard title="Чизбургер-пицца"
        image={Pizza1}
        price={395} >
        </PizzaCard>
      <PizzaCard title="Сырная"
        image={Pizza2}
        price={450} >
        </PizzaCard>
      <PizzaCard title="Креветки по-азиатски"
        image={Pizza4}
        price={290} >
        </PizzaCard>
      <PizzaCard title="Сырный цыпленок"
        image={Pizza3}
        price={385} >
        </PizzaCard>
      </div>
      <HomeProducts categoriesId={categoriesId} />
    </div>
  )
}

export default Home
