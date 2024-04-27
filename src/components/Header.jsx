import headerLogo from "/src/assets/investment-calculator-logo.png"

export default function Header() {
  return (
    <div id="header">
      <img src= {headerLogo} alt="" />
      <h1>Investment Calculator</h1>
    </div>
  );
}
