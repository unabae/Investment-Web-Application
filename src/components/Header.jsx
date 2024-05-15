import headerLogo from "../assets/investment-calculator-logo.png"

export default function Header() {
  return (
    <header id ="header">
      <img src= {headerLogo} alt="Logo showing a money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
