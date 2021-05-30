import Post from "./Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?cs=srgb&dl=pexels-irina-iriser-1408221.jpg&fm=jpg" />
      <Post img="https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?cs=srgb&dl=pexels-lisa-1161547.jpg&fm=jpg"/>
      <Post img="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?cs=srgb&dl=pexels-s-migaj-747964.jpg&fm=jpg"/>
      <Post img="https://images.pexels.com/photos/7805072/pexels-photo-7805072.jpeg?cs=srgb&dl=pexels-cottonbro-7805072.jpg&fm=jpg"/>
     <Post img="https://images.pexels.com/photos/3933276/pexels-photo-3933276.jpeg?cs=srgb&dl=pexels-tatiana-syrikova-3933276.jpg&fm=jpg"/>
     <Post img="https://images.pexels.com/photos/3933986/pexels-photo-3933986.jpeg?cs=srgb&dl=pexels-tatiana-syrikova-3933986.jpg&fm=jpg"/>
 </div>
  );
}