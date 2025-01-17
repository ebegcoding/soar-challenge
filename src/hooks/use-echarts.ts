import type { ECharts } from "echarts";
import * as echarts from "echarts";
import { useEffect, useRef, useState } from "react";

export type UseEchartsOpts = {
  init?: echarts.EChartsInitOpts;
  opts: echarts.EChartsOption;
  setOpts?: echarts.SetOptionOpts;
  loading?: boolean;
};

export type DatasetType = echarts.DatasetComponentOption;

export function useEcharts<T extends HTMLElement = HTMLDivElement>({
  init,
  opts,
  setOpts,
  loading = false,
}: UseEchartsOpts) {
  const containerRef = useRef<T>(null);
  const [echartsRef, setEchartsRef] = useState<ECharts | null>(null); //Uses useState, so that the component calling re-render when echarts is ready
  useEffect(() => {
    if (containerRef.current) {
      const chart = echarts.init(containerRef.current, null, init);
      setEchartsRef(chart);
      const observer = new ResizeObserver(() => {
        chart.resize();
      });
      observer.observe(containerRef.current);
      return () => {
        observer.disconnect();
        echarts.dispose(chart);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (echartsRef) {
      echartsRef.setOption(opts, setOpts);
    }
    // We do not want to reapply options when setOpts change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opts, echartsRef]);
  useEffect(() => {
    if (echartsRef) {
      if (loading) {
        echartsRef.showLoading("default");
      } else {
        echartsRef.hideLoading();
      }
    }
  }, [loading, echartsRef]);
  return [containerRef, echartsRef] as const;
}
