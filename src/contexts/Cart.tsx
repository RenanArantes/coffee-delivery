import { createContext, ReactNode, useState } from 'react'

import expressoTradicional from '../assets/expresso_tradicional.png'
import cafeComLeite from '../assets/cafe_com_leite.png'
import capuccino from '../assets/capuccino.png'
import expressoAmericano from '../assets/expresso_americano.png'
import expressoCremoso from '../assets/expresso_cremoso.png'
import expressoGelado from '../assets/expresso_gelado.png'
import latte from '../assets/latte.png'
import macchiato from '../assets/macchiato.png'

interface CoffeeProps {
  name: string
  description: string
  types: string[]
  price: number
  url: string
  quantity: number
}

interface CartProps {
  coffeesOnCart: CoffeeProps[]
  cartQuantity: number
}

interface CartContextProps {
  cart: CartProps
  coffees: CoffeeProps[]
  coffeesOnCart: CoffeeProps[]
  cartQuantity: number
  increaseCoffeeQuantity: (coffeeId: string) => void
  decreaseCoffeeQuantity: (coffeeId: string) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([
    {
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      types: ['TRADICIONAL'],
      price: 9.9,
      url: expressoTradicional,
      quantity: 0,
    },
    {
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      types: ['TRADICIONAL'],
      price: 9.9,
      url: expressoAmericano,
      quantity: 0,
    },
    {
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      types: ['TRADICIONAL'],
      price: 9.9,
      url: expressoCremoso,
      quantity: 0,
    },
    {
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      types: ['TRADICIONAL', 'GELADO'],
      price: 9.9,
      url: expressoGelado,
      quantity: 0,
    },
    {
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      types: ['TRADICIONAL', 'COM LEITE'],
      price: 9.9,
      url: cafeComLeite,
      quantity: 0,
    },
    {
      name: 'Latte',
      description: 'Uma dose de café expresso com o dobro de leite e espuma',
      types: ['TRADICIONAL', 'COM LEITE'],
      price: 9.9,
      url: latte,
      quantity: 0,
    },
    {
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      types: ['TRADICIONAL', 'COM LEITE'],
      price: 9.9,
      url: capuccino,
      quantity: 0,
    },
    {
      name: 'Macchiato',
      description:
        'Café expresso mustirado com um pouco de leite quente e espuma',
      types: ['TRADICIONAL', 'COM LEITE', 'ESPECIAL'],
      price: 9.9,
      url: macchiato,
      quantity: 0,
    },
  ])
  const [coffeesOnCart, setCoffeesOnCart] = useState<CoffeeProps[]>([])
  const [cartQuantity, setCartQuantity] = useState(0)

  const [cart, setCart] = useState<CartProps>({
    coffeesOnCart: [],
    cartQuantity: 0,
  })

  function increaseCoffeeQuantity(coffeeId: string) {
    // Iteração para adicionar a quantidade ao produto café
    const updatedCoffees = coffees.map((coffee) => {
      // procurando o café selecionado
      if (coffee.name === coffeeId) {
        // adicione +1 a quantidade do café selecionado
        coffee.quantity += 1

        return coffee
      }
      return coffee
    })

    setCoffees((state) => {
      return state
    })

    // verificando se já existe outro café de mesmo nome
    const sameCoffeeOnCart = coffeesOnCart.find((coffee) => {
      return coffee.name === coffeeId
    })

    coffees.forEach((coffee) => {
      // se o id e o name forem iguais E não existe um café de mesmo nome no carrinho
      // adiciona o café no carrinho para aparecer em Checkout
      if (coffee.name === coffeeId && !sameCoffeeOnCart?.name) {
        setCoffeesOnCart((state) => {
          return [...state, coffee]
        })
      }
    })

    // const updatedCoffeesOnCart = coffeesOnCart

    console.log('coffees to cart')
    console.log(coffeesOnCart)
    // setCart({
    //   cartQuantity: cart.cartQuantity + 1,
    //   coffeesOnCart: updatedCoffeesOnCart,
    // })

    // console.log('cart')
    // console.log(cart)

    setCartQuantity((state) => {
      return (state += 1)
    })
  }

  function decreaseCoffeeQuantity(coffeeId: string) {
    const updatedCoffees = coffees.map((coffee) => {
      if (coffee.name === coffeeId) {
        if (coffee.quantity >= 1) {
          coffee.quantity -= 1

          setCartQuantity((state) => {
            return (state -= 1)
          })
          return coffee
        }
      }

      return coffee
    })

    setCoffees(updatedCoffees)

    const findedCoffee = coffeesOnCart.find(
      (coffee) => coffee.name === coffeeId,
    )

    if (findedCoffee) {
      const indexFindedCoffee = coffeesOnCart.indexOf(findedCoffee)
      console.log(indexFindedCoffee)

      if (coffeesOnCart.includes(findedCoffee) && findedCoffee.quantity >= 0) {
        console.log('inclui')

        const updatedCoffeesOnCart = coffeesOnCart.filter(
          (coffee) => coffee !== findedCoffee,
        )

        console.log(updatedCoffeesOnCart)
        setCoffeesOnCart(updatedCoffeesOnCart)
      }
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        coffees,
        coffeesOnCart,
        cartQuantity,
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
