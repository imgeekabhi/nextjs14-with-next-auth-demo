import { Header, Content } from "antd/es/layout/layout";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Content>
        <h3>Wecome to MyApp</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          dignissimos, molestiae nesciunt illo aliquid omnis, aperiam
          perferendis natus tenetur ducimus magnam! Quia corrupti veritatis
          error, dicta blanditiis explicabo nihil delectus placeat recusandae
          nesciunt harum et reiciendis dolore distinctio. Praesentium iste
          repudiandae nam dicta facilis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          dignissimos, molestiae nesciunt illo aliquid omnis, aperiam
          perferendis natus tenetur ducimus magnam! Quia corrupti veritatis
          error, dicta blanditiis explicabo nihil delectus placeat recusandae
          nesciunt harum et reiciendis dolore distinctio. Praesentium iste
          repudiandae nam dicta facilis.
        </p>
      </Content>
    </>
  );
}
