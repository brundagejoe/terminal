import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "BTerm" },
    { name: "description", content: "an assortment of small, useful tools" },
  ];
};

export default function Index() {
  return <div></div>;
}
