import { useResponsiveValue } from "@/hooks/use-responsive-value";
import { DashboardCard } from "../dashboard-card";
import { useGetExpenseStatsQuery } from "../../dashboard.slice";
import { useEcharts, UseEchartsOpts } from "@/hooks/use-echarts";
import { useMemo } from "react";
import { TransactionType } from "@/interfaces/transactions";
import { expenseVariants } from "../../dashboard.constants";

export const ExpensesCard = () => {
  const minHeight = useResponsiveValue({ base: "240px", mobile: "320px" });

  const { data, isLoading } = useGetExpenseStatsQuery();

  const props = useMemo(() => {
    return {
      opts: {
        color: [
          expenseVariants[TransactionType.ENT].color,
          expenseVariants[TransactionType.BILL].color,
          expenseVariants[TransactionType.INVESTMENT].color,
          expenseVariants[TransactionType.OTHER].color,
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
                    name: expenseVariants[TransactionType.ENT].name,
                  },
                  {
                    value: data[TransactionType.BILL],
                    name: expenseVariants[TransactionType.BILL].name,
                  },
                  {
                    value: data[TransactionType.INVESTMENT],
                    name: expenseVariants[TransactionType.INVESTMENT].name,
                  },
                  {
                    value: data[TransactionType.OTHER],
                    name: expenseVariants[TransactionType.OTHER].name,
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
