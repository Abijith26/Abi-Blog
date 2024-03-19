import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          wanna dive and explore more about automobile and tech?
        </h2>
        <p className="text-gray-500 my-2">Check These!</p>
        <Button
          gradientDuoTone={"purpleToPink"}
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.autocarindia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://i.pinimg.com/originals/98/ed/7b/98ed7bd819cb549fbc1557510cfdf098.jpg" />
      </div>
    </div>
  );
}
