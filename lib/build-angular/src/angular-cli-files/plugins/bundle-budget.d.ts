import { Budget } from '../../browser/schema';
export interface BundleBudgetPluginOptions {
    budgets: Budget[];
}
export declare class BundleBudgetPlugin {
    private options;
    constructor(options: BundleBudgetPluginOptions);
    apply(compiler: any): void;
    private checkMinimum(threshold, size, messages);
    private checkMaximum(threshold, size, messages);
    private calculate(budget);
}
