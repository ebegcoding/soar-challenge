import { useEcharts, UseEchartsOpts } from "@/hooks/use-echarts";
import { useGetBalanceProgressionQuery } from "../../dashboard.slice";
import { DashboardCard } from "../dashboard-card";
import { useMemo } from "react";
import { useTheme } from "styled-components";
import { graphic } from "echarts";

export const BalanceCard = () => {
  const { data, isLoading } = useGetBalanceProgressionQuery();
  const theme = useTheme();

  const props = useMemo(() => {
    return {
      opts: {
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: data?.map((item) => item.month) ?? [],
        },
        yAxis: {
          type: "value",
        },
        series: data
          ? [
              {
                type: "line",
                smooth: true,
                data: data.map((item) => item.value),
                lineStyle: {
                  color: theme.colors.accent,
                },
                areaStyle: {
                  color: new graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#2D60FF40",
                    },
                    {
                      offset: 1,
                      color: "#2D60FF00",
                    },
                  ]),
                },
              },
            ]
          : [],
      } satisfies UseEchartsOpts["opts"],
    };
  }, [data]);

  const [ref] = useEcharts<HTMLDivElement>({ ...props, loading: isLoading });

  return (
    <DashboardCard title="Balance History" area="balance" minHeight="220px">
      <div style={{ height: "100%", width: "100%" }} ref={ref} />
    </DashboardCard>
  );
};
