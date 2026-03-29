import React from "react";
import { Section } from "../Section";

interface ExampleMessageProps {}

const ExampleMessage: React.FC<ExampleMessageProps> = ({}) => {
  return (
    <div className="bg-gray-700 w-screen py-4">
      <div className="h-12 w-full bg-gray-700 text-gray-400 flex justify-center items-center">
        <p>Informacion falsa y de relleno.</p>
      </div>
    </div>
  );
};

export default ExampleMessage;
