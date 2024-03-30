import { DIVWrapper } from './styles'
export default function LoadStatus() {
  return (
    <DIVWrapper>
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </DIVWrapper>
  )
}
