import { createContext, ReactNode, useState } from 'react'

import expressoTradicional from '../assets/expresso_tradicional.png'
import cafeComLeite from '../assets/cafe_com_leite.png'
import capuccino from '../assets/capuccino.png'
import expressoAmericano from '../assets/expresso_americano.png'
import expressoCremoso from '../assets/expresso_cremoso.png'
import expressoGelado from '../assets/expresso_gelado.png'
import latte from '../assets/latte.png'
import macchiato from '../assets/macchiato.png'

interface CoffeeType {
  name: string
  description: string
  types: string[]
  price: number
  url: string
  quantity: number
}

interface CartContextType {
  cartQuantity: number
  coffees: CoffeeType[]
  increaseCoffeeQuantity: (coffeeId: string) => void
  decreaseCoffeeQuantity: (coffeeId: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartQuantity, setCartQuantity] = useState(0)
  const [coffeeQuantity, setCoffeeQuantity] = useState(0)
  const [coffees, setCoffees] = useState<CoffeeType[]>([
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

  function increaseCoffeeQuantity(coffeeId: string) {
    // roda o Array dos cafés
    const updatedCoffees = coffees.map((coffee) => {
      // se o nome for igual ao id(id = nome do cafe, nao tem cafes iguais)
      // ou seja, achei qual queria
      if (coffee.name === coffeeId) {
        // adicione +1 a quantidade de cafes
        coffee.quantity += 1

        // retorne o cafe modificado
        return coffee
      }

      // retorna os cafes sem modificação
      return coffee
    })

    setCartQuantity(cartQuantity + 1)
    setCoffees(updatedCoffees)
  }

  function decreaseCoffeeQuantity(coffeeId: string) {
    const updatedCoffes = coffees.map((coffee) => {
      if (coffee.name === coffeeId) {
        if (coffee.quantity >= 1) {
          coffee.quantity -= 1

          setCartQuantity(cartQuantity - 1)

          return coffee
        }
      }

      return coffee
    })

    setCoffees(updatedCoffes)
  }

  return (
    <CartContext.Provider
      value={{
        cartQuantity,
        coffees,
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
