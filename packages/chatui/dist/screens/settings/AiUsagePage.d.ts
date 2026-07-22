import React from 'react';
export interface AiUsageOverviewCard {
    title: string;
    value: string;
    helper?: string;
    tooltip?: string;
    warningLabel?: string;
}
export interface AiUsageFilterOption {
    label: string;
    value: string;
}
export interface AiUsageRechargeRecord extends Record<string, unknown> {
    id: string;
    amount: string;
    rechargeTime: string;
}
export interface AiUsagePageProps {
    isSidebarOpen: boolean;
    overviewCards: AiUsageOverviewCard[];
    memberOptions: AiUsageFilterOption[];
    monthOptions: AiUsageFilterOption[];
    selectedMember: string;
    selectedMonth: string;
    trendPoints: number[];
    trendLabels: string[];
    trendTotal: number;
    rechargeRecords: AiUsageRechargeRecord[];
    onOpenSidebar(): void;
    onMemberChange(value: string): void;
    onMonthChange(value: string): void;
}
export declare function AiUsagePage({ isSidebarOpen, overviewCards, memberOptions, monthOptions, selectedMember, selectedMonth, trendPoints, trendLabels, trendTotal, rechargeRecords, onOpenSidebar, onMemberChange, onMonthChange, }: AiUsagePageProps): React.JSX.Element;
//# sourceMappingURL=AiUsagePage.d.ts.map