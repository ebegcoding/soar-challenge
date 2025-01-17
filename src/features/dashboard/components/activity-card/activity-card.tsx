import { useTheme } from "styled-components";
import { useGetWeeklyActivityQuery } from "../../dashboard.slice";
import { DashboardCard } from "../dashboard-card";
import { useEcharts, UseEchartsOpts } from "@/hooks/use-echarts";
import { useMemo } from "react";
import { TransactionDirection } from "@/interfaces/transactions";

export const ActivityCard = () => {
  const { data, isLoading } = useGetWeeklyActivityQuery();
  const theme = useTheme();

  const props = useMemo(() => {
    return {
      opts: {
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: data?.days ?? [],
        },
        yAxis: {
          type: "value",
        },
        series: data
          ? [
              {
                data: data[TransactionDirection.OUTGOING],
                type: "bar",
                color: theme.colors.b100,
              },
              {
                data: data[TransactionDirection.INCOMING],
                type: "bar",
                color: theme.colors.accent,
              },
            ]
          : [],
      } satisfies UseEchartsOpts["opts"],
    };
  }, [data]);

  const [ref] = useEcharts<HTMLDivElement>({ ...props, loading: isLoading });

  return (
    <DashboardCard title="Weekly Activity" area="activity" minHeight="250px">
      <div style={{ height: "100%", width: "100%" }} ref={ref} />
    </DashboardCard>
  );
};
