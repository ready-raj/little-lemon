import "./css/hero.css"
function Header(){
   return(
      <header className="hero">
      
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We are fammily owned Mediterranean restaurant ,focussed on traditional recipes served a mmodern twist</p>
      <a href="/" className="btn">Reserve a Table</a>
      <img src="restauranfood.jpg" alt="logo" height="600 px" width="600 px"/>
      </header>
   );
}
export default Header;