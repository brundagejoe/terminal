import { create, all } from "mathjs";
import { useState } from "react";
import Input from "~/components/BaseComponents/Input";

export default function NcKPage() {
  const [n, setN] = useState(0);
  const [k, setK] = useState(0);

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
      {n > 0 && k > 0 && (
        <div>
          <ul className="text-bb-foreground list-disc">
            <li>NcK = {math.combinations(n, k)}</li>
            <li>NpK = {math.permutations(n, k)}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

const math = create(all);
