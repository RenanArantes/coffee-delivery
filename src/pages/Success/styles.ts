import styled from 'styled-components'

export const SuccessContainer = styled.div`
  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    //margin-left: 32px;
  }
`

export const ConfirmationTitleContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 40px;
`
export const Title = styled.h1`
  color: ${(props) => props.theme['yellow-dark']};

  font-family: 'Baloo 2', cursive;
  font-size: 32px;
  font-weight: 800;
  line-height: 130%;
`
export const SubTitle = styled.p`
  color: ${(props) => props.theme['base-subtitle']};

  font-size: 20px;
  line-height: 130%;
`

export const DeliveryConfirmationContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 492px;
    height: 293px;
  }

  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;

    justify-content: center;

    margin: 32px auto;
    img {
      margin-top: 32px;
    }
  }
`
export const InfoConfirmationContainer = styled.div`
  width: 526px;

  @media (max-width: 1040px) {
    max-width: 460px;
  }

  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  div {
    margin: 40px auto;
  }
`
const InfoContainer = styled.div`
  max-width: 354px;
  height: 42px;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 32px;

  :last-child {
    margin-bottom: 0px;
  }

  p {
    margin-left: 12px;
  }

  span:first-child {
    width: 32px;
    height: 32px;
    line-height: 38px;
    border-radius: 50%;
    text-align: center;

    color: ${(props) => props.theme.white};
  }
`
export const AddressInfo = styled(InfoContainer)`
  span:first-child {
    background: ${(props) => props.theme.purple};
  }
`

export const TimerInfo = styled(InfoContainer)`
  span:first-child {
    background: ${(props) => props.theme.yellow};
  }
`

export const PaymentInfo = styled(InfoContainer)`
  span:first-child {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
