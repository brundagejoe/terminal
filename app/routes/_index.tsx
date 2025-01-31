import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "BTerm" },
    { name: "description", content: "an assortment of small, useful tools" },
  ];
};

export default function Index() {
  return (
    <div className="text-bb-foreground">
      Welcome to BTerm. This platform consolidates a variety of essential tools
      that were previously scattered across multiple websites. By bringing these
      tools together, we aim to provide you with a streamlined and efficient
      user experience, offering only the most necessary features and results.
    </div>
  );
}
