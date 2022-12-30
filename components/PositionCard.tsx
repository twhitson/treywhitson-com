import { add, format, formatDuration, intervalToDuration } from "date-fns";
import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { Position } from "../lib/hygraph";

type PositionCardProps = Position;

const PositionCard: React.FC<PositionCardProps> = ({
  name,
  startDate,
  endDate,
  description,
}) => {
  const duration = useMemo(
    () =>
      intervalToDuration({
        start: new Date(startDate),
        end: new Date(endDate ?? add(new Date(), { months: 1 })),
      }),
    [startDate, endDate]
  );

  return (
    <div className="relative rounded-lg bg-white px-5 py-4 shadow-xl ring-1 ring-zinc-900/5 dark:bg-zinc-800">
      <div className="absolute -left-[23px] top-5 h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
      <h4 className="font-semibold">{name}</h4>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {format(new Date(startDate), "LLLL yyyy")}
        {" - "}
        {endDate != null ? format(new Date(endDate), "LLLL yyyy") : "Present"} (
        {formatDuration(duration, {
          format: ["years", "months"],
        })}
        )
      </p>
      <ReactMarkdown className="prose prose-sm mt-3 max-w-full dark:prose-invert">
        {description}
      </ReactMarkdown>
    </div>
  );
};

export default PositionCard;
