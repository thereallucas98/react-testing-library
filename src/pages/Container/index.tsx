import Header from "../../components/Header";
import TodoBox from "../../components/Todo";

import "./styles.css";

function Container() {
  return (
    <div className="container">
      <Header />
      <TodoBox />
    </div>
  );
}

export default Container;