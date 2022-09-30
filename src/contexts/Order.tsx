import { createContext, ReactNode, useState } from 'react'

interface Address {
  code: number
  street: string
  house_number: number
  complement: string
  district: string
  city: string
  state: string
  payment_type: string
}

interface Order {
  address: Address
  totalPrice: number
  paymentType: string
}

interface OrderContextProps {
  totalPrice: number
  address: Address
  paymentType: string
  createNewOrder: (data: any) => void
}

export const OrderContext = createContext({} as OrderContextProps)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [totalPrice, setTotalPrice] = useState(0)
  const [paymentType, setPaymentType] = useState('')
  const [address, setAddress] = useState<Address>({} as Address)

  function formatPaymentType(payment: string): string {
    if (payment === 'credit_card') {
      return 'Cartão de Crédito'
    } else if (payment === 'debit_card') {
      return 'Cartão de Débito'
    } else if (payment === 'specie') {
      return 'Dinheiro em nota'
    } else {
      return ''
    }
  }

  function createNewOrder(data: Order) {
    console.log('DatA:')
    console.log(data)

    if (data) {
      console.log('Create New Order function runing...')

      const paymentFormated = formatPaymentType(data.paymentType)

      console.log('payment formatted')
      console.log(paymentFormated)

      setTotalPrice((state) => data.totalPrice)
      setPaymentType((state) => paymentFormated)
      setAddress((state) => data.address)
    }
  }

  return (
    <OrderContext.Provider
      value={{
        address,
        paymentType,
        totalPrice,
        createNewOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
