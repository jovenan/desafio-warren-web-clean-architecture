export interface ITransaction {
    id: string;
    title: string;
    description: string;
    status: string;
    amount: number;
    date: string;
    from: string;
    to: string;
}
