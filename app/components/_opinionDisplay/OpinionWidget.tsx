import HoverCard from "../ui/HoverCard";

type OpinionWidgetProps = {
  reason: string;
  name: string | undefined;
  partyLogo: string | undefined;
  hideParties?: boolean;
} & React.AllHTMLAttributes<HTMLDivElement>;

export function OpinionWidget({
  name,
  partyLogo,
  reason,
  hideParties = false,
  ...props
}: OpinionWidgetProps) {
  return (
    <div {...props}>
      {name && partyLogo && !hideParties && (
        <HoverCard
          trigger={
            <img
              draggable="false"
              className="max-w-16 h-6"
              alt={name}
              src={partyLogo}
              style={{ objectFit: "contain" }}
            />
          }
        >
          <span>{name}</span>
        </HoverCard>
      )}
      <p className="mt-1">{reason}</p>
    </div>
  );
}
