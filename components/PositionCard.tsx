import { format, formatDuration, intervalToDuration } from "date-fns";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Position } from "../lib/hygraph";

type PositionCardProps = Position;

const PositionCard: React.FC<PositionCardProps> = ({
  name,
  startDate,
  endDate,
  description,
}) => {
  const duration = intervalToDuration({
    start: new Date(startDate),
    end: new Date(endDate ?? new Date()),
  });

  return (
    <div className="pt-3">
      <div className="rounded-lg bg-white px-5 py-4 shadow-xl ring-1 ring-zinc-900/5 dark:bg-zinc-800">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {format(new Date(startDate), "LLLL yyyy")}
          {" - "}
          {endDate != null
            ? format(new Date(endDate), "LLLL yyyy")
            : "Present"}{" "}
          (
          {formatDuration(duration, {
            format: ["years", "months"],
          })}
          )
        </p>
        <ReactMarkdown className="prose prose-sm mt-3 max-w-full dark:prose-invert">
          {description}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default PositionCard;
