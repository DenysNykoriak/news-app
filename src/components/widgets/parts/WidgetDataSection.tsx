import { Stack, StackProps, Divider } from "@mui/material";
import clone from "just-clone";
import React, { useMemo } from "react";
import { PieWidgetData } from "../PieWidget";
import WidgetSegmentInfo from "./WidgetSegmentInfo";

type Props = {
  data: Required<PieWidgetData>[];
} & StackProps;

const WidgetDataSection = ({ data, ...props }: Props) => {
  const displayedData = useMemo(() => {
    const dataCopy = clone(data);

    if (dataCopy.length <= 3) return [dataCopy] as const;

    return [
      dataCopy.splice(0, Math.ceil(dataCopy.length / 2)),
      dataCopy,
    ] as const;
  }, [data]);

  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-start",
        mx: 4,
        gap: 2,
      }}
      {...props}
    >
      {displayedData.length === 1 ? (
        <>
          {displayedData[0].map((segment, index) => (
            <WidgetSegmentInfo segment={segment} key={segment.title + index} />
          ))}
        </>
      ) : (
        <>
          <Stack>
            {displayedData[0].map((segment, index) => (
              <WidgetSegmentInfo
                segment={segment}
                key={segment.title + index}
              />
            ))}
          </Stack>
          <Divider variant="middle" orientation="vertical" flexItem />
          <Stack>
            {displayedData[1].map((segment, index) => (
              <WidgetSegmentInfo
                segment={segment}
                key={segment.title + index}
              />
            ))}
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default WidgetDataSection;
