export type TabPanelProps<T extends string> = {
  children: NonNullable<T>;
  value: T;
};
