import { create, all } from "mathjs";
import { useState } from "react";
import Input from "~/components/BaseComponents/Input";

export default function NcKPage() {
  const [n, setN] = useState<number>();
  const [k, setK] = useState<number>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const n = formData.get("n");
    const k = formData.get("k");

    if (n && k) {
      setN(Number(n));
      setK(Number(k));
    }
  };

  return (
    <div className="mt-2 flex gap-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-end w-fit"
      >
        <div className="flex gap-2">
          <p>N:</p>
          <Input
            className="w-40"
            name="n"
            focusOnMount
            placeholder="Total Objects"
            autoComplete="off"
          />
        </div>
        <div className="flex gap-2">
          <p>K:</p>
          <Input
            className="w-40"
            name="k"
            placeholder="Choices"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="bg-bb-gray w-40">
          Submit
        </button>
      </form>
      {n !== undefined && k !== undefined && (
        <div>
          <ul className="text-bb-foreground list-disc">
            <li>NcK = {getCombination(n, k)}</li>
            <li>NpK = {getPermutation(n, k)}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

const getCombination = (n: number, k: number) => {
  try {
    return math.combinations(n, k);
  } catch {
    return "INVALID INPUT";
  }
};

const getPermutation = (n: number, k: number) => {
  try {
    return math.permutations(n, k);
  } catch {
    return "INVALID INPUT";
  }
};

const math = create(all);
