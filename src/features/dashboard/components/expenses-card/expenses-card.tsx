import { useResponsiveValue } from "@/hooks/use-responsive-value";
import { DashboardCard } from "../dashboard-card";
import { useGetExpenseStatsQuery } from "../../dashboard.slice";
import { useEcharts, UseEchartsOpts } from "@/hooks/use-echarts";
import { useMemo } from "react";
import { TransactionType } from "@/interfaces/transactions";

const variants = {
  [TransactionType.BILL]: {
    name: "Bills",
    color: "#343C6A",
  },
  [TransactionType.ENT]: {
    name: "Enterntainment",
    color: "#FC7900",
  },
  [TransactionType.INVESTMENT]: {
    name: "Investments",
    color: "#396AFF",
  },
  [TransactionType.OTHER]: {
    name: "Others",
    color: "#232323",
  },
} satisfies Record<TransactionType, { name: string; color: string }>;

export const ExpensesCard = () => {
  const minHeight = useResponsiveValue({ base: "240px", mobile: "320px" });

  const { data, isLoading } = useGetExpenseStatsQuery();

  const props = useMemo(() => {
    return {
      opts: {
        color: [
          variants[TransactionType.ENT].color,
          variants[TransactionType.BILL].color,
          variants[TransactionType.INVESTMENT].color,
          variants[TransactionType.OTHER].color,
        ],
        series: data
          ? [
              {
                type: "pie",
                radius: [20, 140],
                roseType: "area",
                data: [
                  {
                    value: data[TransactionType.ENT],
                    name: variants[TransactionType.ENT].name,
                  },
                  {
                    value: data[TransactionType.BILL],
                    name: variants[TransactionType.BILL].name,
                  },
                  {
                    value: data[TransactionType.INVESTMENT],
                    name: variants[TransactionType.INVESTMENT].name,
                  },
                  {
                    value: data[TransactionType.OTHER],
                    name: variants[TransactionType.OTHER].name,
                  },
                ],
                itemStyle: {
                  normal: {
                    borderRadius: 5,
                    label: {
                      show: true,
                      position: "inner",
                      formatter: function (params: {
                        value: number;
                        name: string;
                      }) {
                        return params.value.toFixed(0) + "%\n" + params.name;
                      },
                    },
                    labelLine: {
                      show: false,
                    },
                  },
                },
              },
            ]
          : [],
      } as UseEchartsOpts["opts"],
    };
  }, [data]);

  const [ref] = useEcharts<HTMLDivElement>({ ...props, loading: isLoading });

  return (
    <DashboardCard
      title="Expenses Statistics"
      area="expenses"
      minHeight={minHeight}
    >
      <div style={{ height: "100%", width: "100%" }} ref={ref} />
    </DashboardCard>
  );
};
