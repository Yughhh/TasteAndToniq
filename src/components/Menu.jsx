import { Link } from 'react-router-dom'
import './Menu.css'

// Food images from Unsplash (free to use under Unsplash License)
const unsplash = (id, w = 500, h = 375) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

const dishes = [
  {
    name: 'Handi Paneer',
    desc: 'Creamy paneer simmered in a rich tomato-based gravy, served sizzling in a traditional handi.',
    img: '/images/handi_paneer.png', // Paneer curry
  },
  {
    name: 'Chicken Tikka Masala',
    desc: 'Tender chargrilled chicken in a velvety spiced tomato-cream sauce that melts in your mouth.',
    img: unsplash('1742599361574-6fb156181466'), // Chicken tikka masala - Imad 786
  },
  {
    name: 'Hakka Noodles',
    desc: 'Stir-fried noodles with fresh veggies and aromatic spices — our most-loved Indo-Chinese classic.',
    img: unsplash('1714611446765-3e85644ea4ae'), // Noodles - Mustafa Fatemi
  },
  {
    name: 'Pizza',
    desc: 'Crispy base, stretchy cheese, and your choice of toppings — comfort food done right.',
    img: unsplash('1772494047889-4a7beb5dbad0'), // Margherita pizza - Brelyn Bashrum
  },
  {
    name: 'Veggie Burger',
    desc: 'A hearty patty with fresh veggies and our secret sauce. Simple, satisfying, and delicious.',
    img: unsplash('1569691802417-e5e1ec314e81'), // Veggie burger - Nadine Primeau
  },
  {
    name: 'Chocolate Shake',
    desc: 'Rich, thick, and indulgent — the perfect sweet ending or anytime treat.',
    img: unsplash('1761637592257-3c5911ae5a3a'), // Chocolate milkshake - Christian Agbede
  },
  {
    name: 'Cold Coffee with Ice Cream',
    desc: 'Chilled espresso blended with vanilla ice cream. Refreshment redefined.',
    img: unsplash('1771405317950-04de06a70166'), // Iced coffee - Madeline Liu
  },
]

export default function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="section">
        <span className="menu__label">Signature Dishes</span>
        <h2 className="menu__title">Taste the Difference</h2>
        <p className="menu__subtitle">
          From North Indian classics to Indo-Chinese favourites — something for every palate.
        </p>
        <div className="menu__grid">
          {dishes.map((dish) => (
            <article key={dish.name} className="menu__card">
              <div className="menu__card-img">
                <img src={dish.img} alt={dish.name} />
              </div>
              <div className="menu__card-content">
                <h3 className="menu__card-title">{dish.name}</h3>
                <p className="menu__card-desc">{dish.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="menu__cta">
          <Link to="/menu" className="btn btn--primary">
            Explore Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
