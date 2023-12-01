import { useState } from "react";

interface Props {
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

const ProductDisplay = ({
  name,
  description,
  image,
  price,
  category,
}: Props) => {
  // To implement the feature to toggle the name and description,
  // I've used the useState hook
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <>
      <div className="group">
        <div className="aspect-h-1 aspect-w-1 w-f overflow-hidden rounded-lg bg-blue-200 xl:aspect-h-8 xl:aspect-w-7 shadow-lg">
          <img src={image} alt="Image product" className="w-full h-auto" />
          <div className="cursor-pointer" onClick={toggleDescription}>
            <h3 className="mt-4 pl-2 text-lg text-slate-600 text-left font-bold">
              {showDescription ? description : name}
            </h3>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="mt-1 pl-2 text-xs text-red-950">{category}</p>
            <p className="mt-1 pr-5 text-2xl font-bold text-yellow-600">
              ${price}
            </p>
          </div>

          <button className="my-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="18"
              viewBox="0 0 576 512"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            <span className="ml-4">Add to cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
