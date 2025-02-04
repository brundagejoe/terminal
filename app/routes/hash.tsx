import { useState } from "react";
import Input from "~/components/BaseComponents/Input";

export default function HashPage() {
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
    <div className="mt-2 flex gap-2">
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
            placeholder="Buckets"
            autoComplete="off"
          />
        </div>
        <div className="flex gap-2">
          <p>K:</p>
          <Input
            className="w-40"
            name="k"
            placeholder="Items"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="bg-bb-gray w-40">
          Submit
        </button>
      </form>
      {n !== undefined && k !== undefined && (
        <div className="max-w-2xl">
          <p>
            The probability of at least two items falling into the same bucket
            (or in other words, a hash collision) are approximately{" "}
            <span className="text-bb-foreground">
              {formatNumberAsPercentage(
                getApproximateCollisionProbability(n, k)
              )}
              %
            </span>
            . For more information, see a breakdown of the algorithm{" "}
            <a
              className="text-bb-foreground"
              target="_blank"
              rel="noreferrer"
              href="https://kevingal.com/blog/collisions.html"
            >
              here
            </a>
            .
          </p>
          {/* <ul className="text-bb-foreground list-disc">
            <li>NcK = {getCombination(n, k)}</li>
            <li>NpK = {getPermutation(n, k)}</li>
          </ul> */}
        </div>
      )}
    </div>
  );
}

const formatNumberAsPercentage = (number: number) => {
  return number < 0.001
    ? (number * 100).toExponential(2)
    : (number * 100).toFixed(3);
};

const getApproximateCollisionProbability = (n: number, k: number) => {
  if (n <= 0 || k <= 0) return 0;
  if (k > n) return 1;
  return 1 - Math.exp((-k * (k - 1)) / (2 * n));
};
