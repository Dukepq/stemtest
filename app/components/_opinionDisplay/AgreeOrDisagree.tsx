import { CircleSlash2, ThumbsDown, ThumbsUp } from "lucide-react";

export function AgreeOrDisagree({
  type,
  hideParties,
}: {
  type: "agree" | "disagree" | "abstain";
  hideParties?: boolean;
}) {
  if (type === "agree") {
    return (
      <h4 className="text-green flex gap-3 items-center text-lg font-semibold">
        <span>Eens</span> <ThumbsUp size={21} />
      </h4>
    );
  } else if (type === "disagree") {
    return (
      <h4 className="text-red flex gap-3 items-center text-lg font-semibold">
        <span>Oneens</span> <ThumbsDown size={21} />
      </h4>
    );
  } else {
    return (
      <h4 className="text-text flex gap-1 items-center text-lg font-semibold">
        <CircleSlash2 size={16} />
        {!hideParties && (
          <span>
            Deze Partijen gaven geen duidelijk{" "}
            <span className="italic">(eens/oneens)</span> antwoord op deze vraag
          </span>
        )}
      </h4>
    );
  }
}
