import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        {/* <a href="/">Home</a>  - так было с перезагрузкой страницы*/}
        {/* а теперь без нее, все тоже самое только линк и вместо хрефа - to */}
        <Link to="/">Home </Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>

      <main className="container">
        <Outlet />{" "}
        {/* Тут я говорю куда я хочу вставить все , что есть в Layout'е в App (крч тут будет вся динамика)  */}
      </main>

      <footer className="container">2022</footer>
    </>
  );
  {
    /* Ниже точно так же могут быть футер и все такое*/
  }
};

export default Layout;
