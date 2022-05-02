import { useParams } from "react-router-dom";

const KittyDetailsPage = () => {
  const { id } = useParams();

  return <p>Kitty details page</p>;
};

export default KittyDetailsPage;
